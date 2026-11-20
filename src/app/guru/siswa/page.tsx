import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { students } from "@/lib/mock-data";

const myStudents = students.slice(0, 4);

export default function GuruSiswaPage() {
  return (
    <div>
      <PageHeader
        title="Siswa"
        description="Daftar siswa dari kelas yang Anda ampu."
      />

      <DataTable
        rows={myStudents}
        rowKey={(row) => row.id}
        columns={[
          {
            key: "name",
            header: "Nama",
            render: (row) => (
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sea/10 text-sm font-semibold text-sea">
                  {row.name.charAt(0)}
                </span>
                <span className="font-medium">{row.name}</span>
              </div>
            ),
          },
          { key: "nis", header: "NIS", render: (row) => row.nis },
          { key: "className", header: "Kelas", render: (row) => <Badge tone="sea">{row.className}</Badge> },
          { key: "parent", header: "Orang Tua", render: (row) => row.parent },
          {
            key: "status",
            header: "Status",
            render: (row) => <Badge tone={row.status === "Aktif" ? "success" : "muted"}>{row.status}</Badge>,
          },
        ]}
      />
    </div>
  );
}
