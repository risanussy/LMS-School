import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { materials } from "@/lib/mock-data";

export default function SiswaMateriPage() {
  return (
    <div>
      <PageHeader
        title="Materi Pelajaran"
        description="Akses materi yang dibagikan guru untuk setiap mata pelajaran."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {materials.map((item) => (
          <article key={item.id} className="soft-panel flex flex-col rounded-2xl p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="rounded-2xl bg-foam p-3 text-sea">
                <Icon icon="solar:notebook-bookmark-bold-duotone" width={24} height={24} />
              </div>
              <Badge tone="sea">{item.subject}</Badge>
            </div>
            <h2 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h2>
            <p className="mt-1 text-sm text-muted">Guru: {item.teacher}</p>
            <p className="mt-1 text-xs text-muted">Diperbarui {item.updatedAt}</p>
            <div className="mt-5">
              <Button variant="secondary" href="/siswa/materi">
                <Icon icon="solar:eye-bold-duotone" width={18} height={18} />
                Buka Materi
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
