# MANTRA 2026 Summer School Assignment 1: The Grand Horizon Resort

This project is a premium static website designed and developed for **MANTRA 2026 Summer School Assignment 1: Frontend Website Design, SEO, Responsiveness & Netlify Hosting**.

---

## 📝 Student Submission Details
- **Student Name**: `[Your Name]`
- **Registration / Roll Number**: `[Your Roll Number]`
- **Selected Website Topic**: **Hotel Website**
- **Submission Date**: 2nd July 2026
- **Netlify Live URL**: `[Your Live Netlify URL after deployment]`
- **GitHub Repository**: `[Your GitHub Repository Link]`

---

## 🏨 Website Overview & Design Concept
**The Grand Horizon Resort & Spa** is a luxury cliffside resort static website. The user experience is crafted to feel premium, featuring:
- **Elegant Typography**: Headings in luxurious *Playfair Display* serif, and body text in clean, modern *Inter* sans-serif.
- **Consistent Color Theme**: Deep slate blue (`#111625`) for depth, warm gold/champagne (`#c5a880`) for accents, and warm off-whites (`#fdfdfd` & `#f8f9fa`) for readability.
- **Micro-Animations & Transitions**: Delicate fade-in-up animations, button translations, card lifts, and image hover-zooms.
- **No Third-Party Asset Dependencies**: Custom SVGs are embedded inline for all icons (pool, dining, spa, contact items, etc.) to ensure instant page load speeds and complete offline compatibility.

---

## 📂 Project Directory Structure
```
hotels/
├── index.html          # Home Page (Hero, introduction, highlights, and slider)
├── about.html          # About Page (Legacy narrative, FAQ accordion section)
├── rooms.html          # Rooms Page (Offerings list, interactive category filtering)
├── gallery.html        # Gallery Page (Grid view of visuals with Lightbox modal popup)
├── booking.html        # Booking & Contact Page (Contact form, maps, custom JS validator)
├── README.md           # Documentation guide
├── css/
│   └── style.css       # Core design system, variables, layouts, and media queries
├── js/
│   └── main.js         # JavaScript interactivity features
└── assets/             # Generated high-resolution resort photography
    ├── hero.jpg
    ├── deluxe-room.jpg
    ├── suite.jpg
    ├── villa.jpg
    ├── dining.jpg
    └── spa.jpg
```

---

## ⚡ Interactive JavaScript Features
The project implements five functional JavaScript components within [js/main.js](js/main.js):
1. **Responsive Navbar Menu Drawer**: Toggles a full-screen drawer navigation overlay on mobile screens, and updates the header color dynamically when the user scrolls down.
2. **Auto-Rotating Testimonial Carousel** (Home Page): A smooth auto-scrolling testimonial slider with manual indicator dot controllers.
3. **FAQ Accordion** (About Page): Expandable/collapsible FAQ cards that animate height dynamically upon click.
4. **Dynamic Room Listing Filters** (Rooms Page): Filters room cards (All, Luxury Rooms, Executive Suites, Private Villas) client-side using DOM manipulation based on data attributes.
5. **Visual Lightbox Viewer** (Gallery Page): Clicking a gallery image displays a dark glassmorphism modal showing the image at full size with captions and escape-key dismissal.
6. **Booking Date Boundary & Email Validator** (Booking Page):
   - Sets the minimum check-in date dynamically to the current calendar date.
   - Synchronizes check-out inputs to prevent picking checkout dates prior to check-in.
   - Validates email formats using Regular Expressions.
   - Shows a customized booking summary confirmation modal popup upon validation.
   - Supports pre-populating the room select drop-down based on search parameters (e.g. `booking.html?room=suite`).
7. **Tawk.to Live Chat Widget**: Integrates a live chat window dynamically at the bottom right corner of all pages to simulate active customer concierge messaging.

---

## 🔍 SEO Compliance Checklist
The project has been fully configured for basic Search Engine Optimization (SEO):
- [x] **Page Titles**: Unique, descriptive titles matching keywords on every page.
- [x] **Meta Descriptions & Keywords**: Fully customized metadata describing the content and context of each specific page.
- [x] **Heading Hierarchy**: Exactly one single `<h1>` tag per page for main branding, with section structures built using `<h2>` and `<h3>`.
- [x] **Accessibility Alt Texts**: Explicit, meaningful descriptive texts on all images for screen-reader compatibility.
- [x] **Internal Linking**: Seamless navigation links that point correctly using clean file names (`index.html`, `about.html`, etc.).

---

## 🌐 How to Deploy to Netlify
To publish this website online:

### Option 1: Drag & Drop (Easiest)
1. Navigate to [Netlify App](https://app.netlify.com/).
2. Log in or sign up for a free account.
3. Zip the project workspace folder (`hotels/`) OR open the Netlify Dashboard.
4. Go to **Sites** and scroll down to the drag-and-drop zone.
5. Drag the entire project folder (containing the HTML files, `css/`, `js/`, and `assets/` folders) directly into the browser.
6. Your site is instantly live! Copy the generated Netlify link and paste it into your submission report.

### Option 2: Continuous Deployment via GitHub
1. Create a new repository on your GitHub account (e.g., `MANTRA-2026-Resort`).
2. Initialize git locally in the `hotels/` folder, commit all files, and push them to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Grand Horizon Resort website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/MANTRA-2026-Resort.git
   git push -u origin main
   ```
3. Log in to Netlify, click **Add new site**, and select **Import an existing project**.
4. Choose **GitHub**, authenticate your account, and select the repository.
5. Leave build settings blank (since this is a static site with no compiler), and click **Deploy Site**.
6. Netlify will publish your site and automatically re-deploy every time you push edits to GitHub.
