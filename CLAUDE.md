# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## IH Bootcamp Project Structure

This is a bootcamp project with daily assignments organized in day01 through day40 folders.

## Requirements File Format

### IMPORTANT: All requirements files must be in HTML format

When creating or updating requirements files for any day's assignment:

1. **File Name**: Always use `requirements.html` (not `requirements`, `requirement`, or `requirements.txt`)

2. **File Format**: Use HTML with proper styling, following this structure:
   - DOCTYPE declaration
   - Korean language setting (`lang="ko"`)
   - Responsive viewport meta tag
   - Embedded CSS for styling
   - Consistent visual design with:
     - Container with white background and shadow
     - Blue accent color (#007bff) for headings and highlights
     - Proper typography and spacing
     - Back button to return to the day's index page

3. **Content Structure**:
   - H1: "Day XX - Requirements"
   - H2: "과제 개요" (Assignment Overview)
   - H2: "기본 과제 요구사항" (Basic Requirements)
   - H2: "도전 과제 (선택)" (Challenge Tasks - Optional)
   - H2: "주의사항" (Important Notes)
   - Code examples in `<pre>` blocks with proper HTML entity encoding
   - Use `<code>` tags for inline code references
   - Highlight important sections with `.highlight` class

4. **Reference Examples**: See existing requirements.html files in day01, day02, day03, and day05 folders

5. **Index.html Links**: Ensure all day*/index.html files link to requirements.html (not just "requirements")

## Index.html File Format

### IMPORTANT: All day*/index.html files must follow a consistent structure

Each day's index.html should contain ONLY:

1. **Requirements Link**: Link to requirements.html file
2. **Assignment Links**: Direct links to completed assignment files/folders

Structure example:
```html
<div class="links">
    <div class="link-item">
        <a href="requirements.html">📝 Requirements</a>
    </div>
    <div class="link-item">
        <a href="assignment-folder/file.html">📄 Assignment Name</a>
    </div>
    <!-- Additional assignment links as needed -->
</div>
```

Guidelines:
- NO exercise descriptions or content in index.html
- Use consistent styling (same CSS as day01/day02)
- Include Korean text for navigation
- Use appropriate emoji icons for visual clarity
- Back button to return to main page
- Clean, minimal design focused on navigation only

## Development Guidelines

- Keep HTML semantic and accessible
- Use consistent styling across all day folders
- Test all links to ensure they work properly
- Maintain the same visual design language throughout the project

## Assignment Completion Status

When a day's assignment is completed, update the main index.html to reflect the completion status:

1. **Color Change**: Change the button/card color for completed assignments
   - Default (not started): Gray or neutral color
   - Completed: Green color (e.g., #28a745 or similar)
   
2. **Visual Indicators**: Add completion indicators such as:
   - ✅ checkmark emoji
   - "Completed" status badge
   - Different background color or border

3. **Consistency**: Ensure all completed assignments have the same visual treatment across the main navigation page