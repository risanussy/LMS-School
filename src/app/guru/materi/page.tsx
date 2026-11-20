import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { materials } from "@/lib/mock-data";

export default function GuruMateriPage() {
  return (
    <div>
      <PageHeader
        title="Materi Saya"
        description="Kelola materi pembelajaran yang sudah Anda unggah untuk kelas yang diampu."
        actions={[{ label: "Unggah Materi", icon: "solar:upload-bold-duotone" }]}
      />

      <DataTable
        rows={materials}
        rowKey={(row) => row.id}
        columns={[
          {
            key: "title",
            header: "Judul Materi",
            render: (row) => (
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-foam p-2 text-sea">
                  <Icon icon="solar:notebook-bookmark-bold-duotone" width={20} height={20} />
                </div>
                <span className="font-medium">{row.title}</span>
              </div>
            ),
          },
          { key: "subject", header: "Mata Pelajaran", render: (row) => <Badge tone="sea">{row.subject}</Badge> },
          { key: "teacher", header: "Pengunggah", render: (row) => row.teacher },
          { key: "updatedAt", header: "Diperbarui", render: (row) => <span className="text-muted">{row.updatedAt}</span> },
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
