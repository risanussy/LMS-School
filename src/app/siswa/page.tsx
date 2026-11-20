import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { assignments, materials, scheduleToday, studentStats } from "@/lib/mock-data";

const statusTone = {
  Belum: "accent",
  Dikerjakan: "sea",
  Terlambat: "danger",
  Selesai: "success",
} as const;

export default function SiswaDashboardPage() {
  const upcoming = assignments.filter((item) => item.status !== "Selesai");

  return (
    <div>
      <PageHeader
        title="Dashboard Siswa"
        description="Ringkasan belajar hari ini: jadwal, materi terbaru, dan tugas yang perlu segera dikerjakan."
        actions={[
          { label: "Lihat Tugas", href: "/siswa/tugas", icon: "solar:clipboard-list-bold-duotone" },
          { label: "Jadwal Lengkap", href: "/siswa/jadwal", icon: "solar:calendar-bold-duotone", variant: "secondary" },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {studentStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="soft-panel rounded-2xl p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="font-display text-xl font-semibold text-ink">Jadwal Hari Ini</h2>
            <Button href="/siswa/jadwal" variant="ghost" className="!px-3 !py-1.5">
              Semua
            </Button>
          </div>
          <ul className="space-y-3">
            {scheduleToday.map((slot) => (
              <li key={slot.time} className="flex items-start gap-3 rounded-xl bg-foam/60 p-3">
                <div className="rounded-xl bg-sea/10 p-2 text-sea">
                  <Icon icon="solar:clock-circle-bold-duotone" width={20} height={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-ink">{slot.subject}</p>
                  <p className="text-xs text-muted">
                    {slot.teacher} · {slot.room}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-medium text-sea">{slot.time}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="soft-panel rounded-2xl p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="font-display text-xl font-semibold text-ink">Tugas Mendatang</h2>
            <Button href="/siswa/tugas" variant="ghost" className="!px-3 !py-1.5">
              Semua
            </Button>
          </div>
          <ul className="space-y-3">
            {upcoming.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-3 rounded-xl bg-foam/60 p-3">
                <div className="min-w-0">
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="text-xs text-muted">
                    {item.subject} · Tenggat {item.due}
                  </p>
                </div>
                <Badge tone={statusTone[item.status]}>{item.status}</Badge>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="soft-panel mt-6 rounded-2xl p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-display text-xl font-semibold text-ink">Materi Terbaru</h2>
          <Button href="/siswa/materi" variant="ghost" className="!px-3 !py-1.5">
            Semua
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {materials.map((item) => (
            <article key={item.id} className="rounded-xl border border-line bg-surface p-4">
              <div className="flex items-center justify-between gap-2">
                <Badge tone="sea">{item.subject}</Badge>
                <span className="text-xs text-muted">{item.updatedAt}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.teacher}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
