import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { grades, parentStats } from "@/lib/mock-data";

type GradeRow = (typeof grades)[number];

function scoreTone(score: number) {
  if (score >= 90) return "success" as const;
  if (score >= 80) return "sea" as const;
  if (score >= 70) return "accent" as const;
  return "danger" as const;
}

export default function ParentAcademicPage() {
  const rank = parentStats.find((s) => s.label === "Peringkat");
  const average = parentStats.find((s) => s.label === "Rata-rata Nilai");
  const best = grades.reduce((a, b) => (b.score > a.score ? b : a), grades[0]);

  return (
    <div>
      <PageHeader
        title="Informasi Akademik"
        description="Nilai dan peringkat Alya Putri (XI IPA 1) pada semester genap 2025/2026."
        actions={[
          { label: "Unduh Rapor", icon: "solar:download-minimalistic-bold-duotone", variant: "accent" },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {rank ? <StatCard {...rank} hint="Dari seluruh siswa kelas" /> : null}
        {average ? <StatCard {...average} /> : null}
        <StatCard
          label="Nilai Tertinggi"
          value={String(best.score)}
          hint={best.subject}
          icon="solar:medal-ribbons-star-bold-duotone"
          tone="success"
        />
        <StatCard
          label="Mata Pelajaran"
          value={String(grades.length)}
          hint="Semester berjalan"
          icon="solar:notebook-bookmark-bold-duotone"
          tone="ink"
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DataTable<GradeRow>
            rowKey={(row) => row.subject}
            columns={[
              {
                key: "subject",
                header: "Mata Pelajaran",
                render: (row) => <span className="font-medium">{row.subject}</span>,
              },
              {
                key: "score",
                header: "Nilai",
                render: (row) => (
                  <div className="flex min-w-40 items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-sand">
                      <div
                        className="h-full rounded-full bg-sea"
                        style={{ width: `${row.score}%` }}
                      />
                    </div>
                    <span className="w-8 text-right font-semibold">{row.score}</span>
                  </div>
                ),
              },
              {
                key: "grade",
                header: "Predikat",
                render: (row) => <Badge tone={scoreTone(row.score)}>{row.grade}</Badge>,
              },
            ]}
            rows={grades}
          />
        </div>

        <section className="soft-panel rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-accent/15 p-3 text-accent-deep">
              <Icon icon="solar:cup-star-bold-duotone" width={24} height={24} />
            </div>
            <div>
              <p className="text-sm text-muted">Peringkat kelas</p>
              <p className="font-display text-2xl font-semibold text-ink">{rank?.value ?? "-"}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Alya berada di jajaran 4 besar kelas XI IPA 1. Nilai terbaik pada{" "}
            <span className="font-semibold text-ink">{best.subject}</span>. Pertahankan konsistensi
            belajar, terutama pada mata pelajaran Fisika.
          </p>
          <div className="mt-4 rounded-xl bg-foam/70 p-4 text-sm">
            <p className="font-semibold text-ink">Catatan wali kelas</p>
            <p className="mt-1 text-muted">
              Aktif berdiskusi di kelas dan rutin mengumpulkan tugas tepat waktu.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
