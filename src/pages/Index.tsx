import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4">
      <div className="animate-fade-in text-center max-w-xl">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-elevated">
          <BookOpen className="h-10 w-10 text-primary-foreground" />
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          AI Study Assistant
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Organize your study notes in one place. Create, search, and manage your
          knowledge effortlessly.
        </p>

        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          AI features coming soon
        </div>

        <div className="mt-10">
          <Link
            to="/notes"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
          >
            View Notes
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
