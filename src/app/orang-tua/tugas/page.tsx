import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { assignments } from "@/lib/mock-data";

type AssignmentRow = (typeof assignments)[number];

const tones = {
  Belum: "accent",
  Dikerjakan: "sea",
  Terlambat: "danger",
  Selesai: "success",
} as const;

export default function ParentAssignmentsPage() {
  const done = assignments.filter((a) => a.status === "Selesai").length;
  const late = assignments.filter((a) => a.status === "Terlambat").length;
  const pending = assignments.filter((a) => a.status === "Belum" || a.status === "Dikerjakan").length;

  return (
    <div>
      <PageHeader
        title="Tugas Anak"
        description="Daftar tugas Alya Putri beserta tenggat dan statusnya."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Selesai" value={String(done)} icon="solar:clipboard-check-bold-duotone" tone="success" />
        <StatCard label="Belum Dikerjakan" value={String(pending)} icon="solar:clipboard-list-bold-duotone" tone="accent" />
        <StatCard label="Terlambat" value={String(late)} icon="solar:alarm-bold-duotone" tone="ink" />
      </div>

      <div className="mt-6">
        <DataTable<AssignmentRow>
          rowKey={(row) => row.id}
          columns={[
            { key: "title", header: "Tugas", render: (row) => <span className="font-medium">{row.title}</span> },
            { key: "subject", header: "Mata Pelajaran", render: (row) => row.subject },
            { key: "due", header: "Tenggat", render: (row) => row.due },
            {
              key: "progress",
              header: "Pengumpulan Kelas",
              render: (row) => (
                <span className="text-muted">
                  {row.submitted}/{row.total} siswa
                </span>
              ),
            },
            { key: "status", header: "Status", render: (row) => <Badge tone={tones[row.status]}>{row.status}</Badge> },
          ]}
          rows={assignments}
        />
      </div>
    </div>
  );
}
