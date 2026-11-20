type Props = {
  children: React.ReactNode;
  tone?: "sea" | "accent" | "success" | "danger" | "muted";
};

const tones = {
  sea: "bg-sea/10 text-sea",
  accent: "bg-accent/15 text-accent-deep",
  success: "bg-success/10 text-success",
  danger: "bg-danger/10 text-danger",
  muted: "bg-sand text-muted",
};

export function Badge({ children, tone = "sea" }: Props) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
