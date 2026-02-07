import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { Subject, SUBJECTS } from "@/types/note";

interface NoteFormProps {
  initialTitle?: string;
  initialContent?: string;
  initialSubject?: Subject;
  onSubmit: (title: string, content: string, subject: Subject) => void;
  submitLabel: string;
}

const NoteForm = ({
  initialTitle = "",
  initialContent = "",
  initialSubject = "General",
  onSubmit,
  submitLabel,
}: NoteFormProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [subject, setSubject] = useState<Subject>(initialSubject);

  useEffect(() => {
    setTitle(initialTitle);
    setContent(initialContent);
    setSubject(initialSubject);
  }, [initialTitle, initialContent, initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onSubmit(title.trim(), content.trim(), subject);
  };

  const isValid = title.trim().length > 0 && content.trim().length > 0;
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const charCount = content.length;

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

      <div className="grid gap-6 sm:grid-cols-[1fr_200px]">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium text-foreground">
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Newton's Laws of Motion"
            className="h-12 text-base"
            maxLength={200}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-foreground">
            Subject
          </label>
          <Select value={subject} onValueChange={(val) => setSubject(val as Subject)}>
            <SelectTrigger id="subject" className="h-12">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              {SUBJECTS.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="content" className="text-sm font-medium text-foreground">
            Content
          </label>
          <span className="text-xs text-muted-foreground">
            {wordCount} {wordCount === 1 ? "word" : "words"} · {charCount.toLocaleString()} chars
          </span>
        </div>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your study notes here... Use bullet points, formulas, or whatever helps you learn."
          className="min-h-[300px] resize-y text-base leading-relaxed font-mono text-sm"
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
