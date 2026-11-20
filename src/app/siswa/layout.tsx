import { DashboardShell } from "@/components/layout/DashboardShell";
import { siswaNav } from "@/lib/navigation";

export default function SiswaLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="siswa" items={siswaNav}>
      {children}
    </DashboardShell>
  );
}
