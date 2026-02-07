import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotesProvider } from "@/contexts/NotesContext";
import Header from "@/components/Header";
import Index from "./pages/Index";
import NotesList from "./pages/NotesList";
import CreateNote from "./pages/CreateNote";
import ViewNote from "./pages/ViewNote";
import EditNote from "./pages/EditNote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NotesProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/notes" element={<NotesList />} />
            <Route path="/notes/new" element={<CreateNote />} />
            <Route path="/notes/:id" element={<ViewNote />} />
            <Route path="/notes/:id/edit" element={<EditNote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NotesProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
