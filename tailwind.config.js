/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1120',
        secondary: '#111827',
        accent: '#3B82F6',
        'accent-2': '#8B5CF6',
        'accent-3': '#06B6D4',
        success: '#10B981',
        card: '#111827',
        glow: 'rgba(59, 130, 246, 0.4)',
        'glass': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(59,130,246,0.25) 0%, transparent 60%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)',
        'gradient-green': 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
        'gradient-blue': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'gradient-orange': 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108,99,255,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(108,99,255,0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(59,130,246,0.3)',
        'glow': '0 0 40px rgba(59,130,246,0.4)',
        'glow-lg': '0 0 80px rgba(59,130,246,0.5)',
        'glow-green': '0 0 40px rgba(16,185,129,0.4)',
        'glow-pink': '0 0 40px rgba(6,182,212,0.4)',
        'card': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
