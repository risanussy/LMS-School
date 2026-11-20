import type { NavItem, Role } from "./types";

export const roleLabels: Record<Role, string> = {
  admin: "Admin Sekolah",
  guru: "Guru",
  siswa: "Siswa",
  "orang-tua": "Orang Tua",
};

export const roleHomes: Record<Role, string> = {
  admin: "/admin",
  guru: "/guru",
  siswa: "/siswa",
  "orang-tua": "/orang-tua",
};

export const adminNav: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: "solar:home-2-bold-duotone" },
  { label: "Siswa", href: "/admin/siswa", icon: "solar:users-group-rounded-bold-duotone" },
  { label: "Guru", href: "/admin/guru", icon: "solar:user-speak-bold-duotone" },
  { label: "Orang Tua", href: "/admin/orang-tua", icon: "solar:users-group-two-rounded-bold-duotone" },
  { label: "Kelas", href: "/admin/kelas", icon: "solar:square-academic-cap-bold-duotone" },
  { label: "Absensi", href: "/admin/absensi", icon: "solar:checklist-minimalistic-bold-duotone" },
  { label: "Ujian", href: "/admin/ujian", icon: "solar:document-text-bold-duotone" },
  { label: "Keuangan", href: "/admin/keuangan", icon: "solar:wallet-money-bold-duotone" },
  { label: "Cuti", href: "/admin/cuti", icon: "solar:calendar-mark-bold-duotone" },
  { label: "Pengumuman", href: "/admin/pengumuman", icon: "solar:bell-bing-bold-duotone" },
  { label: "Bank Soal", href: "/admin/bank-soal", icon: "solar:notebook-bold-duotone" },
  { label: "Absensi QR", href: "/admin/absensi-qr", icon: "solar:qr-code-bold-duotone" },
  { label: "Laporan", href: "/admin/laporan", icon: "solar:chart-2-bold-duotone" },
  { label: "Multi Sekolah", href: "/admin/multi-sekolah", icon: "solar:buildings-2-bold-duotone" },
  { label: "Integrasi", href: "/admin/integrasi", icon: "solar:link-circle-bold-duotone" },
  { label: "Pengaturan", href: "/admin/pengaturan", icon: "solar:settings-bold-duotone" },
];

export const guruNav: NavItem[] = [
  { label: "Dashboard", href: "/guru", icon: "solar:home-2-bold-duotone" },
  { label: "Materi Saya", href: "/guru/materi", icon: "solar:notebook-bookmark-bold-duotone" },
  { label: "Tugas", href: "/guru/tugas", icon: "solar:clipboard-list-bold-duotone" },
  { label: "Ujian", href: "/guru/ujian", icon: "solar:document-text-bold-duotone" },
  { label: "Siswa", href: "/guru/siswa", icon: "solar:users-group-rounded-bold-duotone" },
  { label: "Absensi", href: "/guru/absensi", icon: "solar:checklist-minimalistic-bold-duotone" },
  { label: "Nilai", href: "/guru/nilai", icon: "solar:chart-bold-duotone" },
  { label: "Bank Soal", href: "/guru/bank-soal", icon: "solar:notebook-bold-duotone" },
  { label: "Auto Grade", href: "/guru/auto-grade", icon: "solar:magic-stick-3-bold-duotone" },
  { label: "Pesan", href: "/guru/pesan", icon: "solar:chat-round-dots-bold-duotone" },
  { label: "Pengaturan", href: "/guru/pengaturan", icon: "solar:settings-bold-duotone" },
];

export const siswaNav: NavItem[] = [
  { label: "Dashboard", href: "/siswa", icon: "solar:home-2-bold-duotone" },
  { label: "Absensi", href: "/siswa/absensi", icon: "solar:checklist-minimalistic-bold-duotone" },
  { label: "Jadwal", href: "/siswa/jadwal", icon: "solar:calendar-bold-duotone" },
  { label: "Materi", href: "/siswa/materi", icon: "solar:notebook-bookmark-bold-duotone" },
  { label: "Nilai", href: "/siswa/nilai", icon: "solar:chart-bold-duotone" },
  { label: "Tugas", href: "/siswa/tugas", icon: "solar:clipboard-list-bold-duotone" },
  { label: "Ujian", href: "/siswa/ujian", icon: "solar:document-text-bold-duotone" },
  { label: "Rapor", href: "/siswa/rapor", icon: "solar:diploma-bold-duotone" },
  { label: "Scan QR", href: "/siswa/absensi-qr", icon: "solar:qr-code-bold-duotone" },
  { label: "Pengaturan", href: "/siswa/pengaturan", icon: "solar:settings-bold-duotone" },
];

export const parentNav: NavItem[] = [
  { label: "Dashboard", href: "/orang-tua", icon: "solar:home-2-bold-duotone" },
  { label: "Akademik", href: "/orang-tua/akademik", icon: "solar:square-academic-cap-bold-duotone" },
  { label: "Absensi", href: "/orang-tua/absensi", icon: "solar:checklist-minimalistic-bold-duotone" },
  { label: "Tugas", href: "/orang-tua/tugas", icon: "solar:clipboard-list-bold-duotone" },
  { label: "Ujian", href: "/orang-tua/ujian", icon: "solar:document-text-bold-duotone" },
  { label: "Keuangan", href: "/orang-tua/keuangan", icon: "solar:wallet-money-bold-duotone" },
  { label: "Pengumuman", href: "/orang-tua/pengumuman", icon: "solar:bell-bing-bold-duotone" },
  { label: "Pesan", href: "/orang-tua/pesan", icon: "solar:chat-round-dots-bold-duotone" },
  { label: "Rapor", href: "/orang-tua/rapor", icon: "solar:diploma-bold-duotone" },
  { label: "Live", href: "/orang-tua/live", icon: "solar:radar-2-bold-duotone" },
  { label: "Pengaturan", href: "/orang-tua/pengaturan", icon: "solar:settings-bold-duotone" },
];

export const navByRole: Record<Role, NavItem[]> = {
  admin: adminNav,
  guru: guruNav,
  siswa: siswaNav,
  "orang-tua": parentNav,
};
