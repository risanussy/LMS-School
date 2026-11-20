import { PageHeader } from "@/components/ui/PageHeader";
import { SettingsForm } from "@/components/ui/SettingsForm";

export default function SiswaPengaturanPage() {
  return (
    <div>
      <PageHeader title="Pengaturan" description="Atur profil dan keamanan akun siswa kamu." />
      <SettingsForm roleLabel="Siswa" />
    </div>
  );
}
