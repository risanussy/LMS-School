"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";

type School = {
  id: string;
  name: string;
  level: string;
  city: string;
  students: number;
  teachers: number;
  attendance: number;
  avgScore: number;
  status: "Aktif" | "Onboarding";
};

const schools: School[] = [
  { id: "1", name: "SMA Nusantara", level: "SMA", city: "Bandung", students: 1248, teachers: 86, attendance: 93, avgScore: 82, status: "Aktif" },
  { id: "2", name: "SMP Nusantara 1", level: "SMP", city: "Bandung", students: 842, teachers: 54, attendance: 95, avgScore: 80, status: "Aktif" },
  { id: "3", name: "SMK Nusantara Teknologi", level: "SMK", city: "Cimahi", students: 676, teachers: 48, attendance: 91, avgScore: 78, status: "Aktif" },
  { id: "4", name: "SD Nusantara Ceria", level: "SD", city: "Lembang", students: 410, teachers: 28, attendance: 97, avgScore: 85, status: "Onboarding" },
];

export default function AdminMultiSekolahPage() {
  const [activeId, setActiveId] = useState(schools[0].id);
  const active = schools.find((s) => s.id === activeId) ?? schools[0];
  const totalStudents = schools.reduce((sum, s) => sum + s.students, 0);
  const totalTeachers = schools.reduce((sum, s) => sum + s.teachers, 0);

  return (
    <>
      <PageHeader
        title="Multi Sekolah"
        description="Kelola seluruh sekolah di bawah Yayasan Pendidikan Nusantara dan pindah konteks dengan satu klik."
        actions={[{ label: "Tambah Sekolah", icon: "solar:add-circle-bold-duotone", variant: "accent" }]}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Sekolah" value={String(schools.length)} hint="Di bawah yayasan" icon="solar:buildings-2-bold-duotone" tone="sea" />
        <StatCard label="Total Siswa" value={totalStudents.toLocaleString("id-ID")} hint="Semua jenjang" icon="solar:users-group-rounded-bold-duotone" tone="success" />
        <StatCard label="Total Guru" value={String(totalTeachers)} hint="Aktif mengajar" icon="solar:user-speak-bold-duotone" tone="accent" />
        <StatCard label="Sekolah Aktif" value={active.name} hint="Konteks dashboard saat ini" icon="solar:map-point-school-bold-duotone" tone="ink" />
      </section>

      <div className="soft-panel mt-6 flex flex-wrap items-center gap-3 rounded-2xl bg-gradient-to-r from-sea/10 to-accent/10 p-4">
        <Icon icon="solar:check-circle-bold-duotone" width={22} height={22} className="text-success" />
        <p className="text-sm text-ink">
          Anda sedang melihat data <span className="font-semibold">{active.name}</span>, {active.city}.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {schools.map((school) => {
          const isActive = school.id === activeId;
          return (
            <section
              key={school.id}
              className={`soft-panel rounded-2xl p-6 transition ${isActive ? "ring-2 ring-sea" : ""}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-sea/15 to-sea/5 p-3 text-sea">
                    <Icon icon="solar:buildings-2-bold-duotone" width={24} height={24} />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-ink">{school.name}</h2>
                    <p className="text-xs text-muted">
                      {school.level} · {school.city}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {isActive ? <Badge tone="success">Sedang Aktif</Badge> : null}
                  <Badge tone={school.status === "Aktif" ? "sea" : "accent"}>{school.status}</Badge>
                </div>
              </div>

              <dl className="mt-5 grid grid-cols-4 gap-3 text-center">
                {[
                  { k: "Siswa", v: school.students.toLocaleString("id-ID") },
                  { k: "Guru", v: String(school.teachers) },
                  { k: "Hadir", v: `${school.attendance}%` },
                  { k: "Nilai", v: String(school.avgScore) },
                ].map((item) => (
                  <div key={item.k} className="rounded-xl bg-foam/70 px-2 py-3">
                    <dd className="font-display text-lg font-semibold text-ink">{item.v}</dd>
                    <dt className="text-xs text-muted">{item.k}</dt>
                  </div>
                ))}
              </dl>

              <div className="mt-5">
                <div className="mb-1 flex justify-between text-xs text-muted">
                  <span>Kehadiran</span>
                  <span>{school.attendance}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-foam">
                  <div className="h-full rounded-full bg-sea" style={{ width: `${school.attendance}%` }} />
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <Button
                  variant={isActive ? "secondary" : "primary"}
                  className="flex-1"
                  onClick={() => setActiveId(school.id)}
                >
                  <Icon icon="solar:transfer-horizontal-bold-duotone" width={18} height={18} />
                  {isActive ? "Sekolah Aktif" : "Aktifkan Sekolah"}
                </Button>
                <Button variant="ghost">
                  <Icon icon="solar:settings-bold-duotone" width={18} height={18} />
                  Kelola
                </Button>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
