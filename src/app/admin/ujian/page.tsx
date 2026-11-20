import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { RowActions } from "../_components/RowActions";
import { exams } from "@/lib/mock-data";
import type { Exam } from "@/lib/types";

const statusTone: Record<Exam["status"], "muted" | "accent" | "success"> = {
  Draft: "muted",
  Berlangsung: "accent",
  Selesai: "success",
};

function stat(value: number, finished: boolean) {
  return finished ? value : "—";
}

export default function AdminUjianPage() {
  return (
    <>
      <PageHeader
        title="Manajemen Ujian"
        description="Buat ujian, impor bank soal, dan pantau hasil penilaian."
        actions={[
          { label: "Buat Ujian", icon: "solar:document-add-bold-duotone" },
          { label: "Impor Soal", icon: "solar:import-bold-duotone", variant: "secondary" },
        ]}
      />

      <DataTable
        rows={exams}
        rowKey={(r) => r.id}
        columns={[
          {
            key: "title",
            header: "Ujian",
            render: (r) => (
              <div>
                <p className="font-medium">{r.title}</p>
                <p className="text-xs text-muted">{r.subject}</p>
              </div>
            ),
          },
          { key: "date", header: "Tanggal", render: (r) => <span className="text-muted">{r.date}</span> },
          {
            key: "status",
            header: "Status",
            render: (r) => <Badge tone={statusTone[r.status]}>{r.status}</Badge>,
          },
          {
            key: "avg",
            header: "Rata-rata",
            render: (r) => stat(r.avg, r.status === "Selesai"),
          },
          {
            key: "high",
            header: "Tertinggi",
            render: (r) => stat(r.highest, r.status === "Selesai"),
          },
          {
            key: "low",
            header: "Terendah",
            render: (r) => stat(r.lowest, r.status === "Selesai"),
          },
          {
            key: "passed",
            header: "Lulus",
            render: (r) =>
              r.status === "Selesai" ? (
                <Badge tone="success">
                  {r.passed}/{r.total}
                </Badge>
              ) : (
                <span className="text-muted">— / {r.total}</span>
              ),
          },
          { key: "actions", header: "Aksi", render: () => <RowActions view={false} /> },
        ]}
      />
    </>
  );
}
