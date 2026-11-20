import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { scheduleToday } from "@/lib/mock-data";

type Slot = (typeof scheduleToday)[number];

// Demo: jadwal mingguan disusun ulang dari scheduleToday dengan urutan berbeda per hari.
const weekdays = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"] as const;

function rotate<T>(items: T[], offset: number): T[] {
  return items.map((_, i) => items[(i + offset) % items.length]);
}

const weekly = weekdays.map((day, index) => ({
  day,
  slots: rotate(scheduleToday, index),
}));

type Row = Slot & { id: string };

const todayRows: Row[] = scheduleToday.map((slot) => ({ ...slot, id: slot.time }));

export default function SiswaJadwalPage() {
  return (
    <div>
      <PageHeader
        title="Jadwal Pelajaran"
        description="Jadwal kelas XI IPA 1 per hari beserta jam, ruang, dan guru pengampu."
      />

      <h2 className="mb-3 font-display text-xl font-semibold text-ink">Hari Ini</h2>
      <DataTable
        rows={todayRows}
        rowKey={(row) => row.id}
        columns={[
          { key: "time", header: "Jam", render: (row) => <span className="font-medium text-sea">{row.time}</span> },
          { key: "subject", header: "Mata Pelajaran", render: (row) => <span className="font-medium">{row.subject}</span> },
          { key: "teacher", header: "Guru", render: (row) => row.teacher },
          { key: "room", header: "Ruang", render: (row) => <Badge tone="muted">{row.room}</Badge> },
        ]}
      />

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold text-ink">Jadwal Mingguan (Demo)</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {weekly.map(({ day, slots }) => (
          <section key={day} className="soft-panel rounded-2xl p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-ink">{day}</h3>
              <Badge tone="sea">{slots.length} mapel</Badge>
            </div>
            <ul className="space-y-2">
              {slots.map((slot, i) => (
                <li key={`${day}-${i}`} className="rounded-xl bg-foam/60 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-ink">{slot.subject}</span>
                    <span className="text-xs font-medium text-sea">{scheduleToday[i].time}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted">
                    {slot.teacher} · {slot.room}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
