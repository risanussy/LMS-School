"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export function LandingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-ink">
            <Icon icon="solar:square-academic-cap-bold" width={22} height={22} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">Aksara</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#fitur" className="hover:text-white">
            Fitur
          </a>
          <a href="#peran" className="hover:text-white">
            Peran
          </a>
          <a href="#alur" className="hover:text-white">
            Alur
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/login" variant="ghost" className="text-white hover:bg-white/10">
            Masuk
          </Button>
          <Button href="/login" variant="accent">
            Coba Demo
          </Button>
        </div>

        <button
          type="button"
          className="rounded-xl bg-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <Icon icon={open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width={22} height={22} />
        </button>
      </div>

      {open ? (
        <div className="mx-4 rounded-2xl border border-white/10 bg-ink/95 p-4 text-white backdrop-blur md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            <a href="#fitur" onClick={() => setOpen(false)}>
              Fitur
            </a>
            <a href="#peran" onClick={() => setOpen(false)}>
              Peran
            </a>
            <a href="#alur" onClick={() => setOpen(false)}>
              Alur
            </a>
            <Button href="/login" variant="accent" className="mt-2 w-full">
              Masuk / Demo
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
