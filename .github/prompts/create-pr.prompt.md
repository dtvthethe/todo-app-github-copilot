# Create Pull Request Workflow

You are assisting with creating a pull request for the todo app following the project's git workflow.

## Branch Naming Convention

Always follow this naming pattern based on the type of work:

- **Feature branch**: `feat.<id>.<description>`
  - Example: `feat.249.add_search_todo_list`

- **Bug fix branch**: `fix.<id>.<description>`
  - Example: `fix.214.fix_pagination_position`

The `<id>` will be provided by the user. Use lowercase letters and underscores for descriptions.

## Commit Message Convention

Follow these patterns for commit messages:

- **Feature commit**: `feat #<id> <description>`
  - Example: `feat #249 Add search functionality to todo list`

- **Bug fix commit**: `fix #<id> <description>`
  - Example: `fix #214 Fix pagination position`

Keep descriptions concise and meaningful.

## Git Workflow Steps

1. **Ensure you're on main branch**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create a new branch** following the naming convention
   ```bash
   git checkout -b <branch-name>
   ```

3. **Make your changes and commit** following the commit message convention
   ```bash
   git add .
   git commit -m "<commit-message>"
   ```

4. **Push your branch**
   ```bash
   git push origin <branch-name>
   ```

5. **Create Pull Request**
   - Base branch: `main`
   - Head branch: `<your-feature-branch>`
   - Title: Use the commit message as PR title
   - Description: Provide clear details about what was changed and why

## User Inputs Needed

Ask the user for the following information:
- **Work Type**: Is this a feature or bug fix?
- **ID**: The issue or feature ID (e.g., 249, 214)
- **Description**: Brief description of the work (lowercase, use underscores)
- **Changes Made**: What specific changes were implemented

## Example Interaction

```
User Input:
- Type: feature
- ID: 249
- Description: add_search_todo_list
- Changes: Added search input field, implemented filter logic

Generated:
- Branch: feat.249.add_search_todo_list
- Commit: feat #249 Add search functionality to todo list
- PR Base: main
```
