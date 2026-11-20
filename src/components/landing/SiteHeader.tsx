"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/berita", label: "Berita" },
  { href: "/ppdb", label: "PPDB" },
  { href: "/#kegiatan", label: "Kegiatan" },
  { href: "/#prestasi", label: "Prestasi" },
  { href: "/layanan", label: "Layanan" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-ink">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-accent">
            <Icon icon="solar:square-academic-cap-bold" width={22} height={22} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">Aksara</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/login" variant="primary">
            Masuk
          </Button>
        </div>

        <button
          type="button"
          className="rounded-xl bg-foam p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <Icon icon={open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width={22} height={22} />
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-surface px-4 pb-4 pt-3 lg:hidden">
          <div className="flex flex-col gap-1 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-ink hover:bg-foam"
              >
                {l.label}
              </Link>
            ))}
            <Button href="/login" variant="primary" className="mt-2 w-full">
              Masuk
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
