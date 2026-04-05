type SectionHeaderProps = {
  label?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeader({
  label,
  heading,
  description,
  align = "left",
  theme = "light",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const headingColor = theme === "dark" ? "text-white" : "text-near-black";
  const descColor = theme === "dark" ? "text-[#a0b4c8]" : "text-muted";

  return (
    <div className={`max-w-[64rem] ${alignClass}`}>
      {label && (
        <p className="text-[1.2rem] font-semibold text-orange-cta uppercase tracking-[0.12rem] mb-[1.6rem]">
          {label}
        </p>
      )}
      <h2
        className={`text-balance text-[3.2rem] md:text-[4rem] font-medium tracking-[-0.06rem] leading-[1.1] ${headingColor}`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`mt-[1.6rem] text-[1.6rem] md:text-[1.8rem] leading-[1.7] ${descColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
