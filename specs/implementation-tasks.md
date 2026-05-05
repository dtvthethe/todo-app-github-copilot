# Todo App - Implementation Task Breakdown

## 🎯 Project Overview
Build a vanilla JavaScript todo app with add, complete, delete, filter, and localStorage features.

**Total Estimated Tasks**: 12 core tasks (7-10 hours)  
**Recommended Approach**: Complete in sequence to maintain clean git history

---

## 📋 Phase 1: Foundation (2-3 hours)

### Task 1.1: Create HTML Structure
**Objective**: Build semantic, accessible HTML markup

**Deliverables**:
- [ ] Create `index.html` at project root
- [ ] Add `<meta>` tags (viewport, charset)
- [ ] Create form section with:
  - Text input (`#todo-input`)
  - Submit button
  - Form ID (`#todo-form`)
- [ ] Create filters section with:
  - Three buttons with `data-filter` attributes (all, active, completed)
  - Class `filter-btn` on each
- [ ] Create stats display section showing:
  - Total todos count
  - Active todos count
  - Completed todos count
- [ ] Create todo list container (`<ul id="todo-list">`)
- [ ] Add empty state message
- [ ] Link `styles/style.css` in `<head>`
- [ ] Link `js/app.js` at end of `<body>`

**Acceptance**: HTML validates, semantic structure used, no console errors

**Git Commit**: `feat: Create semantic HTML structure for todo app`

---

### Task 1.2: Add Mobile-First CSS Styles
**Objective**: Implement responsive CSS with mobile as base

**Deliverables**:
- [ ] Create `styles/style.css`
- [ ] Base styles (mobile-first, 320px+):
  - Reset/normalize (margin, padding, box-sizing)
  - Base font size: 16px
  - Body background, text color, font-family
  - Container with 16px padding
- [ ] Form styles:
  - Input: full-width, 44px height, 12px padding
  - Button: 44px height, 12px+ padding, cursor pointer
  - Focus states (outline or background)
- [ ] Filter section:
  - Flexbox layout, wrap on mobile
  - Button spacing and styling
  - Active state styling (.filter-btn.active)
- [ ] Stats section:
  - Display stats in readable format
  - Responsive stacking if needed
- [ ] Todo list styles:
  - `<li>` display as flex items
  - Checkbox + text + delete button layout
  - Completed todo: strikethrough, opacity 0.6
- [ ] Responsive breakpoints:
  - Tablet (640px): Container improvements
  - Desktop (1024px): Max-width 800px, hover effects

**Acceptance**: Responsive on mobile/tablet/desktop, no layout issues, WCAG AA contrast

**Git Commit**: `feat: Add mobile-first CSS styles and responsive design`

---

## 📋 Phase 2: Core Logic (2-3 hours)

### Task 2.1: Set Up JavaScript - State & Initialization
**Objective**: Create app state and initialization function

**Deliverables**:
- [ ] Create `js/app.js`
- [ ] Define app state object with structure:
  ```javascript
  {
    todos: [],
    currentFilter: 'all',
    stats: { total: 0, active: 0, completed: 0 }
  }
  ```
- [ ] Implement `loadFromStorage()`:
  - Load 'todos' from localStorage
  - Parse JSON
  - Return todos or empty array
  - Handle errors with try-catch
- [ ] Implement `saveToStorage(todos)`:
  - Serialize todos to JSON
  - Save to localStorage['todos']
  - Handle storage errors
- [ ] Implement `initializeApp()`:
  - Load todos from storage
  - Initialize state
  - Set up event listeners
  - Call initial render
- [ ] Implement `escapeHtml(text)`:
  - Replace `<`, `>`, `&`, `"`, `'` with HTML entities
  - Prevent XSS attacks
- [ ] Add DOM element references at top of file:
  - `todoForm`, `todoInput`, `todoList`, `filterButtons`, etc.
- [ ] Call `initializeApp()` on page load

**Acceptance**: App initializes without errors, todos load from storage, state is managed

**Git Commit**: `feat: Implement app initialization and state management`

---

### Task 2.2: Implement Add Todo Feature
**Objective**: Allow users to add new todos via form

**Deliverables**:
- [ ] Implement `addTodo(text)` function:
  - Validate: text not empty, trim whitespace
  - Generate unique ID: `todo-${Date.now()}-${Math.random()}`
  - Create todo object with: id, text, completed: false, createdAt
  - Add to `app.todos` array
  - Save to localStorage
  - Call render
- [ ] Add form submit handler:
  - Get text from `#todo-input`
  - Call `addTodo(text)`
  - Clear input field
  - Focus input for next entry
  - Prevent default form submission
- [ ] Implement `generateUniqueId()` helper if needed
- [ ] Test: Add todos and verify they appear in list

**Acceptance**: Form submission adds todos, input clears, todos save and persist

**Git Commit**: `feat: Implement addTodo function and form submission`

---

### Task 2.3: Implement Delete Todo Feature
**Objective**: Allow users to remove todos

**Deliverables**:
- [ ] Implement `removeTodo(id)` function:
  - Find todo by ID in `app.todos`
  - Remove from array (splice or filter)
  - Save to localStorage
  - Call render
- [ ] Add event delegation for delete buttons:
  - Listen for `click` on `#todo-list`
  - Check if clicked element has `.delete-btn` class
  - Extract todo ID from data attribute
  - Call `removeTodo(id)`
- [ ] Update `render()` to create delete buttons:
  - Button with class `delete-btn`
  - Data attribute with todo ID: `data-id`
  - ARIA label: "Delete todo"
- [ ] Test: Delete todos and verify removal

**Acceptance**: Delete buttons work, todos removed, data persists

**Git Commit**: `feat: Implement removeTodo function and delete handler`

---

### Task 2.4: Implement Toggle Complete Feature
**Objective**: Allow users to mark todos complete/incomplete

**Deliverables**:
- [ ] Implement `toggleTodo(id)` function:
  - Find todo by ID
  - Toggle `completed` boolean
  - Set `completedAt` timestamp if completed, null if incomplete
  - Save to localStorage
  - Call render
- [ ] Add event delegation for checkboxes:
  - Listen for `change` on `#todo-list`
  - Check if changed element is checkbox
  - Extract todo ID
  - Call `toggleTodo(id)`
- [ ] Update `render()` to create checkboxes:
  - Checkbox input with type="checkbox"
  - Set `checked` attribute based on `todo.completed`
  - Data attribute with todo ID
- [ ] Add visual styling for completed todos:
  - Apply `.completed` class to completed `<li>` items
  - CSS shows strikethrough and reduced opacity
- [ ] Test: Toggle todos multiple times, verify visual feedback

**Acceptance**: Checkboxes toggle state, visual feedback shows, data persists

**Git Commit**: `feat: Implement toggleTodo function and checkbox handler`

---

## 📋 Phase 3: Filter & Display (1-2 hours)

### Task 3.1: Implement Filter Functionality
**Objective**: Filter todos by All/Active/Completed status

**Deliverables**:
- [ ] Implement `getTodosByFilter(filter)` function:
  - If filter === 'all': return all todos
  - If filter === 'active': return todos where !completed
  - If filter === 'completed': return todos where completed
  - Default to 'all'
- [ ] Implement `filterTodos(filter)` function:
  - Set `app.currentFilter = filter`
  - Update active filter button styling:
    - Add `.active` class to selected filter button
    - Remove `.active` from others
  - Call render
- [ ] Add click handler for filter buttons:
  - Get `data-filter` attribute value
  - Call `filterTodos(filter)`
- [ ] Update `render()` function:
  - Get filtered todos using `getTodosByFilter(app.currentFilter)`
  - Render only filtered todos
  - Show empty state if no todos match filter
- [ ] Test: Switch between filters, verify correct todos display

**Acceptance**: Filters work, active state shows, correct todos display in each filter

**Git Commit**: `feat: Add filter functionality (All/Active/Completed)`

---

### Task 3.2: Implement Statistics Display
**Objective**: Show total, active, and completed todo counts

**Deliverables**:
- [ ] Implement `updateStats()` function:
  - Calculate `total`: length of all todos
  - Calculate `active`: length of todos where !completed
  - Calculate `completed`: length of todos where completed
  - Update `app.stats` object
  - Update DOM with stats display
- [ ] Add stats display elements to HTML (if not already done):
  - Element for total count
  - Element for active count
  - Element for completed count
- [ ] Call `updateStats()` from `render()` function
- [ ] Test: Add/delete/toggle todos, verify stats update correctly

**Acceptance**: Stats calculate correctly, update on every action, display is clear

**Git Commit**: `feat: Add statistics display with counts`

---

## 📋 Phase 4: Enhancement & Polish (1-2 hours)

### Task 4.1: localStorage Persistence & Initialization
**Objective**: Ensure data persists across sessions

**Deliverables**:
- [ ] Verify all CRUD operations save to localStorage:
  - addTodo saves
  - removeTodo saves
  - toggleTodo saves
- [ ] Test page refresh:
  - Add todos, refresh page
  - Verify todos load correctly
  - Verify filter state resets to 'all' (or remember filter)
- [ ] Handle edge cases:
  - Empty localStorage on first load
  - Invalid JSON data recovery
  - localStorage full errors (optional: fallback to memory)

**Acceptance**: Data persists, no errors on refresh, empty state handled

**Git Commit**: `feat: Integrate localStorage persistence`

---

### Task 4.2: Empty State & "Clear Completed" Feature
**Objective**: Improve UX with empty states and bulk actions

**Deliverables**:
- [ ] Add empty state display:
  - When no todos in current filter
  - Show message: "No todos yet" or "No active todos"
  - Centered, gray text
- [ ] Implement `clearCompleted()` function:
  - Filter out all completed todos
  - Update `app.todos`
  - Save to localStorage
  - Call render
- [ ] Add "Clear Completed" button:
  - Only show when completed todos exist
  - Call `clearCompleted()` on click
  - Could add optional confirmation
- [ ] Test: Add/complete todos, clear completed, verify removal

**Acceptance**: Empty state displays appropriately, clear completed works, data persists

**Git Commit**: `feat: Add empty state display and clear completed functionality`

---

### Task 4.3: Accessibility Improvements
**Objective**: Enhance a11y with ARIA labels and keyboard navigation

**Deliverables**:
- [ ] Add ARIA labels:
  - Delete buttons: `aria-label="Delete todo: [todo text]"`
  - Form: `aria-labelledby` or `<label>` association
  - Section landmarks: `aria-label` if needed
- [ ] Verify keyboard navigation:
  - Tab through all interactive elements
  - Enter submits form
  - Space toggles checkboxes
  - All elements have visible focus indicators
- [ ] Test with screen reader (optional):
  - Navigation structure is clear
  - Labels are descriptive
- [ ] Verify color contrast:
  - WCAG AA minimum on all text
  - Don't rely on color alone for status

**Acceptance**: Keyboard navigation smooth, ARIA labels present, no a11y issues

**Git Commit**: `refactor: Improve accessibility with ARIA labels and keyboard support`

---

### Task 4.4: Code Quality & Documentation
**Objective**: Add comments and clean up code

**Deliverables**:
- [ ] Add JSDoc comments to all functions:
  ```javascript
  /**
   * Adds a new todo to the list
   * @param {string} text - The todo text
   * @returns {void}
   */
  function addTodo(text) { ... }
  ```
- [ ] Remove any debug console.logs
- [ ] Verify consistent code style and formatting
- [ ] Check for any unused variables or dead code
- [ ] Add inline comments for complex logic
- [ ] Test entire app one final time

**Acceptance**: Code is well-documented, no errors, readable and maintainable

**Git Commit**: `docs: Add JSDoc comments and code documentation`

---

## 📋 Phase 5: Testing & Validation (1-2 hours)

### Task 5.1: Manual Testing
**Objective**: Comprehensive manual testing across browsers and devices

**Deliverables**:
- [ ] **Core Functionality**:
  - [ ] Add todo with various text (short, long, special chars)
  - [ ] Delete existing todo
  - [ ] Toggle todo complete/incomplete
  - [ ] Filter All/Active/Completed
  - [ ] View statistics
  - [ ] Refresh page and verify data persists
  
- [ ] **Edge Cases**:
  - [ ] Try adding empty text (should not create)
  - [ ] Add many todos (100+) - verify performance
  - [ ] Delete all todos - verify empty state
  - [ ] Clear completed when no completed todos exist

- [ ] **Responsive Design**:
  - [ ] Mobile (320px) - no horizontal scroll, readable
  - [ ] Tablet (768px) - layout looks good
  - [ ] Desktop (1024px+) - full-width layout centered

- [ ] **Browser/Device**:
  - [ ] Chrome desktop
  - [ ] Firefox desktop
  - [ ] Safari desktop (if available)
  - [ ] Mobile browser (iOS Safari or Chrome Mobile)

- [ ] **Keyboard Navigation**:
  - [ ] Tab through all elements
  - [ ] Enter submits form
  - [ ] Space toggles checkboxes
  - [ ] All focus indicators visible

- [ ] **Developer Console**:
  - [ ] No JavaScript errors
  - [ ] No warnings
  - [ ] localStorage contains correct 'todos' key with valid JSON

**Acceptance**: All tests pass, no bugs found, ready for use

**Git Commit**: `test: Manual testing and validation complete`

---

## 📋 Phase 6: Documentation (30 min)

### Task 6.1: Update Project Documentation
**Objective**: Create clear README and setup instructions

**Deliverables**:
- [ ] Update `README.md`:
  - Clear description of todo app
  - Features list
  - How to use (browser open `index.html`)
  - Technology stack
  - Project structure
  - Development notes
  - Links to implementation spec
- [ ] Add feature screenshots or description (optional)
- [ ] Document any browser requirements

**Acceptance**: README is clear, new users can understand and run app

**Git Commit**: `docs: Update README with feature documentation`

---

## 🗓️ Timeline Summary

| Phase | Tasks | Est. Hours | Focus |
|-------|-------|-----------|-------|
| 1 | HTML + CSS | 2-3 hrs | Structure & styling |
| 2 | Core Logic | 2-3 hrs | Add, delete, toggle |
| 3 | Filter & Display | 1-2 hrs | Filtering, stats |
| 4 | Polish | 1-2 hrs | UX, a11y, docs |
| 5 | Testing | 1-2 hrs | Validation, bugs |
| 6 | Documentation | 0.5 hr | README, setup |
| **Total** | **12 tasks** | **7-10 hrs** | **Full feature app** |

---

## 🔧 Development Tools & Setup

**No build tools required** - Open `index.html` in browser directly

### Local Development
```bash
# Option 1: Open directly
open index.html

# Option 2: Use Python SimpleHTTPServer (if on older Python)
python -m SimpleHTTPServer 8000

# Option 3: Use Python 3 http.server
python -m http.server 8000

# Option 4: Use Node.js http-server
npx http-server

# Option 5: Use Live Server in VS Code
# Install "Live Server" extension, right-click index.html, "Open with Live Server"
```

### Browser DevTools
- **Application tab**: Check localStorage['todos']
- **Console**: Verify no errors
- **Elements**: Inspect HTML structure
- **Network**: Check assets load
- **Responsive Design Mode**: Test different screen sizes

---

## 📚 Reference Files

- **Specification**: [specs/core-todo-app-spec.md](specs/core-todo-app-spec.md)
- **HTML Guidelines**: [.github/skills/html-guidelines/SKILL.md](.github/skills/html-guidelines/SKILL.md)
- **CSS Guidelines**: [.github/skills/css-guidelines/SKILL.md](.github/skills/css-guidelines/SKILL.md)
- **JS Guidelines**: [.github/skills/js-guidelines/SKILL.md](.github/skills/js-guidelines/SKILL.md)

---

## ✅ Success Criteria

When all tasks are complete:
- ✅ App is fully functional with all 5 core features
- ✅ Responsive on mobile, tablet, and desktop
- ✅ Data persists with localStorage
- ✅ Accessible (WCAG AA compliance)
- ✅ Code is documented and maintainable
- ✅ No console errors
- ✅ Tested on multiple browsers/devices
- ✅ README documents how to use

---

## 🚀 Next Steps

1. Start with **Task 1.1**: Create index.html
2. Follow tasks in sequence for clean git history
3. Reference the specification for detailed requirements
4. Use the skills guides for best practices
5. Test thoroughly before moving to next phase
6. Commit frequently with atomic, descriptive messages

