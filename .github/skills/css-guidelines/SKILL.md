---
name: css-guidelines
description: "Mobile-first responsive CSS design for todo app. Use when writing or reviewing CSS with responsive layouts, media queries, and accessible styling."
---

# CSS Guidelines for Todo App

## When to Use

- Writing or reviewing CSS stylesheets
- Implementing responsive designs that work across devices
- Optimizing for mobile-first development
- Building touch-friendly and accessible styling

## Mobile-First Responsive Design

### Approach

1. **Start with mobile**: Write base styles for mobile devices (no media query needed)
2. **Enhance for larger screens**: Use `@media (min-width: ...)` to add desktop enhancements
3. **Avoid complexity**: Don't start with desktop-only styles

### Breakpoints

- **Mobile**: 0 to 640px (base styles, default)
- **Tablet**: 640px to 1024px (enhanced layout)
- **Desktop**: 1024px and up (full-featured layout)

### Example Mobile-First Structure

```css
/* Mobile styles (default) */
body {
  font-size: 16px;
  padding: 1rem;
}

.todo-list {
  display: block;
}

.todo-item {
  padding: 1rem;
  margin: 0.5rem 0;
}

/* Tablet and up */
@media (min-width: 640px) {
  body {
    padding: 2rem;
  }
  
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    max-width: 800px;
  }
  
  .todo-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## Responsive Design Principles

### Flexible Layouts
- Use flexbox or CSS Grid instead of fixed pixel widths
- Avoid absolute positioning for layouts
- Use percentages and relative units

### Readable Text
- **Mobile**: 16px minimum font size
- **Desktop**: Scale appropriately (18px-20px for body)
- Ensure sufficient line-height (1.5-1.8)

### Touch-Friendly UI
- Buttons and clickable elements: **44px minimum** on mobile
- Adequate spacing between interactive elements
- Avoid hover-only interactions on mobile

### Scalable Spacing
- Use `rem` and `em` units for easy scaling
- Define CSS custom properties (variables) for reusable values
- Example: `--spacing-unit: 1rem; padding: var(--spacing-unit);`

## Design Patterns for Todo App

### Layout Patterns
- **Mobile**: Single column layout (stacked)
- **Tablet**: Optional two-column or enhanced single column
- **Desktop**: Multi-column or side-by-side panels

### Button Organization
- **Mobile**: Stacked buttons (full width or side-by-side if space allows)
- **Desktop**: Inline buttons with consistent spacing

### Input Sizing
- **Mobile**: Full-width or nearly full-width inputs for better UX
- **Desktop**: Reasonable max-width (e.g., 400px)

## Performance Optimization

- Minimize CSS bundle size
- Avoid unnecessary nesting (BEM or similar methodology)
- Use CSS custom properties (variables) for reusable values
- Minimize animations and heavy effects on mobile devices

## Copilot-Assisted Workflow

Practice these Copilot interactions:
1. **Generation**: "Write mobile-first responsive CSS for a todo item"
2. **Review**: "Review this CSS for mobile-first best practices"
3. **Enhancement**: "Generate media queries for tablet and desktop breakpoints"
4. **Debugging**: "Why doesn't this layout work on mobile? Help me fix it"
5. **Explanation**: "Explain the mobile-first approach and how media queries work"

---

**Project Context**: This skill applies to the vanilla JavaScript todo app using CSS for responsive, mobile-first design without preprocessors or heavy tooling.
