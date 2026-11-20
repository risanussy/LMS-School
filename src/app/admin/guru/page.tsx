import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { teachers } from "@/lib/mock-data";
import { RowActions } from "../_components/RowActions";

export default function AdminGuruPage() {
  return (
    <>
      <PageHeader
        title="Data Guru"
        description="Daftar guru, mata pelajaran, dan jumlah kelas yang diampu."
        actions={[{ label: "Tambah Guru", icon: "solar:user-plus-bold-duotone" }]}
      />

      <DataTable
        rows={teachers}
        rowKey={(r) => r.id}
        columns={[
          {
            key: "name",
            header: "Nama",
            render: (r) => (
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent-deep">
                  {r.name.replace(/^(Ibu|Pak)\s/, "").charAt(0)}
                </span>
                <span className="font-medium">{r.name}</span>
              </div>
            ),
          },
          { key: "nip", header: "NIP", render: (r) => <span className="text-muted">{r.nip}</span> },
          { key: "subject", header: "Mata Pelajaran", render: (r) => r.subject },
          { key: "classes", header: "Kelas Diampu", render: (r) => `${r.classes} kelas` },
          {
            key: "status",
            header: "Status",
            render: (r) => (
              <Badge tone={r.status === "Aktif" ? "success" : "accent"}>{r.status}</Badge>
            ),
          },
          { key: "actions", header: "Aksi", render: () => <RowActions /> },
        ]}
      />
    </>
  );
}
