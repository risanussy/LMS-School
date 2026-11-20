import { QuestionBankView, type QuestionBankRow } from "@/components/features/QuestionBankView";

// Mock: guru login sebagai Ibu Ratna Dewi (Matematika) — hanya mapel miliknya yang tampil.
const rows: QuestionBankRow[] = [
  { id: "1", subject: "Matematika", topic: "Turunan & Integral", level: "Kelas XI", difficulty: "Sedang", total: 120, pg: 90, essay: 30, author: "Ibu Ratna Dewi", updated: "18 Mar 2026" },
  { id: "2", subject: "Matematika", topic: "Barisan & Deret", level: "Kelas X", difficulty: "Mudah", total: 80, pg: 70, essay: 10, author: "Ibu Ratna Dewi", updated: "10 Mar 2026" },
  { id: "3", subject: "Matematika", topic: "Limit Fungsi", level: "Kelas XI", difficulty: "Sulit", total: 45, pg: 30, essay: 15, author: "Ibu Ratna Dewi", updated: "01 Mar 2026" },
  { id: "4", subject: "Matematika", topic: "Statistika & Peluang", level: "Kelas XII", difficulty: "Sedang", total: 64, pg: 50, essay: 14, author: "Ibu Ratna Dewi", updated: "22 Feb 2026" },
];

export default function GuruBankSoalPage() {
  return (
    <QuestionBankView
      title="Bank Soal Saya"
      description="Soal untuk mata pelajaran Matematika yang Anda ampu. Gunakan kembali saat membuat ujian."
      rows={rows}
      showAuthor={false}
    />
  );
}
