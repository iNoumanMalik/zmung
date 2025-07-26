# Zmung Client - Digital Marketing Agency Website

A responsive, dark-themed website for Zmung Client digital marketing agency built with React JS and Tailwind CSS. The website features smooth animations, a modern UI, and comprehensive information about the agency's services.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Sleek dark theme with glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion and AOS
- **Interactive UI**: Modern user interface with hover effects and transitions
- **Multiple Pages**: Home, About, Services, Portfolio, Photography, and Contact pages
- **Performance Optimized**: Fast loading and smooth scrolling experience

## Tech Stack

- **React JS**: Frontend library for building user interfaces
- **Vite**: Next generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Router DOM**: Routing for React applications
- **React Hook Form**: Form validation and handling
- **Lucide Icons**: Beautiful and consistent icons
- **Lottie React**: Lightweight animation library
- **React Scroll**: Smooth scrolling functionality
- **AOS**: Animate On Scroll library
- **Zustand**: State management

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/zmung-client.git
   cd zmung-client
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` directory.

## Project Structure

```
/
├── public/              # Public assets
├── src/                 # Source files
│   ├── assets/          # Static assets
│   │   ├── images/      # Image files
│   │   └── lotties/     # Lottie animation files
│   ├── components/      # Reusable components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Project dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Color Scheme

- **Background**: `#0f0c29` (Dark purple/blue)
- **Surface**: `#1a1a2e` (Dark blue)
- **Primary**: `#302b63` (Purple)
- **Accent**: `#ff4ecd` (Pink)
- **Text**: `#f1f1f1` (White)
- **Subtext**: `#b3b3b3` (Light gray)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern digital agency websites
- Images from Unsplash
