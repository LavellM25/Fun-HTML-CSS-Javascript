# AllStar Performance Lab – Assignment 3  

---

## 📄 Overview
This project expands the Assignment 2 static website into an interactive, accessible, and mobile-friendly multi-page site for **AllStar Performance Lab**, a fictional athletic training company.

The goal of Assignment 3 was to integrate **client-side interactivity** (JavaScript) while preserving usability, responsiveness, and accessibility.

---

## 🗂️ File Structure

- index.html (Homepage)
- services.html (Services page with dynamic gallery & FAQ)
- contact.html (Contact page with live form validation)
- styles.css (CSS)
- script.js (Handles form validation, FAQ, and gallery logic)
- images 

---

## ⚙️ Functional Highlights

### 1️⃣ Contact Form (contact.html)
- Fully accessible form with:
    - Inline error handling (`.error` messages and `aria-live` region).
    - Live validation for **Name**, **Email**, and **Message** fields.
    - Example placeholders (e.g., `e.g., jordan.smith@example.com`).
    - Keyboard- and screen-reader-friendly behavior.
- Successful validation hides the form and shows a success card without reloading.

### 2️⃣ FAQ Accordion (services.html)
- Each FAQ uses proper ARIA attributes:
    - `aria-expanded`, `aria-controls`, and `aria-labelledby` synchronize dynamically.
- Toggles open/closed with mouse or keyboard (`Enter` / `Space`).
- Screen readers announce expanded content instantly.

### 3️⃣ Dynamic Training Gallery (services.html)
- Thumbnails update the large preview image and caption dynamically.
- Supports keyboard navigation (`ArrowLeft`, `ArrowRight`).
- Uses `aria-live="polite"` to announce image captions to assistive tech.

### 4️⃣ Responsive Design (styles.css)
- Mobile-first layout with fluid grids and flexible typography.
- CSS-only hamburger menu for smaller screens.
- Clean light theme consistent across all pages.

---

## 🌏 Accessibility Features
- Semantic HTML5 structure (`<header>`, `<main>`, `<footer>`, `<section>`).
- Visible focus indicators for all interactive elements.
- Screen-reader-only (`.sr-only`) text for hidden hints and form feedback.
- `aria-live` regions for form success and gallery captions.
- Keyboard support for all interactive components.

---

## 🎨 Styling Highlights
- CSS variables for theme colors, spacing, and radius.
- Enhanced placeholder styling (`--placeholder`).
- Error and success color variables (`--error`, `--success`, `--success-bg`).
- Card and grid components reused across pages.

---

## 🧠 JavaScript Modules (script.js)
| Function | Purpose |
|-----------|----------|
| `initContactForm()` | Handles validation, inline errors, and success message for the contact form. |
| `initFAQ()` | Enables collapsible FAQ toggling with synchronized ARIA states. |
| `initGallery()` | Manages interactive thumbnail gallery preview and captions. |
| Utility helpers | `qs()`, `qsa()`, `announce()`, `show()`, `hide()`, etc., used across modules. |

The script runs on all pages safely (checks for required elements before activating).

---

## 🧩 Testing Checklist
- [x] All pages pass W3C HTML and CSS validation.
- [x] Tab navigation cycles through all controls logically.
- [x] Form validation prevents submission until inputs are correct.
- [x] FAQ expands/collapses smoothly with keyboard and mouse.
- [x] Gallery updates preview and announces captions via screen readers.
- [x] Layout and components remain readable on screens 320 px – 1440 px.

---

## 🚀 How to View
1. Place all files in the same directory (or use your IDE’s built-in Live Server).
2. Open **`index.html`** in a browser.
3. Navigate through the menu or test specific pages:
    - `/services.html` → FAQ + Gallery
    - `/contact.html` → Form validation

---

## 🏁 Summary
Assignment 3 demonstrates **progressive enhancement** and **front-end accessibility** practices:
- Introduced client-side logic while maintaining semantic structure.
- Ensured full keyboard and assistive-technology support.
- Achieved visually consistent and mobile-first design across the entire site.