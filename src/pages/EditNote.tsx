import { useParams, useNavigate, Link } from "react-router-dom";
import { useNotes } from "@/contexts/NotesContext";
import NoteForm from "@/components/NoteForm";
import { ArrowLeft } from "lucide-react";

const EditNote = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getNoteById, updateNote } = useNotes();

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

  const handleSubmit = (title: string, content: string) => {
    updateNote(note.id, title, content);
    navigate(`/notes/${note.id}`);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <h1 className="mb-6 font-display text-3xl font-bold text-foreground animate-fade-in">
        Edit Note
      </h1>
      <NoteForm
        initialTitle={note.title}
        initialContent={note.content}
        onSubmit={handleSubmit}
        submitLabel="Update Note"
      />
    </div>
  );
};

export default EditNote;
