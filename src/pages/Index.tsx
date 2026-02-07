import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useNotes } from "@/contexts/NotesContext";
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  BookMarked,
  FolderOpen,
} from "lucide-react";
import SubjectBadge from "@/components/SubjectBadge";

const Index = () => {
  const { notes } = useNotes();

  const stats = useMemo(() => {
    const subjects = new Set(notes.map((n) => n.subject));
    const totalWords = notes.reduce(
      (sum, n) => sum + n.content.split(/\s+/).filter(Boolean).length,
      0
    );
    const recentNotes = [...notes]
      .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
      .slice(0, 3);
    return { subjectCount: subjects.size, totalWords, recentNotes };
  }, [notes]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* Hero */}
      <div className="animate-fade-in">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-elevated">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Study Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Your knowledge hub — organized and searchable
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/notes/new"
            className="group inline-flex items-center gap-2 self-start rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
          >
            Start Writing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Stats Row */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard
            icon={<BookMarked className="h-5 w-5 text-primary" />}
            label="Total Notes"
            value={notes.length}
          />
          <StatCard
            icon={<FolderOpen className="h-5 w-5 text-primary" />}
            label="Subjects"
            value={stats.subjectCount}
          />
          <StatCard
            icon={<TrendingUp className="h-5 w-5 text-primary" />}
            label="Words Written"
            value={stats.totalWords.toLocaleString()}
          />
          <StatCard
            icon={<Clock className="h-5 w-5 text-primary" />}
            label="Study Time"
            value={`~${Math.max(1, Math.round(stats.totalWords / 200))} min`}
          />
        </div>

        {/* AI Coming Soon */}
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-dashed border-accent/40 bg-accent/5 px-5 py-4">
          <Sparkles className="h-5 w-5 shrink-0 text-accent" />
          <div>
            <p className="text-sm font-medium text-foreground">AI Features Coming Soon</p>
            <p className="text-xs text-muted-foreground">
              Auto-summaries, flashcard generation, and smart quiz mode — all powered by AI.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Notes */}
      <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-foreground">
            Recently Updated
          </h2>
          <Link
            to="/notes"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {stats.recentNotes.length > 0 ? (
          <div className="mt-4 space-y-3">
            {stats.recentNotes.map((note) => {
              const wordCount = note.content.split(/\s+/).filter(Boolean).length;
              const readTime = Math.max(1, Math.round(wordCount / 200));
              return (
                <Link
                  key={note.id}
                  to={`/notes/${note.id}`}
                  className="group flex items-start gap-4 rounded-xl border bg-card p-4 transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-base font-semibold text-card-foreground group-hover:text-primary transition-colors truncate">
                        {note.title}
                      </h3>
                      <SubjectBadge subject={note.subject} />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                      {note.content}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{wordCount} words</span>
                      <span>·</span>
                      <span>{readTime} min read</span>
                      <span>·</span>
                      <span>
                        {note.updatedAt.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-dashed bg-card p-8 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">
              No notes yet. Start writing to build your study library!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) => (
  <div className="rounded-xl border bg-card p-4">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
    <p className="mt-2 font-display text-2xl font-bold text-foreground">{value}</p>
  </div>
);

export default Index;
