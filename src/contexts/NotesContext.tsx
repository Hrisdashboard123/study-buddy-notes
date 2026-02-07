import React, { createContext, useContext, useState, useCallback } from "react";
import { Note, Subject } from "@/types/note";
import { mockNotes } from "@/data/mockNotes";

interface NotesContextType {
  notes: Note[];
  addNote: (title: string, content: string, subject: Subject) => void;
  updateNote: (id: string, title: string, content: string, subject: Subject) => void;
  deleteNote: (id: string) => void;
  getNoteById: (id: string) => Note | undefined;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>(mockNotes);

  const addNote = useCallback((title: string, content: string, subject: Subject) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
      subject,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes((prev) => [newNote, ...prev]);
  }, []);

  const updateNote = useCallback((id: string, title: string, content: string, subject: Subject) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, title, content, subject, updatedAt: new Date() } : note
      )
    );
  }, []);

  const deleteNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }, []);

  const getNoteById = useCallback(
    (id: string) => notes.find((note) => note.id === id),
    [notes]
  );

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote, getNoteById }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};
