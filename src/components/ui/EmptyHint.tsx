import { Icon } from "./Icon";

type Props = {
  icon?: string;
  title: string;
  description: string;
};

export function EmptyHint({
  icon = "solar:info-circle-bold-duotone",
  title,
  description,
}: Props) {
  return (
    <div className="soft-panel flex flex-col items-start gap-3 rounded-2xl p-6">
      <div className="rounded-2xl bg-foam p-3 text-sea">
        <Icon icon={icon} width={24} height={24} />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-1 text-sm text-muted">{description}</p>
      </div>
    </div>
  );
}
