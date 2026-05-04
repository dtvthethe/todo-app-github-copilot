# Todo App - Copilot Guidelines

**Purpose**: Simple todo app to research and learn GitHub Copilot usage patterns.

## Project Goal

Build a lightweight, responsive todo application to explore:
- Code generation workflows with AI assistance
- Bug fixing and debugging strategies
- Testing approaches with Copilot
- Code review and refactoring with suggestions
- Documentation generation

## Core Tech Stack
- **HTML**: Semantic structure, accessibility-first
- **CSS**: Mobile-first responsive design, scalable to desktop
- **JavaScript**: Vanilla (no frameworks), ES6+ patterns

## Responsive Design
- **Approach**: Desktop-first → adapt for mobile
- **Breakpoints**: Design for multiple screen sizes with media queries
- **Mobile-friendly**: Touch-friendly UI elements, readable text sizes

## File Structure
```
.
├── index.html          # Main HTML structure
├── styles/
│   └── style.css       # Responsive styles
├── js/
│   └── app.js          # Todo app logic
└── .github/
    ├── copilot-instructions.md
    ├── prompts/
    │   ├── create-feature.prompt.md
    │   └── create-unittest.prompt.md
    └── skills/
        ├── html-guidelines/
        │   └── SKILL.md
        ├── css-guidelines/
        │   └── SKILL.md
        └── js-guidelines/
            └── SKILL.md
```

## Conventions
- **No build tools** - vanilla setup for learning clarity
- **Comments**: Use Copilot to generate clear, concise JSDoc-style comments
- **Testing**: Simple test files (manual or with lightweight frameworks) to practice Copilot-assisted testing
- **Git commits**: Atomic, descriptive messages to practice code review workflows

## How to Use Copilot Effectively Here

### Skills (On-Demand Workflows)
Access reusable guidance for specific file types:
- **/html-guidelines**: Semantic HTML, accessibility, and form patterns
- **/css-guidelines**: Mobile-first responsive design and media queries
- **/js-guidelines**: ES6+ patterns, state management, testing, and debugging

### Prompts (Quick Tasks)
Use prompts for specific feature generation:
- **/create-feature**: Generate a complete feature (HTML + CSS + JS)
- **/create-unittest**: Generate unit tests for code or functions

### Development Workflows
1. **Generation**: Use `/create-feature` prompt or describe in comments
2. **Review**: Ask Copilot to review code, explain patterns, suggest improvements
3. **Debugging**: Use Copilot to help identify and fix bugs
4. **Testing**: Use `/create-unittest` prompt or generate test cases
5. **Docs**: Have Copilot write README, function documentation, usage guides
6. **Guidance**: Type `/` to access skills for file-specific best practices

### Comunication with Copilot
- Respond by Vietnamese
