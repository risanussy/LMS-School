import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Layanan Managed Service — Aksara",
  description: "Managed service ION EDU: pendampingan, onboarding, support ber-SLA, dan pelatihan untuk sekolah.",
};

const WA_URL = "https://wa.me/6280000000000?text=Halo%20ION%20EDU%2C%20saya%20ingin%20konsultasi%20managed%20service%20Aksara";

const layanan = [
  {
    icon: "solar:hand-heart-bold-duotone",
    title: "Pendampingan",
    desc: "Konsultan ION EDU mendampingi operasional LMS harian: pengaturan kelas, ujian, hingga laporan bulanan.",
  },
  {
    icon: "solar:rocket-2-bold-duotone",
    title: "Onboarding",
    desc: "Migrasi data siswa, guru, dan kelas, konfigurasi tahun ajaran, serta uji coba sebelum go-live.",
  },
  {
    icon: "solar:headphones-round-sound-bold-duotone",
    title: "Support ber-SLA",
    desc: "Helpdesk WhatsApp dan tiket dengan waktu respons terukur serta eskalasi insiden prioritas.",
  },
  {
    icon: "solar:presentation-graph-bold-duotone",
    title: "Training",
    desc: "Pelatihan terjadwal untuk admin, guru, dan staf keuangan, lengkap dengan modul dan sesi tanya jawab.",
  },
];

const sla = [
  { level: "Kritis", desc: "Sistem tidak dapat diakses", respon: "≤ 1 jam", selesai: "≤ 4 jam" },
  { level: "Tinggi", desc: "Fitur utama terganggu", respon: "≤ 4 jam", selesai: "≤ 1 hari kerja" },
  { level: "Normal", desc: "Pertanyaan & permintaan umum", respon: "≤ 1 hari kerja", selesai: "≤ 3 hari kerja" },
];

const langkah = [
  { n: "01", title: "Konsultasi", desc: "Kami memahami kebutuhan dan skala sekolah Anda." },
  { n: "02", title: "Onboarding", desc: "Migrasi data, konfigurasi, dan pelatihan awal." },
  { n: "03", title: "Go-live", desc: "Pendampingan intensif pada minggu-minggu pertama." },
  { n: "04", title: "Operasional", desc: "Support rutin, evaluasi, dan peningkatan berkelanjutan." },
];

export default function LayananPage() {
  return (
    <div className="bg-mist text-ink">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-sea">Managed Service · ION EDU</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Sekolah fokus mengajar, kami yang mengurus platformnya
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          Layanan terkelola dari ION EDU memastikan Aksara berjalan stabil dan dipakai optimal oleh seluruh warga
          sekolah — tanpa perlu tim IT khusus.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/login" variant="primary" className="px-5 py-3">
            Coba Demo
            <Icon icon="solar:arrow-right-linear" width={18} height={18} />
          </Button>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-accent-deep hover:text-white"
          >
            <Icon icon="solar:chat-round-dots-bold" width={18} height={18} />
            Hubungi via WhatsApp
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {layanan.map((l) => (
            <article key={l.title} className="rounded-3xl border border-line bg-surface p-6 shadow-[var(--shadow)]">
              <div className="mb-4 inline-flex rounded-2xl bg-foam p-3 text-sea">
                <Icon icon={l.icon} width={26} height={26} />
              </div>
              <h2 className="font-display text-xl font-semibold">{l.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{l.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Support SLA</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Waktu respons yang jelas</h2>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-white/5 text-white/60">
                <tr>
                  <th className="px-5 py-3 font-medium">Prioritas</th>
                  <th className="px-5 py-3 font-medium">Kondisi</th>
                  <th className="px-5 py-3 font-medium">Respon awal</th>
                  <th className="px-5 py-3 font-medium">Target selesai</th>
                </tr>
              </thead>
              <tbody>
                {sla.map((s) => (
                  <tr key={s.level} className="border-t border-white/10">
                    <td className="px-5 py-4 font-semibold text-accent">{s.level}</td>
                    <td className="px-5 py-4 text-white/75">{s.desc}</td>
                    <td className="px-5 py-4">{s.respon}</td>
                    <td className="px-5 py-4">{s.selesai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-white/50">Jam layanan: Senin–Jumat 08.00–17.00 WIB. Insiden kritis dipantau 24/7 pada paket tertentu.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-sea">Alur layanan</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Dari konsultasi hingga operasional</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {langkah.map((s) => (
            <div key={s.n} className="rounded-3xl border border-line bg-surface p-5">
              <p className="font-display text-3xl font-semibold text-accent">{s.n}</p>
              <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <div className="grid items-center gap-6 rounded-[2rem] bg-ink p-8 text-white md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Siap berangkat bersama ION EDU?</h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Jadwalkan konsultasi gratis atau jelajahi demo Aksara sekarang.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href="/login" variant="accent" className="px-5 py-3">
              Masuk ke Demo
            </Button>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Icon icon="solar:chat-round-dots-bold" width={18} height={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
