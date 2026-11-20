import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { invoices } from "@/lib/mock-data";

type InvoiceRow = (typeof invoices)[number];

const tones = {
  Lunas: "success",
  "Belum Bayar": "accent",
  Tunggakan: "danger",
} as const;

function parseRupiah(value: string) {
  return Number(value.replace(/[^\d]/g, ""));
}

function formatRupiah(value: number) {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

export default function ParentFinancePage() {
  const outstanding = invoices
    .filter((inv) => inv.status !== "Lunas")
    .reduce((sum, inv) => sum + parseRupiah(inv.amount), 0);
  const paid = invoices
    .filter((inv) => inv.status === "Lunas")
    .reduce((sum, inv) => sum + parseRupiah(inv.amount), 0);
  const overdue = invoices.filter((inv) => inv.status === "Tunggakan").length;

  return (
    <div>
      <PageHeader
        title="Keuangan & SPP"
        description="Tagihan SPP dan biaya sekolah Alya Putri. Lakukan pembayaran dan unduh bukti tagihan di sini."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Total Belum Dibayar"
          value={formatRupiah(outstanding)}
          hint={`${invoices.filter((i) => i.status !== "Lunas").length} tagihan aktif`}
          icon="solar:wallet-money-bold-duotone"
          tone="accent"
        />
        <StatCard
          label="Sudah Dibayar"
          value={formatRupiah(paid)}
          hint="Tahun ajaran berjalan"
          icon="solar:check-circle-bold-duotone"
          tone="success"
        />
        <StatCard
          label="Tunggakan"
          value={String(overdue)}
          hint="Segera selesaikan"
          icon="solar:danger-triangle-bold-duotone"
          tone="ink"
        />
      </div>

      <div className="mt-6">
        <DataTable<InvoiceRow>
          rowKey={(row) => row.id}
          columns={[
            {
              key: "title",
              header: "Tagihan",
              render: (row) => (
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-foam p-2 text-sea">
                    <Icon icon="solar:bill-list-bold-duotone" width={18} height={18} />
                  </div>
                  <span className="font-medium">{row.title}</span>
                </div>
              ),
            },
            { key: "amount", header: "Jumlah", render: (row) => <span className="font-semibold">{row.amount}</span> },
            { key: "due", header: "Jatuh Tempo", render: (row) => row.due },
            { key: "status", header: "Status", render: (row) => <Badge tone={tones[row.status]}>{row.status}</Badge> },
            {
              key: "actions",
              header: "Aksi",
              render: (row) => (
                <div className="flex flex-wrap items-center gap-2">
                  {row.status !== "Lunas" ? (
                    <Button variant="accent" className="px-3 py-1.5 text-xs">
                      <Icon icon="solar:card-bold-duotone" width={16} height={16} />
                      Bayar
                    </Button>
                  ) : null}
                  <Button variant="secondary" className="px-3 py-1.5 text-xs">
                    <Icon icon="solar:download-minimalistic-bold-duotone" width={16} height={16} />
                    Download
                  </Button>
                </div>
              ),
            },
          ]}
          rows={invoices}
        />
      </div>

      <section className="soft-panel mt-6 rounded-2xl p-6">
        <h2 className="font-display text-xl font-semibold text-ink">Cara Pembayaran</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>Transfer ke rekening virtual account sekolah yang tertera pada tagihan.</li>
          <li>Pembayaran terverifikasi otomatis maksimal 1 x 24 jam.</li>
          <li>Unduh bukti tagihan atau kuitansi melalui tombol Download.</li>
        </ul>
      </section>
    </div>
  );
}
