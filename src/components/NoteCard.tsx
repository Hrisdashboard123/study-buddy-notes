import { Link } from "react-router-dom";
import { Note, SUBJECT_COLORS } from "@/types/note";
import { Calendar, Clock } from "lucide-react";
import SubjectBadge from "@/components/SubjectBadge";

interface NoteCardProps {
  note: Note;
}

const NoteCard = ({ note }: NoteCardProps) => {
  const formattedDate = note.updatedAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const wordCount = note.content.split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.round(wordCount / 200));

  return (
    <Link
      to={`/notes/${note.id}`}
      className="group block animate-fade-in rounded-xl border bg-card p-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
          {note.title}
        </h3>
      </div>

      <div className="mt-2">
        <SubjectBadge subject={note.subject} />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {note.content}
      </p>

      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {formattedDate}
        </span>
        <span>·</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {readTime} min read
        </span>
        <span>·</span>
        <span>{wordCount} words</span>
      </div>
    </Link>
  );
};

export default NoteCard;
