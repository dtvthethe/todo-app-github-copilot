---
description: "Generate a new todo app feature following project conventions with HTML, CSS, and JavaScript"
name: "create-feature"
argument-hint: "Describe the feature to add (e.g., 'add due dates', 'enable todo filtering', 'add priority levels')"
agent: "agent"
---

# Create Todo Feature

You are helping implement a new feature for a vanilla JavaScript todo application. Follow the project conventions and guidance from the relevant instruction files.

## Feature Requirements

Based on the feature description provided, implement the complete feature across HTML, CSS, and JavaScript:

### 1. **HTML Structure** 
- Review [html-guidelines](./../skills/html-guidelines/SKILL.md) for semantic markup and accessibility standards
- Add semantic HTML elements to `index.html`
- Ensure ARIA labels and roles where applicable
- Maintain accessibility-first approach

### 2. **CSS Styling**
- Review [css-guidelines](./../skills/css-guidelines/SKILL.md) for responsive design patterns
- Add responsive styles to `styles/style.css`
- Follow mobile-first approach with media queries for larger screens
- Ensure touch-friendly UI elements
- Maintain visual consistency with existing styles

### 3. **JavaScript Logic**
- Review [js-guidelines](./../skills/js-guidelines/SKILL.md) for ES6+ patterns and conventions
- Implement feature logic in `js/app.js`
- Use vanilla JavaScript (no frameworks)
- Add clear JSDoc-style comments
- Follow existing code patterns in the app

## Project Context

- **Tech Stack**: Vanilla HTML, CSS, and ES6+ JavaScript
- **No build tools**: Pure client-side implementation
- **File Structure**:
  - `index.html` - Semantic HTML structure
  - `styles/style.css` - Responsive styles
  - `js/app.js` - Feature logic
  
## Implementation Steps

1. **Plan the feature**: Describe what DOM elements, styles, and JavaScript functions are needed
2. **Update HTML**: Add semantic markup for the feature
3. **Add CSS**: Implement responsive styles with proper breakpoints
4. **Write JavaScript**: Implement feature logic using vanilla JS patterns
5. **Review**: Ensure all files follow project guidelines and conventions

## Quality Checklist

- [ ] HTML is semantic and accessible
- [ ] CSS follows mobile-first responsive design
- [ ] JavaScript uses ES6+ patterns with clear comments
- [ ] Feature integrates smoothly with existing todo functionality
- [ ] Code follows vanilla JS conventions (no frameworks)

---

**Tip**: Ask Copilot to explain any patterns or suggest improvements after implementation. This project is designed to explore Copilot-assisted workflows!
