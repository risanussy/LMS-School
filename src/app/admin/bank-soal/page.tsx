import { QuestionBankView, type QuestionBankRow } from "@/components/features/QuestionBankView";

const rows: QuestionBankRow[] = [
  { id: "1", subject: "Matematika", topic: "Turunan & Integral", level: "Kelas XI", difficulty: "Sedang", total: 120, pg: 90, essay: 30, author: "Ibu Ratna Dewi", updated: "18 Mar 2026" },
  { id: "2", subject: "Matematika", topic: "Barisan & Deret", level: "Kelas X", difficulty: "Mudah", total: 80, pg: 70, essay: 10, author: "Ibu Ratna Dewi", updated: "10 Mar 2026" },
  { id: "3", subject: "Fisika", topic: "Gerak Lurus & Dinamika", level: "Kelas X", difficulty: "Sedang", total: 95, pg: 75, essay: 20, author: "Pak Andi Saputra", updated: "15 Mar 2026" },
  { id: "4", subject: "Fisika", topic: "Listrik Dinamis", level: "Kelas XII", difficulty: "Sulit", total: 60, pg: 40, essay: 20, author: "Pak Andi Saputra", updated: "02 Mar 2026" },
  { id: "5", subject: "Bahasa Inggris", topic: "Reading Comprehension", level: "Kelas XI", difficulty: "Sedang", total: 70, pg: 60, essay: 10, author: "Ibu Maya Lestari", updated: "25 Feb 2026" },
  { id: "6", subject: "Sejarah", topic: "Pergerakan Nasional", level: "Kelas XI", difficulty: "Mudah", total: 85, pg: 65, essay: 20, author: "Pak Farhan Yusuf", updated: "20 Feb 2026" },
];

export default function AdminBankSoalPage() {
  return (
    <QuestionBankView
      title="Bank Soal"
      description="Kelola kumpulan soal seluruh mata pelajaran untuk ujian, kuis, dan ulangan harian."
      rows={rows}
    />
  );
}
