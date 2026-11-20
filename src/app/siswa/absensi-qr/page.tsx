"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";

type ScanState = "idle" | "scanning" | "success";

const history = [
  { id: "1", date: "Kamis, 19 Nov", time: "06:51", status: "Hadir" },
  { id: "2", date: "Rabu, 18 Nov", time: "06:47", status: "Hadir" },
  { id: "3", date: "Selasa, 17 Nov", time: "07:04", status: "Terlambat" },
];

export default function SiswaAbsensiQrPage() {
  const [state, setState] = useState<ScanState>("idle");
  const [scanTime, setScanTime] = useState("");

  function simulate() {
    setState("scanning");
    window.setTimeout(() => {
      setScanTime(new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }).replace(".", ":"));
      setState("success");
    }, 1500);
  }

  return (
    <div>
      <PageHeader
        title="Scan QR Absensi"
        description="Arahkan kamera ke QR code di gerbang atau kelas untuk mencatat kehadiran."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <section className="soft-panel rounded-2xl p-6 lg:col-span-3">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl bg-ink">
            <div className="absolute inset-0 bg-gradient-to-br from-ink-soft to-ink" />

            {state === "success" ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-success/90 text-white">
                <Icon icon="solar:check-circle-bold-duotone" width={72} height={72} />
                <p className="font-display text-2xl font-semibold">Absensi Berhasil</p>
                <p className="text-sm text-white/80">Tercatat pukul {scanTime} WIB</p>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <Icon icon="solar:camera-bold-duotone" width={96} height={96} />
                </div>
                <div className="absolute inset-10 rounded-2xl border-2 border-dashed border-accent/80">
                  {(["left-0 top-0 border-l-4 border-t-4 rounded-tl-xl", "right-0 top-0 border-r-4 border-t-4 rounded-tr-xl", "bottom-0 left-0 border-b-4 border-l-4 rounded-bl-xl", "bottom-0 right-0 border-b-4 border-r-4 rounded-br-xl"] as const).map((c) => (
                    <span key={c} className={`absolute h-8 w-8 border-accent ${c}`} />
                  ))}
                  {state === "scanning" ? (
                    <span className="absolute left-0 right-0 top-1/2 h-0.5 animate-pulse bg-accent shadow-[0_0_12px_var(--accent)]" />
                  ) : null}
                </div>
                <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-white/70">
                  {state === "scanning" ? "Membaca QR code..." : "Posisikan QR di dalam bingkai"}
                </p>
              </>
            )}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {state === "success" ? (
              <Button variant="secondary" onClick={() => setState("idle")}>
                <Icon icon="solar:restart-bold-duotone" width={18} height={18} />
                Scan Ulang
              </Button>
            ) : (
              <Button variant="accent" onClick={simulate}>
                <Icon icon="solar:qr-code-bold-duotone" width={18} height={18} />
                {state === "scanning" ? "Memindai..." : "Simulasikan Scan"}
              </Button>
            )}
          </div>
        </section>

        <section className="soft-panel rounded-2xl p-6 lg:col-span-2">
          <h2 className="font-display text-xl font-semibold text-ink">Riwayat Scan</h2>
          <ul className="mt-4 space-y-3">
            {history.map((h) => (
              <li key={h.id} className="flex items-center justify-between rounded-xl bg-foam/70 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">{h.date}</p>
                  <p className="text-xs text-muted">Pukul {h.time}</p>
                </div>
                <Badge tone={h.status === "Hadir" ? "success" : "accent"}>{h.status}</Badge>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">
            Tips: QR berganti setiap menit, sehingga absensi hanya valid saat Anda berada di sekolah.
          </p>
        </section>
      </div>
    </div>
  );
}
