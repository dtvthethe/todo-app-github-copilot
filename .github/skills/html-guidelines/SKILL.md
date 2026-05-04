---
name: html-guidelines
description: "Semantic HTML markup and accessibility best practices for todo app. Use when writing or reviewing HTML with semantic structure, ARIA labels, and todo app patterns."
---

# HTML Guidelines for Todo App

## When to Use

- Writing or reviewing HTML markup for the todo app
- Building accessible forms and interactive elements
- Implementing semantic structure for search engine optimization and assistive technology support
- Following accessibility (a11y) best practices

## Semantic Structure

Use semantic tags to convey meaning and improve accessibility:

- **Semantic tags**: `<header>`, `<main>`, `<section>`, `<form>`, `<button>` instead of generic `<div>`
- **Todo input**: Use `<form>` for the todo input (supports Enter key natively)
- **Todo items**: Use `<input type="checkbox">` for todo completion state
- **Interactive elements**: Use `<button>` with proper `type` attributes

## Accessibility (a11y) Standards

### Form Labels
- Include `<label>` elements for all form inputs with `for` attribute
- Example: `<input id="todo-input">` paired with `<label for="todo-input">`

### ARIA Attributes
- Add `aria-label` or `title` for icon-only buttons
- Use `aria-checked` for custom checkbox states if needed
- Ensure color isn't the only indicator (pair with icons/text)

### Heading Hierarchy
- Maintain proper heading hierarchy: `<h1>` → `<h2>` → `<h3>`
- Avoid skipping heading levels

## Todo App Structure Example

```html
<form id="todo-form">
  <input 
    type="text" 
    id="todo-input" 
    placeholder="Add a new todo..."
    required
  >
  <button type="submit">Add</button>
</form>

<ul id="todo-list" class="todo-list">
  <li class="todo-item">
    <input type="checkbox" class="todo-checkbox" aria-label="Mark todo complete">
    <span class="todo-text">Sample todo</span>
    <button class="todo-delete" aria-label="Delete todo">✕</button>
  </li>
</ul>
```

## Meta and Performance

- **Viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- **CSS location**: Link CSS in `<head>`
- **JavaScript location**: Place scripts before closing `</body>` tag
- **Metadata**: Include title and description meta tags

## Copilot-Assisted Workflow

Practice these Copilot interactions:
1. **Generation**: "Generate semantic HTML for a todo item with accessibility features"
2. **Review**: "Review this HTML for accessibility issues and semantic correctness"
3. **Explanation**: "Explain how to use ARIA labels in this form"
4. **Enhancement**: "Add accessibility improvements to this HTML structure"

---

**Project Context**: This skill applies to the vanilla JavaScript todo app with semantic, accessible HTML structure following web standards and WCAG guidelines.
