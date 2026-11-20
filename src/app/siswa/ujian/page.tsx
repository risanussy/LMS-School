import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { exams } from "@/lib/mock-data";
import type { Exam } from "@/lib/types";

const statusTone = {
  Draft: "muted",
  Berlangsung: "accent",
  Selesai: "success",
} as const;

const statusLabel = {
  Draft: "Belum Dibuka",
  Berlangsung: "Sedang Berlangsung",
  Selesai: "Selesai",
} as const;

export default function SiswaUjianPage() {
  return (
    <div>
      <PageHeader
        title="Ujian"
        description="Akses ujian yang tersedia. Ujian hanya bisa dimulai saat statusnya sedang berlangsung."
      />

      <DataTable<Exam>
        rows={exams}
        rowKey={(row) => row.id}
        columns={[
          { key: "title", header: "Ujian", render: (row) => <span className="font-medium">{row.title}</span> },
          { key: "subject", header: "Mata Pelajaran", render: (row) => row.subject },
          { key: "date", header: "Tanggal", render: (row) => row.date },
          { key: "status", header: "Status", render: (row) => <Badge tone={statusTone[row.status]}>{statusLabel[row.status]}</Badge> },
          {
            key: "action",
            header: "Akses",
            className: "text-right",
            render: (row) => {
              if (row.status === "Berlangsung") {
                return (
                  <Button variant="accent" href={`/siswa/ujian?mulai=${row.id}`} className="!px-3 !py-1.5">
                    <Icon icon="solar:play-bold-duotone" width={16} height={16} />
                    Mulai Ujian
                  </Button>
                );
              }
              if (row.status === "Selesai") {
                return (
                  <Button variant="secondary" href={`/siswa/ujian?hasil=${row.id}`} className="!px-3 !py-1.5">
                    <Icon icon="solar:eye-bold-duotone" width={16} height={16} />
                    Lihat Hasil
                  </Button>
                );
              }
              return <span className="text-xs text-muted">Belum tersedia</span>;
            },
          },
        ]}
      />
    </div>
  );
}
