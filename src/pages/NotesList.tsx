import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useNotes } from "@/contexts/NotesContext";
import NoteCard from "@/components/NoteCard";
import { Search, Plus, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";

const NotesList = () => {
  const { notes } = useNotes();
  const [search, setSearch] = useState("");

  const filteredNotes = useMemo(() => {
    if (!search.trim()) return notes;
    const query = search.toLowerCase();
    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query)
    );
  }, [notes, search]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="animate-fade-in">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">My Notes</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {notes.length} {notes.length === 1 ? "note" : "notes"} total
            </p>
          </div>
          <Link
            to="/notes/new"
            className="inline-flex items-center gap-1.5 self-start rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            New Note
          </Link>
        </div>

        <div className="relative mt-6">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search notes by title or content..."
            className="h-11 pl-10"
          />
        </div>
      </div>

      {filteredNotes.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center text-center animate-fade-in">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
            <FileText className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
            {search ? "No notes found" : "No notes yet"}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {search
              ? "Try adjusting your search query."
              : "Create your first note to get started."}
          </p>
          {!search && (
            <Link
              to="/notes/new"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Plus className="h-4 w-4" />
              Create Note
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default NotesList;
