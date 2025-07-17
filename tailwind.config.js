/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'primary-light': 'var(--primary-light)',
        'primary-bg': 'var(--primary-bg)',

        // Background colors
        dark: 'var(--bg-dark)',
        card: 'var(--bg-card)',
        light: 'var(--bg-light)',

        // Text colors
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          onprimary: 'var(--text-on-primary)',
        },

        // Accent colors
        yellow: 'var(--accent-yellow)',
        blue: 'var(--accent-blue)',
        green: 'var(--accent-green)',
        teal: 'var(--accent-teal)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        primary: 'var(--shadow-primary)',
        'primary-hover': 'var(--shadow-primary-hover)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
    },
  },
  plugins: [],
};
