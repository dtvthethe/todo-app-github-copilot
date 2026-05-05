# 📝 Todo App - Vanilla JavaScript

A responsive, accessible todo application built with vanilla HTML, CSS, and JavaScript. Perfect for learning GitHub Copilot usage patterns without frameworks or build tools.

## 🎯 Features

- ✅ **Add Todos** - Quick task capture with form validation
- ✅ **Mark Complete** - Checkbox toggle with visual feedback (strikethrough)
- ✅ **Delete Todos** - Remove tasks you no longer need
- ✅ **Filter Todos** - View All / Active / Completed tasks
- ✅ **Statistics** - See total, active, and completed counts
- ✅ **Persistent Storage** - todos save to localStorage and restore on page refresh
- ✅ **Responsive Design** - Works on mobile (320px+), tablet, and desktop
- ✅ **Accessible** - WCAG AA compliant with keyboard navigation

## 📂 Project Structure

```
todo-app-github-copilot/
├── README.md                        # This file
├── index.html                       # Main app HTML (to be created)
├── styles/
│   └── style.css                   # Responsive CSS (to be created)
├── js/
│   └── app.js                      # Application logic (to be created)
└── specs/                          # Documentation
    ├── QUICK-START.md              # Getting started guide ⭐ START HERE
    ├── core-todo-app-spec.md       # Complete specification
    ├── implementation-tasks.md     # 12 tasks in 6 phases
    └── file-structure.md           # File structure guide
```

## 🚀 Quick Start

### 1. Read the Plan (15 min)
Start with **`specs/QUICK-START.md`** for a complete overview

### 2. Understand Requirements
Review **`specs/core-todo-app-spec.md`** sections 1-4

### 3. Follow the Tasks
Work through **`specs/implementation-tasks.md`** in order:
- Phase 1: HTML + CSS (2-3 hours)
- Phase 2: JavaScript Core (2-3 hours)
- Phase 3: Filters & Stats (1-2 hours)
- Phase 4: Polish & a11y (1-2 hours)
- Phase 5: Testing (1-2 hours)
- Phase 6: Documentation (30 min)

**Total: 7-10 hours for complete, production-ready app**

## 🛠️ Development Setup

No build tools or npm required! Just open in browser:

### Option 1: VS Code Live Server (Recommended)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 2: Python HTTP Server
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

### Option 3: Node.js http-server
```bash
npx http-server
# Visit: http://localhost:8080
```

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **QUICK-START.md** | Quick reference and getting started guide |
| **core-todo-app-spec.md** | Complete feature specification with acceptance criteria |
| **implementation-tasks.md** | 12 actionable tasks broken into 6 phases |
| **file-structure.md** | Project structure with code outlines |

## 🎯 Tech Stack

- **HTML**: Semantic structure, forms, accessibility
- **CSS**: Mobile-first responsive design, no preprocessors
- **JavaScript**: Vanilla ES6+, no frameworks
- **Storage**: browser localStorage API
- **Tools**: None! Pure client-side implementation

## ✨ Key Principles

1. **Mobile-First** - Design for 320px+ screens first
2. **Vanilla JavaScript** - No frameworks, no npm, no build tools
3. **Accessibility** - WCAG AA compliant, keyboard navigable
4. **Separation of Concerns** - HTML (structure), CSS (style), JS (logic)
5. **Responsive** - One stylesheet supports all screen sizes
6. **No Dependencies** - 100% vanilla, zero external libraries

## 🧪 Testing

Manual testing checklist:
- [ ] Add/delete/toggle todos
- [ ] Filter by All/Active/Completed
- [ ] See statistics update correctly
- [ ] Todos persist after page refresh
- [ ] Responsive on mobile/tablet/desktop
- [ ] Keyboard navigation works
- [ ] No console errors

See **`specs/implementation-tasks.md`** section 5.1 for detailed testing checklist.

## 📖 Reference Skills

When implementing features, reference these guides:
- **HTML**: `.github/skills/html-guidelines/SKILL.md`
- **CSS**: `.github/skills/css-guidelines/SKILL.md`
- **JavaScript**: `.github/skills/js-guidelines/SKILL.md`

## 🎓 Learning with Copilot

This project is designed to explore GitHub Copilot patterns:
- Use Copilot to generate HTML structure
- Ask Copilot to write responsive CSS
- Leverage Copilot for JavaScript functions
- Have Copilot add documentation
- Use Copilot to help debug issues

See `.github/copilot-instructions.md` for detailed Copilot usage patterns.

## 📋 Project Status

- [x] Specification complete
- [x] Task breakdown created
- [x] File structure planned
- [ ] HTML structure (Task 1.1)
- [ ] CSS styling (Task 1.2)
- [ ] JavaScript implementation (Tasks 2.x - 4.x)
- [ ] Testing (Task 5.1)
- [ ] Documentation (Task 6.1)

## 🚦 Getting Started Now

**Ready to build?** Follow this path:

1. Open `/specs/QUICK-START.md` in your editor
2. Read the 3-step quick start
3. Navigate to `/specs/implementation-tasks.md`
4. Start with **Task 1.1: Create HTML Structure**
5. Follow tasks sequentially
6. Commit after each phase

**Good luck! 🚀**

---

**Created**: May 5, 2026  
**Purpose**: Learning GitHub Copilot with vanilla web dev  
**Status**: Ready to build ✨
