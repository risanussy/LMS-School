"use client";

import { useState } from "react";
import { MockQr } from "@/components/features/MockQr";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";

type ScanRow = {
  id: string;
  name: string;
  className: string;
  time: string;
  method: "QR" | "Manual";
  status: "Hadir" | "Terlambat";
};

const scans: ScanRow[] = [
  { id: "1", name: "Alya Putri", className: "XI IPA 1", time: "06:48", method: "QR", status: "Hadir" },
  { id: "2", name: "Rafi Pratama", className: "XI IPA 1", time: "06:52", method: "QR", status: "Hadir" },
  { id: "3", name: "Nadia Rahma", className: "XI IPS 2", time: "06:55", method: "QR", status: "Hadir" },
  { id: "4", name: "Salsa Nuraini", className: "XII IPA 1", time: "07:03", method: "QR", status: "Terlambat" },
  { id: "5", name: "Dimas Arya", className: "X IPA 3", time: "07:10", method: "Manual", status: "Terlambat" },
  { id: "6", name: "Bagas Prakoso", className: "X IPA 3", time: "07:12", method: "QR", status: "Terlambat" },
];

export default function AdminAbsensiQrPage() {
  const [mode, setMode] = useState<"QR" | "Manual">("QR");

  return (
    <>
      <PageHeader
        title="Absensi QR"
        description="Siswa memindai QR sekolah saat tiba. Kode diperbarui otomatis setiap 60 detik agar tidak bisa dibagikan."
        actions={[{ label: "Ekspor Log", icon: "solar:export-bold-duotone", variant: "secondary" }]}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Sudah Scan" value="1.042" hint="dari 1.248 siswa" icon="solar:qr-code-bold-duotone" tone="sea" />
        <StatCard label="Tepat Waktu" value="968" hint="sebelum 07.00" icon="solar:check-circle-bold-duotone" tone="success" />
        <StatCard label="Terlambat" value="74" hint="setelah 07.00" icon="solar:clock-circle-bold-duotone" tone="accent" />
        <StatCard label="Belum Hadir" value="206" hint="Menunggu konfirmasi" icon="solar:user-cross-bold-duotone" tone="ink" />
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <section className="soft-panel rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-xl font-semibold text-ink">Mode Absensi</h2>
            <Badge tone={mode === "QR" ? "success" : "accent"}>{mode === "QR" ? "QR Aktif" : "Manual Aktif"}</Badge>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-1 rounded-xl bg-foam p-1">
            {(["QR", "Manual"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  mode === m ? "bg-surface text-ink shadow-sm" : "text-muted hover:text-ink"
                }`}
              >
                <Icon icon={m === "QR" ? "solar:qr-code-bold-duotone" : "solar:pen-new-square-bold-duotone"} width={18} height={18} />
                {m === "QR" ? "Mode QR" : "Mode Manual"}
              </button>
            ))}
          </div>

          {mode === "QR" ? (
            <div className="mt-6 text-center">
              <div className="mx-auto w-full max-w-[280px] rounded-3xl bg-gradient-to-br from-sea/15 to-accent/15 p-4">
                <MockQr className="h-auto w-full rounded-2xl" />
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-ink">SMA Nusantara — Gerbang Utama</p>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-muted">
                <Icon icon="solar:refresh-circle-bold-duotone" width={16} height={16} />
                Diperbarui otomatis dalam 00:42
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <Button variant="secondary" className="px-3 py-1.5 text-xs">
                  <Icon icon="solar:printer-bold-duotone" width={16} height={16} />
                  Cetak
                </Button>
                <Button variant="secondary" className="px-3 py-1.5 text-xs">
                  <Icon icon="solar:maximize-square-bold-duotone" width={16} height={16} />
                  Layar Penuh
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl bg-foam/70 p-5 text-sm text-muted">
              <Icon icon="solar:pen-new-square-bold-duotone" width={28} height={28} className="text-sea" />
              <p className="mt-3 font-medium text-ink">Absensi dicatat manual oleh guru</p>
              <p className="mt-1">
                Pemindaian QR dinonaktifkan. Guru mengisi kehadiran siswa melalui halaman Absensi di dashboard
                masing-masing.
              </p>
              <Button href="/admin/absensi" variant="accent" className="mt-4">
                Buka Absensi Manual
              </Button>
            </div>
          )}
        </section>

        <section className="lg:col-span-3">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-ink">Log Scan Hari Ini</h2>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-success" />
              Jumat, 20 Nov 2026
            </span>
          </div>
          <DataTable<ScanRow>
            rows={scans}
            rowKey={(r) => r.id}
            columns={[
              { key: "name", header: "Siswa", render: (r) => <span className="font-medium">{r.name}</span> },
              { key: "className", header: "Kelas", render: (r) => <span className="text-muted">{r.className}</span> },
              { key: "time", header: "Waktu", render: (r) => r.time },
              {
                key: "method",
                header: "Metode",
                render: (r) => <Badge tone={r.method === "QR" ? "sea" : "muted"}>{r.method}</Badge>,
              },
              {
                key: "status",
                header: "Status",
                render: (r) => <Badge tone={r.status === "Hadir" ? "success" : "accent"}>{r.status}</Badge>,
              },
            ]}
          />
        </section>
      </div>
    </>
  );
}
