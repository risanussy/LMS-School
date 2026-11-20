"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { roleHomes, roleLabels } from "@/lib/navigation";
import type { Role } from "@/lib/types";

const roles: { role: Role; icon: string; desc: string }[] = [
  {
    role: "admin",
    icon: "solar:shield-user-bold-duotone",
    desc: "Kelola data sekolah, ujian, keuangan, dan pengumuman.",
  },
  {
    role: "guru",
    icon: "solar:user-speak-bold-duotone",
    desc: "Materi, tugas, nilai, absensi, dan kelas diampu.",
  },
  {
    role: "siswa",
    icon: "solar:notebook-bookmark-bold-duotone",
    desc: "Jadwal, materi, tugas, ujian, dan progres belajar.",
  },
  {
    role: "orang-tua",
    icon: "solar:heart-bold-duotone",
    desc: "Pantau anak, tagihan, pengumuman, dan pesan guru.",
  },
];

export function RolePicker() {
  const searchParams = useSearchParams();
  const highlighted = searchParams.get("role") as Role | null;

  return (
    <div className="mt-8 grid gap-3">
      {roles.map((item) => {
        const active = highlighted === item.role;
        return (
          <Link
            key={item.role}
            href={roleHomes[item.role]}
            className={`soft-panel flex items-start gap-4 rounded-2xl p-4 transition hover:-translate-y-0.5 ${
              active ? "ring-2 ring-sea" : ""
            }`}
          >
            <span className="rounded-2xl bg-foam p-3 text-sea">
              <Icon icon={item.icon} width={24} height={24} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-ink">{roleLabels[item.role]}</span>
              <span className="mt-1 block text-sm text-muted">{item.desc}</span>
            </span>
            <Icon icon="solar:arrow-right-linear" className="mt-1 text-muted" width={18} height={18} />
          </Link>
        );
      })}
    </div>
  );
}
