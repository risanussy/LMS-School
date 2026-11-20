import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { assignments } from "@/lib/mock-data";
import type { Assignment } from "@/lib/types";

const statusTone = {
  Belum: "accent",
  Dikerjakan: "sea",
  Terlambat: "danger",
  Selesai: "success",
} as const;

export default function SiswaTugasPage() {
  return (
    <div>
      <PageHeader
        title="Tugas"
        description="Daftar tugas dari guru. Kerjakan sebelum tenggat agar tidak terlambat."
      />

      <DataTable<Assignment>
        rows={assignments}
        rowKey={(row) => row.id}
        columns={[
          { key: "title", header: "Tugas", render: (row) => <span className="font-medium">{row.title}</span> },
          { key: "subject", header: "Mata Pelajaran", render: (row) => row.subject },
          { key: "due", header: "Tenggat", render: (row) => row.due },
          { key: "status", header: "Status", render: (row) => <Badge tone={statusTone[row.status]}>{row.status}</Badge> },
          {
            key: "action",
            header: "Aksi",
            className: "text-right",
            render: (row) =>
              row.status === "Selesai" ? (
                <Button variant="secondary" href={`/siswa/tugas?lihat=${row.id}`} className="!px-3 !py-1.5">
                  <Icon icon="solar:eye-bold-duotone" width={16} height={16} />
                  Lihat
                </Button>
              ) : (
                <Button href={`/siswa/tugas?kerjakan=${row.id}`} className="!px-3 !py-1.5">
                  <Icon icon="solar:pen-bold-duotone" width={16} height={16} />
                  Kerjakan
                </Button>
              ),
          },
        ]}
      />
    </div>
  );
}
