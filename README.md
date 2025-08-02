# Procurify Clone - React + Tailwind + Vite

This project replicates the layout of the Procurify homepage using modern React (via Vite) and Tailwind CSS. Only the front-end layout is cloned—no tracking, analytics, or SEO code included.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with hamburger menu toggle
- **Modern Stack**: React 19 + Vite + Tailwind CSS
- **Component-Based**: Modular components for easy maintenance
- **Procurify Design**: Faithful recreation of the original website layout

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation with mobile hamburger menu
│   ├── Banner.jsx      # Top banner with benchmark report
│   ├── Hero.jsx        # Main hero section with CTA
│   ├── Stats.jsx       # Customer logos and statistics
│   └── Footer.jsx      # Footer with links and branding
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Tailwind CSS imports
```

## 🛠️ Technologies Used

- **React 19**: Latest React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Node.js 20**: Compatible runtime environment

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable)
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📱 Components Overview

### Header Component
- Responsive navigation menu
- Mobile hamburger toggle
- Procurify logo
- CTA buttons (Pricing, Login, Book a demo)

### Banner Component
- 2025 Procurement Benchmark Report promotion
- Download link to the report
- Responsive layout

### Hero Component
- Main headline: "Spend Control, Simplified."
- Subtitle explaining Procurify's value proposition
- CTA button to book a demo
- Embedded Lottie animation

### Stats Component
- Customer logos showcase
- "$100B in spend" statistic
- Responsive grid layout

### Footer Component
- Organized link sections
- Company branding
- Copyright information

## 🎨 Design Features

- **Color Scheme**: Matches Procurify's brand colors
- **Typography**: Clean, professional font hierarchy
- **Spacing**: Consistent padding and margins
- **Responsive**: Works on all device sizes
- **Interactive**: Hover effects and smooth transitions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Customization

The components are built with Tailwind CSS classes, making them easy to customize:
- Colors can be modified in the component files
- Layout can be adjusted using Tailwind's grid and flexbox utilities
- Responsive breakpoints follow Tailwind's mobile-first approach

## 📄 License

This is a clone project for educational purposes. All design elements belong to Procurify Technologies Inc.

## 🤝 Contributing

This is a demonstration project. For the original Procurify website, visit [procurify.com](https://www.procurify.com/).
