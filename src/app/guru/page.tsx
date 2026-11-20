import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import {
  assignments,
  classes,
  materials,
  scheduleToday,
  teacherStats,
} from "@/lib/mock-data";

const assignmentTone = {
  Belum: "accent",
  Dikerjakan: "sea",
  Terlambat: "danger",
  Selesai: "success",
} as const;

export default function GuruDashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard Guru"
        description="Ringkasan kelas, jadwal mengajar, serta materi dan tugas terbaru Anda hari ini."
        actions={[
          { label: "Unggah Materi", href: "/guru/materi", icon: "solar:upload-bold-duotone" },
          { label: "Buat Tugas", href: "/guru/tugas", icon: "solar:clipboard-add-bold-duotone", variant: "accent" },
        ]}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {teacherStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="soft-panel rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-ink">Kelas yang Diampu</h2>
            <Badge tone="sea">{classes.length} kelas</Badge>
          </div>
          <ul className="mt-4 space-y-3">
            {classes.map((kelas) => (
              <li
                key={kelas.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-foam p-2.5 text-sea">
                    <Icon icon="solar:square-academic-cap-bold-duotone" width={22} height={22} />
                  </div>
                  <div>
                    <p className="font-medium text-ink">{kelas.name}</p>
                    <p className="text-xs text-muted">{kelas.schedule}</p>
                  </div>
                </div>
                <Badge tone="muted">{kelas.students} siswa</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="soft-panel rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-ink">Jadwal Hari Ini</h2>
            <Badge tone="accent">{scheduleToday.length} sesi</Badge>
          </div>
          <ol className="mt-4 space-y-3">
            {scheduleToday.map((item) => (
              <li
                key={item.time}
                className="flex items-start gap-4 rounded-xl border border-line bg-surface px-4 py-3"
              >
                <div className="flex items-center gap-1.5 text-sm font-semibold text-sea">
                  <Icon icon="solar:clock-circle-bold-duotone" width={18} height={18} />
                  <span className="whitespace-nowrap">{item.time}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-ink">{item.subject}</p>
                  <p className="text-xs text-muted">
                    {item.room} · {item.teacher}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="soft-panel rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-ink">Materi Terbaru</h2>
            <Button href="/guru/materi" variant="ghost" className="!px-3 !py-1.5">
              Lihat semua
            </Button>
          </div>
          <ul className="mt-4 space-y-3">
            {materials.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium text-ink">{item.title}</p>
                  <p className="text-xs text-muted">
                    {item.subject} · {item.updatedAt}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Button variant="secondary" className="!p-2">
                    <Icon icon="solar:eye-bold-duotone" width={18} height={18} />
                    <span className="sr-only">Lihat</span>
                  </Button>
                  <Button variant="danger" className="!p-2">
                    <Icon icon="solar:trash-bin-trash-bold-duotone" width={18} height={18} />
                    <span className="sr-only">Hapus</span>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="soft-panel rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-ink">Tugas Terbaru</h2>
            <Button href="/guru/tugas" variant="ghost" className="!px-3 !py-1.5">
              Lihat semua
            </Button>
          </div>
          <ul className="mt-4 space-y-3">
            {assignments.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium text-ink">{item.title}</p>
                  <p className="text-xs text-muted">
                    {item.subject} · Tenggat {item.due} · {item.submitted}/{item.total} terkumpul
                  </p>
                  <div className="mt-1.5">
                    <Badge tone={assignmentTone[item.status]}>{item.status}</Badge>
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Button variant="secondary" className="!p-2">
                    <Icon icon="solar:eye-bold-duotone" width={18} height={18} />
                    <span className="sr-only">Lihat</span>
                  </Button>
                  <Button variant="danger" className="!p-2">
                    <Icon icon="solar:trash-bin-trash-bold-duotone" width={18} height={18} />
                    <span className="sr-only">Hapus</span>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
