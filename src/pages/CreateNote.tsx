import { useNavigate } from "react-router-dom";
import { useNotes } from "@/contexts/NotesContext";
import NoteForm from "@/components/NoteForm";

const CreateNote = () => {
  const navigate = useNavigate();
  const { addNote } = useNotes();

  const handleSubmit = (title: string, content: string) => {
    addNote(title, content);
    navigate("/notes");
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <h1 className="mb-6 font-display text-3xl font-bold text-foreground animate-fade-in">
        Create Note
      </h1>
      <NoteForm onSubmit={handleSubmit} submitLabel="Save Note" />
    </div>
  );
};

export default CreateNote;
