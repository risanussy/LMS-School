"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { grades, students } from "@/lib/mock-data";

const initialScores: Record<string, string> = {
  "1": "88",
  "2": "82",
  "3": "91",
  "4": "",
  "5": "85",
};

function gradeLetter(raw: string) {
  const n = Number(raw);
  if (raw === "" || Number.isNaN(n)) return "—";
  if (n >= 90) return "A";
  if (n >= 80) return "B";
  if (n >= 70) return "C";
  if (n >= 60) return "D";
  return "E";
}

export default function GuruNilaiPage() {
  const [scores, setScores] = useState<Record<string, string>>(initialScores);

  return (
    <div>
      <PageHeader
        title="Nilai"
        description="Input dan tinjau nilai siswa per mata pelajaran. Data masih mock untuk frontend."
        actions={[{ label: "Input Nilai", icon: "solar:pen-new-square-bold-duotone", variant: "accent" }]}
      />

      <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {grades.map((g) => (
          <div key={g.subject} className="soft-panel rounded-2xl p-5">
            <p className="text-sm text-muted">{g.subject}</p>
            <div className="mt-2 flex items-end justify-between">
              <p className="font-display text-3xl font-semibold text-ink">{g.score}</p>
              <Badge tone="sea">{g.grade}</Badge>
            </div>
            <p className="mt-1 text-xs text-muted">Rata-rata kelas</p>
          </div>
        ))}
      </section>

      <div className="soft-panel mb-4 flex items-center gap-3 rounded-2xl p-4 text-sm text-muted">
        <Icon icon="solar:info-circle-bold-duotone" width={20} height={20} className="text-sea" />
        Isi nilai antara 0–100. Huruf mutu dihitung otomatis.
      </div>

      <DataTable
        rows={students}
        rowKey={(row) => row.id}
        columns={[
          { key: "nis", header: "NIS", render: (row) => row.nis },
          { key: "name", header: "Nama", render: (row) => <span className="font-medium">{row.name}</span> },
          { key: "className", header: "Kelas", render: (row) => <Badge tone="muted">{row.className}</Badge> },
          {
            key: "score",
            header: "Nilai",
            render: (row) => (
              <input
                type="number"
                min={0}
                max={100}
                inputMode="numeric"
                value={scores[row.id] ?? ""}
                onChange={(e) => setScores((prev) => ({ ...prev, [row.id]: e.target.value }))}
                aria-label={`Nilai ${row.name}`}
                placeholder="0–100"
                className="w-24 rounded-xl border border-line bg-surface px-3 py-2 text-sm outline-none ring-sea focus:ring-2"
              />
            ),
          },
          {
            key: "grade",
            header: "Mutu",
            render: (row) => <Badge tone="sea">{gradeLetter(scores[row.id] ?? "")}</Badge>,
          },
        ]}
      />
    </div>
  );
}
