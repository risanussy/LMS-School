import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-ink">
            <Icon icon="solar:square-academic-cap-bold" width={18} height={18} />
          </span>
          <div>
            <p className="font-display font-semibold">Aksara</p>
            <p className="text-xs text-white/55">LMS Sekolah · didukung ION EDU</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/65">
          <Link href="/profil" className="hover:text-white">Profil</Link>
          <Link href="/berita" className="hover:text-white">Berita</Link>
          <Link href="/ppdb" className="hover:text-white">PPDB</Link>
          <Link href="/layanan" className="hover:text-white">Layanan</Link>
          <Link href="/login" className="hover:text-white">Masuk</Link>
        </nav>
        <p className="text-sm text-white/55">© 2026 Aksara.</p>
      </div>
    </footer>
  );
}
