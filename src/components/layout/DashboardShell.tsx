"use client";

import { useState } from "react";
import type { NavItem, Role } from "@/lib/types";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

type Props = {
  role: Role;
  items: NavItem[];
  title?: string;
  children: React.ReactNode;
};

export function DashboardShell({ role, items, title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-mist">
      <Sidebar role={role} items={items} open={open} onClose={() => setOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar role={role} title={title} onMenu={() => setOpen(true)} />
        <main className="flex-1 px-4 py-6 md:px-6">{children}</main>
      </div>
    </div>
  );
}
