import type {
  Announcement,
  Assignment,
  ClassRoom,
  Exam,
  Invoice,
  Material,
  MessageThread,
  Parent,
  StatItem,
  Student,
  Teacher,
} from "./types";

export const adminStats: StatItem[] = [
  { label: "Siswa", value: "1.248", hint: "+32 bulan ini", icon: "solar:users-group-rounded-bold-duotone", tone: "sea" },
  { label: "Guru", value: "86", hint: "12 mapel aktif", icon: "solar:user-speak-bold-duotone", tone: "accent" },
  { label: "Orang Tua", value: "980", hint: "Akun terhubung", icon: "solar:users-group-two-rounded-bold-duotone", tone: "ink" },
  { label: "Kelas", value: "42", hint: "X–XII", icon: "solar:square-academic-cap-bold-duotone", tone: "success" },
];

export const teacherStats: StatItem[] = [
  { label: "Kelas Diampu", value: "5", icon: "solar:square-academic-cap-bold-duotone", tone: "sea" },
  { label: "Siswa", value: "168", icon: "solar:users-group-rounded-bold-duotone", tone: "accent" },
  { label: "Materi", value: "24", icon: "solar:notebook-bookmark-bold-duotone", tone: "ink" },
  { label: "Tugas", value: "12", icon: "solar:clipboard-list-bold-duotone", tone: "success" },
];

export const studentStats: StatItem[] = [
  { label: "Rata-rata Nilai", value: "86.4", icon: "solar:chart-bold-duotone", tone: "sea" },
  { label: "Tugas Selesai", value: "18/22", icon: "solar:clipboard-check-bold-duotone", tone: "success" },
  { label: "Kehadiran", value: "96%", icon: "solar:checklist-minimalistic-bold-duotone", tone: "accent" },
  { label: "Penghargaan", value: "3", icon: "solar:medal-ribbons-star-bold-duotone", tone: "ink" },
];

export const parentStats: StatItem[] = [
  { label: "Rata-rata Nilai", value: "88.1", icon: "solar:chart-bold-duotone", tone: "sea" },
  { label: "Kehadiran", value: "97%", icon: "solar:checklist-minimalistic-bold-duotone", tone: "success" },
  { label: "Peringkat", value: "4 / 36", icon: "solar:cup-star-bold-duotone", tone: "accent" },
  { label: "Tagihan", value: "Rp 450rb", hint: "1 belum bayar", icon: "solar:wallet-money-bold-duotone", tone: "ink" },
];

export const students: Student[] = [
  { id: "1", name: "Alya Putri", nis: "20241001", className: "XI IPA 1", parent: "Budi Santoso", status: "Aktif" },
  { id: "2", name: "Rafi Pratama", nis: "20241002", className: "XI IPA 1", parent: "Siti Aminah", status: "Aktif" },
  { id: "3", name: "Nadia Rahma", nis: "20241003", className: "XI IPS 2", parent: "Agus Wijaya", status: "Aktif" },
  { id: "4", name: "Dimas Arya", nis: "20241004", className: "X IPA 3", parent: "Rina Marlina", status: "Nonaktif" },
  { id: "5", name: "Salsa Nuraini", nis: "20241005", className: "XII IPA 1", parent: "Hendra Gunawan", status: "Aktif" },
];

export const teachers: Teacher[] = [
  { id: "1", name: "Ibu Ratna Dewi", nip: "19880101", subject: "Matematika", classes: 4, status: "Aktif" },
  { id: "2", name: "Pak Andi Saputra", nip: "19890512", subject: "Fisika", classes: 3, status: "Aktif" },
  { id: "3", name: "Ibu Maya Lestari", nip: "19920308", subject: "Bahasa Inggris", classes: 5, status: "Cuti" },
  { id: "4", name: "Pak Farhan Yusuf", nip: "19871220", subject: "Sejarah", classes: 3, status: "Aktif" },
];

export const parents: Parent[] = [
  { id: "1", name: "Budi Santoso", phone: "0812-1111-2222", child: "Alya Putri", className: "XI IPA 1" },
  { id: "2", name: "Siti Aminah", phone: "0813-3333-4444", child: "Rafi Pratama", className: "XI IPA 1" },
  { id: "3", name: "Agus Wijaya", phone: "0815-5555-6666", child: "Nadia Rahma", className: "XI IPS 2" },
];

export const classes: ClassRoom[] = [
  { id: "1", name: "XI IPA 1", homeroom: "Ibu Ratna Dewi", students: 36, schedule: "Senin–Jumat 07.00–14.30" },
  { id: "2", name: "XI IPS 2", homeroom: "Pak Farhan Yusuf", students: 34, schedule: "Senin–Jumat 07.00–14.30" },
  { id: "3", name: "X IPA 3", homeroom: "Pak Andi Saputra", students: 32, schedule: "Senin–Jumat 07.00–14.00" },
];

export const exams: Exam[] = [
  {
    id: "1",
    title: "UTS Matematika",
    subject: "Matematika",
    date: "12 Mar 2026",
    status: "Selesai",
    avg: 78.5,
    highest: 98,
    lowest: 52,
    passed: 30,
    total: 36,
  },
  {
    id: "2",
    title: "UH Fisika Gelombang",
    subject: "Fisika",
    date: "18 Mar 2026",
    status: "Berlangsung",
    avg: 0,
    highest: 0,
    lowest: 0,
    passed: 0,
    total: 36,
  },
  {
    id: "3",
    title: "UAS Bahasa Inggris",
    subject: "Bahasa Inggris",
    date: "5 Apr 2026",
    status: "Draft",
    avg: 0,
    highest: 0,
    lowest: 0,
    passed: 0,
    total: 34,
  },
];

export const materials: Material[] = [
  { id: "1", title: "Turunan Fungsi Aljabar", subject: "Matematika", teacher: "Ibu Ratna Dewi", updatedAt: "2 jam lalu" },
  { id: "2", title: "Gelombang Mekanik", subject: "Fisika", teacher: "Pak Andi Saputra", updatedAt: "Kemarin" },
  { id: "3", title: "Narrative Text", subject: "Bahasa Inggris", teacher: "Ibu Maya Lestari", updatedAt: "3 hari lalu" },
];

export const assignments: Assignment[] = [
  { id: "1", title: "Latihan Turunan", subject: "Matematika", due: "21 Mar 2026", submitted: 28, total: 36, status: "Belum" },
  { id: "2", title: "Laporan Praktikum", subject: "Fisika", due: "19 Mar 2026", submitted: 36, total: 36, status: "Selesai" },
  { id: "3", title: "Essay Narrative", subject: "Bahasa Inggris", due: "17 Mar 2026", submitted: 20, total: 34, status: "Terlambat" },
];

export const announcements: Announcement[] = [
  { id: "1", title: "Jadwal UTS Semester Genap", date: "10 Mar 2026", audience: "Semua" },
  { id: "2", title: "Pembayaran SPP Maret", date: "8 Mar 2026", audience: "Orang Tua" },
  { id: "3", title: "Workshop Kurikulum Merdeka", date: "5 Mar 2026", audience: "Guru" },
];

export const invoices: Invoice[] = [
  { id: "1", title: "SPP Maret 2026", amount: "Rp 450.000", due: "25 Mar 2026", status: "Belum Bayar" },
  { id: "2", title: "SPP Februari 2026", amount: "Rp 450.000", due: "25 Feb 2026", status: "Lunas" },
  { id: "3", title: "Uang Kegiatan", amount: "Rp 150.000", due: "10 Mar 2026", status: "Tunggakan" },
];

export const messages: MessageThread[] = [
  {
    id: "1",
    teacher: "Ibu Ratna Dewi",
    subject: "Perkembangan Matematika",
    preview: "Alya sudah lebih konsisten mengerjakan latihan...",
    time: "09:20",
  },
  {
    id: "2",
    teacher: "Pak Andi Saputra",
    subject: "Praktikum Fisika",
    preview: "Mohon pastikan laporan dikumpulkan sebelum Jumat.",
    time: "Kemarin",
  },
];

export const attendanceSummary = [
  { label: "Hadir", value: 92, color: "bg-success" },
  { label: "Izin", value: 4, color: "bg-accent" },
  { label: "Sakit", value: 3, color: "bg-sea-bright" },
  { label: "Alpa", value: 1, color: "bg-danger" },
];

export const scheduleToday = [
  { time: "07.00–08.30", subject: "Matematika", room: "R. 201", teacher: "Ibu Ratna" },
  { time: "08.30–10.00", subject: "Fisika", room: "Lab Fisika", teacher: "Pak Andi" },
  { time: "10.15–11.45", subject: "Bahasa Inggris", room: "R. 105", teacher: "Ibu Maya" },
  { time: "12.30–14.00", subject: "Sejarah", room: "R. 204", teacher: "Pak Farhan" },
];

export const recentActivity = [
  { id: "1", text: "Alya Putri mengumpulkan tugas Matematika", time: "10 menit lalu" },
  { id: "2", text: "UTS Fisika dimulai untuk XI IPA 1", time: "1 jam lalu" },
  { id: "3", text: "Pembayaran SPP dari Budi Santoso", time: "2 jam lalu" },
  { id: "4", text: "Pengumuman baru: Jadwal UTS", time: "Kemarin" },
];

export const leaveRequests = [
  { id: "1", name: "Ibu Maya Lestari", type: "Cuti tahunan", date: "20–22 Mar", status: "Menunggu" },
  { id: "2", name: "Pak Farhan Yusuf", type: "Izin keluarga", date: "18 Mar", status: "Disetujui" },
];

export const grades = [
  { subject: "Matematika", score: 88, grade: "A" },
  { subject: "Fisika", score: 82, grade: "B+" },
  { subject: "Bahasa Inggris", score: 91, grade: "A" },
  { subject: "Sejarah", score: 85, grade: "A-" },
];
