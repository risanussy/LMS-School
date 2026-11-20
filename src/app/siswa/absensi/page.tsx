import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { attendanceSummary } from "@/lib/mock-data";

const statTone = ["success", "accent", "sea", "ink"] as const;
const statIcon = [
  "solar:check-circle-bold-duotone",
  "solar:document-text-bold-duotone",
  "solar:heart-pulse-bold-duotone",
  "solar:close-circle-bold-duotone",
];

export default function SiswaAbsensiPage() {
  return (
    <div>
      <PageHeader
        title="Absensi"
        description="Rekap kehadiran kamu semester ini berdasarkan data presensi harian."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {attendanceSummary.map((item, index) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={`${item.value}%`}
            hint="Semester genap"
            icon={statIcon[index] ?? statIcon[0]}
            tone={statTone[index] ?? "sea"}
          />
        ))}
      </div>

      <section className="soft-panel mt-6 max-w-3xl rounded-2xl p-6">
        <h2 className="font-display text-xl font-semibold text-ink">Ringkasan Kehadiran</h2>
        <p className="mt-1 text-sm text-muted">Persentase berdasarkan total hari efektif belajar.</p>

        <div className="mt-6 space-y-5">
          {attendanceSummary.map((item) => (
            <div key={item.label}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-ink">{item.label}</span>
                <span className="text-muted">{item.value}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-sand">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
