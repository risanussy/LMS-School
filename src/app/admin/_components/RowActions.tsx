import { Icon } from "@/components/ui/Icon";

type Props = {
  view?: boolean;
  edit?: boolean;
  remove?: boolean;
};

const base =
  "inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition";

export function RowActions({ view = true, edit = true, remove = true }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {view ? (
        <button type="button" className={`${base} bg-foam text-sea hover:bg-sand`}>
          <Icon icon="solar:eye-bold-duotone" width={14} height={14} />
          Lihat
        </button>
      ) : null}
      {edit ? (
        <button type="button" className={`${base} bg-accent/15 text-accent-deep hover:bg-accent/25`}>
          <Icon icon="solar:pen-bold-duotone" width={14} height={14} />
          Edit
        </button>
      ) : null}
      {remove ? (
        <button type="button" className={`${base} bg-danger/10 text-danger hover:bg-danger/20`}>
          <Icon icon="solar:trash-bin-trash-bold-duotone" width={14} height={14} />
          Hapus
        </button>
      ) : null}
    </div>
  );
}
