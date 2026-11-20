import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { grades } from "@/lib/mock-data";

type Row = (typeof grades)[number];

function scoreTone(score: number): "success" | "sea" | "accent" | "danger" {
  if (score >= 90) return "success";
  if (score >= 80) return "sea";
  if (score >= 70) return "accent";
  return "danger";
}

export default function SiswaNilaiPage() {
  const average = grades.reduce((sum, g) => sum + g.score, 0) / grades.length;
  const best = grades.reduce((a, b) => (b.score > a.score ? b : a));

  return (
    <div>
      <PageHeader
        title="Nilai"
        description="Daftar nilai akhir per mata pelajaran semester ini."
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <StatCard
          label="Rata-rata Nilai"
          value={average.toFixed(1)}
          hint={`${grades.length} mata pelajaran`}
          icon="solar:chart-bold-duotone"
          tone="sea"
        />
        <StatCard
          label="Nilai Tertinggi"
          value={String(best.score)}
          hint={best.subject}
          icon="solar:cup-star-bold-duotone"
          tone="success"
        />
      </div>

      <DataTable<Row>
        rows={grades}
        rowKey={(row) => row.subject}
        columns={[
          { key: "subject", header: "Mata Pelajaran", render: (row) => <span className="font-medium">{row.subject}</span> },
          { key: "score", header: "Nilai", render: (row) => <span className="font-semibold">{row.score}</span> },
          { key: "grade", header: "Predikat", render: (row) => <Badge tone={scoreTone(row.score)}>{row.grade}</Badge> },
        ]}
      />
    </div>
  );
}
