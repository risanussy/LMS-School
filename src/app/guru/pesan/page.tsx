"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";

type Chat = { id: string; from: "guru" | "ortu"; text: string; time: string };
type Thread = {
  id: string;
  parent: string;
  child: string;
  unread: number;
  chats: Chat[];
};

const initialThreads: Thread[] = [
  {
    id: "1",
    parent: "Budi Santoso",
    child: "Alya Putri · XI IPA 1",
    unread: 1,
    chats: [
      { id: "a", from: "ortu", text: "Selamat pagi Bu, bagaimana perkembangan Alya di pelajaran Matematika?", time: "08:10" },
      { id: "b", from: "guru", text: "Selamat pagi Pak Budi. Alya sangat baik, nilai UTS terakhir 90.", time: "08:25" },
      { id: "c", from: "ortu", text: "Alhamdulillah. Apakah perlu les tambahan untuk persiapan olimpiade?", time: "09:20" },
    ],
  },
  {
    id: "2",
    parent: "Siti Aminah",
    child: "Rafi Pratama · XI IPA 1",
    unread: 0,
    chats: [
      { id: "a", from: "ortu", text: "Bu, Rafi kemarin izin sakit. Apakah ada tugas yang tertinggal?", time: "Kemarin" },
      { id: "b", from: "guru", text: "Ada satu tugas Turunan, tenggat Jumat. Materi sudah di menu Materi.", time: "Kemarin" },
    ],
  },
  {
    id: "3",
    parent: "Agus Wijaya",
    child: "Nadia Rahma · XI IPS 2",
    unread: 2,
    chats: [
      { id: "a", from: "ortu", text: "Mohon info jadwal remedial Matematika untuk Nadia.", time: "07:45" },
      { id: "b", from: "ortu", text: "Terima kasih sebelumnya, Bu.", time: "07:46" },
    ],
  },
];

const fieldClass =
  "flex-1 rounded-xl border border-line bg-surface px-3 py-2.5 text-sm outline-none ring-sea focus:ring-2";

export default function GuruPesanPage() {
  const [threads, setThreads] = useState(initialThreads);
  const [activeId, setActiveId] = useState(initialThreads[0].id);
  const [draft, setDraft] = useState("");

  const active = threads.find((t) => t.id === activeId) ?? threads[0];

  function openThread(id: string) {
    setActiveId(id);
    setThreads((prev) => prev.map((t) => (t.id === id ? { ...t, unread: 0 } : t)));
  }

  function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const now = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }).replace(".", ":");
    setThreads((prev) =>
      prev.map((t) =>
        t.id === activeId
          ? { ...t, chats: [...t.chats, { id: `${Date.now()}`, from: "guru", text, time: now }] }
          : t,
      ),
    );
    setDraft("");
  }

  const totalUnread = threads.reduce((s, t) => s + t.unread, 0);

  return (
    <div>
      <PageHeader
        title="Pesan"
        description="Komunikasi dua arah dengan orang tua siswa. Data masih mock untuk frontend."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <section className="soft-panel rounded-2xl p-4 lg:col-span-2">
          <div className="flex items-center justify-between px-2 pb-3 pt-1">
            <h2 className="font-display text-xl font-semibold text-ink">Kotak Masuk</h2>
            {totalUnread > 0 ? <Badge tone="accent">{totalUnread} baru</Badge> : null}
          </div>
          <ul className="space-y-2">
            {threads.map((t) => {
              const last = t.chats[t.chats.length - 1];
              const isActive = t.id === activeId;
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => openThread(t.id)}
                    className={`flex w-full items-start gap-3 rounded-xl p-3 text-left transition ${
                      isActive ? "bg-foam ring-2 ring-sea/40" : "bg-foam/50 hover:bg-foam"
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sea/10 text-sea">
                      <Icon icon="solar:users-group-two-rounded-bold-duotone" width={20} height={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-semibold text-ink">{t.parent}</p>
                        <span className="shrink-0 text-xs text-muted">{last.time}</span>
                      </div>
                      <p className="text-xs text-muted">{t.child}</p>
                      <p className="mt-1 line-clamp-1 text-xs text-ink-soft">{last.text}</p>
                    </div>
                    {t.unread > 0 ? (
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-semibold text-ink">
                        {t.unread}
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="soft-panel flex min-h-[28rem] flex-col rounded-2xl lg:col-span-3">
          <div className="flex items-center gap-3 border-b border-line/80 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sea/10 text-sea">
              <Icon icon="solar:user-speak-bold-duotone" width={20} height={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Orang tua {active.parent}</p>
              <p className="text-xs text-muted">{active.child}</p>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {active.chats.map((c) => (
              <div key={c.id} className={`flex ${c.from === "guru" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                    c.from === "guru" ? "rounded-br-md bg-ink text-white" : "rounded-bl-md bg-foam text-ink"
                  }`}
                >
                  <p>{c.text}</p>
                  <p className={`mt-1 text-right text-[10px] ${c.from === "guru" ? "text-white/60" : "text-muted"}`}>
                    {c.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={send} className="flex gap-2 border-t border-line/80 p-4">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className={fieldClass}
              placeholder="Tulis balasan..."
              aria-label="Tulis balasan"
            />
            <Button type="submit" variant="accent">
              <Icon icon="solar:plain-bold-duotone" width={18} height={18} />
              Kirim
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
