type ServiceCardProps = {
  icon?: string;
  title: string;
  description: string;
  theme?: "light" | "dark";
};

export function ServiceCard({
  icon,
  title,
  description,
  theme = "light",
}: ServiceCardProps) {
  const isLight = theme === "light";

  return (
    <div
      className={`rounded-[1.2rem] p-[3.2rem] border transition-std ${
        isLight
          ? "border-navy bg-white hover:shadow-[0_4px_24px_rgba(30,45,61,0.08)]"
          : "border-grey-light bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)]"
      }`}
    >
      {icon && (
        <div className="mb-[2.4rem]">
          <span
            className={`text-[2.4rem] ${isLight ? "text-purple-brand" : "text-orange-cta"}`}
          >
            {icon}
          </span>
        </div>
      )}
      <h3
        className={`text-[1.8rem] font-semibold tracking-[-0.04rem] mb-[1.2rem] ${
          isLight ? "text-near-black" : "text-white"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-[1.5rem] leading-[1.7] ${
          isLight ? "text-muted" : "text-[#a0b4c8]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
