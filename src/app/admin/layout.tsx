import { DashboardShell } from "@/components/layout/DashboardShell";
import { adminNav } from "@/lib/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="admin" items={adminNav}>
      {children}
    </DashboardShell>
  );
}
