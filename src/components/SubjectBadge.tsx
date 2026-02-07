import { Note, SUBJECT_COLORS } from "@/types/note";
import { cn } from "@/lib/utils";

const SubjectBadge = ({ subject, size = "sm" }: { subject: Note["subject"]; size?: "sm" | "md" }) => {
  const colors = SUBJECT_COLORS[subject];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium",
        colors.bg,
        colors.text,
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm"
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", colors.dot)} />
      {subject}
    </span>
  );
};

export default SubjectBadge;
