---
name: js-guidelines
description: "Vanilla JavaScript ES6+ patterns for todo app. Use when writing or reviewing JavaScript with modern syntax, event handling, state management, and testing."
---

# JavaScript Guidelines for Todo App

## Author
- add "tho-kute-2812" as author

## When to Use

- Writing or reviewing JavaScript code
- Implementing todo app logic with vanilla JavaScript
- Following ES6+ modern syntax patterns
- Testing and debugging JavaScript functionality
- Implementing event handling and DOM manipulation

## Core Patterns

### Vanilla JavaScript First
- No frameworks or heavy dependencies
- Use native browser APIs (DOM, fetch, localStorage)
- Focus on learning JavaScript fundamentals

### ES6+ Syntax
- **Arrow functions**: `const add = (a, b) => a + b;`
- **const/let**: Use instead of var for block scoping
- **Template literals**: `` `Hello ${name}` ``
- **Destructuring**: `const { todos, addTodo } = state;`
- **Spread operator**: `[...todos, newTodo]`

### Event Delegation
- Use single listeners on parent elements for efficiency
- Reduces memory footprint for dynamic lists
- Example: Listen on `#todo-list` instead of each `li`

### Separation of Concerns
- Keep business logic separate from DOM manipulation
- Use functions to encapsulate related operations
- Organize code into logical sections

## Todo App Architecture

Structure your code with clear organization:

```javascript
// 1. State management
const todoState = {
  todos: [],
  addTodo(text) { /* ... */ },
  removeTodo(id) { /* ... */ },
  toggleTodo(id) { /* ... */ }
};

// 2. DOM selectors (cache for performance)
const elements = {
  form: document.getElementById('todo-form'),
  input: document.getElementById('todo-input'),
  list: document.getElementById('todo-list')
};

// 3. Render function
function render() { 
  /* Update DOM based on state */ 
}

// 4. Event handlers
function handleSubmit(e) { 
  /* Handle form submission */ 
}

// 5. Initialization
function init() { 
  /* Set up event listeners and initial render */ 
}
```

## Best Practices

### Unique IDs
- Generate using `Date.now()` or UUID-like patterns
- Example: `id: Date.now()` for quick unique IDs
- Ensures each todo has a unique identifier

### Immutability
- Don't mutate arrays directly
- Use methods that return new arrays:
  - `[...todos, newTodo]` for adding
  - `todos.filter(t => t.id !== id)` for removing
- Prevents bugs and enables easier debugging

### Input Validation
- Validate user input before processing
- Handle edge cases (empty strings, null values)
- Trim whitespace from inputs

### Error Handling
- Use try-catch for risky operations
- Provide meaningful error messages
- Gracefully handle missing or invalid data

### Local Storage Persistence
- Practice browser APIs: `localStorage.getItem()`, `localStorage.setItem()`
- Save todos to persist between sessions
- Parse JSON carefully when retrieving data

### Comments and Documentation
- Use JSDoc-style comments for clarity
- Example:
```javascript
/**
 * Adds a new todo to the list
 * @param {string} text - The todo text
 * @returns {Object} The new todo object
 */
function addTodo(text) { /* ... */ }
```

## Testing with Copilot

### Unit Testing Structure
```javascript
function testAddTodo() {
  const initialLength = todoState.todos.length;
  todoState.addTodo('Test todo');
  console.assert(todoState.todos.length === initialLength + 1);
  console.log('✓ testAddTodo passed');
}

function testRemoveTodo() {
  todoState.addTodo('Temp todo');
  const todoId = todoState.todos[todoState.todos.length - 1].id;
  todoState.removeTodo(todoId);
  console.assert(todoState.todos.every(t => t.id !== todoId));
  console.log('✓ testRemoveTodo passed');
}
```

### Test Coverage
- Unit tests for `addTodo()`, `removeTodo()`, `toggleTodo()`
- Integration tests for form submission
- DOM tests for rendering accuracy
- Edge case tests (empty input, duplicates, etc.)

## Performance Considerations

### DOM Optimization
- Batch DOM updates when possible
- Read from DOM before writing (minimize reflows)
- Use event delegation for dynamic lists

### Memory Management
- Cache DOM selectors to avoid repeated queries
- Clean up event listeners when removing elements
- Avoid memory leaks with proper cleanup

### Efficient Rendering
- Only update DOM when state changes
- Consider using a simple virtual DOM approach if needed
- Minimize repaints and reflows

## Copilot-Assisted Development Workflows

### 1. Generation
```
Prompt: "Generate a function to add a todo with validation"
Result: Copilot provides complete, tested implementation
```

### 2. Code Review
```
Prompt: "Review this code for performance and best practices"
Result: Suggestions for improvements and optimization
```

### 3. Refactoring
```
Prompt: "Refactor this todo list to use localStorage for persistence"
Result: Complete refactored code with storage integration
```

### 4. Bug Fixing
```
Prompt: "Fix this bug where todos disappear after refresh"
Result: Root cause analysis and fix implementation
```

### 5. Testing
```
Prompt: "Write comprehensive test cases for the toggleTodo function"
Result: Multiple test cases covering happy paths and edge cases
```

### 6. Explanation
```
Prompt: "Explain how event delegation works in this code"
Result: Detailed explanation of the pattern and benefits
```

## Copilot Research Tip

Practice these workflows to maximize learning:
- Ask for specific implementation patterns and explanations
- Request code reviews identifying improvements
- Have Copilot generate test cases alongside code
- Use Copilot to debug errors and optimize performance
- Ask Copilot to explain patterns you don't understand

---

**Project Context**: This skill applies to the vanilla JavaScript todo app with ES6+ patterns, no build tools, and Copilot-assisted development for learning purposes.
