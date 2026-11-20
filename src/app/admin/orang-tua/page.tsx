import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { parents } from "@/lib/mock-data";
import { RowActions } from "../_components/RowActions";

export default function AdminOrangTuaPage() {
  return (
    <>
      <PageHeader
        title="Data Orang Tua"
        description="Akun orang tua / wali yang terhubung dengan siswa."
        actions={[{ label: "Tambah Orang Tua", icon: "solar:user-plus-bold-duotone" }]}
      />

      <DataTable
        rows={parents}
        rowKey={(r) => r.id}
        columns={[
          {
            key: "name",
            header: "Nama",
            render: (r) => (
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foam text-sm font-semibold text-sea">
                  {r.name.charAt(0)}
                </span>
                <span className="font-medium">{r.name}</span>
              </div>
            ),
          },
          {
            key: "phone",
            header: "Telepon",
            render: (r) => (
              <span className="inline-flex items-center gap-1.5 text-muted">
                <Icon icon="solar:phone-bold-duotone" width={16} height={16} />
                {r.phone}
              </span>
            ),
          },
          { key: "child", header: "Anak", render: (r) => r.child },
          { key: "class", header: "Kelas", render: (r) => <Badge tone="sea">{r.className}</Badge> },
          { key: "actions", header: "Aksi", render: () => <RowActions /> },
        ]}
      />
    </>
  );
}
