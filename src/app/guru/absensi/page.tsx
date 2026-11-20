"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { students } from "@/lib/mock-data";

type Status = "Hadir" | "Izin" | "Sakit" | "Alpa";

const options: { value: Status; active: string }[] = [
  { value: "Hadir", active: "bg-success text-white" },
  { value: "Izin", active: "bg-accent text-ink" },
  { value: "Sakit", active: "bg-sea text-white" },
  { value: "Alpa", active: "bg-danger text-white" },
];

const kelasList = ["XI IPA 1", "XI IPS 2", "X IPA 3", "XII IPA 1"];

export default function GuruAbsensiPage() {
  const [kelas, setKelas] = useState(kelasList[0]);
  const [marks, setMarks] = useState<Record<string, Status>>({});

  const rows = students.filter((s) => s.className === kelas);
  const statusOf = (id: string): Status => marks[id] ?? "Hadir";

  const summary = options.map((opt) => ({
    ...opt,
    count: rows.filter((r) => statusOf(r.id) === opt.value).length,
  }));

  return (
    <div>
      <PageHeader
        title="Absensi"
        description="Tandai kehadiran siswa untuk kelas yang dipilih. Tampilan ini hanya contoh visual."
        actions={[{ label: "Simpan Absensi", icon: "solar:check-circle-bold-duotone" }]}
      />

      <div className="soft-panel mb-6 flex flex-col gap-4 rounded-2xl p-5 md:flex-row md:items-center md:justify-between">
        <label className="flex items-center gap-3">
          <span className="text-sm font-medium text-ink">Kelas</span>
          <select
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
            className="rounded-xl border border-line bg-surface px-3 py-2.5 text-sm outline-none ring-sea focus:ring-2"
          >
            {kelasList.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </label>
        <div className="flex flex-wrap gap-2">
          {summary.map((s) => (
            <Badge key={s.value} tone={s.value === "Hadir" ? "success" : s.value === "Izin" ? "accent" : s.value === "Sakit" ? "sea" : "danger"}>
              {s.value}: {s.count}
            </Badge>
          ))}
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="soft-panel rounded-2xl p-6 text-sm text-muted">Belum ada data siswa untuk kelas {kelas}.</div>
      ) : (
        <DataTable
          rows={rows}
          rowKey={(row) => row.id}
          columns={[
            { key: "nis", header: "NIS", render: (row) => row.nis },
            { key: "name", header: "Nama", render: (row) => <span className="font-medium">{row.name}</span> },
            {
              key: "status",
              header: "Kehadiran",
              render: (row) => (
                <div className="flex flex-wrap gap-2">
                  {options.map((opt) => {
                    const selected = statusOf(row.id) === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setMarks((prev) => ({ ...prev, [row.id]: opt.value }))}
                        className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                          selected ? opt.active : "bg-foam text-muted hover:bg-sand hover:text-ink"
                        }`}
                      >
                        {opt.value}
                      </button>
                    );
                  })}
                </div>
              ),
            },
          ]}
        />
      )}

      <div className="mt-4 flex justify-end">
        <Button variant="accent">Simpan Absensi</Button>
      </div>
    </div>
  );
}
