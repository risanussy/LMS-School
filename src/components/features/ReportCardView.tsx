import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";

type SubjectRow = {
  subject: string;
  teacher: string;
  knowledge: number;
  skill: number;
  final: number;
  grade: string;
};

const subjects: SubjectRow[] = [
  { subject: "Matematika", teacher: "Ibu Ratna Dewi", knowledge: 88, skill: 90, final: 89, grade: "A" },
  { subject: "Fisika", teacher: "Pak Andi Saputra", knowledge: 82, skill: 84, final: 83, grade: "B+" },
  { subject: "Bahasa Inggris", teacher: "Ibu Maya Lestari", knowledge: 91, skill: 92, final: 92, grade: "A" },
  { subject: "Sejarah", teacher: "Pak Farhan Yusuf", knowledge: 85, skill: 86, final: 86, grade: "A-" },
  { subject: "Kimia", teacher: "Ibu Wulan Sari", knowledge: 80, skill: 82, final: 81, grade: "B+" },
  { subject: "Biologi", teacher: "Pak Hadi Prasetyo", knowledge: 87, skill: 88, final: 88, grade: "A-" },
];

const attendance = [
  { label: "Hadir", value: 78, tone: "success" as const },
  { label: "Sakit", value: 2, tone: "accent" as const },
  { label: "Izin", value: 1, tone: "sea" as const },
  { label: "Alpa", value: 0, tone: "muted" as const },
];

type Props = {
  title: string;
  description: string;
  studentName: string;
};

export function ReportCardView({ title, description, studentName }: Props) {
  const avg = (subjects.reduce((s, r) => s + r.final, 0) / subjects.length).toFixed(1).replace(".", ",");

  return (
    <>
      <PageHeader
        title={title}
        description={description}
        actions={[
          { label: "Download PDF", icon: "solar:download-minimalistic-bold-duotone", variant: "accent" },
          { label: "Cetak", icon: "solar:printer-bold-duotone", variant: "secondary" },
        ]}
      />

      <section className="soft-panel rounded-2xl bg-gradient-to-r from-sea/10 to-accent/10 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-surface p-3 text-sea">
              <Icon icon="solar:diploma-bold-duotone" width={32} height={32} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Rapor Digital · Semester Genap 2025/2026</p>
              <h2 className="font-display text-2xl font-semibold text-ink">{studentName}</h2>
              <p className="text-sm text-muted">NIS 20241001 · XI IPA 1 · Wali kelas: Ibu Ratna Dewi</p>
            </div>
          </div>
          <Badge tone="success">Sudah Terbit</Badge>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Rata-rata Nilai" value={avg} hint="Semua mata pelajaran" icon="solar:chart-bold-duotone" tone="sea" />
        <StatCard label="Peringkat Kelas" value="3 / 36" hint="Naik 2 peringkat" icon="solar:cup-star-bold-duotone" tone="accent" />
        <StatCard label="Kehadiran" value="96%" hint="78 dari 81 hari" icon="solar:checklist-minimalistic-bold-duotone" tone="success" />
        <StatCard label="Mata Pelajaran" value={String(subjects.length)} hint="Semua tuntas KKM" icon="solar:book-2-bold-duotone" tone="ink" />
      </section>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold text-ink">Nilai Mata Pelajaran</h2>
      <DataTable<SubjectRow>
        rows={subjects}
        rowKey={(r) => r.subject}
        columns={[
          {
            key: "subject",
            header: "Mata Pelajaran",
            render: (r) => (
              <div>
                <p className="font-medium">{r.subject}</p>
                <p className="text-xs text-muted">{r.teacher}</p>
              </div>
            ),
          },
          { key: "knowledge", header: "Pengetahuan", render: (r) => r.knowledge },
          { key: "skill", header: "Keterampilan", render: (r) => r.skill },
          {
            key: "final",
            header: "Nilai Akhir",
            render: (r) => <span className="font-display text-lg font-semibold text-sea">{r.final}</span>,
          },
          { key: "grade", header: "Predikat", render: (r) => <Badge tone={r.final >= 85 ? "success" : "sea"}>{r.grade}</Badge> },
        ]}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="soft-panel rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold text-ink">Rekap Kehadiran</h2>
          <ul className="mt-4 space-y-3">
            {attendance.map((a) => (
              <li key={a.label} className="flex items-center justify-between text-sm">
                <span className="text-muted">{a.label}</span>
                <Badge tone={a.tone}>{a.value} hari</Badge>
              </li>
            ))}
          </ul>
        </section>

        <section className="soft-panel rounded-2xl p-6">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-ink">
            <Icon icon="solar:chat-square-like-bold-duotone" width={22} height={22} className="text-sea" />
            Catatan Wali Kelas
          </h2>
          <p className="mt-4 rounded-xl bg-foam/70 p-4 text-sm leading-relaxed text-ink-soft">
            Alya menunjukkan perkembangan yang sangat baik semester ini. Ia aktif berdiskusi, disiplin dalam mengumpulkan
            tugas, dan konsisten di atas KKM. Pertahankan semangat belajar dan tingkatkan kepercayaan diri saat presentasi.
          </p>
          <p className="mt-3 text-xs text-muted">— Ibu Ratna Dewi, Wali Kelas XI IPA 1</p>
        </section>
      </div>

      <div className="mt-6">
        <Button variant="primary">
          <Icon icon="solar:download-minimalistic-bold-duotone" width={18} height={18} />
          Download PDF Rapor
        </Button>
      </div>
    </>
  );
}
