import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Profil Sekolah — Aksara",
  description: "Visi, misi, sejarah singkat, dan fasilitas sekolah Aksara.",
};

const misi = [
  "Menyelenggarakan pembelajaran aktif, kolaboratif, dan berbasis proyek.",
  "Menumbuhkan karakter, budaya literasi, dan rasa ingin tahu sepanjang hayat.",
  "Memanfaatkan teknologi digital untuk transparansi akademik antara sekolah dan orang tua.",
  "Mendorong prestasi akademik maupun non-akademik secara seimbang.",
];

const sejarah = [
  { year: "2005", text: "Sekolah Aksara berdiri dengan tiga rombongan belajar dan komitmen pada pendidikan yang bermakna." },
  { year: "2014", text: "Perluasan gedung, laboratorium sains, dan perpustakaan; mulai tradisi pentas budaya tahunan." },
  { year: "2021", text: "Transisi ke pembelajaran hibrida dengan dukungan platform LMS terpadu." },
  { year: "2026", text: "Aksara LMS digunakan seluruh peran: admin, guru, siswa, dan orang tua." },
];

const fasilitas = [
  { icon: "solar:test-tube-bold-duotone", title: "Laboratorium Sains", desc: "Praktikum fisika, kimia, dan biologi." },
  { icon: "solar:monitor-bold-duotone", title: "Laboratorium Komputer", desc: "Perangkat modern untuk coding dan robotik." },
  { icon: "solar:book-2-bold-duotone", title: "Perpustakaan Digital", desc: "Koleksi cetak dan e-book yang dapat diakses dari rumah." },
  { icon: "solar:running-round-bold-duotone", title: "Lapangan Olahraga", desc: "Basket, futsal, dan atletik." },
  { icon: "solar:music-notes-bold-duotone", title: "Studio Seni & Budaya", desc: "Tari, musik, dan teater tradisional." },
  { icon: "solar:wifi-router-bold-duotone", title: "Wi-Fi Kampus", desc: "Jaringan stabil di seluruh area belajar." },
];

const galeri = [
  { src: "/images/kegiatan-kelas.jpg", alt: "Siswa belajar kolaboratif di kelas" },
  { src: "/images/kegiatan-olahraga.jpg", alt: "Kegiatan olahraga siswa di lapangan" },
  { src: "/images/kegiatan-budaya.jpg", alt: "Pentas budaya siswa" },
];

export default function ProfilPage() {
  return (
    <div className="bg-mist text-ink">
      <SiteHeader />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-sea">Profil sekolah</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Belajar dengan aksara, tumbuh dengan karakter
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            Aksara adalah sekolah yang memadukan pembelajaran hangat di kelas dengan sistem digital yang rapi, sehingga
            siswa, guru, dan orang tua bergerak bersama.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[var(--shadow)]">
          <Image
            src="/images/kegiatan-kelas.jpg"
            alt="Suasana belajar kolaboratif di sekolah Aksara"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-line bg-foam/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:px-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-line bg-surface p-7 shadow-[var(--shadow)]">
            <div className="mb-4 inline-flex rounded-2xl bg-ink p-3 text-accent">
              <Icon icon="solar:eye-bold-duotone" width={24} height={24} />
            </div>
            <h2 className="font-display text-2xl font-semibold">Visi</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              Menjadi sekolah unggulan yang melahirkan generasi berkarakter, berprestasi, dan siap menghadapi tantangan
              zaman digital.
            </p>
          </article>
          <article className="rounded-3xl border border-line bg-surface p-7 shadow-[var(--shadow)]">
            <div className="mb-4 inline-flex rounded-2xl bg-ink p-3 text-accent">
              <Icon icon="solar:flag-bold-duotone" width={24} height={24} />
            </div>
            <h2 className="font-display text-2xl font-semibold">Misi</h2>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted md:text-base">
              {misi.map((m) => (
                <li key={m} className="flex gap-3">
                  <Icon icon="solar:check-circle-bold" className="mt-0.5 shrink-0 text-sea" width={20} height={20} />
                  {m}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-sea">Sejarah singkat</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Perjalanan Aksara</h2>
        <ol className="mt-8 space-y-0 border-l-2 border-sand pl-6">
          {sejarah.map((s) => (
            <li key={s.year} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[33px] top-1 h-3.5 w-3.5 rounded-full border-2 border-mist bg-accent" />
              <p className="font-display text-xl font-semibold text-sea">{s.year}</p>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Fasilitas</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Dukungan penuh untuk belajar</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fasilitas.map((f) => (
              <article key={f.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white/10 p-3 text-accent">
                  <Icon icon={f.icon} width={24} height={24} />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/65">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight">Galeri kehidupan sekolah</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {galeri.map((g) => (
            <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/ppdb" variant="primary" className="px-5 py-3">
            Daftar PPDB
          </Button>
          <Button href="/berita" variant="secondary" className="px-5 py-3">
            Baca berita
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
