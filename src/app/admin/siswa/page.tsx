import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { students, classes } from "@/lib/mock-data";
import { RowActions } from "../_components/RowActions";

const fieldClass =
  "w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm outline-none ring-sea focus:ring-2";

export default function AdminSiswaPage() {
  return (
    <>
      <PageHeader
        title="Data Siswa"
        description="Kelola data siswa, kelas, orang tua, dan status keaktifan."
        actions={[{ label: "Tambah Siswa", icon: "solar:user-plus-bold-duotone" }]}
      />

      <form className="soft-panel mb-4 grid gap-3 rounded-2xl p-4 md:grid-cols-[1fr_200px_160px]">
        <label className="relative block">
          <span className="sr-only">Cari siswa</span>
          <Icon
            icon="solar:magnifer-bold-duotone"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            width={18}
            height={18}
          />
          <input
            type="search"
            placeholder="Cari nama atau NIS..."
            className={`${fieldClass} pl-10`}
          />
        </label>
        <label className="block">
          <span className="sr-only">Filter kelas</span>
          <select className={fieldClass} defaultValue="">
            <option value="">Semua kelas</option>
            {classes.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="sr-only">Filter status</span>
          <select className={fieldClass} defaultValue="">
            <option value="">Semua status</option>
            <option value="Aktif">Aktif</option>
            <option value="Nonaktif">Nonaktif</option>
          </select>
        </label>
      </form>

      <DataTable
        rows={students}
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
          { key: "nis", header: "NIS", render: (r) => <span className="text-muted">{r.nis}</span> },
          { key: "class", header: "Kelas", render: (r) => r.className },
          { key: "parent", header: "Orang Tua", render: (r) => r.parent },
          {
            key: "status",
            header: "Status",
            render: (r) => (
              <Badge tone={r.status === "Aktif" ? "success" : "muted"}>{r.status}</Badge>
            ),
          },
          { key: "actions", header: "Aksi", render: () => <RowActions /> },
        ]}
      />
    </>
  );
}
