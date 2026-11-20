import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { announcements, assignments, invoices, parentStats } from "@/lib/mock-data";

const invoiceTone = {
  Lunas: "success",
  "Belum Bayar": "accent",
  Tunggakan: "danger",
} as const;

export default function ParentDashboardPage() {
  const unpaid = invoices.filter((inv) => inv.status !== "Lunas");
  const pendingAssignments = assignments.filter((a) => a.status !== "Selesai");
  const parentAnnouncements = announcements.filter(
    (a) => a.audience === "Semua" || a.audience === "Orang Tua",
  );

  return (
    <div>
      <PageHeader
        title="Dashboard Orang Tua"
        description="Pantau perkembangan akademik, kehadiran, dan tagihan anak Anda dalam satu tempat."
        actions={[
          { label: "Hubungi Guru", href: "/orang-tua/pesan", icon: "solar:chat-round-dots-bold-duotone", variant: "secondary" },
          { label: "Lihat Tagihan", href: "/orang-tua/keuangan", icon: "solar:wallet-money-bold-duotone", variant: "accent" },
        ]}
      />

      <section className="grain relative mb-6 overflow-hidden rounded-3xl p-6 text-white sm:p-8">
        <div className="mesh absolute inset-0" aria-hidden />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 font-display text-2xl font-semibold backdrop-blur">
              AP
            </div>
            <div>
              <p className="text-sm text-white/70">Anak Anda</p>
              <h2 className="font-display text-2xl font-semibold tracking-tight">Alya Putri</h2>
              <p className="mt-1 text-sm text-white/80">XI IPA 1 · NIS 20241001 · Wali kelas Ibu Ratna Dewi</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button href="/orang-tua/akademik" variant="accent">
              <Icon icon="solar:chart-bold-duotone" width={18} height={18} />
              Lihat Nilai
            </Button>
            <Button href="/orang-tua/absensi" variant="secondary">
              <Icon icon="solar:checklist-minimalistic-bold-duotone" width={18} height={18} />
              Kehadiran
            </Button>
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {parentStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <section className="soft-panel rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Ringkasan Tagihan</h2>
              <p className="mt-1 text-sm text-muted">
                {unpaid.length} tagihan perlu diselesaikan.
              </p>
            </div>
            <Button href="/orang-tua/keuangan" variant="secondary">
              Semua tagihan
            </Button>
          </div>
          <ul className="mt-4 divide-y divide-line/80">
            {invoices.map((inv) => (
              <li key={inv.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-foam p-2.5 text-sea">
                    <Icon icon="solar:bill-list-bold-duotone" width={20} height={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{inv.title}</p>
                    <p className="text-xs text-muted">Jatuh tempo {inv.due}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">{inv.amount}</span>
                  <Badge tone={invoiceTone[inv.status]}>{inv.status}</Badge>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="soft-panel rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold text-ink">Tugas Perlu Perhatian</h2>
          <ul className="mt-4 space-y-3">
            {pendingAssignments.map((a) => (
              <li key={a.id} className="rounded-xl bg-foam/70 p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-ink">{a.title}</p>
                    <p className="text-xs text-muted">
                      {a.subject} · Tenggat {a.due}
                    </p>
                  </div>
                  <Badge tone={a.status === "Terlambat" ? "danger" : "accent"}>{a.status}</Badge>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="soft-panel mt-6 rounded-2xl p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-xl font-semibold text-ink">Pengumuman Terbaru</h2>
          <Button href="/orang-tua/pengumuman" variant="ghost">
            Lihat semua
          </Button>
        </div>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {parentAnnouncements.map((a) => (
            <li key={a.id} className="flex items-start gap-3 rounded-xl bg-foam/70 p-4">
              <div className="rounded-xl bg-accent/15 p-2.5 text-accent-deep">
                <Icon icon="solar:bell-bing-bold-duotone" width={20} height={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{a.title}</p>
                <p className="mt-0.5 text-xs text-muted">{a.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
