import { DashboardShell } from "@/components/layout/DashboardShell";
import { parentNav } from "@/lib/navigation";

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="orang-tua" items={parentNav}>
      {children}
    </DashboardShell>
  );
}
