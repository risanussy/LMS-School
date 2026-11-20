import { DashboardShell } from "@/components/layout/DashboardShell";
import { guruNav } from "@/lib/navigation";

export default function GuruLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="guru" items={guruNav}>
      {children}
    </DashboardShell>
  );
}
