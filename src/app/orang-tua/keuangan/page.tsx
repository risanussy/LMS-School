"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { invoices } from "@/lib/mock-data";

type InvoiceRow = (typeof invoices)[number];

const paymentMethods = [
  { id: "va", label: "Virtual Account", hint: "BCA, Mandiri, BNI, BRI", icon: "solar:card-bold-duotone" },
  { id: "qris", label: "QRIS", hint: "Scan dari m-banking apa pun", icon: "solar:qr-code-bold-duotone" },
  { id: "ewallet", label: "E-Wallet", hint: "GoPay, OVO, DANA, ShopeePay", icon: "solar:wallet-bold-duotone" },
] as const;

type MethodId = (typeof paymentMethods)[number]["id"];

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
  const [method, setMethod] = useState<MethodId>("va");
  const methodLabel = paymentMethods.find((m) => m.id === method)?.label ?? "";
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

      <section className="soft-panel mt-6 rounded-2xl p-6">
        <h2 className="font-display text-xl font-semibold text-ink">Metode Pembayaran</h2>
        <p className="mt-1 text-sm text-muted">Pilih metode yang akan dipakai saat menekan tombol Bayar.</p>
        <div role="radiogroup" aria-label="Metode pembayaran" className="mt-4 grid gap-3 sm:grid-cols-3">
          {paymentMethods.map((m) => {
            const selected = m.id === method;
            return (
              <button
                key={m.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setMethod(m.id)}
                className={`flex items-start gap-3 rounded-xl p-4 text-left transition ${
                  selected ? "bg-foam ring-2 ring-sea" : "bg-foam/50 hover:bg-foam"
                }`}
              >
                <div className={`rounded-xl p-2 ${selected ? "bg-sea text-white" : "bg-surface text-sea"}`}>
                  <Icon icon={m.icon} width={20} height={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">{m.label}</p>
                  <p className="mt-0.5 text-xs text-muted">{m.hint}</p>
                </div>
                {selected ? (
                  <Icon icon="solar:check-circle-bold-duotone" width={20} height={20} className="text-sea" />
                ) : null}
              </button>
            );
          })}
        </div>
        <p className="mt-4 flex items-center gap-2 text-xs text-muted">
          <Icon icon="solar:bolt-circle-bold-duotone" width={16} height={16} className="text-sea" />
          Pembayaran tercatat otomatis (Auto-record) begitu dikonfirmasi payment gateway.
        </p>
      </section>

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
            {
              key: "status",
              header: "Status",
              render: (row) => (
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge tone={tones[row.status]}>{row.status}</Badge>
                  {row.status === "Lunas" ? (
                    <Badge tone="sea">
                      <Icon icon="solar:bolt-circle-bold-duotone" width={14} height={14} className="mr-1" />
                      Auto-record
                    </Badge>
                  ) : null}
                </div>
              ),
            },
            {
              key: "actions",
              header: "Aksi",
              render: (row) => (
                <div className="flex flex-wrap items-center gap-2">
                  {row.status !== "Lunas" ? (
                    <Button variant="accent" className="px-3 py-1.5 text-xs">
                      <Icon icon="solar:card-bold-duotone" width={16} height={16} />
                      Bayar via {methodLabel}
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
          <li>Pilih metode: Virtual Account, QRIS, atau e-wallet, lalu tekan Bayar pada tagihan.</li>
          <li>Pembayaran terverifikasi dan dicatat otomatis (Auto-record), biasanya dalam hitungan menit.</li>
          <li>Unduh bukti tagihan atau kuitansi melalui tombol Download.</li>
        </ul>
      </section>
    </div>
  );
}
