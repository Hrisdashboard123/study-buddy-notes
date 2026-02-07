import { useParams, useNavigate, Link } from "react-router-dom";
import { useNotes } from "@/contexts/NotesContext";
import { ArrowLeft, Pencil, Trash2, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import SubjectBadge from "@/components/SubjectBadge";

const ViewNote = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getNoteById, deleteNote } = useNotes();

  const note = id ? getNoteById(id) : undefined;

  if (!note) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center animate-fade-in">
        <h2 className="font-display text-2xl font-bold text-foreground">Note not found</h2>
        <p className="mt-2 text-muted-foreground">This note may have been deleted.</p>
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
    deleteNote(note.id);
    toast.success("Note deleted", { description: `"${note.title}" has been removed.` });
    navigate("/notes");
  };

  const wordCount = note.content.split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.round(wordCount / 200));

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
          <div className="flex items-start gap-3 flex-wrap">
            <SubjectBadge subject={note.subject} size="md" />
          </div>

          <h1 className="mt-3 font-display text-3xl font-bold text-foreground leading-tight">
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
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {wordCount} words · {readTime} min read
            </span>
          </div>

          <div className="mt-8 whitespace-pre-wrap rounded-xl border bg-card p-6 text-base leading-relaxed text-foreground font-mono text-sm">
            {note.content}
          </div>

          <div className="mt-8 flex gap-3 border-t pt-6">
            <Button asChild>
              <Link to={`/notes/${note.id}/edit`}>
                <Pencil className="mr-1.5 h-4 w-4" />
                Edit
              </Link>
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  <Trash2 className="mr-1.5 h-4 w-4" />
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete this note?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete "{note.title}". This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete Note
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
