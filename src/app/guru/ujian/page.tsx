import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { exams } from "@/lib/mock-data";

const statusTone = {
  Draft: "muted",
  Berlangsung: "accent",
  Selesai: "success",
} as const;

export default function GuruUjianPage() {
  return (
    <div>
      <PageHeader
        title="Ujian"
        description="Atur jadwal ujian dan lihat ringkasan hasil dari kelas yang Anda ampu."
        actions={[{ label: "Buat Ujian", icon: "solar:document-add-bold-duotone", variant: "accent" }]}
      />

      <DataTable
        rows={exams}
        rowKey={(row) => row.id}
        columns={[
          {
            key: "title",
            header: "Ujian",
            render: (row) => (
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-foam p-2 text-sea">
                  <Icon icon="solar:document-text-bold-duotone" width={20} height={20} />
                </div>
                <div>
                  <p className="font-medium">{row.title}</p>
                  <p className="text-xs text-muted">{row.subject}</p>
                </div>
              </div>
            ),
          },
          { key: "date", header: "Tanggal", render: (row) => row.date },
          { key: "total", header: "Peserta", render: (row) => `${row.total} siswa` },
          {
            key: "avg",
            header: "Rata-rata",
            render: (row) => (row.status === "Selesai" ? <span className="font-semibold">{row.avg}</span> : <span className="text-muted">—</span>),
          },
          {
            key: "passed",
            header: "Lulus",
            render: (row) =>
              row.status === "Selesai" ? (
                <span>
                  {row.passed}/{row.total}
                </span>
              ) : (
                <span className="text-muted">—</span>
              ),
          },
          { key: "status", header: "Status", render: (row) => <Badge tone={statusTone[row.status]}>{row.status}</Badge> },
          {
            key: "actions",
            header: "Aksi",
            className: "text-right",
            render: () => (
              <div className="flex justify-end gap-2">
                <Button variant="secondary" className="!px-3 !py-1.5">
                  <Icon icon="solar:eye-bold-duotone" width={16} height={16} />
                  Detail
                </Button>
                <Button variant="danger" className="!px-3 !py-1.5">
                  <Icon icon="solar:trash-bin-trash-bold-duotone" width={16} height={16} />
                  Hapus
                </Button>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
