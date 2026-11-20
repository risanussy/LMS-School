import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Berita — Aksara",
  description: "Kabar terbaru kegiatan, prestasi, dan pengumuman sekolah Aksara.",
};

const articles = [
  {
    src: "/images/prestasi-olimpiade.jpg",
    category: "Prestasi",
    date: "12 November 2026",
    title: "Siswa Aksara Raih Medali Emas Olimpiade Sains Tingkat Kota",
    excerpt:
      "Tim sains kelas XI berhasil menyisihkan puluhan sekolah dan melaju ke seleksi provinsi bulan depan.",
  },
  {
    src: "/images/kegiatan-olahraga.jpg",
    category: "Kegiatan",
    date: "5 November 2026",
    title: "Hari Olahraga Sekolah: Sportivitas dan Semangat Kebersamaan",
    excerpt: "Lomba antarkelas digelar sehari penuh dengan partisipasi siswa, guru, dan orang tua.",
  },
  {
    src: "/images/kegiatan-budaya.jpg",
    category: "Budaya",
    date: "28 Oktober 2026",
    title: "Pentas Budaya Nusantara Tampilkan Tari dan Musik Tradisional",
    excerpt: "Siswa menampilkan karya seni dari berbagai daerah dalam rangkaian peringatan Bulan Bahasa.",
  },
  {
    src: "/images/prestasi-robotik.jpg",
    category: "Prestasi",
    date: "20 Oktober 2026",
    title: "Klub Robotik Tampil di Pameran STEM Regional",
    excerpt: "Proyek robot pemilah sampah otomatis karya siswa mendapat apresiasi dari juri dan pengunjung.",
  },
  {
    src: "/images/kegiatan-kelas.jpg",
    category: "Akademik",
    date: "10 Oktober 2026",
    title: "Aksara LMS Mulai Digunakan untuk Ujian dan Rekap Nilai",
    excerpt: "Guru kini dapat membuat ujian, memantau nilai, dan membagikan laporan ke orang tua secara real-time.",
  },
];

export default function BeritaPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="bg-mist text-ink">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 pb-6 pt-16 md:px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-sea">Berita sekolah</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">Kabar terbaru dari Aksara</h1>
        <p className="mt-4 max-w-xl text-sm text-muted md:text-base">
          Prestasi, kegiatan, dan pengumuman penting untuk siswa dan orang tua.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <article className="group grid overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[var(--shadow)] md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
            <Image
              src={featured.src}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent-deep">{featured.category}</span>
              <span className="text-muted">{featured.date}</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-snug md:text-3xl">{featured.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{featured.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sea">
              Baca selengkapnya <Icon icon="solar:arrow-right-linear" width={18} height={18} />
            </span>
          </div>
        </article>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((a) => (
            <article
              key={a.title}
              className="group overflow-hidden rounded-3xl border border-line bg-surface transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={a.src}
                  alt={a.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-foam px-2.5 py-1 font-semibold text-sea">{a.category}</span>
                  <span className="text-muted">{a.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
