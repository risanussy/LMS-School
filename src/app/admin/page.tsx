import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import {
  adminStats,
  announcements,
  attendanceSummary,
  invoices,
  recentActivity,
} from "@/lib/mock-data";

const monthlyIncome = [
  { month: "Okt", value: 62 },
  { month: "Nov", value: 71 },
  { month: "Des", value: 58 },
  { month: "Jan", value: 76 },
  { month: "Feb", value: 83 },
  { month: "Mar", value: 69 },
];

function splitDate(date: string) {
  const [day, month] = date.split(" ");
  return { day, month };
}

export default function AdminDashboardPage() {
  const paid = invoices.filter((i) => i.status === "Lunas").length;
  const maxIncome = Math.max(...monthlyIncome.map((m) => m.value));

  return (
    <>
      <PageHeader
        title="Dashboard Admin"
        description="Ringkasan operasional sekolah: siswa, guru, kehadiran, dan keuangan hari ini."
        actions={[
          { label: "Tambah Siswa", href: "/admin/siswa", icon: "solar:user-plus-bold-duotone" },
          {
            label: "Buat Pengumuman",
            href: "/admin/pengumuman",
            icon: "solar:bell-bing-bold-duotone",
            variant: "secondary",
          },
        ]}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="soft-panel rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Ringkasan Absensi</h2>
              <p className="mt-1 text-sm text-muted">Rekap kehadiran seluruh siswa hari ini</p>
            </div>
            <Badge tone="success">Hari ini</Badge>
          </div>

          <div className="mt-6 space-y-4">
            {attendanceSummary.map((item) => (
              <div key={item.label}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">{item.label}</span>
                  <span className="text-muted">{item.value}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-foam">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="soft-panel rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <Icon icon="solar:calendar-bold-duotone" className="text-sea" width={22} height={22} />
            <h2 className="font-display text-xl font-semibold text-ink">Agenda & Kalender</h2>
          </div>
          <ul className="mt-5 space-y-3">
            {announcements.map((item) => {
              const { day, month } = splitDate(item.date);
              return (
                <li key={item.id} className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-sea/15 to-sea/5 text-sea">
                    <span className="font-display text-lg font-semibold leading-none">{day}</span>
                    <span className="mt-0.5 text-[11px] uppercase">{month}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">{item.title}</p>
                    <p className="text-xs text-muted">Untuk: {item.audience}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="soft-panel rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Icon icon="solar:history-bold-duotone" className="text-sea" width={22} height={22} />
            <h2 className="font-display text-xl font-semibold text-ink">Aktivitas Terbaru</h2>
          </div>
          <ul className="mt-5 divide-y divide-line/80">
            {recentActivity.map((item) => (
              <li key={item.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div className="flex-1">
                  <p className="text-sm text-ink">{item.text}</p>
                  <p className="mt-0.5 text-xs text-muted">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="soft-panel rounded-2xl bg-gradient-to-br from-foam to-white p-6">
          <div className="flex items-center gap-2">
            <Icon icon="solar:wallet-money-bold-duotone" className="text-accent-deep" width={22} height={22} />
            <h2 className="font-display text-xl font-semibold text-ink">Pemasukan</h2>
          </div>
          <p className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">Rp 69,2 jt</p>
          <p className="mt-1 text-xs text-muted">
            Maret 2026 · {paid}/{invoices.length} tagihan contoh lunas
          </p>

          <div className="mt-6 flex h-28 items-end gap-2">
            {monthlyIncome.map((m) => (
              <div key={m.month} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-sea to-sea-bright"
                  style={{ height: `${(m.value / maxIncome) * 100}%` }}
                />
                <span className="text-[11px] text-muted">{m.month}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
