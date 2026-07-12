# Portfolio Frontend

Modern, responsive portfolio website built with React, TypeScript, and Vite.

## ✨ Features

- 🎨 Modern UI with Tailwind CSS and Radix UI components
- 🌓 Dark/Light theme support
- 📱 Fully responsive design
- ♿ Accessibility compliant (WCAG)
- 🚀 Optimized performance with lazy loading
- 🎭 Smooth animations with Framer Motion
- 📊 Google Analytics integration ready
- 🔍 SEO optimized with meta tags and sitemap
- 🛡️ Error boundary for graceful error handling
- 🎯 Project filtering and categorization

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables (optional)
cp .env.example .env
```

### Development

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the frontend directory:

```env
# Google Analytics (optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# API URL (if using backend)
VITE_API_URL=http://localhost:5000
```

## 📦 Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Styling
- **Tailwind CSS** - Utility-first CSS
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library

### Routing & State
- **Wouter** - Lightweight routing
- **React Query** - Server state management

### Icons & Assets
- **Lucide React** - Icon library
- **React Icons** - Additional icons

## 📁 Project Structure

```
frontend/
├── client/
│   ├── public/           # Static assets
│   │   ├── sitemap.xml
│   │   ├── robots.txt
│   │   └── favicon.png
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── ui/       # Reusable UI components
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Certifications.tsx
│   │   │   └── ...
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utilities and helpers
│   │   ├── hooks/        # Custom React hooks
│   │   ├── App.tsx       # Root component
│   │   └── main.tsx      # Entry point
│   └── index.html
├── package.json
└── README.md
```

## 🎯 Key Components

### Hero Section
- Eye-catching introduction
- Call-to-action buttons
- Resume download

### About Section
- Personal information
- Profile image with lazy loading
- Key statistics

### Skills Section
- 12+ technologies with proficiency levels
- Technology icons
- Categorized by type

### Projects Section
- Filterable project showcase
- Lazy-loaded images
- Project details with tech stack

### Timeline
- Visual education and experience timeline
- Chronological milestones

### Certifications
- Achievements and learning
- Verified badges

### Testimonials
- Feedback from professors and peers
- Avatar components

### Contact Form
- Form validation
- Loading states
- Multiple contact methods

## ♿ Accessibility Features

- Skip to content link
- ARIA labels on all sections
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML5
- Focus indicators

## 🔍 SEO Features

- Meta tags for social sharing
- Open Graph protocol
- Twitter Cards
- Sitemap.xml
- Robots.txt
- Semantic HTML structure

## 📊 Analytics

Google Analytics is integrated and ready to use. Simply add your tracking ID to the `.env` file:

```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 🛠️ Development

### Type Checking

```bash
npm run check
```

### Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📝 Recent Improvements

See [IMPROVEMENTS.md](../IMPROVEMENTS.md) for a detailed list of recent enhancements including:
- Performance optimizations
- Accessibility improvements
- New components (Timeline, Testimonials, Certifications)
- SEO enhancements
- Error handling
- And much more!

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

## 📄 License

MIT

---

**Built with ❤️ by Tahir Ahmed Tariq**
