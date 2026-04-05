import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "default" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-orange-cta text-near-black border-orange-cta glow-orange hover:bg-[#f09348] hover:border-[#f09348]",
  secondary:
    "bg-navy text-white border-navy glow-navy hover:bg-[#253749] hover:border-[#253749]",
  outline:
    "bg-transparent text-navy border-navy glow-navy hover:bg-navy hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "py-[0.6rem] px-[1.6rem] text-[1.2rem]",
  default: "py-[1rem] px-[2rem] text-[1.4rem]",
  lg: "py-[1.2rem] px-[2.8rem] text-[1.6rem]",
};

const baseClasses =
  "inline-flex items-center justify-center font-semibold rounded-[0.8rem] border transition-std cursor-pointer select-none";

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
