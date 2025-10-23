# Design Guidelines: Institución Educativa Oreste Sindici

## Design Approach
**Reference-Based with Educational Focus**: Drawing inspiration from modern educational institutions like Khan Academy and Coursera, combined with the specific colorful navigation pattern from the provided reference image. The design prioritizes trust, clarity, and accessibility while maintaining visual appeal through strategic use of color.

## Core Design Elements

### A. Color Palette

**Primary Colors** (Educational Professional):
- Deep Blue: 220 70% 25% (header, footer, primary text)
- Crisp White: 0 0% 100% (backgrounds, clean sections)
- Soft Gray: 220 10% 96% (section backgrounds)

**Navigation Button Colors** (Exact specification):
- Black Button (Plan de Estudio): 0 0% 15%
- Red Button (Manual de Convivencia): 0 85% 50%
- Yellow Button (Planta Institucional): 45 95% 55%
- Blue Button (Noticias): 210 90% 55%
- Purple Button (Plataforma de Notas): 270 70% 55%
- Green Button (Proyectos): 140 75% 45%

**Accent Colors**:
- Gold Highlight: 43 85% 60% (achievements, awards)
- Success Green: 142 71% 45% (announcements)

### B. Typography

**Font Families**:
- Primary: 'Inter' or 'Poppins' from Google Fonts (clean, modern, highly legible)
- Headings: 600-700 weight
- Body: 400-500 weight

**Scale**:
- Hero Heading: text-5xl md:text-6xl font-bold
- Section Headings: text-3xl md:text-4xl font-semibold
- Subsections: text-xl md:text-2xl font-medium
- Body Text: text-base md:text-lg
- Navigation: text-sm uppercase tracking-wide

### C. Layout System

**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24
- Component spacing: space-y-8 md:space-y-12
- Container max-width: max-w-7xl

### D. Component Library

**Hero Section**:
- Full-width banner with institutional image (students in classroom or campus)
- Large heading "Tu futuro empieza aquí" centered
- Institutional name "Institución Educativa Oreste Sindici" prominently displayed
- Hero image with subtle dark overlay (bg-gradient-to-b from-transparent to-black/40)

**Navigation Buttons Grid** (Primary Feature):
- 6 circular buttons arranged in 2 rows of 3 (responsive: single column on mobile)
- Each button: 140px diameter on desktop, 120px on mobile
- White icons centered in each circle (use Heroicons)
- Button labels below each circle in institutional blue
- Subtle hover effect: scale-105 transform with shadow-xl
- Icons: Book (Plan), Document (Manual), Users (Planta), Newspaper (Noticias), Academic Cap (Notas), Lightbulb (Proyectos)

**Internal Pages Structure**:
- Consistent header with logo and breadcrumb navigation
- Page title section with background color matching respective button color (15% opacity)
- Content in clean card-based layouts with white backgrounds
- Sidebar navigation for sub-sections where applicable

**Header**:
- Institutional logo on left
- Horizontal navigation menu for main sections
- Sticky positioning (sticky top-0)
- White background with subtle shadow

**Footer**:
- Dark blue background (matching primary)
- 3-column layout: Contact info, Quick links, Social media
- Institution address and phone
- Copyright and legal information

### E. Images

**Hero Section**: Large institutional image showing:
- Students in modern classroom setting OR
- Campus exterior with students OR
- Graduation ceremony scene
- Dimensions: 1920x800px minimum
- Position: Background with center positioning
- Treatment: Slight blur on edges to focus attention on center content

**Page Headers**: Smaller banner images (1920x400px) for each section page, themed to content (books for Plan de Estudio, handshake for Manual, team for Planta, etc.)

**Content Images**: Use authentic educational photography throughout content pages

## Interaction Patterns

**Navigation Flow**:
- Home page → Colored button → Dedicated section page
- Breadcrumb navigation on all internal pages
- Smooth scroll behavior for anchor links

**Button Interactions**:
- Circular buttons: Hover lifts slightly (transform scale-105)
- Primary CTAs: Solid backgrounds with white text
- Secondary CTAs: Outline variant with blur backdrop when over images

**Responsive Behavior**:
- Circular buttons stack vertically on mobile (< 768px)
- Navigation menu collapses to hamburger on mobile
- Font sizes scale down appropriately
- Maintain generous padding on all screen sizes

## Accessibility & Performance

- High contrast ratios (WCAG AA minimum)
- Focus states clearly visible on all interactive elements
- Alt text for all images
- Semantic HTML structure
- Responsive images with appropriate sizes

This design creates a vibrant, welcoming educational environment while maintaining the professionalism expected of an academic institution, directly matching the reference image's colorful navigation approach.