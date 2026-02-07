import { useParams, useNavigate, Link } from "react-router-dom";
import { useNotes } from "@/contexts/NotesContext";
import { ArrowLeft, Pencil, Trash2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ViewNote = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getNoteById, deleteNote } = useNotes();

  const note = id ? getNoteById(id) : undefined;

  if (!note) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center animate-fade-in">
        <h2 className="font-display text-2xl font-bold text-foreground">Note not found</h2>
        <p className="mt-2 text-muted-foreground">
          This note may have been deleted.
        </p>
        <Link
          to="/notes"
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to Notes
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(note.id);
      navigate("/notes");
    }
  };

  const formattedCreated = note.createdAt.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedUpdated = note.updatedAt.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <div className="animate-fade-in">
        <Link
          to="/notes"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Notes
        </Link>

        <div className="mt-6">
          <h1 className="font-display text-3xl font-bold text-foreground leading-tight">
            {note.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              Created {formattedCreated}
            </span>
            {formattedCreated !== formattedUpdated && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                Updated {formattedUpdated}
              </span>
            )}
          </div>

          <div className="mt-8 whitespace-pre-wrap text-base leading-relaxed text-foreground">
            {note.content}
          </div>

          <div className="mt-10 flex gap-3 border-t pt-6">
            <Button asChild>
              <Link to={`/notes/${note.id}/edit`}>
                <Pencil className="mr-1.5 h-4 w-4" />
                Edit
              </Link>
            </Button>
            <Button variant="outline" onClick={handleDelete} className="text-destructive hover:bg-destructive hover:text-destructive-foreground">
              <Trash2 className="mr-1.5 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
