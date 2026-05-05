---
description: "Generate a detailed feature specification document for the todo app with user stories, acceptance criteria, and technical requirements"
name: "create-spec"
argument-hint: "Describe the feature to specify (e.g., 'add todo filtering', 'implement local storage persistence', 'add dark mode toggle')"
agent: "agent"
---

# Create Feature Specification

You are helping create a comprehensive specification document for a new todo app feature. Generate a well-structured spec that guides implementation and serves as reference documentation.

## Specification Structure

Based on the feature description provided, create a complete specification document with the following sections:

### 1. **Feature Overview**
- Clear title and brief description
- Purpose and motivation for the feature
- Business/user value
- Success metrics (if applicable)

### 2. **User Stories**
Use the format: `As a [user type], I want to [action], so that [benefit]`
- List 3-5 relevant user stories
- Cover main use cases and variations
- Include edge cases where applicable

### 3. **Acceptance Criteria**
Define testable conditions:
- [ ] Criteria written in Given/When/Then format (BDD style)
- [ ] Functional requirements clearly stated
- [ ] Edge cases and error scenarios included
- Minimum 5-8 criteria per feature

### 4. **Technical Requirements**
Document implementation specifics:

#### **UI Components**
- Which HTML elements need to be added/modified
- Semantic structure recommendations
- Accessibility considerations (ARIA labels, keyboard support)
- Reference to [html-guidelines](./../skills/html-guidelines/SKILL.md)

#### **Styling**
- CSS classes needed
- Responsive design considerations
- Mobile-first approach details
- Breakpoints affected
- Reference to [css-guidelines](./../skills/css-guidelines/SKILL.md)

#### **JavaScript Logic**
- Functions/methods required (with signatures)
- State changes and data model updates
- Event handlers needed
- Local storage considerations (if any)
- Reference to [js-guidelines](./../skills/js-guidelines/SKILL.md)

### 5. **Data Model Changes** (if applicable)
Show updated data structure:
```javascript
// Example of new/modified todo item structure
{
  id: "...",
  text: "...",
  // Add new fields here
}
```

### 6. **Implementation Steps**
Break down into logical implementation sequence:
1. Update HTML structure
2. Add/modify CSS styles
3. Implement JavaScript logic
4. Add state management
5. Test and validate

### 7. **Design Mockup/Layout** (if visual)
- Describe visual layout changes
- UI element placement and spacing
- Responsive behavior at different breakpoints
- Consider mobile (0-640px), tablet (640-1024px), desktop (1024px+)

### 8. **Edge Cases & Error Handling**
Document special scenarios:
- Empty states
- Invalid inputs
- Boundary conditions
- Error messages/feedback
- Conflicts or race conditions

### 9. **Testing Strategy**
Outline how to validate:
- Unit tests needed (functions to test)
- Integration tests (how features interact)
- Manual testing checklist
- Browser/device compatibility to verify

### 10. **Notes & Assumptions**
- Dependencies or prerequisites
- Assumptions about existing functionality
- Open questions or clarifications needed
- Future enhancement possibilities

## Project Context

The todo app follows these principles:
- **Tech Stack**: Vanilla HTML, CSS, and ES6+ JavaScript
- **No build tools**: Pure client-side implementation
- **Architecture**: 
  - UI Layer (HTML + CSS)
  - Logic Layer (JavaScript)
  - Data Layer (localStorage)
- **Responsive Design**: Mobile-first with media queries
- **Accessibility-First**: WCAG compliant, semantic markup
- **Code Patterns**: Follow existing app.js patterns and conventions

## Reference Architecture

```
┌─────────────────────────────────┐
│    UI Layer (HTML + CSS)        │
│  ┌─────────────────────────────┐│
│  │ Form | List | Controls      ││
│  └─────────────────────────────┘│
└─────────────────────────────────┘
           ▲           ▼
┌─────────────────────────────────┐
│   Logic Layer (JavaScript)      │
│  ┌─────────────────────────────┐│
│  │ State | Events | Render     ││
│  └─────────────────────────────┘│
└─────────────────────────────────┘
           ▲           ▼
┌─────────────────────────────────┐
│  Data Layer (localStorage)      │
│  ┌─────────────────────────────┐│
│  │ Persistence | Loading       ││
│  └─────────────────────────────┘│
└─────────────────────────────────┘
```

## Quality Checklist for Spec

Before finalizing, verify:
- [ ] Feature overview clearly explains purpose and value
- [ ] User stories cover main use cases and variations
- [ ] Acceptance criteria are testable and specific
- [ ] Technical requirements include HTML, CSS, and JS details
- [ ] Data model changes documented (if any)
- [ ] Implementation steps provide clear guidance
- [ ] Design/layout described with responsive considerations
- [ ] Edge cases and error handling addressed
- [ ] Testing strategy outlined
- [ ] References to relevant skills/guidelines included

## 📁 Saving Instructions

### File Naming & Location

After creating the specification, save it as a markdown file in the `/specs` directory:

**File path format**: `/specs/[feature-name]-spec.md`

**Naming examples**:
- `filter-todos-spec.md` - for filtering feature
- `local-storage-spec.md` - for persistence feature
- `accessibility-improvements-spec.md` - for a11y enhancements
- `edit-todos-spec.md` - for edit functionality
- `due-dates-spec.md` - for adding due dates

### Steps to Save

1. **Generate the spec** using this prompt with your feature description
2. **Create the markdown file** with the full specification content
3. **Save to `/specs/` directory** with appropriate naming
4. **Format properly** with markdown headers, code blocks, and lists
5. **Update specs index** (if one exists) to link to the new spec

### File Structure After Saving

```
specs/
├── todo-app-spec.md          # Main app spec
├── filter-todos-spec.md      # Feature spec
├── local-storage-spec.md     # Feature spec
└── [feature-name]-spec.md    # New feature specs
```

## Quality Checklist for Spec

Ensure the spec is:
- [ ] Well-organized with clear section headers
- [ ] Concise yet comprehensive
- [ ] Ready to serve as implementation guide
- [ ] Saved to `/specs/[feature-name]-spec.md`
- [ ] Properly formatted as markdown (.md file)
- [ ] Linked from main README or specs index when complete
