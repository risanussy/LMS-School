import Image from "next/image";
import { LandingNav } from "@/components/landing/LandingNav";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const features = [
  {
    icon: "solar:users-group-rounded-bold-duotone",
    title: "Empat peran terhubung",
    desc: "Admin, guru, siswa, dan orang tua punya ruang kerja masing-masing tanpa saling bercampur.",
  },
  {
    icon: "solar:document-text-bold-duotone",
    title: "Ujian & nilai",
    desc: "Buat ujian, impor soal, pantau rekap rata-rata, nilai tertinggi, dan kelulusan.",
  },
  {
    icon: "solar:checklist-minimalistic-bold-duotone",
    title: "Absensi & jadwal",
    desc: "Ringkasan kehadiran, jadwal harian, dan aktivitas belajar terlihat jelas setiap hari.",
  },
  {
    icon: "solar:wallet-money-bold-duotone",
    title: "Keuangan sekolah",
    desc: "SPP, tunggakan, riwayat bayar, dan unduhan bukti pembayaran untuk orang tua.",
  },
];

const kegiatan = [
  {
    src: "/images/kegiatan-kelas.jpg",
    title: "Belajar Kolaboratif",
    desc: "Praktik sains dan proyek kelas yang aktif.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/kegiatan-olahraga.jpg",
    title: "Hari Olahraga",
    desc: "Semangat kompetisi sehat di lapangan.",
    span: "",
  },
  {
    src: "/images/kegiatan-budaya.jpg",
    title: "Pentas Budaya",
    desc: "Tari dan seni tradisional di panggung sekolah.",
    span: "",
  },
];

const prestasi = [
  {
    src: "/images/prestasi-olimpiade.jpg",
    title: "Juara Olimpiade Sains",
    desc: "Medali emas tingkat kota.",
  },
  {
    src: "/images/prestasi-debat.jpg",
    title: "Tim Debat Bahasa",
    desc: "Finalis kompetisi antar sekolah.",
  },
  {
    src: "/images/prestasi-robotik.jpg",
    title: "Klub Robotik",
    desc: "Proyek unggulan pameran STEM.",
  },
];

const solusi = [
  { icon: "solar:question-circle-bold-duotone", title: "Bank Soal", desc: "Kumpulan soal terkurasi per mapel dan tingkat kesulitan." },
  { icon: "solar:check-read-bold-duotone", title: "Auto Grade", desc: "Penilaian otomatis pilihan ganda dengan rekap instan." },
  { icon: "solar:qr-code-bold-duotone", title: "QR Absensi", desc: "Presensi siswa cukup dengan memindai kode QR." },
  { icon: "solar:card-bold-duotone", title: "Payment Gateway", desc: "Bayar SPP lewat VA, e-wallet, dan QRIS dengan status real-time." },
  { icon: "solar:buildings-2-bold-duotone", title: "Multi Sekolah", desc: "Kelola banyak sekolah atau cabang dalam satu akun yayasan." },
  { icon: "solar:hand-heart-bold-duotone", title: "Managed Service", desc: "Pendampingan, training, dan support ber-SLA dari ION EDU." },
];

const roles = [
  {
    title: "Admin Sekolah",
    desc: "Kelola siswa, guru, kelas, ujian, cuti, pengumuman, dan pemasukan sekolah.",
    href: "/login?role=admin",
    icon: "solar:shield-user-bold-duotone",
  },
  {
    title: "Guru",
    desc: "Unggah materi, buat tugas, input nilai, absensi, dan pantau kelas diampu.",
    href: "/login?role=guru",
    icon: "solar:user-speak-bold-duotone",
  },
  {
    title: "Siswa",
    desc: "Lihat jadwal, materi, tugas, ujian, nilai, dan perkembangan belajar.",
    href: "/login?role=siswa",
    icon: "solar:notebook-bookmark-bold-duotone",
  },
  {
    title: "Orang Tua",
    desc: "Pantau akademik anak, absensi, tagihan, pengumuman, dan pesan ke guru.",
    href: "/login?role=orang-tua",
    icon: "solar:heart-bold-duotone",
  },
];

export default function HomePage() {
  return (
    <div className="bg-mist text-ink">
      <section className="relative min-h-[100svh] overflow-hidden grain text-white">
        <div className="pointer-events-none mesh absolute inset-0 opacity-40" />
        <LandingNav />

        {/* Teks header — vertikal center */}
        <div className="pointer-events-none relative z-20 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-56 pt-28 md:px-6 md:pb-0 md:pt-0">
          <div className="pointer-events-auto w-full max-w-lg md:max-w-xl">
            <p className="animate-rise text-sm uppercase tracking-[0.28em] text-accent">LMS Sekolah</p>
            <h1 className="animate-rise delay-1 mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Aksara
            </h1>
            <p className="animate-rise delay-2 mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              Satu platform untuk mengelola pembelajaran, kehadiran, ujian, dan keuangan sekolah — dari ruang admin hingga
              rumah orang tua.
            </p>
            <div className="animate-rise delay-3 mt-8 flex flex-wrap gap-3">
              <Button href="/login" variant="accent" className="px-5 py-3">
                Masuk ke Demo
                <Icon icon="solar:arrow-right-linear" width={18} height={18} />
              </Button>
              <Button href="#fitur" variant="ghost" className="border border-white/20 px-5 py-3 text-white hover:bg-white/10">
                Lihat fitur
              </Button>
            </div>
          </div>
        </div>

        {/* Gambar hero — bottom 0, besar */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-10 w-full md:w-[48%] lg:w-[50%]">
          <Image
            src="/images/hero-casual.png"
            alt="Anak-anak berpakaian santai belajar dan tersenyum bersama"
            width={557}
            height={691}
            priority
            className="ml-auto block h-auto w-[min(100%,360px)] object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)] sm:w-[min(100%,440px)] md:w-[85%] lg:w-[90%]"
          />
        </div>
      </section>

      <section id="fitur" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-sea">Fitur inti</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Dirancang untuk operasional sekolah sehari-hari
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((item) => (
            <article key={item.title} className="rounded-3xl border border-line bg-surface p-6 shadow-[var(--shadow)]">
              <div className="mb-4 inline-flex rounded-2xl bg-foam p-3 text-sea">
                <Icon icon={item.icon} width={26} height={26} />
              </div>
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kegiatan" className="border-t border-line bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Kegiatan sekolah</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Ruang belajar yang hidup di luar layar
            </h2>
            <p className="mt-3 text-sm text-white/65 md:text-base">
              Dokumentasi kegiatan harian siswa — dari kelas, olahraga, hingga pentas budaya.
            </p>
          </div>

          <div className="mt-10 grid auto-rows-[240px] gap-4 md:grid-cols-3 md:auto-rows-[260px]">
            {kegiatan.map((item) => (
              <figure
                key={item.title}
                className={`group relative overflow-hidden rounded-[1.5rem] ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5 pt-16">
                  <p className="font-display text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="prestasi" className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-sea">Prestasi siswa</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Apresiasi capaian yang membanggakan
            </h2>
            <p className="mt-3 text-sm text-muted md:text-base">
              Jejak prestasi akademik dan non-akademik yang menumbuhkan rasa percaya diri siswa.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {prestasi.map((item) => (
              <figure key={item.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-xl font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="peran" className="border-y border-line bg-foam/60">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-sea">Peran pengguna</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Masuk sesuai peran, langsung ke dashboard yang relevan
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((role) => (
              <a
                key={role.title}
                href={role.href}
                className="group rounded-3xl border border-line bg-surface p-5 transition hover:-translate-y-1 hover:border-sea/30 hover:shadow-[var(--shadow)]"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-ink p-3 text-accent transition group-hover:bg-sea group-hover:text-white">
                  <Icon icon={role.icon} width={24} height={24} />
                </div>
                <h3 className="font-display text-lg font-semibold">{role.title}</h3>
                <p className="mt-2 text-sm text-muted">{role.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="alur" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sea">Siap dikembangkan</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Frontend Next.js sekarang. Backend Gin menyusul.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              UI ini memakai data mock agar seluruh alur peran bisa dieksplorasi. Nanti cukup ganti sumber data ke API
              Golang + Gin tanpa mengubah struktur halaman.
            </p>
            <div className="mt-8">
              <Button href="/login" variant="primary" className="px-5 py-3">
                Mulai eksplorasi
              </Button>
            </div>
          </div>
          <div className="rounded-[2rem] bg-ink p-8 text-white">
            <ul className="space-y-5 text-sm text-white/80">
              <li className="flex gap-3">
                <Icon icon="solar:check-circle-bold" className="mt-0.5 text-accent" width={20} height={20} />
                Dashboard ringkas per peran
              </li>
              <li className="flex gap-3">
                <Icon icon="solar:check-circle-bold" className="mt-0.5 text-accent" width={20} height={20} />
                Manajemen siswa, materi, tugas, dan ujian
              </li>
              <li className="flex gap-3">
                <Icon icon="solar:check-circle-bold" className="mt-0.5 text-accent" width={20} height={20} />
                Keuangan, pengumuman, dan pesan orang tua
              </li>
              <li className="flex gap-3">
                <Icon icon="solar:check-circle-bold" className="mt-0.5 text-accent" width={20} height={20} />
                Tailwind + Iconify siap produksi
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="solusi" className="border-t border-line bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Solusi ION EDU</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Lebih lengkap dengan ekosistem ION EDU
              </h2>
              <p className="mt-3 text-sm text-white/65 md:text-base">
                Fitur tambahan yang menyempurnakan Aksara — dari bank soal hingga layanan terkelola.
              </p>
            </div>
            <Button href="/layanan" variant="accent" className="px-5 py-3">
              Lihat layanan
              <Icon icon="solar:arrow-right-linear" width={18} height={18} />
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solusi.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3 text-accent">
                  <Icon icon={item.icon} width={26} height={26} />
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-ink">
              <Icon icon="solar:square-academic-cap-bold" width={18} height={18} />
            </span>
            <div>
              <p className="font-display font-semibold">Aksara</p>
              <p className="text-xs text-white/55">LMS Sekolah · Frontend Next.js</p>
            </div>
          </div>
          <p className="text-sm text-white/55">© 2026 Aksara. Siap dihubungkan ke API Gin.</p>
        </div>
      </footer>
    </div>
  );
}
