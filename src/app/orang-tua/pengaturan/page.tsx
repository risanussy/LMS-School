import { PageHeader } from "@/components/ui/PageHeader";
import { SettingsForm } from "@/components/ui/SettingsForm";

export default function ParentSettingsPage() {
  return (
    <div>
      <PageHeader
        title="Pengaturan"
        description="Kelola profil dan keamanan akun orang tua Anda."
      />
      <SettingsForm roleLabel="Orang Tua" />
    </div>
  );
}
