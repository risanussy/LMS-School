"use client";

import { Icon } from "@/components/ui/Icon";
import { roleLabels } from "@/lib/navigation";
import type { Role } from "@/lib/types";

type Props = {
  role: Role;
  title?: string;
  onMenu: () => void;
};

export function Topbar({ role, title = "Dashboard", onMenu }: Props) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-line bg-mist/90 px-4 py-3 backdrop-blur md:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenu}
          className="rounded-xl bg-foam p-2 text-ink lg:hidden"
          aria-label="Buka menu"
        >
          <Icon icon="solar:hamburger-menu-linear" width={22} height={22} />
        </button>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{roleLabels[role]}</p>
          <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-sm text-muted md:flex">
          <Icon icon="solar:magnifer-linear" width={18} height={18} />
          <span>Cari cepat...</span>
        </div>
        <button type="button" className="rounded-xl bg-foam p-2.5 text-ink" aria-label="Notifikasi">
          <Icon icon="solar:bell-bing-bold-duotone" width={20} height={20} />
        </button>
        <div className="flex items-center gap-2 rounded-xl bg-foam px-2.5 py-1.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sea text-xs font-semibold text-white">
            AK
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-ink">Demo User</p>
            <p className="text-xs text-muted">{roleLabels[role]}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
