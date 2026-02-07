import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";

interface NoteFormProps {
  initialTitle?: string;
  initialContent?: string;
  onSubmit: (title: string, content: string) => void;
  submitLabel: string;
}

const NoteForm = ({ initialTitle = "", initialContent = "", onSubmit, submitLabel }: NoteFormProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setTitle(initialTitle);
    setContent(initialContent);
  }, [initialTitle, initialContent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onSubmit(title.trim(), content.trim());
  };

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in space-y-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-foreground">
          Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title..."
          className="h-12 text-base"
          maxLength={200}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="text-sm font-medium text-foreground">
          Content
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your study notes here..."
          className="min-h-[240px] resize-y text-base leading-relaxed"
          maxLength={10000}
        />
      </div>

      <div className="flex gap-3">
        <Button type="submit" disabled={!isValid} className="px-6">
          {submitLabel}
        </Button>
        <Button type="button" variant="outline" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default NoteForm;
