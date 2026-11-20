import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "danger";

type Props = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink-soft",
  secondary: "bg-foam text-ink hover:bg-sand",
  ghost: "bg-transparent text-ink hover:bg-foam",
  accent: "bg-accent text-ink hover:bg-accent-deep hover:text-white",
  danger: "bg-danger/10 text-danger hover:bg-danger/20",
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
