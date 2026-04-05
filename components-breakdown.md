# Components Breakdown — _mad-assembly Landing

> Детальный разбор каждого компонента главной страницы: как сделан, какие паттерны использует, что в нём примечательно с точки зрения кода и дизайна.

Страница собирается в `src/pages/index.tsx`:

```
LayoutMain
├── Header
└── Main (role="main")
    ├── Hero
    ├── How
    ├── FastStart
    ├── Benefits
    ├── Products
    ├── Partnership
    ├── Faq
    ├── Start
    └── Footer
```

---

## LayoutMain

**Файлы:** `src/components/layouts/LayoutMain.tsx`

### Что делает

Корневой обёртчик страницы. Отвечает за:
- Подключение `ThemeProvider` (все цвета, шрифты, breakpoints из `src/theme`)
- Мета-теги через `react-helmet` (title, OG, Twitter cards)
- Глобальные стили (`GlobalStyle`)
- Визуальные направляющие линии

### Направляющие линии — ключевой трюк

```tsx
const LineWrap = styled.div`
  position: fixed;
  top: 0; left: 50%;
  transform: translateX(-50%);
  max-width: 125.6rem;
  min-height: 100dvh;
  display: none;           /* скрыты на mobile/tablet */
  ${breakpoints.greaterThan('lg')` display: block; `}
`

const LineVertical = styled.div`
  position: absolute;
  width: 0.1rem; height: 100%;
  background-color: elementBorder; /* #1E2D3D */
`
/* Две линии: place='left' → left: 0; place='right' → right: 0 */
```

Два вертикальных штриха толщиной 0.1rem, зафиксированных по краям контейнера на весь экран. Работают как невидимые направляющие из дизайн-сетки — пользователь их не замечает, но они создают ощущение структуры.

### Шрифт

Загружается напрямую из Google Fonts в `<link>` через Helmet:
```
https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600
```

Три веса: 200, 400, 600 — только нормальное и italic начертание.

---

## Header

**Файлы:** `src/containers/Header/Header.tsx`, `Style.tsx`

### Что делает

Sticky навигация. Логотип слева, пункты меню в центре/справа, кнопка запуска dApp, мобильный бургер.

### Структура состояния

```tsx
const [isOpenNav, setOpenNav] = useState(false)

const handleClick = () => {
  setOpenNav(!isOpenNav)
  document.body.style.overflowY = isOpenNav ? 'unset' : 'hidden'  // лочит скролл страницы
  document.body.style.overflowX = 'hidden'
}
```

Единственный state: открыто/закрыто мобильное меню. Блокировка скролла — прямая манипуляция `document.body.style`, без CSS классов.

### Навигация: scroll-to anchors

Все пункты меню — это `<ScrollTo>` (обёртка над `react-scroll`), не `<Link>` Gatsby:

```tsx
<ScrollTo to={menu.how} href='#how' onClick={handleClickMenu}>
  _how-it-works
</ScrollTo>
```

`menu.how = 'how'` — это `id` секции на странице. React-scroll плавно прокручивает к элементу с этим id.

Обычный `href='#how'` стоит как fallback для SEO и доступности.

### Мобильная навигация

```tsx
const Nav = styled.nav<{ isOpen?: boolean }>`
  /* Mobile: позиционирована абсолютно, скрыта */
  position: absolute;
  top: 100%; left: 0;
  width: 100%;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in;

  /* Desktop: статичная, в потоке */
  ${breakpoints.greaterThan('md')`
    position: static;
    opacity: 1;
    visibility: visible;
  `}
`
```

Скрытие через `opacity + visibility`, а не `display: none` — это позволяет transition работать. `display: none` нельзя анимировать.

### Список пунктов меню (mobile grid)

```tsx
const List = styled.ul`
  /* Mobile: 2-колоночная сетка */
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  /* Desktop: flex строка */
  ${breakpoints.greaterThan('md')`
    display: flex;
    flex-direction: row;
  `}
`
```

На мобиле пункты меню раскладываются в 2 колонки — это нестандартное решение для мобильного nav.

### Индикатор активной ссылки — псевдоэлемент

```tsx
const LinkButton = styled.a`
  &::after {
    content: ''; position: absolute; bottom: 0;
    width: 100%; height: 0.3rem;
    transition: all 0.26s ease;
  }
  &:hover::after { background-color: elementBgThird; }   /* purple */
  &.activeNavLink::after { background-color: buttonBgThird; } /* orange */
`
```

Нижняя линия-индикатор рисуется через `::after`. Hover — фиолетовый, активная страница — оранжевый. Класс `.activeNavLink` добавляется через `react-scroll` или вручную.

### Overlay

```tsx
<Overlay isOpen={isOpenNav} onClick={handleClickMenu} role='presentation' />
```

Полупрозрачный фиксированный слой поверх страницы (z-index negative), закрывает меню по клику вне. `role='presentation'` — явное указание что это декоративный элемент, не интерактивный для скринридеров.

---

## Hero

**Файлы:** `src/containers/Hero/Hero.tsx`, `Style.tsx`

### Что делает

Первый экран. Заголовок продукта, подзаголовок, CTA-кнопка, learn more. Фон — dashed grid. Четыре анимированные «карточки транзакций».

### Dashed Grid — как сделан

Два слоя `<Lines>`: горизонтальный и вертикальный. Каждый содержит 9 `<Line>` (hr-элементов):

```tsx
<Lines type='horizontal'>        {/* flex-direction: column */}
  <Line data-orientation='horizontal' />  × 9
</Lines>
<Lines type='vertical'>          {/* flex-direction: row */}
  <Line data-orientation='vertical' />    × 9
</Lines>
```

Сами линии — это `background` дашей через linear-gradient:

```css
/* Горизонтальная линия (dashed) */
&[data-orientation='horizontal'] {
  width: 100%; height: 0.1rem;
  background: linear-gradient(
    to right,
    elementBgSecond, elementBgSecond 50%,
    transparent 0, transparent
  );
  background-size: 1rem 0.1rem;   /* штрих 0.5rem, пробел 0.5rem */
}

/* Вертикальная линия (dashed) */
&[data-orientation='vertical'] {
  height: 100%; width: 0.1rem;
  background: linear-gradient(
    180deg, elementBgSecond, elementBgSecond 50%,
    transparent 0, transparent
  );
  background-size: 0.1rem 1rem;
}
```

`linear-gradient` с hard stop создаёт пунктир без SVG и без `border-style: dashed` — это чище, масштабируется и контролируется.

`Lines` занимает `position: absolute; top: -0.1rem; left: -0.1rem; width: calc(100% + 0.2rem)` — выходит за пределы контейнера на 0.1rem, чтобы линии доходили до краёв без зазоров.

### Анимированные карточки транзакций

```tsx
const TxSend = styled.div<{ type?: string }>`
  position: absolute;
  display: none;             /* скрыты на mobile */
  animation: ${animateWave} 8s ease-in-out infinite;
  will-change: opacity;
  opacity: 0;                /* начинают прозрачными */

  ${props.type === 'first' && `top: 12.5%; left: 0; animation-delay: 0.5s;`}
  ${props.type === 'second' && `bottom: 0; left: 12.5%; animation-delay: 2s;`}
  ${props.type === 'third' && `bottom: 12.5%; right: 12.5%; animation-delay: 4s;`}
  ${props.type === 'fourth' && `top: 12.5%; right: 0; animation-delay: 6s;`}

  ${breakpoints.greaterThan('sm')` display: flex; `}
`
```

Анимация `animateWave`:

```ts
// src/utils/animations.ts
export const animateWave = keyframes`
  0%   { opacity: 0; transform: translateY(30%); }
  16%  { opacity: 1; transform: none; }
  46%  { opacity: 1; transform: none; }
  60%  { opacity: 0; transform: none; }
  100% { opacity: 0; transform: none; }
`
```

Цикл 8 секунд. Карточка появляется снизу (translateY 30%), держится видимой 30% времени, исчезает. Каждая из 4 карточек стартует со сдвигом (0.5s, 2s, 4s, 6s) — в любой момент видна 1-2 карточки.

`will-change: opacity` — подсказка браузеру для GPU-ускорения анимации.

### Белый blur под текстом

```tsx
const Info = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 124%; height: 150%;
    border-radius: 50%;
    filter: blur(6rem);
    background-color: elementBg;   /* white */
    z-index: negative;             /* за текстом */
  }
`
```

Белый эллипс с `blur(6rem)` позади текста. Текст читается поверх анимированных карточек и dashed grid. Это — не тень на тексте, а фоновый ореол под всем блоком.

### Hero CTA — кастомная кнопка

Кнопка `_start-airdrop` — это не `<Button>` компонент, а `InfoLink` = `styled(Href)` с отдельным `ItemButton` CSS:

```tsx
const ItemButton = css`
  font-size: 1.8rem; font-weight: bold;
  padding: 1.4rem 1.8rem;
  background-color: color.default;  /* purple */
  border-radius: 1.2rem;
  &:hover { box-shadow: 0 0 0 0.3rem transparentize(0.5, color.default); }
`
```

Размер крупнее системного button large (1.8rem vs 1.6rem), padding шире, border-radius 1.2rem vs 0.8rem. Hero CTA — это намеренно нестандартный элемент.

---

## How (How It Works)

**Файлы:** `src/containers/How/How.tsx`, `Style.tsx`

### Что делает

Секция сравнения: ручной метод vs _mad-assembly. Две карточки side-by-side.

### CSS Grid-карточка

```tsx
const Item = styled.div`
  display: grid;
  grid-template-columns: 4.4rem 1fr;
  grid-template-rows: 4.4rem 1fr;
  gap: 3.2rem 1.6rem;
  grid-template-areas:
    'Icon Title'
    'Text Text';
  border: 0.1rem solid elementBorder;
  padding: 2.4rem;
`
```

Карточка — CSS Grid с именованными зонами. Иконка и заголовок в одной строке, текст занимает всю ширину под ними. `grid-template-areas` делает разметку читаемой без магических чисел.

### Dashed-подсветка заголовков

```tsx
const ItemTitle = styled.h3<{ type?: 'sad' | 'happy' }>`
  background: repeating-linear-gradient(
    90deg,
    ${type === 'sad' ? textHint : textSuccess},   /* orange / green */
    ... 0.1rem,
    transparent 0.1rem, transparent 0.2rem
  );
`
```

Фон заголовка — вертикальные штрихи. Штрих 0.1rem + пробел 0.1rem = частые полосы создают эффект подсветки маркером. Оранжевый для «плохого» варианта, зелёный для «хорошего».

### Content grid (секция в целом)

```tsx
const Content = styled.div`
  grid-template-columns: 1fr;         /* mobile: 1 колонка */
  ${breakpoints.greaterThan('sm')`
    grid-template-columns: repeat(2, 1fr);  /* desktop: 2 колонки */
  `}
`
```

Самый простой responsive grid в проекте.

---

## FastStart

**Файлы:** `src/containers/FastStart/FastStart.tsx`, `Style.tsx`

### Что делает

Первая из трёх dark CTA-секций. Dot-pattern на тёмном фоне, заголовок, подзаголовок в белой «подложке», кнопка.

### Radial dot background

```tsx
const Wrap = styled.div`
  background-image: radial-gradient(
    ${textHintSecond} 0.1rem,       /* purple, 1px точка */
    ${elementBgSecond} 0.1rem       /* #1E2D3D, фон */
  );
  background-size: 1.8rem 1.8rem;   /* шаг сетки точек */
  background-color: elementBgSecond;
`
```

`radial-gradient` с hard stop создаёт круглую точку диаметром 0.1rem. Шаг сетки 1.8rem. Цвет точек — purple (#5565E8) — почти не виден на тёмном фоне #1E2D3D, создаёт едва заметную текстуру. Этот приём используется в трёх секциях.

### Текст-подложка

```tsx
const Text = styled.p`
  padding: 3rem 1.6rem;
  background-color: elementBg;  /* white */
`
```

Параграф с белым фоном — создаёт «бумажный» прямоугольник поверх dot-pattern. Читаемость важнее декоративности.

### StyledLink — ещё одна кастомная кнопка

```tsx
const StyledLink = styled(Href)`
  width: 100%; max-width: 30rem;
  background-color: color.default;   /* purple */
  border-radius: 0.8rem;
  font-size: 1.8rem;
  &:hover { box-shadow: 0 0 0 0.3rem transparentize(0.5, color.default); }
`
```

На 100% ширину с max-width 30rem — растягивается на мобиле, ограничена на десктопе.

---

## Benefits

**Файлы:** `src/containers/Benefits/Benefits.tsx`, `Style.tsx`

### Что делает

6 карточек с преимуществами + одна специальная карточка-CTA с логотипом. Сложный asymmetric CSS Grid.

### CSS Grid с named areas (3 разных раскладки)

**Mobile (1 колонка):**
```
'first'
'fifth'
'second'
'third'
'fourth'
```
Порядок изменён! `fifth` идёт перед `second` — это editorial-решение: первые два «быстрых» преимущества (Faster + Cheapest?) ставятся в начало на мобиле.

**Tablet (sm, 6 колонок):**
```
'first  first  first  second second second'
'third  third  third  fourth fourth fourth'
'third  third  third  fifth  fifth  fifth'
```
Третья карточка (Unique utils — самая длинная) занимает 2 строки слева.

**Desktop (md, 5 колонок):**
```
'first  first  first  second second'
'third  third  six    fourth fourth'
'third  third  fifth  fifth  fifth'
```
Карточка `six` (логотип + CTA) занимает одну ячейку в центре второй строки.

```tsx
const ItemsWrap = styled.div`
  display: grid;
  border-left: 0.1rem solid elementBorder;
  border-top: 0.1rem solid elementBorder;
  /* Каждый Item: border-right + border-bottom — итого сетка ячеек */
`

const Item = styled.div`
  border-right: 0.1rem solid elementBorder;
  border-bottom: 0.1rem solid elementBorder;
`
```

Сетка рисуется через border-хак: у обёртки `border-left` и `border-top`, у каждой карточки `border-right` и `border-bottom`. В итоге все ячейки имеют ровные рамки без двойных линий.

### Hatched icon container

```tsx
const ItemWrapper = styled.div`
  padding: 1.6rem;
  background: repeating-linear-gradient(
    -45deg,
    ${textSuccess} 0,           /* green */
    ${textSuccess} 0.1rem,
    transparent 0.1rem,
    transparent 0.2rem           /* шаг 0.2rem */
  );
  color: textSuccess;
`
```

Иконка на фоне диагональной штриховки зелёным цветом — signature-паттерн секции Benefits. Плотная (-45deg, шаг 0.2rem) штриховка создаёт «активный» фон для иконки.

### Карточка six (логотип + CTA)

```tsx
<Item name='six'>
  <Icon name='logoMini' size='fill' />
  <StyledLink href={link.APP_HOST}>
    <Icon name='arrow' rotate='-135deg' size='xl' />
    _start-airdrop
  </StyledLink>
</Item>
```

```tsx
const StyledLink = styled(Href)`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  opacity: 0;
  background-color: textHint;    /* orange */
  transition: opacity 0.3s;

  &:hover { opacity: 1; }
`
```

Лого занимает всю карточку. Оранжевая кнопка-оверлей на 100% карточки, `opacity: 0` по умолчанию, `opacity: 1` на hover. По сути вся карточка становится кнопкой при наведении, с reveal-эффектом.

---

## Products

**Файлы:** `src/containers/Products/Products.tsx`, `Style.tsx`

### Что делает

Две карточки «coming soon» — NFT airdrop и Token creator.

### Grid карточки — named areas по контенту

```tsx
const Item = styled.div`
  /* Mobile */
  grid-template-areas:
    'Img  Link'
    'Title Title'
    'Text  Text';

  /* Desktop (md+) */
  ${breakpoints.greaterThan('md')`
    grid-template-areas:
      'Img Title Link'
      'Img Text  Link';
    grid-template-columns: auto 1fr auto;
  `}
`
```

Мобиль — вертикальная стопка. Десктоп — горизонтальная раскладка: иконка слева, текст в центре, ссылка справа. Это классический media-object layout через CSS Grid areas.

### `/* soon */` badge

```tsx
<ItemSoon>/* soon */</ItemSoon>
```

```tsx
const ItemSoon = styled.span`
  font-family: monospace;
  color: textSecondary;
  /* позиция в правом верхнем углу карточки */
`
```

Текст выглядит как JS/CSS комментарий. Developer humor — маркировка «coming soon» в стиле кода. Это намеренное тематическое решение.

### Background ItemsWrap

```tsx
const ItemsWrap = styled.div`
  background-image: radial-gradient(
    elementBgSecond 0.1rem,      /* тёмные точки */
    elementBg 0.1rem             /* белый фон */
  );
  background-size: 1.8rem 1.8rem;
  background-color: elementBg;
  border-left: 0.1rem solid elementBorder;
  border-top: 0.1rem solid elementBorder;
`
```

Та же dot-сетка, но **инвертированная** — тёмные точки на белом фоне, не светлые на тёмном. Секция светлая, но текстурированная.

---

## Partnership

**Файлы:** `src/containers/Partnership/Partnership.tsx`, `Style.tsx`

### Что делает

Вторая dark CTA-секция. Приглашение к партнёрству, ссылка на Discord.

### Полное совпадение структуры с FastStart

`Style.tsx` Partnership идентичен FastStart: те же `Section`, `Wrap` (с dot-pattern), `Container`, `Title`, `Text`, `StyledLink`. Разница только в копирайте и ссылке (`docs.PARTNERSHIP` = Discord invite).

Это намеренное переиспользование — не копипаст, а один и тот же паттерн «dark CTA». В реальной design system из этого выделился бы отдельный компонент `DarkCTA`.

---

## Faq

**Файлы:** `src/containers/Faq/Faq.tsx`, `Style.tsx`

### Что делает

Секция с аккордеоном FAQ. На десктопе — sticky боковая колонка с заголовком и доп. ссылкой, справа — 5 раскрывающихся вопросов.

### Двухколоночный layout с sticky

```tsx
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;                        /* mobile: 1 колонка */
  padding: 3.2rem 1.6rem;

  ${breakpoints.greaterThan('md')`
    grid-template-columns: 1fr 1.5fr;               /* desktop: 2 колонки */
    grid-template-rows: auto;
    padding: 10rem 1.6rem 6.4rem;
  `}
`

const Aside = styled.aside`
  position: sticky;
  top: auto;                                         /* не фиксируется на mobile */

  ${breakpoints.greaterThan('md')`
    top: 0;                                          /* sticky на desktop */
    height: fit-content;
    background-color: warning;                       /* orange sidebar */
    padding: 3.2rem;
  `}
`
```

`position: sticky; top: 0` работает только когда у контейнера нет `overflow: hidden`. Здесь контейнер — это grid, без overflow — sticky работает корректно.

Оранжевый фон `Aside` на десктопе — самое яркое использование оранжевого как структурного (не кнопочного) цвета во всём проекте.

### Accordion — Dropdown компонент

```tsx
<Dropdown title='What is _mad-assembly?'>
  <Content>...</Content>
</Dropdown>
```

Использует `react-animate-height` через `<AnimateHeight id={title} duration={400} height={height}>`. `id={title}` — accessibility: aria-controls на header указывает на этот id.

```tsx
// Dropdown/Dropdown.tsx
const [height, setHeight] = useState<Height>(isOpen ? 'auto' : 0)

const handleClick = () => {
  setHeight(height === 0 ? 'auto' : 0)  // toggle между 0 и 'auto'
}
```

`height='auto'` — react-animate-height умеет вычислять реальную высоту элемента и анимировать к ней, не нужно задавать конкретное значение px.

### Стиль содержимого

```tsx
const Content = styled.div`
  padding: 1.6rem;
  max-height: ${props.maxHeight};
  ${props.maxHeight !== 'fit-content' && `overflow-y: auto;`}

  ${breakpoints.greaterThan('sm')`
    padding: 1.6rem 3.2rem 1.6rem 1.6rem;  /* больше отступ справа */
  `}
`
```

Правый отступ крупнее левого на десктопе — типографический приём, создающий визуальное поле для чтения.

---

## Start

**Файлы:** `src/containers/Start/Start.tsx`, `Style.tsx`

### Что делает

Финальная dark CTA-секция перед Footer. Текст «Your new airdrop is ready. Are you?» + кнопка.

### Структура

Идентичен FastStart и Partnership. Та же `Wrap` с dot-pattern, тот же `StyledLink`. Разница только в заголовке (более эмоциональный, с риторическим вопросом) и в отсутствии параграфа `<Text>` с белой подложкой.

### Title с `&nbsp;`

```tsx
<Title>Your new airdrop is&nbsp;ready. Are you?</Title>
```

`&nbsp;` между «is» и «ready» предотвращает перенос слова «is» на следующую строку в одиночестве. Подобные типографические тонкости встречаются во всех текстах проекта — `&nbsp;`, `&mdash;`, `&rsquo;`, `&ldquo;`.

---

## Footer

**Файлы:** `src/containers/Footer/Footer.tsx`, `Style.tsx`

### Что делает

Минималистичный нижний колонтитул. Копирайт с текущим годом, две иконки соцсетей (Twitter, Discord).

### Динамический год

```tsx
<Copyright>©&nbsp;{new Date().getFullYear()}&nbsp;_mad-assembly</Copyright>
```

Год вычисляется в runtime — не хардкодится. Работает при сборке Gatsby как статика — если сборка ежегодная, год обновится. Или если SSR включён.

### Двухэлементный grid

```tsx
const Bottom = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.05);
`
```

`rgba(255,255,255,0.05)` — почти прозрачная граница. На белом фоне она едва различима, создаёт ощущение легкого разделителя без явной линии.

### SocialItem hover

```tsx
const SocialItem = styled(Href)`
  padding: 0.4rem;
  border-radius: 1rem;
  color: textThird;                                    /* #607B96 */
  &:hover {
    color: textSecondary;                              /* #4c6176 */
    background-color: transparentize(0.9, elementBorder);  /* почти прозрачный */
  }
`
```

Hover-зона больше иконки за счёт `padding: 0.4rem`. `border-radius: 1rem` скругляет зону — иконка в «пилюле» при наведении.

---

## Вспомогательные компоненты (используются везде)

### Href (`src/components/ui/Href/`)

```tsx
function Href({ href, children, ariaLabel, ...rest }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' aria-label={ariaLabel} {...rest}>
      {children}
    </a>
  )
}
```

Обёртка над `<a>` с принудительным `target='_blank'` и `rel='noopener noreferrer'`. Все внешние ссылки в проекте используют этот компонент — безопасность (noopener) и UX (новая вкладка) стандартизированы.

### ScrollTo (`src/components/ui/ScrollTo/`)

Обёртка над `react-scroll` `<Link>`. Принимает `to` (id секции), `href` (hash для SEO), `onClick`. Плавно прокручивает страницу к секции с `duration: 800ms` (предположительно — стандартная настройка react-scroll).

### LogoLink (`src/components/ui/LogoLink/`)

```tsx
function LogoLink() {
  return (
    <StyledLink to={links.home} aria-label='Logo _mad-assembly'>
      <LogoSpan role='none'>_mad-assembly</LogoSpan>     {/* скрыт, только для SEO/a11y */}
      <IconWrapper type='desktop'><Icon name='logoFull' /></IconWrapper>   {/* видим на xsm+ */}
      <IconWrapper type='mobile'><Icon name='logoMini' /></IconWrapper>    {/* видим только мобиль */}
      <IconWeb><Icon name='web' rotate='180deg' /></IconWeb>               {/* декор, lg+ */}
    </StyledLink>
  )
}
```

4 дочерних элемента внутри одной ссылки:
- `LogoSpan` — текст, скрытый через `display: none` — только для screen readers / SEO
- `logoFull` — полное лого (desktop)
- `logoMini` — мини-логотип (mobile, < 520px)
- `web` — декоративная иконка паутины, повёрнутая на 180deg (только lg+)

### BtnBurger (`src/components/ui/BtnBurger/`)

```tsx
const BtnBurger = ({ isOpen }) => (
  <Button aria-label={isOpen ? 'Close menu' : 'Open menu'}>
    <BurgerLine active={isOpen} />
    <BurgerLine active={isOpen} />
    <BurgerLine active={isOpen} />
  </Button>
)
```

Три `<span>` (BurgerLine) трансформируются в X через pure CSS:

```css
/* Линия 1: top → центр + rotate 45deg */
&:nth-of-type(1) {
  active: translate(-50%, -50%) rotate(45deg);
  inactive: top: 1.5rem; translateX(-50%);
}
/* Линия 2: исчезает */
&:nth-of-type(2) { opacity: ${active ? 0 : 1}; }
/* Линия 3: bottom → центр + rotate -45deg */
&:nth-of-type(3) {
  active: translate(-50%, -50%) rotate(-45deg);
  inactive: bottom: 1.5rem; translateX(-50%);
}
```

`aria-label` меняется с «Open menu» на «Close menu» в зависимости от состояния — правильная доступность.

---

## Хуки

### useOnClickOutside (`src/hooks/listeners/useClickOutside.ts`)

```tsx
export function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
```

Вешает два listener'а (mouse + touch) на `document`. Если клик был внутри ref — ничего. Если снаружи — вызывает `handler`. Используется в `DropdownMenu` для закрытия по клику вне.

### useMediaQuery (`src/hooks/listeners/useMediaQuery.ts`)

```tsx
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])
  return matches
}
```

Слушает `resize` события. Обратите внимание: `resize` гораздо дороже `change` у `matchMedia`. Правильнее было бы `media.addEventListener('change', listener)`, но это работает.

---

## Паттерны, которые повторяются во всех компонентах

| Паттерн | Где встречается |
|---|---|
| `border: 0.1rem solid elementBorder` | How, Benefits, Dropdown, DropdownMenu, Header, LogoLink |
| `transition: all 0.26s ease` | Button, Dropdown, Header links, Logo, всё интерактивное |
| `box-shadow: 0 0 0 0.3rem transparentize(0.5, color)` | Button hover/focus, InfoLink, StyledLink, FastStart CTA |
| `radial-gradient dot pattern` | FastStart, Partnership, Start, Products (инвертированный) |
| `repeating-linear-gradient dashed` | Hero grid, How titles, Benefits icons |
| `&:hover:not([disabled])` | Все интерактивные элементы — явный guard против hover на disabled |
| `display: none → greaterThan('sm')` | TxSend, IconWrapper desktop, LogoFull, Guide lines |
| `gap: N rem` | Все flex и grid контейнеры — spacing через gap, не margin |
| `&nbsp;` в JSX текстах | Везде, где перенос строки нежелателен |
| Named grid areas | How (Icon/Title/Text), Products (Img/Title/Link), Benefits (6-area) |

---

*Документ основан на статическом анализе кода — без запуска браузера. Визуальный рендер может незначительно отличаться. 2026-03-31.*
