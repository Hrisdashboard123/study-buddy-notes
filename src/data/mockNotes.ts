import { Note } from "@/types/note";

export const mockNotes: Note[] = [
  {
    id: "1",
    title: "Introduction to React Hooks",
    content: `React Hooks let you use state and other React features without writing a class component.

Key Hooks:
• useState — Manage local component state
• useEffect — Run side effects (API calls, subscriptions, timers)
• useContext — Access context values without wrapping
• useReducer — Complex state logic with reducer pattern
• useMemo / useCallback — Optimize performance by memoizing values and functions
• useRef — Persist values across renders without causing re-renders

Rules of Hooks:
1. Only call hooks at the top level (not inside loops, conditions, or nested functions)
2. Only call hooks from React function components or custom hooks

Custom Hooks:
You can extract reusable logic into custom hooks. They always start with "use" (e.g., useLocalStorage, useFetch). This is one of the most powerful patterns in React.`,
    subject: "Computer Science",
    createdAt: new Date("2025-12-01T10:00:00"),
    updatedAt: new Date("2025-12-15T14:20:00"),
  },
  {
    id: "2",
    title: "CSS Flexbox & Grid Cheat Sheet",
    content: `FLEXBOX (1D Layout)
• display: flex — Activates flexbox on container
• flex-direction: row | column — Main axis direction
• justify-content: flex-start | center | space-between | space-around — Main axis alignment
• align-items: stretch | center | flex-start | flex-end — Cross axis alignment
• gap: 1rem — Space between items
• flex-wrap: wrap — Allow items to wrap to next line
• flex: 1 — Shorthand for flex-grow: 1

GRID (2D Layout)
• display: grid — Activates grid on container
• grid-template-columns: repeat(3, 1fr) — Define columns
• grid-template-rows: auto 1fr auto — Define rows
• grid-gap: 1rem — Space between cells
• grid-column: span 2 — Make item span multiple columns
• place-items: center — Center items in both directions

When to use which:
→ Flexbox: Navigation bars, card rows, centering content
→ Grid: Page layouts, image galleries, complex 2D arrangements`,
    subject: "Computer Science",
    createdAt: new Date("2025-12-03T14:30:00"),
    updatedAt: new Date("2025-12-05T09:15:00"),
  },
  {
    id: "3",
    title: "Newton's Laws of Motion",
    content: `First Law (Inertia):
An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by an external force.
Example: A book on a table stays still until you push it.

Second Law (F = ma):
Force equals mass times acceleration. The acceleration of an object is directly proportional to the net force and inversely proportional to its mass.
Example: Pushing an empty cart vs. a full cart — same force, different accelerations.

Third Law (Action-Reaction):
For every action, there is an equal and opposite reaction.
Example: When you push against a wall, the wall pushes back against you with equal force.

Key Formulas:
• F = ma (Force = mass × acceleration)
• W = mg (Weight = mass × gravitational acceleration, g ≈ 9.8 m/s²)
• p = mv (Momentum = mass × velocity)
• Impulse = FΔt = Δp`,
    subject: "Physics",
    createdAt: new Date("2025-12-08T16:00:00"),
    updatedAt: new Date("2025-12-08T16:00:00"),
  },
  {
    id: "4",
    title: "Database Normalization (1NF to 3NF)",
    content: `Normalization is the process of organizing data in a relational database to reduce redundancy and improve data integrity.

First Normal Form (1NF):
✓ Each column contains atomic (indivisible) values
✓ No repeating groups or arrays
✗ Bad: "Math, Physics" in a single Subjects column

Second Normal Form (2NF):
✓ Meets 1NF requirements
✓ No partial dependencies — every non-key column depends on the ENTIRE primary key
✗ Bad: In a table with composite key (StudentID, CourseID), having StudentName depend only on StudentID

Third Normal Form (3NF):
✓ Meets 2NF requirements
✓ No transitive dependencies — non-key columns don't depend on other non-key columns
✗ Bad: Having both DeptID and DeptName in an Employee table (DeptName depends on DeptID, not on EmployeeID)

BCNF (Boyce-Codd Normal Form):
✓ Meets 3NF requirements
✓ Every determinant is a candidate key`,
    subject: "Computer Science",
    createdAt: new Date("2025-12-10T11:45:00"),
    updatedAt: new Date("2025-12-12T08:20:00"),
  },
  {
    id: "5",
    title: "Mitosis vs Meiosis",
    content: `MITOSIS (Cell Division for Growth & Repair)
• Produces 2 identical daughter cells
• Same chromosome count as parent (diploid → diploid)
• Phases: Prophase → Metaphase → Anaphase → Telophase
• Occurs in somatic (body) cells
• Purpose: Growth, tissue repair, asexual reproduction

MEIOSIS (Cell Division for Reproduction)
• Produces 4 genetically unique daughter cells
• Halves the chromosome count (diploid → haploid)
• Two divisions: Meiosis I (reductive) and Meiosis II (equational)
• Occurs in germ cells (sex cells)
• Purpose: Produce gametes (sperm/egg)
• Crossing over in Prophase I creates genetic variation

Key Differences:
| Feature     | Mitosis  | Meiosis    |
|-------------|----------|------------|
| Daughter cells | 2     | 4          |
| Ploidy      | 2n → 2n | 2n → n     |
| Divisions   | 1        | 2          |
| Variation   | None     | Yes        |`,
    subject: "Biology",
    createdAt: new Date("2025-12-14T09:00:00"),
    updatedAt: new Date("2025-12-14T09:00:00"),
  },
  {
    id: "6",
    title: "World War II — Key Turning Points",
    content: `Major Turning Points of WWII (1939–1945):

1. Battle of Britain (1940)
→ RAF defended UK against Luftwaffe bombing campaign
→ First major defeat for Nazi Germany; Hitler abandoned invasion plans

2. Operation Barbarossa (1941)
→ Germany invaded the Soviet Union, opening the Eastern Front
→ Overextended German forces; brutal Russian winter devastated them

3. Pearl Harbor (Dec 7, 1941)
→ Japan attacked US naval base in Hawaii
→ US entered the war, tipping the balance of resources

4. Battle of Stalingrad (1942–43)
→ Bloodiest battle in history; Soviet victory
→ Marked the beginning of German retreat on the Eastern Front

5. D-Day / Normandy Landings (June 6, 1944)
→ Allied invasion of German-occupied France
→ Opened the Western Front, leading to liberation of Paris

6. Atomic Bombs (August 1945)
→ Hiroshima and Nagasaki; Japan surrendered
→ End of WWII; beginning of the nuclear age`,
    subject: "History",
    createdAt: new Date("2025-12-16T13:30:00"),
    updatedAt: new Date("2025-12-18T10:45:00"),
  },
  {
    id: "7",
    title: "Quadratic Equations & The Quadratic Formula",
    content: `Standard Form: ax² + bx + c = 0

The Quadratic Formula:
x = (-b ± √(b² - 4ac)) / 2a

The Discriminant (D = b² - 4ac):
• D > 0 → Two distinct real roots
• D = 0 → One repeated real root (perfect square)
• D < 0 → No real roots (two complex roots)

Methods of Solving:
1. Factoring: Find two numbers that multiply to ac and add to b
2. Completing the square: Rewrite as (x + p)² = q
3. Quadratic Formula: Works for ALL quadratic equations
4. Graphing: Find x-intercepts of the parabola y = ax² + bx + c

Vertex Form: y = a(x - h)² + k
• (h, k) is the vertex of the parabola
• h = -b/(2a), k = f(h)
• If a > 0, parabola opens upward (minimum)
• If a < 0, parabola opens downward (maximum)`,
    subject: "Mathematics",
    createdAt: new Date("2025-12-20T08:15:00"),
    updatedAt: new Date("2025-12-20T08:15:00"),
  },
  {
    id: "8",
    title: "Supply and Demand Basics",
    content: `LAW OF DEMAND:
As price increases, quantity demanded decreases (inverse relationship).
→ Demand curve slopes downward

LAW OF SUPPLY:
As price increases, quantity supplied increases (direct relationship).
→ Supply curve slopes upward

EQUILIBRIUM:
Where supply and demand curves intersect.
• Equilibrium price = market-clearing price
• Equilibrium quantity = amount traded at that price

Shifts vs Movements:
• Movement ALONG curve = change in price of the good itself
• Shift OF curve = change in other factors

Demand Shifters: Income, tastes, prices of related goods, expectations, number of buyers
Supply Shifters: Input costs, technology, expectations, number of sellers, government policies

Price Elasticity of Demand:
Ed = % change in Qd / % change in P
• |Ed| > 1 → Elastic (luxury goods)
• |Ed| < 1 → Inelastic (necessities)
• |Ed| = 1 → Unit elastic`,
    subject: "Economics",
    createdAt: new Date("2025-12-22T15:00:00"),
    updatedAt: new Date("2025-12-22T15:00:00"),
  },
];
