import { Link, useLocation } from "react-router-dom";
import { BookOpen, Plus, Home } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isNotesPage = location.pathname.startsWith("/notes");

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">
            StudyAI
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            to="/"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              isHome
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Home className="h-4 w-4 sm:hidden" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
          <Link
            to="/notes"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              isNotesPage
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            My Notes
          </Link>
          <Link
            to="/notes/new"
            className="ml-1 inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Plus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">New Note</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
