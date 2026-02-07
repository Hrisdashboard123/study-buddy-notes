import { Note } from "@/types/note";

export const mockNotes: Note[] = [
  {
    id: "1",
    title: "Introduction to React Hooks",
    content:
      "React Hooks let you use state and other React features without writing a class. The most common hooks are useState for managing state and useEffect for side effects. Custom hooks allow you to extract component logic into reusable functions.",
    createdAt: new Date("2025-12-01T10:00:00"),
    updatedAt: new Date("2025-12-01T10:00:00"),
  },
  {
    id: "2",
    title: "CSS Flexbox Cheat Sheet",
    content:
      "Flexbox is a one-dimensional layout method. Key properties: display: flex, justify-content (main axis alignment), align-items (cross axis alignment), flex-direction (row/column), flex-wrap, and gap. Use flex-grow, flex-shrink, and flex-basis on children.",
    createdAt: new Date("2025-12-03T14:30:00"),
    updatedAt: new Date("2025-12-05T09:15:00"),
  },
  {
    id: "3",
    title: "TypeScript Generics",
    content:
      "Generics provide a way to create reusable components that work with a variety of types rather than a single one. Example: function identity<T>(arg: T): T { return arg; }. They're essential for creating type-safe utility functions and data structures.",
    createdAt: new Date("2025-12-08T16:00:00"),
    updatedAt: new Date("2025-12-08T16:00:00"),
  },
  {
    id: "4",
    title: "Database Normalization",
    content:
      "Normalization is the process of organizing data to reduce redundancy. 1NF: Atomic values, no repeating groups. 2NF: Meet 1NF + no partial dependencies. 3NF: Meet 2NF + no transitive dependencies. BCNF: Every determinant is a candidate key.",
    createdAt: new Date("2025-12-10T11:45:00"),
    updatedAt: new Date("2025-12-12T08:20:00"),
  },
];
