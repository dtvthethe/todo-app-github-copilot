# 📋 Todo App - Detailed Specification & Implementation Plan

## 1. 🏗️ Architecture Overview

### System Architecture

```
┌─────────────────────────────────────────┐
│          Todo App (Vanilla JS)          │
├─────────────────────────────────────────┤
│                                          │
│  ┌──────────────────────────────────┐  │
│  │    UI Layer (HTML + CSS)         │  │
│  │  ┌────────────────────────────┐ │  │
│  │  │ Form & Input Components    │ │  │
│  │  │ Todo List & Items Display  │ │  │
│  │  │ Controls & Interactions    │ │  │
│  │  └────────────────────────────┘ │  │
│  └──────────────────────────────────┘  │
│           ▲                              │
│           │ DOM Events                   │
│           ▼                              │
│  ┌──────────────────────────────────┐  │
│  │  Logic Layer (JavaScript ES6+)   │  │
│  │  ┌────────────────────────────┐ │  │
│  │  │ State Management           │ │  │
│  │  │ Event Handlers             │ │  │
│  │  │ Render Functions           │ │  │
│  │  │ Utility Functions          │ │  │
│  │  └────────────────────────────┘ │  │
│  └──────────────────────────────────┘  │
│           ▲                              │
│           │ Read/Write                   │
│           ▼                              │
│  ┌──────────────────────────────────┐  │
│  │   Data Layer (localStorage)      │  │
│  │  - Persist Todo List             │  │
│  │  - Load on App Initialization    │  │
│  └──────────────────────────────────┘  │
│                                          │
└─────────────────────────────────────────┘
```

### Design Principles

- **Mobile-First**: Thiết kế từ mobile trước, mở rộng cho desktop
- **Separation of Concerns**: Tách biệt UI, Logic, và Data
- **Accessibility-First**: WCAG compliant, semantic HTML
- **No Dependencies**: Vanilla JS, không dùng frameworks
- **Responsive**: Một stylesheet cho tất cả device sizes

---

## 2. 🎯 Component Structure

### Component Hierarchy

```
<html>
├── <head>
│   ├── Meta tags (viewport, charset, etc)
│   └── <link> CSS files
└── <body>
    ├── <header>
    │   └── <h1>App Title</h1>
    ├── <main>
    │   ├── <section class="todo-container">
    │   │   ├── <form id="todo-form">
    │   │   │   ├── <label>
    │   │   │   ├── <input type="text"> 
    │   │   │   └── <button type="submit">
    │   │   │
    │   │   ├── <section class="todo-stats">
    │   │   │   ├── <p>Total todos
    │   │   │   ├── <p>Completed
    │   │   │   └── <p>Remaining
    │   │   │
    │   │   ├── <section class="todo-filters">
    │   │   │   ├── <button>All
    │   │   │   ├── <button>Active
    │   │   │   └── <button>Completed
    │   │   │
    │   │   └── <ul id="todo-list">
    │   │       └── <li class="todo-item"> (repeating)
    │   │           ├── <input type="checkbox">
    │   │           ├── <span class="todo-text">
    │   │           ├── <button class="edit-btn">
    │   │           └── <button class="delete-btn">
    │   │
    │   └── <footer>
    │       └── <p>Clear Completed / Info
    │
    └── <script> JS files
```

---

## 3. 💾 State Management

### Data Model

```javascript
// Todo Item Structure
{
  id: "todo-{timestamp}",        // Unique identifier
  text: "Buy groceries",         // Todo content
  completed: false,              // Completion status
  createdAt: 1620000000000,     // Creation timestamp
  completedAt: null             // Completion timestamp (if completed)
}
```

### State Structure

```javascript
// Main State Object
{
  todos: [
    // Array of todo items
  ],
  filters: {
    active: 'all',  // 'all' | 'active' | 'completed'
  },
  
  // Methods
  addTodo(text),
  removeTodo(id),
  toggleTodo(id),
  getTodosByFilter(filter),
  getStats()
}
```

---

## 4. 📌 Core Features (Phase 1)

1. **Add Todo** - Form submission, validation, state update, render
2. **Delete Todo** - Remove from array, update render
3. **Toggle Complete** - Checkbox handler, visual feedback (strikethrough)
4. **Statistics** - Display total, completed, remaining counts
5. **Filter** - All/Active/Completed views
6. **localStorage** - Persist and restore data

---

## 5. 📂 File Structure

```
todo-app-github-copilot/
├── README.md
├── index.html                 # Main HTML file
├── styles/
│   └── style.css             # Main stylesheet (responsive)
├── js/
│   └── app.js                # Main app logic & initialization
└── .github/
    ├── copilot-instructions.md
    ├── prompts/
    ├── skills/
```

---

## 6. 🎯 Development Priority (Phases)

### Phase 1: Foundation (Core Features)
1. HTML Structure - semantic, form, list, buttons
2. CSS Styling - mobile-first responsive design
3. JavaScript - State + addTodo function
4. JavaScript - removeTodo function
5. JavaScript - toggleTodo function

### Phase 2: Enhancement
6. Statistics display (total, completed, remaining)
7. Filter functionality (All/Active/Completed)
8. localStorage integration (save & load)

### Phase 3: Polish
9. Accessibility improvements (ARIA labels, keyboard nav)
10. Polish & optimization (animations, empty states)
11. Testing & documentation

### Phase 4: Optional
- Edit existing todos
- Due dates
- Dark mode
- Undo/Redo

---

## 7. 🎨 Design Considerations

### Responsive Breakpoints
- **Mobile**: 0-640px (base styles)
- **Tablet**: 640px-1024px (enhanced layout)
- **Desktop**: 1024px+ (full-featured)

### Accessibility (a11y)
- Semantic HTML (form, button, input, ul/li)
- ARIA labels for icon buttons
- Keyboard navigation (Tab, Enter, Space)
- Minimum font: 16px on mobile
- WCAG AA color contrast
- Visible focus indicators

### Mobile-First CSS
- Base: Single column, full-width, vertical spacing
- Tablet: Add container max-width, horizontal padding
- Desktop: Max-width 800px, hover effects

---

## 8. 🔗 Reference Skills

**When implementing, reference**:
- [HTML Guidelines](/.github/skills/html-guidelines/SKILL.md) - Semantic HTML, forms, a11y
- [CSS Guidelines](/.github/skills/css-guidelines/SKILL.md) - Mobile-first, responsive, flexbox
- [JS Guidelines](/.github/skills/js-guidelines/SKILL.md) - ES6+, event handling, state management

---

## 9. 📝 Git Commit Strategy (Atomic)

```
1. feat: Create semantic HTML structure for todo app
2. feat: Add mobile-first CSS styles and responsive design
3. feat: Implement addTodo function and form submission
4. feat: Implement removeTodo function and delete handler
5. feat: Implement toggleTodo function and checkbox handler
6. feat: Add statistics display with counts
7. feat: Add filter functionality (All/Active/Completed)
8. feat: Integrate localStorage persistence
9. refactor: Improve accessibility with ARIA labels
10. docs: Add README and function documentation
```

---

## 10. ✅ Manual Testing Checklist

- [ ] Can add todos with text
- [ ] Can delete todos from list
- [ ] Can toggle todos complete/incomplete
- [ ] Stats update correctly
- [ ] Filters work correctly
- [ ] Data persists after page refresh
- [ ] Responsive on mobile, tablet, desktop
- [ ] Keyboard navigation works
- [ ] No console errors
