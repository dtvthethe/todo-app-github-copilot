/**
 * Todo App - Vanilla JavaScript Application
 * @author tho-kute-2812
 * A lightweight, responsive todo application built with vanilla JavaScript
 */

// ============================================================================
// DOM Element References (Cache for Performance)
// ============================================================================

const elements = {
  todoForm: document.getElementById('todo-form'),
  todoInput: document.getElementById('todo-input'),
  todoList: document.getElementById('todo-list'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  totalCount: document.getElementById('total-count'),
  activeCount: document.getElementById('active-count'),
  completedCount: document.getElementById('completed-count'),
  emptyState: document.getElementById('empty-state'),
};

// ============================================================================
// App State Management
// ============================================================================

/**
 * Application state object
 * Maintains the single source of truth for the app
 */
const app = {
  todos: [],
  currentFilter: 'all',
  stats: {
    total: 0,
    active: 0,
    completed: 0,
  },
};

// ============================================================================
// Local Storage Functions
// ============================================================================

/**
 * Loads todos from localStorage
 * @returns {Array} Array of todos or empty array if none found
 */
function loadFromStorage() {
  try {
    const stored = localStorage.getItem('todos');
    if (!stored) {
      return [];
    }
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error loading todos from storage:', error);
    return [];
  }
}

/**
 * Saves todos to localStorage
 * @param {Array} todos - Array of todos to save
 * @returns {void}
 */
function saveToStorage(todos) {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos to storage:', error);
  }
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Escapes HTML special characters to prevent XSS attacks
 * @param {string} text - The text to escape
 * @returns {string} Escaped text safe for HTML
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Generates a unique ID for todos
 * @returns {string} Unique ID string
 */
function generateUniqueId() {
  return `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Updates statistics based on current todos
 * @returns {void}
 */
function updateStats() {
  const total = app.todos.length;
  const active = app.todos.filter((todo) => !todo.completed).length;
  const completed = app.todos.filter((todo) => todo.completed).length;

  app.stats = { total, active, completed };

  // Update DOM
  elements.totalCount.textContent = total;
  elements.activeCount.textContent = active;
  elements.completedCount.textContent = completed;
}

// ============================================================================
// Core App Functions
// ============================================================================

/**
 * Adds a new todo to the list
 * @param {string} text - The todo text
 * @returns {void}
 */
function addTodo(text) {
  const trimmed = text.trim();

  if (!trimmed) {
    console.warn('Cannot add empty todo');
    return;
  }

  const newTodo = {
    id: generateUniqueId(),
    text: trimmed,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  app.todos.push(newTodo);
  saveToStorage(app.todos);
  render();
}

/**
 * Removes a todo from the list
 * @param {string} id - The todo ID to remove
 * @returns {void}
 */
function removeTodo(id) {
  app.todos = app.todos.filter((todo) => todo.id !== id);
  saveToStorage(app.todos);
  render();
}

/**
 * Toggles a todo's completed state
 * @param {string} id - The todo ID to toggle
 * @returns {void}
 */
function toggleTodo(id) {
  const todo = app.todos.find((t) => t.id === id);

  if (todo) {
    todo.completed = !todo.completed;
    todo.completedAt = todo.completed ? new Date().toISOString() : null;
    saveToStorage(app.todos);
    render();
  }
}

/**
 * Filters todos by status
 * @param {string} filter - Filter type: 'all', 'active', or 'completed'
 * @returns {Array} Filtered todos
 */
function getTodosByFilter(filter) {
  switch (filter) {
    case 'active':
      return app.todos.filter((todo) => !todo.completed);
    case 'completed':
      return app.todos.filter((todo) => todo.completed);
    case 'all':
    default:
      return app.todos;
  }
}

/**
 * Sets the current filter
 * @param {string} filter - Filter type: 'all', 'active', or 'completed'
 * @returns {void}
 */
function setFilter(filter) {
  app.currentFilter = filter;

  // Update active filter button styling
  elements.filterButtons.forEach((btn) => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    }
  });

  render();
}

// ============================================================================
// Render Function - Update DOM Based on State
// ============================================================================

/**
 * Renders the todo list based on current state and filter
 * @returns {void}
 */
function render() {
  const filteredTodos = getTodosByFilter(app.currentFilter);

  // Clear the list
  elements.todoList.innerHTML = '';

  // Show/hide empty state
  if (filteredTodos.length === 0) {
    elements.emptyState.classList.add('show');
  } else {
    elements.emptyState.classList.remove('show');
  }

  // Render filtered todos
  filteredTodos.forEach((todo) => {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    li.role = 'listitem';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    checkbox.checked = todo.completed;
    checkbox.dataset.id = todo.id;
    checkbox.setAttribute(
      'aria-label',
      `Mark "${escapeHtml(todo.text)}" as ${
        todo.completed ? 'incomplete' : 'complete'
      }`
    );

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'todo-delete';
    deleteBtn.type = 'button';
    deleteBtn.textContent = '✕';
    deleteBtn.dataset.id = todo.id;
    deleteBtn.setAttribute('aria-label', `Delete todo: ${escapeHtml(todo.text)}`);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    elements.todoList.appendChild(li);
  });

  // Update stats
  updateStats();
}

// ============================================================================
// Event Handlers
// ============================================================================

/**
 * Handles form submission to add new todo
 * @param {Event} e - Form submission event
 * @returns {void}
 */
function handleFormSubmit(e) {
  e.preventDefault();

  const text = elements.todoInput.value;
  addTodo(text);

  // Clear input and focus for next entry
  elements.todoInput.value = '';
  elements.todoInput.focus();
}

/**
 * Handles filter button clicks
 * @param {Event} e - Click event
 * @returns {void}
 */
function handleFilterClick(e) {
  if (e.target.classList.contains('filter-btn')) {
    const filter = e.target.dataset.filter;
    setFilter(filter);
  }
}

/**
 * Handles todo list interactions (delegation)
 * @param {Event} e - Click event
 * @returns {void}
 */
function handleTodoListClick(e) {
  const checkbox = e.target.closest('.todo-checkbox');
  const deleteBtn = e.target.closest('.todo-delete');

  if (checkbox) {
    const id = checkbox.dataset.id;
    toggleTodo(id);
  } else if (deleteBtn) {
    const id = deleteBtn.dataset.id;
    removeTodo(id);
  }
}

// ============================================================================
// Initialization
// ============================================================================

/**
 * Initializes the todo app
 * Loads todos from storage, sets up event listeners, and renders initial state
 * @returns {void}
 */
function initializeApp() {
  // Load todos from storage
  app.todos = loadFromStorage();

  // Set up event listeners
  elements.todoForm.addEventListener('submit', handleFormSubmit);
  document.addEventListener('click', handleFilterClick);
  elements.todoList.addEventListener('click', handleTodoListClick);

  // Set initial active filter
  setFilter('all');

  // Render initial state
  render();

  console.log('✓ Todo app initialized successfully');
}

// ============================================================================
// App Entry Point
// ============================================================================

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already ready
  initializeApp();
}
