import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { exams } from "@/lib/mock-data";

type ExamRow = (typeof exams)[number];

const tones = {
  Selesai: "success",
  Berlangsung: "accent",
  Draft: "muted",
} as const;

const statusLabel = {
  Selesai: "Selesai",
  Berlangsung: "Berlangsung",
  Draft: "Terjadwal",
} as const;

export default function ParentExamsPage() {
  const finished = exams.filter((e) => e.status === "Selesai").length;
  const ongoing = exams.filter((e) => e.status === "Berlangsung").length;
  const upcoming = exams.filter((e) => e.status === "Draft").length;

  return (
    <div>
      <PageHeader
        title="Ujian Anak"
        description="Jadwal dan hasil ujian Alya Putri (XI IPA 1)."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Selesai" value={String(finished)} icon="solar:check-circle-bold-duotone" tone="success" />
        <StatCard label="Berlangsung" value={String(ongoing)} icon="solar:document-text-bold-duotone" tone="accent" />
        <StatCard label="Terjadwal" value={String(upcoming)} icon="solar:calendar-bold-duotone" tone="sea" />
      </div>

      <div className="mt-6">
        <DataTable<ExamRow>
          rowKey={(row) => row.id}
          columns={[
            { key: "title", header: "Ujian", render: (row) => <span className="font-medium">{row.title}</span> },
            { key: "subject", header: "Mata Pelajaran", render: (row) => row.subject },
            { key: "date", header: "Tanggal", render: (row) => row.date },
            {
              key: "avg",
              header: "Rata-rata Kelas",
              render: (row) => (row.status === "Selesai" ? row.avg.toFixed(1) : <span className="text-muted">-</span>),
            },
            {
              key: "range",
              header: "Tertinggi / Terendah",
              render: (row) =>
                row.status === "Selesai" ? (
                  `${row.highest} / ${row.lowest}`
                ) : (
                  <span className="text-muted">-</span>
                ),
            },
            {
              key: "status",
              header: "Status",
              render: (row) => <Badge tone={tones[row.status]}>{statusLabel[row.status]}</Badge>,
            },
          ]}
          rows={exams}
        />
      </div>
    </div>
  );
}
