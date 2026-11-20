"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";

type EventType = "absensi" | "tugas" | "nilai";
type LiveEvent = { id: number; type: EventType; title: string; detail: string; time: string };

const meta: Record<EventType, { icon: string; label: string; tone: "success" | "accent" | "sea"; box: string }> = {
  absensi: { icon: "solar:checklist-minimalistic-bold-duotone", label: "Absensi", tone: "success", box: "bg-success/10 text-success" },
  tugas: { icon: "solar:clipboard-list-bold-duotone", label: "Tugas", tone: "accent", box: "bg-accent/15 text-accent-deep" },
  nilai: { icon: "solar:chart-bold-duotone", label: "Nilai", tone: "sea", box: "bg-sea/10 text-sea" },
};

const pool: Omit<LiveEvent, "id" | "time">[] = [
  { type: "absensi", title: "Alya hadir di kelas", detail: "Jam ke-3 · Fisika · Pak Andi Saputra" },
  { type: "tugas", title: "Tugas dikumpulkan", detail: "Latihan Turunan Fungsi · Matematika" },
  { type: "nilai", title: "Nilai baru masuk", detail: "Kuis Bahasa Inggris · 92" },
  { type: "absensi", title: "Alya scan QR di perpustakaan", detail: "Kunjungan perpustakaan · 10:05" },
  { type: "tugas", title: "Tugas baru diberikan", detail: "Esai Pergerakan Nasional · Tenggat Senin" },
  { type: "nilai", title: "Nilai tugas diperbarui", detail: "Laporan Praktikum Fisika · 85" },
  { type: "absensi", title: "Alya hadir di kelas", detail: "Jam ke-4 · Sejarah · Pak Farhan Yusuf" },
];

function nowTime() {
  return new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" }).replace(/\./g, ":");
}

const seed: LiveEvent[] = [
  { id: -3, type: "absensi", title: "Alya tiba di sekolah", detail: "Scan QR gerbang utama", time: "06:51:12" },
  { id: -2, type: "tugas", title: "Tugas dikumpulkan", detail: "Kuis Kimia Larutan · Kimia", time: "08:15:40" },
  { id: -1, type: "nilai", title: "Nilai baru masuk", detail: "UTS Matematika · 90", time: "09:42:05" },
];

export default function ParentLivePage() {
  const [events, setEvents] = useState<LiveEvent[]>([...seed].reverse());
  const [paused, setPaused] = useState(false);
  const counter = useRef(0);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      const item = pool[counter.current % pool.length];
      counter.current += 1;
      setEvents((prev) => [{ ...item, id: counter.current, time: nowTime() }, ...prev].slice(0, 12));
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const count = (t: EventType) => events.filter((e) => e.type === t).length;

  return (
    <div>
      <PageHeader
        title="Live Monitoring"
        description="Pantau aktivitas Alya Putri hari ini secara real-time: kehadiran, tugas, dan nilai. Data masih mock."
      />

      <div className="soft-panel flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-sea/10 to-accent/10 p-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            {!paused ? <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" /> : null}
            <span className={`relative inline-flex h-3 w-3 rounded-full ${paused ? "bg-muted" : "bg-success"}`} />
          </span>
          <p className="text-sm font-semibold text-ink">{paused ? "Dijeda" : "LIVE · Memperbarui otomatis"}</p>
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-2 rounded-xl bg-surface px-3 py-1.5 text-xs font-semibold text-ink transition hover:bg-foam"
        >
          <Icon icon={paused ? "solar:play-bold-duotone" : "solar:pause-bold-duotone"} width={16} height={16} />
          {paused ? "Lanjutkan" : "Jeda"}
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {(Object.keys(meta) as EventType[]).map((t) => (
          <div key={t} className="soft-panel flex items-center gap-4 rounded-2xl p-5">
            <div className={`rounded-2xl p-3 ${meta[t].box}`}>
              <Icon icon={meta[t].icon} width={24} height={24} />
            </div>
            <div>
              <p className="text-sm text-muted">{meta[t].label}</p>
              <p className="font-display text-3xl font-semibold text-ink">{count(t)}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="soft-panel mt-6 rounded-2xl p-6">
        <h2 className="font-display text-xl font-semibold text-ink">Aktivitas Terbaru</h2>
        <ul className="mt-4 space-y-3">
          {events.map((e, i) => (
            <li
              key={e.id}
              className={`flex items-start gap-4 rounded-xl p-4 ${i === 0 && !paused ? "bg-foam ring-2 ring-sea/30" : "bg-foam/60"}`}
            >
              <div className={`rounded-xl p-2.5 ${meta[e.type].box}`}>
                <Icon icon={meta[e.type].icon} width={20} height={20} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-ink">{e.title}</p>
                  <Badge tone={meta[e.type].tone}>{meta[e.type].label}</Badge>
                  {i === 0 && !paused ? <Badge tone="accent">Baru</Badge> : null}
                </div>
                <p className="mt-0.5 text-xs text-muted">{e.detail}</p>
              </div>
              <span className="shrink-0 text-xs text-muted">{e.time}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
