import { PageHeader } from "@/components/ui/PageHeader";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { attendanceSummary, classes } from "@/lib/mock-data";

type Row = {
  id: string;
  className: string;
  homeroom: string;
  hadir: number;
  izin: number;
  sakit: number;
  alpa: number;
  total: number;
};

const classAttendance: Row[] = [
  { id: "1", className: "XI IPA 1", homeroom: "Ibu Ratna Dewi", hadir: 34, izin: 1, sakit: 1, alpa: 0, total: 36 },
  { id: "2", className: "XI IPS 2", homeroom: "Pak Farhan Yusuf", hadir: 31, izin: 1, sakit: 1, alpa: 1, total: 34 },
  { id: "3", className: "X IPA 3", homeroom: "Pak Andi Saputra", hadir: 29, izin: 2, sakit: 1, alpa: 0, total: 32 },
];

const summaryIcons: Record<string, string> = {
  Hadir: "solar:check-circle-bold-duotone",
  Izin: "solar:document-add-bold-duotone",
  Sakit: "solar:heart-pulse-bold-duotone",
  Alpa: "solar:close-circle-bold-duotone",
};

export default function AdminAbsensiPage() {
  return (
    <>
      <PageHeader
        title="Monitoring Absensi"
        description={`Pantau kehadiran harian seluruh ${classes.length} kelas contoh secara real-time.`}
        actions={[{ label: "Ekspor Rekap", icon: "solar:export-bold-duotone", variant: "secondary" }]}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {attendanceSummary.map((item) => (
          <div key={item.label} className="soft-panel rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted">{item.label}</p>
              <Icon icon={summaryIcons[item.label]} className="text-sea" width={22} height={22} />
            </div>
            <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              {item.value}%
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-foam">
              <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
            </div>
          </div>
        ))}
      </section>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold text-ink">Absensi per Kelas · Hari Ini</h2>

      <DataTable
        rows={classAttendance}
        rowKey={(r) => r.id}
        columns={[
          { key: "class", header: "Kelas", render: (r) => <span className="font-medium">{r.className}</span> },
          { key: "homeroom", header: "Wali Kelas", render: (r) => r.homeroom },
          { key: "hadir", header: "Hadir", render: (r) => <Badge tone="success">{r.hadir}</Badge> },
          { key: "izin", header: "Izin", render: (r) => <Badge tone="accent">{r.izin}</Badge> },
          { key: "sakit", header: "Sakit", render: (r) => <Badge tone="sea">{r.sakit}</Badge> },
          {
            key: "alpa",
            header: "Alpa",
            render: (r) => <Badge tone={r.alpa > 0 ? "danger" : "muted"}>{r.alpa}</Badge>,
          },
          {
            key: "rate",
            header: "Kehadiran",
            render: (r) => {
              const pct = Math.round((r.hadir / r.total) * 100);
              return (
                <div className="flex min-w-32 items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-foam">
                    <div className="h-full rounded-full bg-success" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-xs text-muted">{pct}%</span>
                </div>
              );
            },
          },
        ]}
      />
    </>
  );
}
