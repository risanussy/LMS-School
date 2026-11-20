"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import type { NavItem, Role } from "@/lib/types";
import { roleLabels } from "@/lib/navigation";

type Props = {
  role: Role;
  items: NavItem[];
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ role, items, open, onClose }: Props) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-ink text-white transition-transform lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="border-b border-white/10 px-5 py-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sea text-white">
              <Icon icon="solar:square-academic-cap-bold" width={22} height={22} />
            </span>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">Aksara</p>
              <p className="text-xs text-white/60">{roleLabels[role]}</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {items.map((item) => {
            const active = pathname === item.href || (item.href !== `/${role}` && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  active ? "bg-white/12 text-white" : "text-white/70 hover:bg-white/8 hover:text-white"
                }`}
              >
                <Icon icon={item.icon} width={20} height={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          <Link
            href="/login"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/8 hover:text-white"
          >
            <Icon icon="solar:logout-2-bold-duotone" width={20} height={20} />
            Keluar
          </Link>
        </div>
      </aside>
    </>
  );
}
