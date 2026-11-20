import type { StatItem } from "@/lib/types";
import { Icon } from "./Icon";

const tones = {
  sea: "from-sea/15 to-sea/5 text-sea",
  accent: "from-accent/20 to-accent/5 text-accent-deep",
  success: "from-success/15 to-success/5 text-success",
  ink: "from-ink/10 to-ink/5 text-ink",
};

export function StatCard({ label, value, hint, icon, tone = "sea" }: StatItem) {
  return (
    <div className="soft-panel rounded-2xl p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted">{label}</p>
          <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">{value}</p>
          {hint ? <p className="mt-1 text-xs text-muted">{hint}</p> : null}
        </div>
        <div className={`rounded-2xl bg-gradient-to-br p-3 ${tones[tone]}`}>
          <Icon icon={icon} width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
