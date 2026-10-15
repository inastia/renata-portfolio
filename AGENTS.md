# Development Instructions

## 1. Scope of work

- Implement only what I explicitly request.
- Do not add features, functionality, styles, animations, or code that I have not requested.
- Do not modify unrelated code, even if you see opportunities for improvement.
- Make the smallest necessary change to accomplish the requested task.
- If completing a request requires changes outside the specified files or scope, explain why and ask for approval before proceeding.
- Do not make additional improvements without asking me first.

## 2. Project structure

- Do not create, delete, move, or rename files or directories without my approval.
- Do not reorganize the project structure.
- Do not introduce new architectural patterns without discussing them with me first.
- Follow the existing project organization and conventions.

## 3. Technology

- Use semantic HTML, CSS, Tailwind CSS, and vanilla JavaScript.
- Do not introduce JavaScript frameworks or UI libraries.
- Do not install packages or dependencies without my approval.
- Do not add third-party scripts or external services without asking first.
- Prefer native browser functionality over JavaScript when possible.

## 4. HTML

- Use semantic HTML elements whenever appropriate.
- Do not add IDs or classes unless they are needed for styling, JavaScript, navigation, or accessibility.
- Names defined in `design-system.md` describe the website's structure and components. They do not automatically require corresponding HTML classes or IDs.
- Do not add unnecessary wrapper elements.
- Do not add HTML attributes without a specific purpose.
- Do not create duplicate markup when an existing structure can be reused.
- Preserve the existing HTML hierarchy unless I explicitly approve a change.

## 5. CSS and Tailwind

- Follow the values and rules in `design-system.md`.
- Reuse existing styles and design tokens before creating new ones.
- Use Tailwind utilities for styling whenever appropriate.
- Use `styles.css` for custom CSS that Tailwind does not adequately handle.
- Do not introduce new colors, font sizes, spacing tokens, or visual patterns without approval.
- Do not add CSS rules that are not used by the website.
- Do not use `!important` unless there is a demonstrated need and I approve it.
- Do not create duplicate or conflicting styles.

## 6. JavaScript

- Use vanilla JavaScript only.
- Do not add JavaScript when HTML or CSS can accomplish the same result.
- Keep functions focused on one responsibility.
- Avoid unnecessary abstractions, utilities, and helper functions.
- Do not introduce functionality for hypothetical future requirements.
- Do not add event listeners, state management, or DOM manipulation unless required.
- Do not leave unused functions or variables in the code.

## 7. Code quality

- Prioritize readability, simplicity, and maintainability.
- Prefer straightforward solutions over clever or complex ones.
- Follow existing naming conventions.
- Avoid unnecessary duplication.
- Do not refactor working code unless I specifically request it.
- Do not add placeholder code, TODO comments, or unfinished functionality unless requested.
- Do not add comments that simply describe what the code already makes obvious.
- Use short HTML comments to label major page sections (for example, `<!-- Previous and Next Section -->`) so I can scan the code and check for issues. Preserve existing section comments. These section labels are an intentional exception to the rule above.
- Do not create reusable components or abstractions until there is a demonstrated need.

## 8. Approval requirements

Ask for my approval before:

- Modifying files outside the requested scope.
- Changing the project structure.
- Installing dependencies.
- Introducing new technologies or architectural patterns.
- Refactoring existing code.
- Removing existing functionality.
- Making design decisions not covered by `design-system.md`.

When approval is needed, explain:

1. What additional change is necessary.
2. Why it is necessary.
3. Which files would be affected.

Do not proceed with those changes until I approve them.

## 9. Communication and learning

I am learning web development while building this project.

- Explain your approach briefly before making changes.
- Use clear language and explain unfamiliar technical terms.
- When multiple solutions are possible, recommend the simplest appropriate solution.
- Explain why you chose a particular approach when it is not obvious.
- Do not overwhelm me with unnecessary technical details.
- After making changes, summarize what you changed and which files were modified.
- Tell me if you notice problems outside the requested scope, but do not fix them without permission.

## 10. Verification

- Check that the requested functionality works.
- Check for syntax errors and obvious regressions.
- Do not modify unrelated code to resolve warnings or errors without approval.
- Report any issues you discover but cannot resolve within the approved scope.
- Do not claim something was tested unless you actually tested it.
