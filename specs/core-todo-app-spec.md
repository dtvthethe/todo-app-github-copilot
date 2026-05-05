# Core Todo App Specification

## 1. Feature Overview

**Title**: Core Todo List Application

**Description**: A responsive, vanilla JavaScript todo application with essential task management features including adding, completing, filtering, and persisting todos to localStorage.

**Purpose**: Build a lightweight, accessible todo app to explore GitHub Copilot usage patterns with vanilla HTML, CSS, and JavaScript—no frameworks or build tools.

**User Value**:
- Quick task capture and organization
- Easy completion tracking
- Filter views for focused work (All/Active/Completed)
- Data persistence across sessions
- Mobile-friendly interface

**Success Metrics**:
- ✅ All 5 core features implemented and working
- ✅ Responsive on mobile (320px+), tablet, and desktop
- ✅ WCAG AA accessibility compliance
- ✅ Data persists correctly with localStorage
- ✅ Zero console errors

---

## 2. User Stories

1. **As a user**, I want to **add a new todo by typing text and pressing enter**, so that **I can capture tasks quickly**.

2. **As a user**, I want to **mark a todo as complete with a checkbox**, so that **I can track which tasks are done**.

3. **As a user**, I want to **delete a todo item**, so that **I can remove tasks I no longer need**.

4. **As a user**, I want to **filter todos by status (All/Active/Completed)**, so that **I can focus on what needs to be done**.

5. **As a user**, I want to **see statistics (total, active, completed counts)**, so that **I can quickly understand my workload**.

6. **As a user**, I want to **my todos persist when I reload the page**, so that **I don't lose my data**.

---

## 3. Acceptance Criteria

### Feature: Add Todo
- [ ] **Given**: User sees the todo form, **When**: User types text and submits, **Then**: New todo appears in list
- [ ] **Given**: Todo form is submitted, **When**: User added valid text, **Then**: Input field clears and focuses
- [ ] **Given**: User tries to submit, **When**: Input is empty, **Then**: Todo is not created (validation)
- [ ] **Given**: New todo is added, **When**: Page renders, **Then**: Todo appears with checkbox, text, and delete button

### Feature: Mark Complete/Incomplete
- [ ] **Given**: Uncompleted todo in list, **When**: User clicks checkbox, **Then**: Todo status toggles to completed
- [ ] **Given**: Completed todo in list, **When**: User clicks checkbox again, **Then**: Todo status toggles back to active
- [ ] **Given**: Todo is completed, **When**: Page renders, **Then**: Todo shows visual indicator (strikethrough, opacity)
- [ ] **Given**: Any todo toggles state, **When**: Status changes, **Then**: Statistics update immediately

### Feature: Delete Todo
- [ ] **Given**: Todo in list, **When**: User clicks delete button, **Then**: Todo is removed from list
- [ ] **Given**: Todo is deleted, **When**: Page renders, **Then**: Todo no longer appears in any view
- [ ] **Given**: Any todo is deleted, **When**: State changes, **Then**: Statistics update immediately

### Feature: Filter Todos
- [ ] **Given**: Todo list with mixed statuses, **When**: User clicks "All" filter, **Then**: All todos display
- [ ] **Given**: Todo list with mixed statuses, **When**: User clicks "Active" filter, **Then**: Only incomplete todos display
- [ ] **Given**: Todo list with mixed statuses, **When**: User clicks "Completed" filter, **Then**: Only completed todos display
- [ ] **Given**: Filters are applied, **When**: New todo is added, **Then**: View updates based on current filter

### Feature: Statistics Display
- [ ] **Given**: Todo list exists, **When**: Page loads or updates, **Then**: Total count displays correctly
- [ ] **Given**: Todos have mixed states, **When**: Page renders, **Then**: Active and Completed counts are accurate
- [ ] **Given**: All todos are marked complete, **When**: Statistics update, **Then**: Active count is 0

### Feature: localStorage Persistence
- [ ] **Given**: Todos are added/modified, **When**: User refreshes page, **Then**: All todos are restored
- [ ] **Given**: App state changes, **When**: Any CRUD operation happens, **Then**: Data is saved to localStorage
- [ ] **Given**: localStorage has invalid data, **When**: App initializes, **Then**: App starts with empty list (error handling)
- [ ] **Given**: Multiple todos exist, **When**: User deletes one and refreshes, **Then**: Only remaining todos load

### Edge Cases
- [ ] Empty todo text cannot be added (validation)
- [ ] Deleting from empty list doesn't cause errors
- [ ] Filtering with 0 todos shows appropriate empty state
- [ ] XSS protection: Special characters in todo text are escaped (no HTML injection)

---

## 4. Technical Requirements

### 4.1 UI Components

#### HTML Elements Needed
- `<form id="todo-form">` - Input form for adding todos
  - `<input type="text" id="todo-input">` - Text input for todo
  - `<button type="submit">` - Add todo button
- `<section class="todo-filters">` - Filter buttons (All/Active/Completed)
  - `<button class="filter-btn" data-filter="all">All</button>`
  - `<button class="filter-btn" data-filter="active">Active</button>`
  - `<button class="filter-btn" data-filter="completed">Completed</button>`
- `<section class="todo-stats">` - Statistics display
  - Total, Active, Completed count elements
- `<ul id="todo-list">` - Container for todo items
  - `<li class="todo-item" data-id="...">` - Individual todo item
    - `<input type="checkbox">` - Completion checkbox
    - `<span class="todo-text">` - Todo text
    - `<button class="delete-btn" aria-label="Delete">` - Delete button

#### Semantic Structure Recommendations
- Use `<main>` for primary content
- Use `<header>` for app title
- Use `<form>` for input (not div)
- Use `<ul><li>` for list structure
- Use `<button>` for interactive elements (not divs)

#### Accessibility Considerations
- ARIA labels on icon buttons: `aria-label="Delete todo"`
- Semantic form structure with labels
- Keyboard support: Tab navigation, Enter to submit, Space for checkboxes
- Focus indicators on all interactive elements
- Sufficient color contrast (WCAG AA minimum)

**Reference**: [html-guidelines](./../skills/html-guidelines/SKILL.md)

### 4.2 Styling

#### CSS Classes Needed
- `.todo-container` - Main wrapper
- `.todo-form` - Form styling
- `.todo-input` - Input field
- `.todo-filters` - Filter button group
- `.filter-btn` - Individual filter button
- `.filter-btn.active` - Active filter state
- `.todo-stats` - Statistics section
- `.todo-list` - List container
- `.todo-item` - Individual todo item
- `.todo-item.completed` - Completed todo (strikethrough, opacity)
- `.delete-btn` - Delete button
- `.todo-item--empty` - Empty state

#### Responsive Design Considerations
- **Mobile-First Approach**: Design for 320px minimum width first
- **Breakpoints**:
  - Mobile: 0-640px (base styles, full-width)
  - Tablet: 640px-1024px (container width, better spacing)
  - Desktop: 1024px+ (max-width 800px container, hover effects)
- **Touch-Friendly**: Buttons 44px+ height/width minimum
- **Typography**: 16px minimum on mobile, readable font sizes
- **Spacing**: Consistent padding/margin scale (8px, 12px, 16px, 24px)
- **Flexbox/Grid**: Use for layout, responsive stacking

#### Visual Design
- Clean, minimal UI
- Clear visual feedback (hover, focus, active states)
- Completed todos: strikethrough text + reduced opacity (0.5-0.6)
- Active filter button: distinct styling
- Empty state: clear message when no todos match filter

**Reference**: [css-guidelines](./../skills/css-guidelines/SKILL.md)

### 4.3 JavaScript Logic

#### Functions/Methods Required

```javascript
// State Management
function initializeApp()
  - Load todos from localStorage
  - Initialize state object
  - Render initial view
  - Attach event listeners

function addTodo(text)
  - Validate text (not empty, reasonable length)
  - Create unique ID (timestamp-based: "todo-{Date.now()}")
  - Add to todos array
  - Save to localStorage
  - Re-render

function removeTodo(id)
  - Find and remove todo by ID from array
  - Save to localStorage
  - Re-render

function toggleTodo(id)
  - Find todo by ID
  - Toggle completed boolean
  - Update completedAt timestamp if needed
  - Save to localStorage
  - Re-render

function filterTodos(filter)
  - Update current filter state
  - Re-render based on filter
  - Update active filter button styling

function getTodosByFilter(filter)
  - Return filtered array based on current filter
  - filter === 'all' → return all todos
  - filter === 'active' → return todos where !completed
  - filter === 'completed' → return todos where completed

function updateStats()
  - Calculate: total, active, completed counts
  - Update DOM with stats
  - Called after any state change

function render()
  - Clear todo list
  - Get todos based on current filter
  - Create DOM elements for each todo
  - Update statistics
  - Handle empty state

// Utilities
function escapeHtml(text)
  - Escape HTML characters to prevent XSS
  - Replace <, >, &, ", ' with entities

function generateUniqueId()
  - Return unique ID: `todo-${Date.now()}-${Math.random()}`

// localStorage Helpers
function saveToStorage(todos)
  - Serialize todos to JSON
  - Save to localStorage with key 'todos'

function loadFromStorage()
  - Get 'todos' from localStorage
  - Parse JSON
  - Return array or empty array if not found
```

#### State Changes
```javascript
// Todo Item Structure
{
  id: "todo-1620000000000",
  text: "Buy groceries",
  completed: false,
  createdAt: 1620000000000,
  completedAt: null
}

// App State
{
  todos: [],              // Array of todo items
  currentFilter: 'all',   // 'all' | 'active' | 'completed'
  stats: {
    total: 0,
    active: 0,
    completed: 0
  }
}
```

#### Event Handlers Needed
- `#todo-form` → `submit` → `addTodo()`
- `#todo-input` → `focus` → clear validation state
- `.filter-btn` → `click` → `filterTodos(filter)`
- `.todo-item` checkbox → `change` → `toggleTodo(id)`
- `.delete-btn` → `click` → `removeTodo(id)` (event delegation)

#### localStorage Considerations
- **Key**: `'todos'` - store todos array as JSON
- **Persistence**: Save after every add/update/delete
- **Loading**: Load on app initialization
- **Error Handling**: Wrap in try-catch for invalid JSON
- **Clearing**: Implement "Clear Completed" feature

**Reference**: [js-guidelines](./../skills/js-guidelines/SKILL.md)

---

## 5. Data Model

```javascript
// Individual Todo Item
{
  id: "todo-1620000000000",     // Unique ID: todo-{timestamp}
  text: "Buy groceries",         // Todo text content
  completed: false,              // Completion status boolean
  createdAt: 1620000000000,     // Creation timestamp (ms)
  completedAt: null             // Completion timestamp (ms) or null
}

// App Data Structure (stored in localStorage)
[
  {
    id: "todo-1620000000000",
    text: "First task",
    completed: true,
    createdAt: 1620000000000,
    completedAt: 1620000030000
  },
  {
    id: "todo-1620000000500",
    text: "Second task",
    completed: false,
    createdAt: 1620000000500,
    completedAt: null
  }
]
```

---

## 6. Implementation Steps

### Phase 1: HTML Structure
1. Create `index.html` with semantic structure
2. Include form with text input and submit button
3. Add filter buttons (All/Active/Completed)
4. Add statistics display section
5. Create todo list container (`<ul id="todo-list">`)
6. Link CSS and JS files

### Phase 2: CSS Styling
1. Create `styles/style.css`
2. Implement mobile-first base styles
3. Add responsive layout (flexbox for list, form, filters)
4. Style form inputs and buttons
5. Add completed todo visual styling (strikethrough, opacity)
6. Implement responsive breakpoints (640px, 1024px)
7. Add focus/hover states for accessibility

### Phase 3: JavaScript - State & Core
1. Create `js/app.js`
2. Initialize state object and app
3. Implement `loadFromStorage()` function
4. Implement `saveToStorage()` function
5. Set up event listeners

### Phase 4: JavaScript - Add Feature
1. Implement `addTodo(text)` function with validation
2. Add form submit handler
3. Implement `render()` function
4. Implement `escapeHtml()` for XSS protection
5. Test adding todos

### Phase 5: JavaScript - Complete/Delete
1. Implement `toggleTodo(id)` function
2. Implement `removeTodo(id)` function
3. Add event delegation for checkbox changes and delete clicks
4. Test toggling and deletion

### Phase 6: JavaScript - Filter & Stats
1. Implement `filterTodos(filter)` function
2. Implement `getTodosByFilter(filter)` function
3. Implement `updateStats()` function
4. Add filter button click handlers
5. Update `render()` to handle filtered views

### Phase 7: Polish & Testing
1. Add "Clear Completed" functionality
2. Implement empty state display
3. Add accessibility improvements (ARIA labels, keyboard nav)
4. Manual testing across devices
5. Fix any bugs or edge cases

---

## 7. Design & Layout

### Visual Layout Structure
```
┌─────────────────────────────────┐
│         Header/Title            │ (centered, 24px margin top)
├─────────────────────────────────┤
│  ┌───────────────────────────┐  │
│  │  INPUT: Add new todo      │  │ 44px height, full-width on mobile
│  │  [        ]  [Add Button] │  │
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │  [All] [Active] [Compl.]  │  │ Filter buttons with spacing
│  └───────────────────────────┘  │
│                                 │
│  Total: 3 | Active: 2 | Done: 1 │ Stats row
│                                 │
│  ┌───────────────────────────┐  │
│  │ ☑ Task 1         [Delete] │  │ Todo items
│  │ ☐ Task 2         [Delete] │  │
│  │ ☑ Task 3         [Delete] │  │
│  └───────────────────────────┘  │
│                                 │
└─────────────────────────────────┘
```

### Responsive Behavior
- **Mobile (0-640px)**: 
  - Full-width container with 16px padding
  - Buttons and input stack vertically
  - Single-column todo list
  - Touch targets 44px minimum

- **Tablet (640-1024px)**:
  - Container max-width 600px
  - Side-by-side form layout if space allows
  - Add horizontal spacing to todo items

- **Desktop (1024px+)**:
  - Container max-width 800px
  - Centered on page
  - Hover effects on interactive elements
  - Multi-line forms can be horizontal

### Color & Visual Design
- **Completed todos**: Text color #999, text-decoration: line-through, opacity: 0.6
- **Active filter button**: Distinct background color or underline
- **Buttons**: Clear focus indicators (outline or background change)
- **Empty state**: Centered message, gray text, encourages action

---

## 8. Edge Cases & Error Handling

| Scenario | Handling |
|----------|----------|
| **Empty input submission** | Prevent adding, show optional validation message |
| **Very long todo text** | Truncate in display with CSS (overflow: hidden, text-overflow: ellipsis) or allow wrapping |
| **Special characters in text** | HTML escape to prevent XSS (`<`, `>`, `&`, `"`, `'`) |
| **localStorage full** | Try-catch block, fall back to in-memory storage (warning to user) |
| **Invalid localStorage data** | Catch JSON.parse errors, reset to empty array |
| **Delete from empty list** | Function checks if todo exists before deleting |
| **Filter with zero matching todos** | Display "No todos yet" or "No active todos" message |
| **Rapid add/delete clicks** | State updates synchronously, no race conditions in vanilla JS |
| **No localStorage support** | App still works in-memory (data lost on refresh) |

---

## 9. Testing Strategy

### Unit Tests
- `escapeHtml()` - Test with special characters, normal text
- `generateUniqueId()` - Test uniqueness over multiple calls
- `getTodosByFilter()` - Test all, active, completed filters
- `updateStats()` - Test stat calculations with various todo states

### Integration Tests
- Add todo → appears in list and correct filter
- Toggle todo → appears completed, stats update
- Delete todo → removed from all views and storage
- Filter change → list re-renders correctly
- Page refresh → todos restore from localStorage

### Manual Testing Checklist
- [ ] Add multiple todos with various text (short, long, special chars)
- [ ] Toggle todos complete/incomplete multiple times
- [ ] Delete todos and verify removal
- [ ] Test each filter (All, Active, Completed)
- [ ] Verify stats update with every action
- [ ] Refresh page and verify data persists
- [ ] Test on mobile device (320px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1024px+ width)
- [ ] Keyboard navigation (Tab through elements, Enter to submit)
- [ ] Open DevTools → Application → localStorage, verify 'todos' key
- [ ] Open DevTools → Console, verify no errors

### Browser/Device Compatibility
- Chrome/Edge (desktop & mobile)
- Firefox (desktop & mobile)
- Safari (desktop & mobile)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 10. Notes & Assumptions

### Dependencies & Prerequisites
- Modern browser with ES6+ support (all current browsers)
- localStorage API available (99.5% of browsers)
- No external libraries or frameworks required

### Assumptions
1. Todos are simple text items (no markdown, no rich text)
2. Single user per browser (no multi-user sync needed)
3. Data stored locally only (no backend/server required)
4. Todos don't have due dates in MVP (phase 1)
5. No edit functionality in MVP (can be phase 2)

### Open Questions
- Should "Clear Completed" require confirmation? (Recommendation: No, add undo if needed)
- Should todos be sortable/reorderable? (Recommendation: Not in phase 1, add as phase 2)
- Should there be keyboard shortcuts? (Recommendation: Tab/Enter/Space for accessibility)

### Future Enhancement Possibilities
- **Phase 2**: Edit existing todos
- **Phase 2**: Due dates and reminders
- **Phase 3**: Categories/tags
- **Phase 3**: Dark mode
- **Phase 4**: Undo/Redo functionality
- **Phase 4**: Export/Import todos
- **Future**: Multi-device sync (requires backend)

---

## Implementation Status

### Ready to Build ✅
- [x] Specification complete
- [x] File structure planned
- [x] Architecture designed
- [x] Acceptance criteria defined
- [x] Technical requirements detailed

### Next Steps
1. Create `index.html` with semantic structure (Phase 1)
2. Implement `styles/style.css` with responsive design (Phase 2)
3. Build `js/app.js` with all features (Phases 3-6)
4. Manual testing (Phase 7)
5. Accessibility review and polish (Phase 7)
