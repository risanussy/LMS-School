import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";

const kehadiran = [
  { label: "Sen", value: 96 },
  { label: "Sel", value: 94 },
  { label: "Rab", value: 91 },
  { label: "Kam", value: 95 },
  { label: "Jum", value: 89 },
];

const nilaiPerMapel = [
  { label: "Matematika", value: 82 },
  { label: "Fisika", value: 78 },
  { label: "B. Inggris", value: 87 },
  { label: "Sejarah", value: 84 },
  { label: "Kimia", value: 76 },
  { label: "Biologi", value: 85 },
];

const keuangan = [
  { label: "Okt", masuk: 62, tunggak: 9 },
  { label: "Nov", masuk: 66, tunggak: 8 },
  { label: "Des", masuk: 58, tunggak: 12 },
  { label: "Jan", masuk: 64, tunggak: 10 },
  { label: "Feb", masuk: 64, tunggak: 7 },
  { label: "Mar", masuk: 69, tunggak: 6 },
];

const exportButtons = [
  { label: "PDF", icon: "solar:file-text-bold-duotone" },
  { label: "Excel", icon: "solar:file-bold-duotone" },
  { label: "CSV", icon: "solar:document-bold-duotone" },
];

function ExportRow() {
  return (
    <div className="flex flex-wrap gap-2">
      {exportButtons.map((b) => (
        <Button key={b.label} variant="secondary" className="px-3 py-1.5 text-xs">
          <Icon icon={b.icon} width={16} height={16} />
          {b.label}
        </Button>
      ))}
    </div>
  );
}

function Panel({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section className="soft-panel rounded-2xl p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
          <p className="mt-0.5 text-xs text-muted">{subtitle}</p>
        </div>
        <ExportRow />
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function AdminLaporanPage() {
  const maxKeu = Math.max(...keuangan.map((k) => k.masuk + k.tunggak));

  return (
    <>
      <PageHeader
        title="Laporan"
        description="Ringkasan kehadiran, nilai akademik, dan keuangan sekolah dalam satu tampilan."
        actions={[
          { label: "Semester Genap 2025/2026", icon: "solar:calendar-bold-duotone", variant: "secondary" },
          { label: "Ekspor Semua", icon: "solar:export-bold-duotone", variant: "accent" },
        ]}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Rata-rata Kehadiran" value="93%" hint="+1,2% dari bulan lalu" icon="solar:checklist-minimalistic-bold-duotone" tone="sea" />
        <StatCard label="Rata-rata Nilai" value="82,0" hint="Semua mata pelajaran" icon="solar:chart-bold-duotone" tone="success" />
        <StatCard label="Pemasukan Maret" value="Rp 69,2 jt" hint="87% tagihan terbayar" icon="solar:wallet-money-bold-duotone" tone="accent" />
        <StatCard label="Siswa Perlu Perhatian" value="23" hint="Nilai atau absensi rendah" icon="solar:danger-triangle-bold-duotone" tone="ink" />
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Panel title="Kehadiran Mingguan" subtitle="Persentase siswa hadir per hari">
          <div className="flex h-52 items-end gap-4">
            {kehadiran.map((d) => (
              <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-semibold text-ink">{d.value}%</span>
                <div className="flex h-full w-full items-end rounded-xl bg-foam">
                  <div
                    className="w-full rounded-xl bg-gradient-to-t from-sea to-sea-bright"
                    style={{ height: `${d.value}%` }}
                  />
                </div>
                <span className="text-xs text-muted">{d.label}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Rata-rata Nilai per Mapel" subtitle="Skala 0–100, semester berjalan">
          <ul className="space-y-3">
            {nilaiPerMapel.map((m) => (
              <li key={m.label}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">{m.label}</span>
                  <span className="font-semibold text-ink">{m.value}</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-foam">
                  <div
                    className={`h-full rounded-full ${m.value >= 80 ? "bg-sea" : "bg-accent"}`}
                    style={{ width: `${m.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-6">
        <Panel title="Keuangan 6 Bulan Terakhir" subtitle="Pemasukan SPP & tunggakan (juta rupiah)">
          <div className="mb-4 flex gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-sea" /> Pemasukan
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" /> Tunggakan
            </span>
          </div>
          <div className="flex h-56 items-end gap-4">
            {keuangan.map((k) => (
              <div key={k.label} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-semibold text-ink">{k.masuk}</span>
                <div className="flex h-full w-full flex-col justify-end overflow-hidden rounded-xl bg-foam">
                  <div className="w-full bg-accent" style={{ height: `${(k.tunggak / maxKeu) * 100}%` }} />
                  <div className="w-full bg-sea" style={{ height: `${(k.masuk / maxKeu) * 100}%` }} />
                </div>
                <span className="text-xs text-muted">{k.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted">
            <Badge tone="success">Naik 8%</Badge>
            pemasukan Maret dibanding Februari.
          </div>
        </Panel>
      </div>
    </>
  );
}
