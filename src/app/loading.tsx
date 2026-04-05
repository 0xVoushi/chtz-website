export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[--color-bg]">
      <div className="relative h-[6.5rem] w-[6.5rem]">
        <span
          className="absolute rounded-[50px] shadow-[inset_0_0_0_3px] shadow-[--color-navy]"
          style={{ animation: 'loaderAnim 2.5s infinite' }}
        />
        <span
          className="absolute rounded-[50px] shadow-[inset_0_0_0_3px] shadow-[--color-navy]"
          style={{ animation: 'loaderAnim 2.5s infinite', animationDelay: '-1.25s' }}
        />
      </div>
    </div>
  )
}
