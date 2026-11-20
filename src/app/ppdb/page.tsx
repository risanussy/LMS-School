"use client";

import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const gelombang = [
  { name: "Gelombang 1", period: "1 Des 2026 – 31 Jan 2027", note: "Potongan biaya pendaftaran 50%", status: "Dibuka" },
  { name: "Gelombang 2", period: "1 Feb – 31 Mar 2027", note: "Kuota terbatas per jenjang", status: "Segera" },
  { name: "Gelombang 3", period: "1 Apr – 31 Mei 2027", note: "Sisa kuota dan jalur khusus", status: "Segera" },
  { name: "Pengumuman & Daftar Ulang", period: "Juni 2027", note: "Verifikasi berkas dan orientasi siswa baru", status: "Segera" },
];

const jenjang = ["SD", "SMP", "SMA"];

export default function PpdbPage() {
  const [form, setForm] = useState({ nama: "", asal: "", jenjang: "SMP", kontak: "" });
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setToast(true);
    setForm({ nama: "", asal: "", jenjang: "SMP", kontak: "" });
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-sea focus:ring-2 focus:ring-sea/20";

  return (
    <div className="bg-mist text-ink">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 pb-6 pt-16 md:px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-sea">PPDB 2027/2028</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Penerimaan peserta didik baru
        </h1>
        <p className="mt-4 max-w-xl text-sm text-muted md:text-base">
          Isi formulir pendaftaran awal. Tim kami akan menghubungi Anda untuk langkah verifikasi berkas.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 md:px-6 lg:grid-cols-[1fr_1fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-line bg-surface p-7 shadow-[var(--shadow)]"
        >
          <h2 className="font-display text-2xl font-semibold">Formulir pendaftaran</h2>
          <div className="mt-6 space-y-5">
            <label className="block text-sm font-medium">
              Nama calon siswa
              <input
                required
                value={form.nama}
                onChange={(e) => update("nama", e.target.value)}
                placeholder="Nama lengkap"
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Asal sekolah
              <input
                required
                value={form.asal}
                onChange={(e) => update("asal", e.target.value)}
                placeholder="Contoh: SDN 1 Jakarta"
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Jenjang yang dituju
              <select
                value={form.jenjang}
                onChange={(e) => update("jenjang", e.target.value)}
                className={inputClass}
              >
                {jenjang.map((j) => (
                  <option key={j} value={j}>
                    {j}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium">
              Kontak orang tua (WhatsApp / email)
              <input
                required
                value={form.kontak}
                onChange={(e) => update("kontak", e.target.value)}
                placeholder="08xx xxxx xxxx"
                className={inputClass}
              />
            </label>
          </div>
          <Button type="submit" variant="primary" className="mt-7 w-full px-5 py-3">
            Kirim pendaftaran
            <Icon icon="solar:arrow-right-linear" width={18} height={18} />
          </Button>
          <p className="mt-3 text-xs text-muted">Data bersifat contoh (mock) dan belum dikirim ke server.</p>
        </form>

        <div className="rounded-[2rem] bg-ink p-7 text-white">
          <h2 className="font-display text-2xl font-semibold">Jadwal gelombang</h2>
          <ol className="mt-6 space-y-0 border-l-2 border-white/15 pl-6">
            {gelombang.map((g, i) => (
              <li key={g.name} className="relative pb-7 last:pb-0">
                <span
                  className={`absolute -left-[33px] top-1 h-3.5 w-3.5 rounded-full border-2 border-ink ${
                    i === 0 ? "bg-accent" : "bg-sea-bright"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-display text-lg font-semibold">{g.name}</p>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      i === 0 ? "bg-accent text-ink" : "bg-white/10 text-white/70"
                    }`}
                  >
                    {g.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-accent">{g.period}</p>
                <p className="mt-1 text-sm text-white/65">{g.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {toast ? (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-start gap-3 rounded-2xl bg-ink p-4 text-white shadow-[var(--shadow)]"
        >
          <Icon icon="solar:check-circle-bold" className="mt-0.5 shrink-0 text-accent" width={22} height={22} />
          <div className="text-sm">
            <p className="font-semibold">Pendaftaran terkirim</p>
            <p className="mt-0.5 text-white/70">Terima kasih! Tim PPDB akan menghubungi Anda dalam 1×24 jam.</p>
          </div>
          <button type="button" onClick={() => setToast(false)} aria-label="Tutup" className="text-white/60 hover:text-white">
            <Icon icon="solar:close-circle-linear" width={20} height={20} />
          </button>
        </div>
      ) : null}

      <SiteFooter />
    </div>
  );
}
