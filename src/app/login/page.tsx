import Link from "next/link";
import { Suspense } from "react";
import { Icon } from "@/components/ui/Icon";
import { RolePicker } from "./RolePicker";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-mist">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative hidden overflow-hidden grain text-white lg:flex">
          <div className="mesh absolute inset-0 opacity-35" />
          <div className="relative z-10 flex flex-col justify-between p-10">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-ink">
                <Icon icon="solar:square-academic-cap-bold" width={22} height={22} />
              </span>
              <span className="font-display text-xl font-semibold">Aksara</span>
            </Link>
            <div>
              <h1 className="max-w-md font-display text-5xl font-semibold leading-tight">
                Masuk sesuai peran Anda
              </h1>
              <p className="mt-4 max-w-sm text-white/70">
                Demo frontend tanpa autentikasi nyata. Pilih peran untuk membuka dashboard terkait.
              </p>
            </div>
            <p className="text-sm text-white/50">Backend Gin akan menangani auth di tahap berikutnya.</p>
          </div>
        </section>

        <section className="flex items-center px-4 py-10 md:px-10">
          <div className="mx-auto w-full max-w-xl">
            <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted lg:hidden">
              <Icon icon="solar:arrow-left-linear" width={16} height={16} />
              Kembali ke beranda
            </Link>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Pilih peran demo</h2>
            <p className="mt-2 text-sm text-muted">Langsung masuk ke dashboard dengan data contoh.</p>

            <Suspense fallback={<div className="mt-8 h-80 animate-pulse rounded-2xl bg-foam" />}>
              <RolePicker />
            </Suspense>
          </div>
        </section>
      </div>
    </div>
  );
}
