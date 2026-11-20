import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { announcements } from "@/lib/mock-data";

function audienceTone(audience: string) {
  if (audience === "Guru") return "accent" as const;
  if (audience === "Orang Tua") return "sea" as const;
  return "success" as const;
}

export default function AdminPengumumanPage() {
  return (
    <>
      <PageHeader
        title="Pengumuman"
        description="Publikasikan informasi sekolah untuk guru, siswa, dan orang tua."
        actions={[{ label: "Buat Pengumuman", icon: "solar:add-circle-bold-duotone" }]}
      />

      <ul className="space-y-4">
        {announcements.map((item) => (
          <li key={item.id} className="soft-panel flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-gradient-to-br from-sea/15 to-sea/5 p-3 text-sea">
              <Icon icon="solar:bell-bing-bold-duotone" width={24} height={24} />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-lg font-semibold text-ink">{item.title}</h2>
              <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted">
                <span className="inline-flex items-center gap-1">
                  <Icon icon="solar:calendar-bold-duotone" width={14} height={14} />
                  {item.date}
                </span>
                <Badge tone={audienceTone(item.audience)}>{item.audience}</Badge>
              </div>
            </div>
            <div className="flex gap-1.5">
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-lg bg-accent/15 px-2.5 py-1.5 text-xs font-semibold text-accent-deep transition hover:bg-accent/25"
              >
                <Icon icon="solar:pen-bold-duotone" width={14} height={14} />
                Edit
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-lg bg-danger/10 px-2.5 py-1.5 text-xs font-semibold text-danger transition hover:bg-danger/20"
              >
                <Icon icon="solar:trash-bin-trash-bold-duotone" width={14} height={14} />
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
