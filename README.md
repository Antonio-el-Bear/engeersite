# ENGITECH Engineering Portfolio Website

A modern, responsive website for ENGITECH civil engineering firm built with React, featuring project showcases, service descriptions, and contact functionality.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Project Portfolio**: Showcase of engineering projects with detailed views
- **Service Pages**: Comprehensive description of engineering services
- **Contact Form**: Functional contact form with validation
- **Team Section**: Meet the engineering team
- **Company Timeline**: Interactive milestone display

## Technologies Used

- React 18
- React Router for navigation
- Framer Motion for animations
- Lucide React for icons
- TanStack Query for data fetching
- Tailwind CSS for styling
- Base44 API client for data management

## Project Structure

```
engiteach-site/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── HeroSection.js      # Homepage hero section
│   ├── StatSection.js      # Statistics display
│   └── FeaturedProjects.js # Featured projects carousel
├── api/
│   └── base44Client.js     # API client for data management
├── utils/
│   └── index.js           # Utility functions
├── Entities/              # Data structure definitions
├── index.js               # Homepage component
├── about.js               # About page component  
├── contact.js             # Contact page component
├── project.js             # Projects page component
├── services.js            # Services page component
├── layout.js              # Main layout wrapper
└── package.json           # Project dependencies
```

## Key Components

### Layout Component (`layout.js`)
- Main navigation and footer
- Responsive mobile menu
- Consistent styling across pages

### API Client (`api/base44Client.js`)
- Mock data for development
- Simulates real API interactions
- Handles projects, services, team members, etc.

### UI Components (`components/ui/`)
- Reusable form components (Button, Input, Textarea, etc.)
- Dialog modals for project details
- Toast notifications for user feedback

## Pages

1. **Home** (`index.js`) - Hero section, stats, and featured projects
2. **Projects** (`project.js`) - Project portfolio with filtering and details
3. **Services** (`services.js`) - Engineering services overview
4. **About** (`about.js`) - Company history, team, and milestones
5. **Contact** (`contact.js`) - Contact form and company information

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Features

### Project Portfolio
- Filter projects by category (Infrastructure, Commercial, Residential, etc.)
- Detailed project modals with stats and descriptions
- Responsive grid layout

### Contact Form
- Form validation
- Toast notifications for success/error states
- Accessibility features with proper labels and ARIA attributes

### Animations
- Smooth page transitions with Framer Motion
- Hover effects and interactive elements
- Loading states and skeleton screens

### Accessibility
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast design elements

## Development Notes

- All components are functional React components using hooks
- Styling uses Tailwind CSS utility classes
- Icons from Lucide React icon library
- Mock API data included for development purposes
- Ready for integration with real backend API

## Future Enhancements

- Integration with real CMS or database
- User authentication for admin panel
- Blog section for engineering articles
- Client testimonials section
- Multi-language support
- Advanced filtering and search functionality