"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";

type Integration = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  connected: boolean;
  detail: string;
  features: string[];
};

const initial: Integration[] = [
  {
    id: "midtrans",
    name: "Midtrans",
    category: "Payment Gateway",
    description: "Terima pembayaran SPP via Virtual Account, QRIS, dan e-wallet dengan rekonsiliasi otomatis.",
    icon: "solar:card-bold-duotone",
    connected: true,
    detail: "Merchant ID: G123-4567 · Mode Produksi",
    features: ["Virtual Account", "QRIS", "GoPay / OVO"],
  },
  {
    id: "xendit",
    name: "Xendit",
    category: "Payment Gateway",
    description: "Alternatif gateway untuk invoice berulang dan pembayaran lewat minimarket.",
    icon: "solar:wallet-money-bold-duotone",
    connected: false,
    detail: "Belum ada akun terhubung",
    features: ["Virtual Account", "Retail Outlet", "Kartu Kredit"],
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    category: "Notifikasi",
    description: "Kirim pengingat tagihan, absensi, dan pengumuman langsung ke WhatsApp orang tua.",
    icon: "solar:chat-round-dots-bold-duotone",
    connected: true,
    detail: "Nomor: 0812-0000-1234 · Terverifikasi",
    features: ["Pengingat SPP", "Notifikasi Absen", "Broadcast"],
  },
  {
    id: "google-classroom",
    name: "Google Classroom",
    category: "Pembelajaran",
    description: "Sinkronkan kelas, tugas, dan nilai antara ION EDU dan Google Classroom.",
    icon: "solar:square-academic-cap-bold-duotone",
    connected: false,
    detail: "Belum ada domain Google Workspace terhubung",
    features: ["Sinkron Kelas", "Impor Tugas", "Ekspor Nilai"],
  },
];

export default function AdminIntegrasiPage() {
  const [items, setItems] = useState(initial);
  const connectedCount = items.filter((i) => i.connected).length;

  function toggle(id: string) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, connected: !i.connected } : i)));
  }

  return (
    <>
      <PageHeader
        title="Integrasi"
        description="Hubungkan ION EDU dengan layanan pembayaran, komunikasi, dan pembelajaran pihak ketiga."
      />

      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Terhubung" value={String(connectedCount)} hint="Integrasi aktif" icon="solar:link-circle-bold-duotone" tone="success" />
        <StatCard label="Belum Terhubung" value={String(items.length - connectedCount)} hint="Siap dihubungkan" icon="solar:link-broken-bold-duotone" tone="accent" />
        <StatCard label="Transaksi Otomatis" value="312" hint="Bulan ini via gateway" icon="solar:bill-check-bold-duotone" tone="sea" />
      </section>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <section key={item.id} className="soft-panel flex flex-col rounded-2xl p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-sea/15 to-sea/5 p-3 text-sea">
                  <Icon icon={item.icon} width={26} height={26} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink">{item.name}</h2>
                  <p className="text-xs text-muted">{item.category}</p>
                </div>
              </div>
              <Badge tone={item.connected ? "success" : "muted"}>{item.connected ? "Connected" : "Belum"}</Badge>
            </div>

            <p className="mt-4 text-sm text-muted">{item.description}</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.features.map((f) => (
                <span key={f} className="rounded-full bg-foam px-2.5 py-1 text-xs text-ink-soft">
                  {f}
                </span>
              ))}
            </div>

            <p className="mt-4 rounded-xl bg-foam/70 px-3 py-2 text-xs text-muted">{item.detail}</p>

            <div className="mt-5 flex gap-2 pt-1">
              {item.connected ? (
                <>
                  <Button variant="secondary" className="flex-1">
                    <Icon icon="solar:settings-bold-duotone" width={18} height={18} />
                    Konfigurasi
                  </Button>
                  <Button variant="danger" onClick={() => toggle(item.id)}>
                    Putuskan
                  </Button>
                </>
              ) : (
                <Button variant="accent" className="flex-1" onClick={() => toggle(item.id)}>
                  <Icon icon="solar:link-round-bold-duotone" width={18} height={18} />
                  Connect
                </Button>
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
