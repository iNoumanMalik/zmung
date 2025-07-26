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
    'bg-gradient-to-r'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Deep slate blue
        surface: '#1e293b', // Slate blue
        primary: '#8b5cf6', // Vibrant purple
        accent: '#f43f5e', // Rose/pink
        text: '#f8fafc', // Soft white
        subtext: '#94a3b8', // Muted slate
        border: '#334155', // Medium slate
        'neon-purple': '#8b5cf6', // Vibrant purple
        'neon-rose': '#f43f5e', // Rose/pink
        'neon-indigo': '#4f46e5', // Indigo
        success: '#10b981', // Emerald green
        warning: '#f59e0b', // Amber
        error: '#ef4444', // Red
        info: '#3b82f6', // Blue
        indigo: {
          600: '#4f46e5', // Indigo
          500: '#6366f1', // Lighter indigo
        },
        purple: {
          600: '#8b5cf6', // Vibrant purple
          500: '#a855f7', // Lighter purple
        },
        rose: {
          600: '#e11d48', // Deep rose
          500: '#f43f5e', // Rose
        },
        emerald: {
          500: '#10b981', // Emerald green
        },
        blue: {
          500: '#3b82f6', // Blue
        },
        amber: {
          500: '#f59e0b', // Amber
        },
      },
      fontFamily: {
        sans: ['Poppins', 'DM Sans', 'sans-serif'],
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