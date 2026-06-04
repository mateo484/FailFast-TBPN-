/**
 * Fail Fast — Tailwind config (drop-in).
 *
 * Tailwind is NOT currently installed in this project. This file is ready to
 * use the moment you add it:
 *   npm i -D tailwindcss postcss autoprefixer && npx tailwindcss init
 * then keep this config. It mirrors the tokens in failfast-design-system.css,
 * so `bg-primary`, `text-foreground`, `shadow-glow`, `font-sans`, etc. resolve
 * to the same values as the CSS custom properties.
 */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
          'Helvetica Neue', 'Arial', 'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        serif: ['ui-serif', 'Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4361ff',
          hover: '#3a52e6',
          active: '#2f45c7',
          soft: '#7b9cff',
          50: '#eef1ff',
          100: '#dbe2ff',
        },
        accent: '#6366f1',
        secondary: '#f5f5f5',
        dark: '#0f0f0f',

        // Mapped to CSS-variable tokens so utilities follow light/dark mode.
        background: 'var(--ff-bg-page)',
        foreground: 'var(--ff-fg)',
        card: 'var(--ff-bg-card)',
        muted: 'var(--ff-bg-muted)',
        border: 'var(--ff-border)',
        input: 'var(--ff-border)',
        ring: 'var(--ff-primary)',

        success: { DEFAULT: '#2f8560', fg: '#1f5a41', bg: '#e6f2eb', border: '#b5d6c3' },
        warn:    { DEFAULT: '#d97a2b', fg: '#8a4311', bg: '#fcefde', border: '#f1c994' },
        danger:  { DEFAULT: '#d64545', fg: '#8a2424', bg: '#fbe8e5', border: '#f0b5ad' },
        info:    { DEFAULT: '#4b63b8', fg: '#2d3d7a', bg: '#ecefff', border: '#c4cdf0' },
        plum:    { DEFAULT: '#7b4a8c', bg: '#f3ebf5', border: '#d9c4de' },
      },
      borderRadius: {
        xs: '4px', sm: '6px', md: '10px', lg: '12px', xl: '16px', '2xl': '24px', full: '9999px',
      },
      spacing: {
        1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px',
        6: '24px', 8: '32px', 10: '40px', 12: '48px', 16: '64px', 20: '80px',
      },
      boxShadow: {
        'sm-custom': '0 0 0 1px rgba(15,15,15,0.05), 0 3px 6px rgba(15,15,15,0.1)',
        'md-custom': '0 0 0 1px rgba(15,15,15,0.05), 0 3px 6px rgba(15,15,15,0.1), 0 9px 24px rgba(15,15,15,0.2)',
        'lg-custom': '0 20px 60px rgba(15,15,15,0.15)',
        glow: '0 10px 30px -10px rgba(67,97,255,0.35)',
        'glow-strong': '0 10px 40px -8px rgba(67,97,255,0.45)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #4361ff, #7b9cff)',
        'gradient-primary-strong': 'linear-gradient(to right, #4361ff, #5a7cff, #7b9cff)',
        'gradient-hero-text': 'linear-gradient(to right, #4361ff, #7b9cff)',
        'gradient-section': 'linear-gradient(to bottom, #ffffff, #f9fafb, #ffffff)',
      },
    },
  },
  plugins: [],
};
