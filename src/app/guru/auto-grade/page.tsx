import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";

type Row = {
  id: string;
  student: string;
  className: string;
  exam: string;
  correct: number;
  total: number;
  score: number;
  status: "Dinilai Otomatis" | "Perlu Review Esai";
  submitted: string;
};

const rows: Row[] = [
  { id: "1", student: "Alya Putri", className: "XI IPA 1", exam: "UTS Matematika", correct: 36, total: 40, score: 90, status: "Dinilai Otomatis", submitted: "09:42" },
  { id: "2", student: "Rafi Pratama", className: "XI IPA 1", exam: "UTS Matematika", correct: 33, total: 40, score: 82, status: "Dinilai Otomatis", submitted: "09:48" },
  { id: "3", student: "Salsa Nuraini", className: "XI IPA 1", exam: "UTS Matematika", correct: 38, total: 40, score: 95, status: "Dinilai Otomatis", submitted: "09:51" },
  { id: "4", student: "Bagas Prakoso", className: "XI IPA 1", exam: "UTS Matematika", correct: 27, total: 40, score: 68, status: "Dinilai Otomatis", submitted: "09:55" },
  { id: "5", student: "Nadia Rahma", className: "XI IPA 1", exam: "UTS Matematika", correct: 35, total: 40, score: 88, status: "Perlu Review Esai", submitted: "09:58" },
  { id: "6", student: "Dimas Arya", className: "XI IPA 1", exam: "UTS Matematika", correct: 30, total: 40, score: 75, status: "Dinilai Otomatis", submitted: "10:01" },
];

function scoreTone(score: number) {
  if (score >= 85) return "text-success";
  if (score >= 75) return "text-sea";
  return "text-accent-deep";
}

export default function GuruAutoGradePage() {
  const auto = rows.filter((r) => r.status === "Dinilai Otomatis").length;
  const avg = Math.round(rows.reduce((s, r) => s + r.score, 0) / rows.length);

  return (
    <>
      <PageHeader
        title="Auto Grade"
        description="Soal pilihan ganda dinilai otomatis begitu siswa mengumpulkan. Soal esai tetap menunggu review Anda."
        actions={[
          { label: "Terbitkan Nilai", icon: "solar:upload-bold-duotone", variant: "accent" },
          { label: "Ekspor", icon: "solar:export-bold-duotone", variant: "secondary" },
        ]}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Pengumpulan" value={`${rows.length}/36`} hint="UTS Matematika XI IPA 1" icon="solar:inbox-in-bold-duotone" tone="sea" />
        <StatCard label="Dinilai Otomatis" value={String(auto)} hint="Tanpa koreksi manual" icon="solar:magic-stick-3-bold-duotone" tone="success" />
        <StatCard label="Perlu Review" value={String(rows.length - auto)} hint="Memiliki soal esai" icon="solar:pen-new-square-bold-duotone" tone="accent" />
        <StatCard label="Rata-rata Skor" value={String(avg)} hint="Dari yang sudah masuk" icon="solar:chart-bold-duotone" tone="ink" />
      </section>

      <div className="soft-panel mt-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sea/10 to-accent/10 p-4 text-sm text-ink">
        <Icon icon="solar:info-circle-bold-duotone" width={20} height={20} className="text-sea" />
        Kunci jawaban diambil dari Bank Soal. Penilaian selesai dalam hitungan detik setelah pengumpulan.
      </div>

      <div className="mt-6">
        <DataTable<Row>
          rows={rows}
          rowKey={(r) => r.id}
          columns={[
            {
              key: "student",
              header: "Siswa",
              render: (r) => (
                <div>
                  <p className="font-medium">{r.student}</p>
                  <p className="text-xs text-muted">{r.className}</p>
                </div>
              ),
            },
            { key: "exam", header: "Ujian", render: (r) => <span className="text-muted">{r.exam}</span> },
            { key: "submitted", header: "Dikumpulkan", render: (r) => r.submitted },
            {
              key: "correct",
              header: "Benar",
              render: (r) => (
                <span>
                  {r.correct}/{r.total}
                </span>
              ),
            },
            {
              key: "score",
              header: "Skor Otomatis",
              render: (r) => <span className={`font-display text-lg font-semibold ${scoreTone(r.score)}`}>{r.score}</span>,
            },
            {
              key: "status",
              header: "Status",
              render: (r) => <Badge tone={r.status === "Dinilai Otomatis" ? "success" : "accent"}>{r.status}</Badge>,
            },
            {
              key: "actions",
              header: "Aksi",
              render: (r) => (
                <Button variant="secondary" className="px-3 py-1.5 text-xs">
                  <Icon icon="solar:eye-bold-duotone" width={16} height={16} />
                  {r.status === "Dinilai Otomatis" ? "Detail" : "Review"}
                </Button>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
