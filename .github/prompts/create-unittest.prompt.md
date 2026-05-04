---
description: "Generate unit tests for todo app code following vanilla JS patterns and lightweight testing frameworks"
name: "create-unittest"
argument-hint: "Specify the code/function to test or feature being tested (e.g., 'test addTodo function', 'test todo completion toggle')"
agent: "agent"
---

# Create Unit Test

You are helping generate comprehensive unit tests for the todo application. Follow the project's vanilla JavaScript approach with lightweight testing frameworks.

## Testing Approach

The todo app uses **vanilla JavaScript with simple, lightweight test files** (no heavy test frameworks unless explicitly needed). Tests should:
- Be readable and maintainable
- Test core functionality with minimal dependencies
- Use clear assertion patterns
- Include edge cases and error scenarios

## Test Generation Guidelines

### 1. **Test Scope**
Identify what needs testing:
- **Functions**: Pure functions in `js/app.js` (add, remove, toggle, filter todos)
- **DOM Interactions**: Event handlers and DOM updates
- **State Management**: Todo array modifications and persistence
- **Edge Cases**: Empty inputs, duplicate items, boundary conditions

### 2. **Test Structure**
Follow a consistent pattern for test organization:
```javascript
// Test Suite Name: [Feature/Function]
// Test Case: [specific behavior being tested]
// Expected: [expected outcome]
```

### 3. **Lightweight Test Framework Options**
- **Vanilla assertions**: Simple `console.assert()` for quick manual tests
- **Jest**: For comprehensive unit testing with built-in mocking (optional)
- **Mocha + Chai**: Classic lightweight framework pair
- **Custom test runner**: Simple functions to assert and report results

Choose based on project needs. Vanilla assertions are recommended to maintain the "no build tools" philosophy.

### 4. **Test Coverage**
Generate tests for:
- [ ] **Happy path**: Normal expected behavior
- [ ] **Edge cases**: Empty strings, null values, maximum limits
- [ ] **Error handling**: Invalid inputs, unexpected states
- [ ] **Integration**: How functions work together
- [ ] **DOM interactions**: User actions triggering correct behavior

## Project Context

- **Tech Stack**: Vanilla ES6+ JavaScript
- **No build tools**: Keep tests simple and runnable in browser or Node.js
- **Main file**: `js/app.js` contains todo logic
- **Testing philosophy**: Practice Copilot-assisted test generation

## Implementation Steps

1. **Identify target**: What function or feature needs tests?
2. **Plan test cases**: List scenarios to cover (happy path, edge cases, errors)
3. **Choose framework**: Decide on testing approach (vanilla, Jest, Mocha, etc.)
4. **Generate tests**: Write or generate test code
5. **Review**: Ensure tests are clear, maintainable, and comprehensive
6. **Run & verify**: Execute tests and confirm they pass

## Test File Naming

- Location: `tests/` or `test/` directory
- Naming: `*.test.js` or `*.spec.js`
- Example: `app.test.js`, `todo-functions.spec.js`

## Example Test Structure (Vanilla with Simple Assertions)

```javascript
/**
 * Test: addTodo function
 * - Should add a new todo to the list
 * - Should return the updated list
 * - Should handle empty input
 */

function testAddTodo() {
  const result = addTodo('Buy groceries');
  console.assert(
    result.some(todo => todo.text === 'Buy groceries'),
    'Todo should be added to list'
  );
  console.log('✓ testAddTodo passed');
}

// Run tests
testAddTodo();
```

## Quality Checklist

- [ ] Tests follow project conventions and style
- [ ] Edge cases and error scenarios are covered
- [ ] Test names clearly describe what is being tested
- [ ] Tests are isolated and independent
- [ ] Test framework choice is justified (lightweight preferred)
- [ ] Tests verify both functionality and behavior
- [ ] Code follows vanilla JS patterns with clear comments

---

**Tip**: After generating tests, ask Copilot to review them for coverage gaps or suggest additional test cases. This is a great way to learn testing strategies!
