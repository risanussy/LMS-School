import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { announcements } from "@/lib/mock-data";

const audienceTone = {
  Semua: "sea",
  "Orang Tua": "accent",
  Guru: "muted",
} as const;

export default function ParentAnnouncementsPage() {
  const items = announcements.filter((a) => a.audience === "Semua" || a.audience === "Orang Tua");

  return (
    <div>
      <PageHeader
        title="Pengumuman Sekolah"
        description="Informasi resmi dari sekolah untuk orang tua dan wali murid."
      />

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="soft-panel flex items-start gap-4 rounded-2xl p-5">
            <div className="rounded-2xl bg-accent/15 p-3 text-accent-deep">
              <Icon icon="solar:bell-bing-bold-duotone" width={24} height={24} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-lg font-semibold text-ink">{item.title}</h2>
                <Badge tone={audienceTone[item.audience as keyof typeof audienceTone] ?? "muted"}>
                  {item.audience}
                </Badge>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                <Icon icon="solar:calendar-bold-duotone" width={14} height={14} />
                {item.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
