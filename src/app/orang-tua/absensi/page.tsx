import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { attendanceSummary } from "@/lib/mock-data";

type Log = {
  id: string;
  date: string;
  subject: string;
  status: "Hadir" | "Izin" | "Sakit" | "Alpa";
  note: string;
};

const logs: Log[] = [
  { id: "1", date: "Senin, 16 Mar 2026", subject: "Semua mata pelajaran", status: "Hadir", note: "-" },
  { id: "2", date: "Jumat, 13 Mar 2026", subject: "Semua mata pelajaran", status: "Hadir", note: "-" },
  { id: "3", date: "Kamis, 12 Mar 2026", subject: "Semua mata pelajaran", status: "Sakit", note: "Surat dokter terlampir" },
  { id: "4", date: "Rabu, 11 Mar 2026", subject: "Semua mata pelajaran", status: "Hadir", note: "-" },
  { id: "5", date: "Selasa, 10 Mar 2026", subject: "Semua mata pelajaran", status: "Izin", note: "Acara keluarga" },
  { id: "6", date: "Senin, 9 Mar 2026", subject: "Semua mata pelajaran", status: "Hadir", note: "-" },
];

const tones = {
  Hadir: "success",
  Izin: "accent",
  Sakit: "sea",
  Alpa: "danger",
} as const;

export default function ParentAttendancePage() {
  return (
    <div>
      <PageHeader
        title="Absensi Anak"
        description="Rekap kehadiran Alya Putri (XI IPA 1) semester ini."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {attendanceSummary.map((item, idx) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={`${item.value}%`}
            icon={
              [
                "solar:check-circle-bold-duotone",
                "solar:document-text-bold-duotone",
                "solar:heart-pulse-bold-duotone",
                "solar:close-circle-bold-duotone",
              ][idx]
            }
            tone={(["success", "accent", "sea", "ink"] as const)[idx]}
          />
        ))}
      </div>

      <section className="soft-panel mt-6 rounded-2xl p-6">
        <h2 className="font-display text-xl font-semibold text-ink">Komposisi Kehadiran</h2>
        <div className="mt-4 flex h-4 w-full overflow-hidden rounded-full bg-sand">
          {attendanceSummary.map((item) => (
            <div
              key={item.label}
              className={item.color}
              style={{ width: `${item.value}%` }}
              title={`${item.label} ${item.value}%`}
            />
          ))}
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {attendanceSummary.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${item.color}`} />
              {item.label} · {item.value}%
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-6">
        <h2 className="mb-3 font-display text-xl font-semibold text-ink">Riwayat Terbaru</h2>
        <DataTable<Log>
          rowKey={(row) => row.id}
          columns={[
            { key: "date", header: "Tanggal", render: (row) => <span className="font-medium">{row.date}</span> },
            { key: "subject", header: "Cakupan", render: (row) => row.subject },
            { key: "status", header: "Status", render: (row) => <Badge tone={tones[row.status]}>{row.status}</Badge> },
            { key: "note", header: "Keterangan", render: (row) => <span className="text-muted">{row.note}</span> },
          ]}
          rows={logs}
        />
      </div>
    </div>
  );
}
