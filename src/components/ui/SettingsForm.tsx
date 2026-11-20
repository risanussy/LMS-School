import { Button } from "./Button";

type Props = {
  roleLabel: string;
};

export function SettingsForm({ roleLabel }: Props) {
  return (
    <div className="soft-panel max-w-2xl rounded-2xl p-6">
      <h2 className="font-display text-xl font-semibold text-ink">Pengaturan Akun</h2>
      <p className="mt-1 text-sm text-muted">Kelola profil {roleLabel}. Data masih mock untuk frontend.</p>

      <form className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Nama lengkap</span>
          <input
            className="w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm outline-none ring-sea focus:ring-2"
            defaultValue="Demo User"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
          <input
            type="email"
            className="w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm outline-none ring-sea focus:ring-2"
            defaultValue="demo@aksara.school"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Kata sandi baru</span>
          <input
            type="password"
            className="w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm outline-none ring-sea focus:ring-2"
            placeholder="••••••••"
          />
        </label>
        <Button type="button">Simpan perubahan</Button>
      </form>
    </div>
  );
}
