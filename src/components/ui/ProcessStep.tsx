type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      <div className="flex items-start gap-[2rem]">
        <span className="text-[3.6rem] font-extralight text-purple-brand leading-none shrink-0 tabular-nums">
          {number}
        </span>
        <div className="pt-[0.4rem]">
          <h3 className="text-[2rem] font-semibold tracking-[-0.04rem] text-near-black mb-[1rem]">
            {title}
          </h3>
          <p className="text-[1.5rem] leading-[1.7] text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
}
