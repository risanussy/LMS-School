import { PageHeader } from "@/components/ui/PageHeader";
import { SettingsForm } from "@/components/ui/SettingsForm";

export default function GuruPengaturanPage() {
  return (
    <div>
      <PageHeader title="Pengaturan" description="Perbarui profil dan keamanan akun guru Anda." />
      <SettingsForm roleLabel="Guru" />
    </div>
  );
}
