import { Button } from "./Button";
import { Icon } from "./Icon";

type Action = {
  label: string;
  href?: string;
  icon?: string;
  variant?: "primary" | "secondary" | "accent";
};

type Props = {
  title: string;
  description?: string;
  actions?: Action[];
};

export function PageHeader({ title, description, actions = [] }: Props) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink">{title}</h1>
        {description ? <p className="mt-1 max-w-2xl text-sm text-muted">{description}</p> : null}
      </div>
      {actions.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {actions.map((action) => (
            <Button key={action.label} href={action.href} variant={action.variant ?? "primary"}>
              {action.icon ? <Icon icon={action.icon} width={18} height={18} /> : null}
              {action.label}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
