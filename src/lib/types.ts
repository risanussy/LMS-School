export type Role = "admin" | "guru" | "siswa" | "orang-tua";

export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export type StatItem = {
  label: string;
  value: string;
  hint?: string;
  icon: string;
  tone?: "sea" | "accent" | "success" | "ink";
};

export type Student = {
  id: string;
  name: string;
  nis: string;
  className: string;
  parent: string;
  status: "Aktif" | "Nonaktif";
};

export type Teacher = {
  id: string;
  name: string;
  nip: string;
  subject: string;
  classes: number;
  status: "Aktif" | "Cuti";
};

export type Parent = {
  id: string;
  name: string;
  phone: string;
  child: string;
  className: string;
};

export type ClassRoom = {
  id: string;
  name: string;
  homeroom: string;
  students: number;
  schedule: string;
};

export type Exam = {
  id: string;
  title: string;
  subject: string;
  date: string;
  status: "Draft" | "Berlangsung" | "Selesai";
  avg: number;
  highest: number;
  lowest: number;
  passed: number;
  total: number;
};

export type Material = {
  id: string;
  title: string;
  subject: string;
  teacher: string;
  updatedAt: string;
};

export type Assignment = {
  id: string;
  title: string;
  subject: string;
  due: string;
  submitted: number;
  total: number;
  status: "Belum" | "Dikerjakan" | "Terlambat" | "Selesai";
};

export type Announcement = {
  id: string;
  title: string;
  date: string;
  audience: string;
};

export type Invoice = {
  id: string;
  title: string;
  amount: string;
  due: string;
  status: "Lunas" | "Belum Bayar" | "Tunggakan";
};

export type MessageThread = {
  id: string;
  teacher: string;
  subject: string;
  preview: string;
  time: string;
};
