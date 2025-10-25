# Frontend Wizards - Stage 0 & Stage 1 Project

A testable, accessible, and responsive profile card component with multi-page application featuring semantic HTML, modern CSS, and vanilla JavaScript.

## 🎯 Project Overview

This project implements the Frontend Wizards Stage 0 and Stage 1 requirements:

### Stage 0: Profile Card
- Semantic HTML profile card component
- Responsive design (mobile, tablet, desktop)
- Avatar upload functionality
- Real-time clock display
- Social media links
- Hobbies and dislikes lists
- All elements include data-testid attributes for automated testing

### Stage 1: Multi-Page Application
- **Contact Page**: Form with validation and error handling
- **About Me Page**: Reflective sections about journey, goals, and aspirations
- Consistent navigation across all pages
- Accessibility features throughout

## 📁 Project Structure

```
HNG/
├── index.html          # Profile card page (Stage 0)
├── contact.html        # Contact form page (Stage 1)
├── about.html          # About me page (Stage 1)
├── style.css           # Unified stylesheet
├── card.js             # JavaScript for functionality
├── assets/             # Images and media
│   └── WhatsApp_Image_2025-10-18_at_14.31.41_3e6ff2a8-removebg-preview.png
├── README.md           # This file
└── TEST_VERIFICATION.md # Test checklist
```

## ✨ Key Features

### Stage 0: Profile Card
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Responsive layout (flexbox-based)
- ✅ Avatar image with alt text
- ✅ Real-time millisecond clock
- ✅ Avatar upload with preview
- ✅ Social media links (Twitter, GitHub, LinkedIn)
- ✅ Hobbies and dislikes lists
- ✅ Keyboard accessible
- ✅ All data-testid attributes present

### Stage 1: Contact Page
- ✅ Form validation (real-time and on submit)
- ✅ Email format validation
- ✅ Message length validation (min 10 characters)
- ✅ Individual error messages for each field
- ✅ Success message on valid submission
- ✅ Accessible form with labels and ARIA attributes
- ✅ Keyboard navigable
- ✅ Responsive design

### Stage 1: About Me Page
- ✅ Bio section
- ✅ Goals in program section
- ✅ Areas of low confidence section
- ✅ Note to future self section
- ✅ Extra thoughts section
- ✅ Semantic HTML structure
- ✅ Responsive layout

## 🎨 Design System

### Colors
- Primary: #2563eb (Blue)
- Background: Linear gradient (Indigo to Light Blue)
- Text: #1e293b (Dark Slate)
- Muted: #64748b (Slate)
- Success: #16a34a (Green)
- Error: #dc2626 (Red)

### Typography
- Font Family: Poppins, system-ui, sans-serif
- Responsive font sizes
- Proper line heights for readability

### Spacing
- Consistent padding and margins
- Mobile-first approach
- Breakpoints: 480px, 768px

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd HNG
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server
   ```

3. **Open in browser**
   - Navigate to `http://localhost:8000`

### Testing

All elements include `data-testid` attributes for automated testing:

**Profile Card (index.html)**
- `test-profile-card` - Main card container
- `test-user-name` - User name
- `test-user-bio` - Biography
- `test-user-time` - Current time
- `test-user-avatar` - Avatar image
- `test-user-social-links` - Social links container
- `test-user-social-twitter/github/linkedin` - Individual social links
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

**Contact Form (contact.html)**
- `test-contact-name` - Name input
- `test-contact-email` - Email input
- `test-contact-subject` - Subject input
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-*` - Error messages
- `test-contact-success` - Success message

**About Page (about.html)**
- `test-about-page` - Main page
- `test-about-bio` - Bio section
- `test-about-goals` - Goals section
- `test-about-confidence` - Confidence section
- `test-about-future-note` - Future note section
- `test-about-extra` - Extra thoughts section

## ♿ Accessibility Features

- Semantic HTML tags (article, section, nav, main, figure)
- Proper heading hierarchy
- ARIA labels and descriptions
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Form labels with proper associations
- Error messages with role="alert"
- Color contrast compliance

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

All layouts tested and optimized for each breakpoint.

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Media Queries
- **Vanilla JavaScript** - No frameworks
- **Bootstrap Icons** - Social media icons

## 📋 Validation

- ✅ HTML semantic structure
- ✅ CSS responsive design
- ✅ JavaScript form validation
- ✅ Accessibility compliance
- ✅ All data-testid attributes present
- ✅ Keyboard navigation
- ✅ Mobile responsiveness

## 🎓 Learning Outcomes

This project demonstrates:
- Semantic HTML best practices
- Responsive design patterns
- Form validation techniques
- Accessibility implementation
- Vanilla JavaScript functionality
- CSS modern layout techniques
- Testing-friendly code structure

## 📝 Notes

- Time display updates every 1 second
- Avatar upload creates object URL for preview
- Form validation provides real-time feedback
- All pages follow consistent design system
- Code is modular and maintainable

## 🚢 Deployment

Ready to deploy to:
- Netlify
- GitHub Pages
- Vercel
- Any static hosting service

## 📞 Contact

For questions or feedback, please reach out through the contact form on the website.

---

**Frontend Wizards Stage 0 & Stage 1 Submission**
© 2025 | Rachael ifeoluwa

