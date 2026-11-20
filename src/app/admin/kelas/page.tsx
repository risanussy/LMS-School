import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { classes } from "@/lib/mock-data";
import { RowActions } from "../_components/RowActions";

export default function AdminKelasPage() {
  return (
    <>
      <PageHeader
        title="Data Kelas"
        description="Atur kelas, wali kelas, kapasitas siswa, dan jadwal belajar."
        actions={[{ label: "Tambah Kelas", icon: "solar:add-circle-bold-duotone" }]}
      />

      <DataTable
        rows={classes}
        rowKey={(r) => r.id}
        columns={[
          {
            key: "name",
            header: "Kelas",
            render: (r) => (
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sea/15 to-sea/5 text-sea">
                  <Icon icon="solar:square-academic-cap-bold-duotone" width={18} height={18} />
                </span>
                <span className="font-medium">{r.name}</span>
              </div>
            ),
          },
          { key: "homeroom", header: "Wali Kelas", render: (r) => r.homeroom },
          { key: "students", header: "Jumlah Siswa", render: (r) => <Badge tone="sea">{r.students} siswa</Badge> },
          { key: "schedule", header: "Jadwal", render: (r) => <span className="text-muted">{r.schedule}</span> },
          { key: "actions", header: "Aksi", render: () => <RowActions /> },
        ]}
      />
    </>
  );
}
