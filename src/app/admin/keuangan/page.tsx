import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { invoices } from "@/lib/mock-data";
import type { Invoice, StatItem } from "@/lib/types";

const financeStats: StatItem[] = [
  { label: "Pemasukan Bulan Ini", value: "Rp 69,2 jt", hint: "+8% dari Februari", icon: "solar:wallet-money-bold-duotone", tone: "success" },
  { label: "Tagihan Belum Bayar", value: "Rp 18,5 jt", hint: "41 siswa", icon: "solar:bill-list-bold-duotone", tone: "accent" },
  { label: "Tunggakan", value: "Rp 6,3 jt", hint: "14 siswa", icon: "solar:danger-triangle-bold-duotone", tone: "ink" },
  { label: "Tingkat Pembayaran", value: "87%", hint: "SPP Maret 2026", icon: "solar:chart-2-bold-duotone", tone: "sea" },
];

const statusTone: Record<Invoice["status"], "success" | "accent" | "danger"> = {
  Lunas: "success",
  "Belum Bayar": "accent",
  Tunggakan: "danger",
};

export default function AdminKeuanganPage() {
  return (
    <>
      <PageHeader
        title="Keuangan Sekolah"
        description="Pantau pemasukan SPP, uang kegiatan, dan tunggakan siswa."
        actions={[
          { label: "Buat Tagihan", icon: "solar:bill-list-bold-duotone" },
          { label: "Ekspor Laporan", icon: "solar:export-bold-duotone", variant: "secondary" },
        ]}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {financeStats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </section>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold text-ink">Daftar Tagihan</h2>

      <DataTable
        rows={invoices}
        rowKey={(r) => r.id}
        columns={[
          { key: "title", header: "Tagihan", render: (r) => <span className="font-medium">{r.title}</span> },
          { key: "amount", header: "Nominal", render: (r) => r.amount },
          { key: "due", header: "Jatuh Tempo", render: (r) => <span className="text-muted">{r.due}</span> },
          {
            key: "status",
            header: "Status",
            render: (r) => <Badge tone={statusTone[r.status]}>{r.status}</Badge>,
          },
        ]}
      />
    </>
  );
}
