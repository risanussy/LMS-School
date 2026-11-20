# Aksara — LMS Sekolah

Frontend Learning Management System untuk sekolah, dibangun dengan **Next.js**, **Tailwind CSS**, dan **Iconify**.

Backend **Golang + Gin** akan dihubungkan pada tahap berikutnya. Saat ini seluruh data memakai mock di `src/lib/mock-data.ts`.

## Peran

| Peran | Route | Fokus |
| --- | --- | --- |
| Admin Sekolah | `/admin` | Siswa, guru, kelas, absensi, ujian, keuangan, cuti, pengumuman |
| Guru | `/guru` | Materi, tugas, ujian, siswa, absensi, nilai |
| Siswa | `/siswa` | Jadwal, materi, tugas, ujian, nilai, absensi |
| Orang Tua | `/orang-tua` | Akademik anak, absensi, tugas, ujian, keuangan, pesan |

## Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000), lalu masuk lewat landing page atau `/login`.

## Struktur

```
src/
  app/           # Landing, login, dashboard per peran
  components/    # UI & layout bersama
  lib/           # Tipe, navigasi, mock data
```
