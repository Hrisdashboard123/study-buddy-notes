export const SUBJECTS = [
  "Mathematics",
  "Computer Science",
  "Physics",
  "Biology",
  "Chemistry",
  "History",
  "Literature",
  "Economics",
  "Psychology",
  "General",
] as const;

export type Subject = (typeof SUBJECTS)[number];

export interface Note {
  id: string;
  title: string;
  content: string;
  subject: Subject;
  createdAt: Date;
  updatedAt: Date;
}

export const SUBJECT_COLORS: Record<Subject, { bg: string; text: string; dot: string }> = {
  Mathematics: { bg: "bg-blue-50 dark:bg-blue-950/40", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  "Computer Science": { bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  Physics: { bg: "bg-violet-50 dark:bg-violet-950/40", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  Biology: { bg: "bg-green-50 dark:bg-green-950/40", text: "text-green-700 dark:text-green-300", dot: "bg-green-500" },
  Chemistry: { bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-700 dark:text-orange-300", dot: "bg-orange-500" },
  History: { bg: "bg-amber-50 dark:bg-amber-950/40", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  Literature: { bg: "bg-rose-50 dark:bg-rose-950/40", text: "text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  Economics: { bg: "bg-cyan-50 dark:bg-cyan-950/40", text: "text-cyan-700 dark:text-cyan-300", dot: "bg-cyan-500" },
  Psychology: { bg: "bg-pink-50 dark:bg-pink-950/40", text: "text-pink-700 dark:text-pink-300", dot: "bg-pink-500" },
  General: { bg: "bg-secondary", text: "text-muted-foreground", dot: "bg-muted-foreground" },
};
