# Todo App - File Structure Guide

## 📁 Complete Project Structure

```
todo-app-github-copilot/
├── README.md                          # Project overview and usage
├── index.html                         # Main app HTML (to be created)
│
├── styles/
│   └── style.css                      # Responsive CSS (to be created)
│
├── js/
│   └── app.js                         # App logic and state (to be created)
│
├── specs/                             # Specification documents
│   ├── core-todo-app-spec.md         # Main feature specification
│   ├── implementation-tasks.md        # Task breakdown and timeline
│   └── file-structure.md              # This file
│
└── .github/
    ├── copilot-instructions.md        # Project guidelines
    ├── prompts/                       # Copilot prompt templates
    │   ├── create-feature.prompt.md
    │   ├── create-unittest.prompt.md
    │   └── create-spec.prompt.md
    └── skills/                        # Domain-specific guidance
        ├── html-guidelines/
        │   └── SKILL.md
        ├── css-guidelines/
        │   └── SKILL.md
        └── js-guidelines/
            └── SKILL.md
```

---

## 📄 Core Files to Create

### 1. `index.html` (Main Application)
**Location**: Project root  
**Size**: ~150-200 lines  
**Dependencies**: None  
**Task**: Task 1.1

**Structure**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <header>
        <h1>My Todo List</h1>
    </header>
    
    <main>
        <section class="todo-container">
            <!-- Form for adding todos -->
            <form id="todo-form">
                <label for="todo-input">Add a new todo:</label>
                <input type="text" id="todo-input" placeholder="What needs to be done?">
                <button type="submit">Add</button>
            </form>
            
            <!-- Filter buttons -->
            <section class="todo-filters">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="active">Active</button>
                <button class="filter-btn" data-filter="completed">Completed</button>
            </section>
            
            <!-- Statistics display -->
            <section class="todo-stats">
                <p>Total: <span id="total-count">0</span></p>
                <p>Active: <span id="active-count">0</span></p>
                <p>Completed: <span id="completed-count">0</span></p>
            </section>
            
            <!-- Todo list -->
            <ul id="todo-list"></ul>
            
            <!-- Clear completed button -->
            <button id="clear-completed-btn" style="display:none;">Clear Completed</button>
        </section>
    </main>
    
    <script src="js/app.js"></script>
</body>
</html>
```

**Key Elements**:
- Form with ID `todo-form` for event listening
- Input with ID `todo-input` for text capture
- Filter buttons with `data-filter` attributes
- Empty `<ul id="todo-list">` populated by JavaScript
- Stats display with IDs for dynamic updates
- Script tag loads `app.js` at end

---

### 2. `styles/style.css` (Responsive Styling)
**Location**: `styles/style.css`  
**Size**: ~300-400 lines  
**Dependencies**: None  
**Task**: Task 1.2

**Key Sections**:
```css
/* 1. Reset & Base Styles (mobile-first) */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font: 16px sans-serif; background: #f5f5f5; }

/* 2. Layout & Container */
.todo-container { max-width: 800px; margin: 0 auto; padding: 16px; }

/* 3. Form & Input */
#todo-form { display: flex; gap: 8px; margin-bottom: 16px; }
#todo-input { flex: 1; padding: 12px; font-size: 16px; }
button { padding: 12px 16px; cursor: pointer; }

/* 4. Filters */
.todo-filters { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
.filter-btn { padding: 8px 16px; background: #e0e0e0; border: none; cursor: pointer; }
.filter-btn.active { background: #333; color: white; }

/* 5. Stats */
.todo-stats { display: flex; gap: 24px; margin-bottom: 16px; font-size: 14px; }

/* 6. Todo List */
#todo-list { list-style: none; }
.todo-item { display: flex; gap: 12px; padding: 12px; border-bottom: 1px solid #e0e0e0; align-items: center; }
.todo-item.completed .todo-text { text-decoration: line-through; opacity: 0.6; }
.todo-item input[type="checkbox"] { width: 20px; height: 20px; }
.todo-text { flex: 1; }

/* 7. Buttons */
.delete-btn { background: #ff4444; color: white; border: none; padding: 6px 12px; cursor: pointer; }
.delete-btn:hover { background: #dd0000; }

/* 8. Empty State */
.todo-item--empty { text-align: center; color: #999; padding: 40px 16px; }

/* 9. Responsive Breakpoints */
@media (min-width: 640px) {
    #todo-form { flex-direction: row; }
}

@media (min-width: 1024px) {
    .todo-container { max-width: 800px; }
    button:hover { opacity: 0.8; }
}
```

**Key Classes**:
- `.todo-container` - Main wrapper with max-width
- `.todo-form` - Form layout with flexbox
- `.todo-filters` - Filter button group
- `.filter-btn.active` - Active filter state
- `.todo-item` - Individual todo item
- `.todo-item.completed` - Completed state styling
- `.delete-btn` - Delete button styling
- `.todo-item--empty` - Empty state message

---

### 3. `js/app.js` (Application Logic)
**Location**: `js/app.js`  
**Size**: ~400-500 lines  
**Dependencies**: None  
**Tasks**: Tasks 2.1 - 4.3

**Structure**:
```javascript
// ============ STATE MANAGEMENT ============
const app = {
  todos: [],
  currentFilter: 'all',
  stats: { total: 0, active: 0, completed: 0 }
};

// ============ DOM REFERENCES ============
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const filterButtons = document.querySelectorAll('.filter-btn');
// ... more references

// ============ STORAGE FUNCTIONS ============
function loadFromStorage() { /* ... */ }
function saveToStorage(todos) { /* ... */ }

// ============ UTILITY FUNCTIONS ============
function escapeHtml(text) { /* ... */ }
function generateUniqueId() { /* ... */ }

// ============ CORE CRUD FUNCTIONS ============
function addTodo(text) { /* ... */ }
function removeTodo(id) { /* ... */ }
function toggleTodo(id) { /* ... */ }
function clearCompleted() { /* ... */ }

// ============ FILTER & STATS ============
function filterTodos(filter) { /* ... */ }
function getTodosByFilter(filter) { /* ... */ }
function updateStats() { /* ... */ }

// ============ RENDER FUNCTION ============
function render() { /* ... */ }

// ============ EVENT HANDLERS ============
todoForm.addEventListener('submit', (e) => { /* ... */ });
document.addEventListener('change', (e) => { /* ... */ });
document.addEventListener('click', (e) => { /* ... */ });

// ============ INITIALIZATION ============
function initializeApp() { /* ... */ }
document.addEventListener('DOMContentLoaded', initializeApp);
```

**Key Functions** (see task breakdown for details):
- **Storage**: `loadFromStorage()`, `saveToStorage()`
- **CRUD**: `addTodo()`, `removeTodo()`, `toggleTodo()`, `clearCompleted()`
- **Filter/Display**: `filterTodos()`, `getTodosByFilter()`, `updateStats()`
- **Render**: `render()` - main DOM update function
- **Utilities**: `escapeHtml()`, `generateUniqueId()`
- **Init**: `initializeApp()` - loads and sets up app

---

## 📚 Reference & Documentation Files

### `.github/copilot-instructions.md`
**Purpose**: Project guidelines and Copilot usage patterns  
**Contents**: Tech stack, conventions, file structure, development workflow  
**When to Use**: Quick reference for project context

### `.github/prompts/create-spec.prompt.md`
**Purpose**: Template for creating feature specifications  
**Contents**: Specification structure, sections, quality checklist  
**When to Use**: Writing new feature specs

### `.github/skills/html-guidelines/SKILL.md`
**Purpose**: HTML best practices and patterns for todo app  
**Contents**: Semantic HTML, accessibility, form patterns  
**When to Use**: While writing/reviewing HTML

### `.github/skills/css-guidelines/SKILL.md`
**Purpose**: CSS best practices and responsive design  
**Contents**: Mobile-first, breakpoints, flexbox patterns  
**When to Use**: While writing/reviewing CSS

### `.github/skills/js-guidelines/SKILL.md`
**Purpose**: JavaScript best practices and patterns  
**Contents**: ES6+, event handling, state management  
**When to Use**: While writing/reviewing JavaScript

### `specs/core-todo-app-spec.md`
**Purpose**: Complete feature specification with acceptance criteria  
**Contents**: User stories, technical requirements, data model  
**When to Use**: During implementation and testing

### `specs/implementation-tasks.md`
**Purpose**: Detailed task breakdown with phases  
**Contents**: 12 tasks organized in 6 phases with timelines  
**When to Use**: Project planning and progress tracking

---

## 🔄 File Dependency Graph

```
index.html
  ├── depends on: styles/style.css
  ├── depends on: js/app.js
  └── no external libraries

styles/style.css
  └── no dependencies
  └── supports: responsive design (no media query dependencies)

js/app.js
  ├── depends on: DOM structure from index.html
  ├── uses: localStorage (browser API)
  ├── no external libraries
  └── loads when: DOMContentLoaded event
```

---

## 📊 File Statistics

| File | Lines | Purpose |
|------|-------|---------|
| `index.html` | 150-200 | HTML structure |
| `styles/style.css` | 300-400 | Responsive styling |
| `js/app.js` | 400-500 | Application logic |
| **Total** | **~900 lines** | **Complete app** |

---

## 🚀 Phased Creation Order

### Phase 1: HTML Structure
1. Create `index.html` with all semantic elements

### Phase 2: CSS Styling
2. Create `styles/style.css` with responsive design

### Phase 3: JavaScript Logic
3. Create `js/app.js` with initialization and state

### Phase 4: CRUD Operations
4. Implement add/delete/toggle in `js/app.js`

### Phase 5: Filtering & Display
5. Add filter and stats functions to `js/app.js`

### Phase 6: Polish & Testing
6. Add UX features, accessibility, and testing

---

## 🎯 Development Workflow

### 1. Start Development
```bash
# Navigate to project
cd ~/workspace/todo-app-github-copilot

# Open in VS Code
code .

# Open index.html in browser for live testing
# Use Live Server extension or python -m http.server 8000
```

### 2. Edit Files
- Edit `index.html` for structure
- Edit `styles/style.css` for styling
- Edit `js/app.js` for logic

### 3. Test Incrementally
- Open browser and test after each phase
- Check DevTools Console for errors
- Verify localStorage in DevTools Application tab

### 4. Commit Progress
```bash
# After completing each task
git add .
git commit -m "feat: [task description]"
```

### 5. Reference Guidelines
- Use `.github/skills/html-guidelines/SKILL.md` when working on HTML
- Use `.github/skills/css-guidelines/SKILL.md` when working on CSS
- Use `.github/skills/js-guidelines/SKILL.md` when working on JavaScript

---

## ✅ File Creation Checklist

- [ ] `index.html` - Created with semantic structure
- [ ] `styles/style.css` - Created with responsive design
- [ ] `js/app.js` - Created with full functionality
- [ ] `specs/core-todo-app-spec.md` - Specification document
- [ ] `specs/implementation-tasks.md` - Task breakdown
- [ ] `README.md` - Updated with project info

---

## 📖 Quick Reference

**Where to find what**:
- **HTML structure** → See `index.html` outline above
- **CSS classes** → See `styles/style.css` key sections
- **JavaScript functions** → See `js/app.js` structure
- **Tasks to complete** → See `specs/implementation-tasks.md`
- **Feature requirements** → See `specs/core-todo-app-spec.md`
- **Best practices** → See `.github/skills/*.md`

