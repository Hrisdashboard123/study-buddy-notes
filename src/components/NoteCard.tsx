import { Link } from "react-router-dom";
import { Note } from "@/types/note";
import { Calendar } from "lucide-react";

interface NoteCardProps {
  note: Note;
}

const NoteCard = ({ note }: NoteCardProps) => {
  const formattedDate = note.updatedAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      to={`/notes/${note.id}`}
      className="group block animate-fade-in rounded-xl border bg-card p-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
    >
      <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
        {note.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {note.content}
      </p>
      <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Calendar className="h-3.5 w-3.5" />
        <span>{formattedDate}</span>
      </div>
    </Link>
  );
};

export default NoteCard;
