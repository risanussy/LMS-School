import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { leaveRequests } from "@/lib/mock-data";

function statusTone(status: string) {
  if (status === "Disetujui") return "success" as const;
  if (status === "Ditolak") return "danger" as const;
  return "accent" as const;
}

export default function AdminCutiPage() {
  return (
    <>
      <PageHeader
        title="Pengajuan Cuti"
        description="Tinjau dan setujui pengajuan cuti atau izin guru dan staf."
      />

      <DataTable
        rows={leaveRequests}
        rowKey={(r) => r.id}
        columns={[
          { key: "name", header: "Nama", render: (r) => <span className="font-medium">{r.name}</span> },
          { key: "type", header: "Jenis", render: (r) => r.type },
          { key: "date", header: "Tanggal", render: (r) => <span className="text-muted">{r.date}</span> },
          {
            key: "status",
            header: "Status",
            render: (r) => <Badge tone={statusTone(r.status)}>{r.status}</Badge>,
          },
          {
            key: "actions",
            header: "Aksi",
            render: (r) =>
              r.status === "Menunggu" ? (
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-lg bg-success/10 px-2.5 py-1.5 text-xs font-semibold text-success transition hover:bg-success/20"
                  >
                    <Icon icon="solar:check-circle-bold-duotone" width={14} height={14} />
                    Setujui
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-lg bg-danger/10 px-2.5 py-1.5 text-xs font-semibold text-danger transition hover:bg-danger/20"
                  >
                    <Icon icon="solar:close-circle-bold-duotone" width={14} height={14} />
                    Tolak
                  </button>
                </div>
              ) : (
                <span className="text-xs text-muted">Selesai diproses</span>
              ),
          },
        ]}
      />
    </>
  );
}
