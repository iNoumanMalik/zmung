/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'from-indigo-600',
    'via-purple-600',
    'to-rose-500',
    'bg-gradient-to-r',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        neue: ['Neue Montreal', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'], 
      },
      colors: {
        // Dark mode colors (default)
        background: '#0f172a',
        surface: '#1e293b',
        primary: '#8b5cf6',
        accent: '#f43f5e',
        text: '#f8fafc',
        subtext: '#94a3b8',
        border: '#334155',
        'neon-purple': '#8b5cf6',
        'neon-rose': '#f43f5e',
        'neon-indigo': '#4f46e5',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        // Light mode colors
        'light-background': '#ffffff',
        'light-surface': '#f8fafc',
        'light-primary': '#3b82f6',
        'light-accent': '#1d4ed8',
        'light-text': '#1e293b',
        'light-subtext': '#64748b',
        'light-border': '#e2e8f0',
        indigo: {
          600: '#4f46e5',
          500: '#6366f1',
        },
        purple: {
          600: '#8b5cf6',
          500: '#a855f7',
        },
        rose: {
          600: '#e11d48',
          500: '#f43f5e',
        },
        emerald: {
          500: '#10b981',
        },
        blue: {
          500: '#3b82f6',
        },
        amber: {
          500: '#f59e0b',
        },
        // Parent color palettes
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      animation: {
        typewriter: 'typewriter 2s steps(5) forwards',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        orbit: 'orbit 20s linear infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px #ec4899, 0 0 10px #ec4899, 0 0 15px #ec4899',
          },
          '100%': {
            boxShadow: '0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
}
