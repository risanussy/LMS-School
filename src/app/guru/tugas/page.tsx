import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { assignments } from "@/lib/mock-data";

const statusTone = {
  Belum: "accent",
  Dikerjakan: "sea",
  Terlambat: "danger",
  Selesai: "success",
} as const;

export default function GuruTugasPage() {
  return (
    <div>
      <PageHeader
        title="Tugas"
        description="Pantau tenggat waktu dan jumlah pengumpulan tugas dari setiap kelas."
        actions={[{ label: "Buat Tugas", icon: "solar:clipboard-add-bold-duotone", variant: "accent" }]}
      />

      <DataTable
        rows={assignments}
        rowKey={(row) => row.id}
        columns={[
          {
            key: "title",
            header: "Judul Tugas",
            render: (row) => (
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-foam p-2 text-sea">
                  <Icon icon="solar:clipboard-list-bold-duotone" width={20} height={20} />
                </div>
                <div>
                  <p className="font-medium">{row.title}</p>
                  <p className="text-xs text-muted">{row.subject}</p>
                </div>
              </div>
            ),
          },
          {
            key: "due",
            header: "Tenggat",
            render: (row) => (
              <span className="inline-flex items-center gap-1.5">
                <Icon icon="solar:calendar-bold-duotone" width={16} height={16} className="text-muted" />
                {row.due}
              </span>
            ),
          },
          {
            key: "submitted",
            header: "Terkumpul",
            render: (row) => {
              const pct = Math.round((row.submitted / row.total) * 100);
              return (
                <div className="min-w-32">
                  <p className="text-sm font-medium">
                    {row.submitted}/{row.total} siswa
                  </p>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-sand">
                    <div className="h-full rounded-full bg-sea" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            },
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
                  Lihat
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
