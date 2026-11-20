import { PageHeader } from "@/components/ui/PageHeader";
import { SettingsForm } from "@/components/ui/SettingsForm";

export default function AdminPengaturanPage() {
  return (
    <>
      <PageHeader
        title="Pengaturan"
        description="Kelola profil dan keamanan akun Admin Sekolah."
      />
      <SettingsForm roleLabel="Admin Sekolah" />
    </>
  );
}
