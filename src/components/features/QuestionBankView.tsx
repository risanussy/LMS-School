import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";

export type QuestionBankRow = {
  id: string;
  subject: string;
  topic: string;
  level: "Kelas X" | "Kelas XI" | "Kelas XII";
  difficulty: "Mudah" | "Sedang" | "Sulit";
  total: number;
  pg: number;
  essay: number;
  author: string;
  updated: string;
};

const difficultyTone = {
  Mudah: "success",
  Sedang: "accent",
  Sulit: "danger",
} as const;

type Props = {
  title: string;
  description: string;
  rows: QuestionBankRow[];
  showAuthor?: boolean;
};

export function QuestionBankView({ title, description, rows, showAuthor = true }: Props) {
  const totalQuestions = rows.reduce((sum, r) => sum + r.total, 0);
  const subjects = new Set(rows.map((r) => r.subject)).size;
  const hard = rows.filter((r) => r.difficulty === "Sulit").reduce((sum, r) => sum + r.total, 0);

  return (
    <>
      <PageHeader
        title={title}
        description={description}
        actions={[
          { label: "Tambah Soal", icon: "solar:add-circle-bold-duotone", variant: "accent" },
          { label: "Impor Soal", icon: "solar:import-bold-duotone", variant: "secondary" },
        ]}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Soal" value={String(totalQuestions)} hint="Semua paket soal" icon="solar:notebook-bold-duotone" tone="sea" />
        <StatCard label="Mata Pelajaran" value={String(subjects)} hint="Terkelola di bank soal" icon="solar:book-2-bold-duotone" tone="ink" />
        <StatCard label="Soal Tingkat Sulit" value={String(hard)} hint="Untuk pengayaan & olimpiade" icon="solar:fire-bold-duotone" tone="accent" />
        <StatCard label="Diperbarui Terakhir" value={rows[0]?.updated ?? "-"} hint="Paket soal terbaru" icon="solar:clock-circle-bold-duotone" tone="success" />
      </section>

      <div className="soft-panel mt-6 flex flex-wrap items-center gap-2 rounded-2xl p-4">
        <span className="mr-2 flex items-center gap-1.5 text-sm font-medium text-muted">
          <Icon icon="solar:filter-bold-duotone" width={18} height={18} />
          Filter
        </span>
        {["Semua", "Kelas X", "Kelas XI", "Kelas XII"].map((chip, i) => (
          <span
            key={chip}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              i === 0 ? "bg-ink text-white" : "bg-foam text-ink hover:bg-sand"
            }`}
          >
            {chip}
          </span>
        ))}
        <span className="ml-auto text-xs text-muted">{rows.length} paket soal</span>
      </div>

      <div className="mt-4">
        <DataTable<QuestionBankRow>
          rows={rows}
          rowKey={(r) => r.id}
          columns={[
            {
              key: "subject",
              header: "Mata Pelajaran",
              render: (r) => (
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-foam p-2 text-sea">
                    <Icon icon="solar:notebook-bold-duotone" width={18} height={18} />
                  </div>
                  <div>
                    <p className="font-medium">{r.subject}</p>
                    <p className="text-xs text-muted">{r.topic}</p>
                  </div>
                </div>
              ),
            },
            { key: "level", header: "Tingkat", render: (r) => <Badge tone="sea">{r.level}</Badge> },
            {
              key: "difficulty",
              header: "Kesulitan",
              render: (r) => <Badge tone={difficultyTone[r.difficulty]}>{r.difficulty}</Badge>,
            },
            {
              key: "total",
              header: "Jumlah Soal",
              render: (r) => (
                <div>
                  <p className="font-semibold">{r.total} soal</p>
                  <p className="text-xs text-muted">
                    {r.pg} PG · {r.essay} Esai
                  </p>
                </div>
              ),
            },
            ...(showAuthor
              ? [{ key: "author", header: "Penyusun", render: (r: QuestionBankRow) => <span className="text-muted">{r.author}</span> }]
              : []),
            { key: "updated", header: "Diperbarui", render: (r) => <span className="text-muted">{r.updated}</span> },
            {
              key: "actions",
              header: "Aksi",
              render: () => (
                <div className="flex gap-2">
                  <Button variant="secondary" className="px-3 py-1.5 text-xs">
                    <Icon icon="solar:eye-bold-duotone" width={16} height={16} />
                    Lihat
                  </Button>
                  <Button variant="ghost" className="px-3 py-1.5 text-xs">
                    <Icon icon="solar:pen-bold-duotone" width={16} height={16} />
                    Ubah
                  </Button>
                </div>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
