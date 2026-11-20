"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { messages, teachers } from "@/lib/mock-data";

const fieldClass =
  "w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm outline-none ring-sea focus:ring-2";

export default function ParentMessagesPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <div>
      <PageHeader
        title="Pesan"
        description="Komunikasi dengan guru Alya Putri. Data masih mock untuk frontend."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <section className="soft-panel rounded-2xl p-6 lg:col-span-2">
          <h2 className="font-display text-xl font-semibold text-ink">Kotak Masuk</h2>
          <ul className="mt-4 space-y-3">
            {messages.map((m) => (
              <li key={m.id} className="rounded-xl bg-foam/70 p-4 transition hover:bg-foam">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sea/10 text-sea">
                    <Icon icon="solar:user-speak-bold-duotone" width={20} height={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-semibold text-ink">{m.teacher}</p>
                      <span className="shrink-0 text-xs text-muted">{m.time}</span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-ink-soft">{m.subject}</p>
                    <p className="mt-1 line-clamp-2 text-xs text-muted">{m.preview}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="soft-panel rounded-2xl p-6 lg:col-span-3">
          <h2 className="font-display text-xl font-semibold text-ink">Tulis Pesan Baru</h2>
          <p className="mt-1 text-sm text-muted">Kirim pertanyaan atau informasi kepada guru.</p>

          {sent ? (
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-success/10 px-4 py-3 text-sm text-success">
              <Icon icon="solar:check-circle-bold-duotone" width={18} height={18} />
              Pesan berhasil dikirim (simulasi).
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Guru tujuan</span>
              <select name="teacher" required defaultValue="" className={fieldClass} onChange={() => setSent(false)}>
                <option value="" disabled>
                  Pilih guru
                </option>
                {teachers.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} — {t.subject}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Subjek</span>
              <input
                name="subject"
                required
                className={fieldClass}
                placeholder="Contoh: Perkembangan belajar Alya"
                onChange={() => setSent(false)}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Isi pesan</span>
              <textarea
                name="body"
                required
                rows={6}
                className={fieldClass}
                placeholder="Tulis pesan Anda di sini..."
                onChange={() => setSent(false)}
              />
            </label>

            <Button type="submit" variant="accent">
              <Icon icon="solar:plain-bold-duotone" width={18} height={18} />
              Kirim pesan
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
