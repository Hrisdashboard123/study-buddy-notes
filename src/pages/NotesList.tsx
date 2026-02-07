import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useNotes } from "@/contexts/NotesContext";
import NoteCard from "@/components/NoteCard";
import { Search, Plus, FileText, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SUBJECTS, Subject } from "@/types/note";
import { cn } from "@/lib/utils";

type SortOption = "newest" | "oldest" | "az" | "za";

const NotesList = () => {
  const { notes } = useNotes();
  const [search, setSearch] = useState("");
  const [activeSubject, setActiveSubject] = useState<Subject | "All">("All");
  const [sort, setSort] = useState<SortOption>("newest");

  const activeSubjects = useMemo(() => {
    const set = new Set(notes.map((n) => n.subject));
    return SUBJECTS.filter((s) => set.has(s));
  }, [notes]);

  const filteredNotes = useMemo(() => {
    let result = notes;

    if (activeSubject !== "All") {
      result = result.filter((n) => n.subject === activeSubject);
    }

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (note) =>
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query)
      );
    }

    switch (sort) {
      case "oldest":
        result = [...result].sort((a, b) => a.updatedAt.getTime() - b.updatedAt.getTime());
        break;
      case "az":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        result = [...result].sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        result = [...result].sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
    }

    return result;
  }, [notes, search, activeSubject, sort]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="animate-fade-in">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">My Notes</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {notes.length} {notes.length === 1 ? "note" : "notes"} across{" "}
              {activeSubjects.length} {activeSubjects.length === 1 ? "subject" : "subjects"}
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

        {/* Search + Sort */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notes by title or content..."
              className="h-11 pl-10"
            />
          </div>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="h-11 appearance-none rounded-lg border bg-card px-4 pr-10 text-sm font-medium text-foreground outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="az">A → Z</option>
              <option value="za">Z → A</option>
            </select>
            <ArrowUpDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Subject Filters */}
        {activeSubjects.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSubject("All")}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                activeSubject === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              All ({notes.length})
            </button>
            {activeSubjects.map((subject) => {
              const count = notes.filter((n) => n.subject === subject).length;
              return (
                <button
                  key={subject}
                  onClick={() => setActiveSubject(subject)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                    activeSubject === subject
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  )}
                >
                  {subject} ({count})
                </button>
              );
            })}
          </div>
        )}
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
            {search || activeSubject !== "All" ? "No notes found" : "No notes yet"}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {search || activeSubject !== "All"
              ? "Try adjusting your search or filter."
              : "Create your first note to get started."}
          </p>
          {!search && activeSubject === "All" && (
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
