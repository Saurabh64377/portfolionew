/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#08090D',
        secondary: '#0F1117',
        accent: '#4F8CF7',
        'accent-2': '#9B87F5',
        'accent-3': '#2AB8D4',
        success: '#34D399',
        card: '#12141B',
        'card-hover': '#1A1D26',
        glow: 'rgba(79, 140, 247, 0.4)',
        'glass': 'rgba(255, 255, 255, 0.025)',
        'glass-border': 'rgba(255, 255, 255, 0.06)',
        'subtext': '#A1AAB5',
        'subtle': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(79,140,247,0.18) 0%, transparent 60%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4F8CF7 0%, #9B87F5 100%)',
        'gradient-green': 'linear-gradient(135deg, #34D399 0%, #2AB8D4 100%)',
        'gradient-blue': 'linear-gradient(135deg, #4F8CF7 0%, #7C6FF7 100%)',
        'gradient-orange': 'linear-gradient(135deg, #9B87F5 0%, #2AB8D4 100%)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(79,140,247,0.25)' },
          '50%': { boxShadow: '0 0 40px rgba(79,140,247,0.5)' },
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
        'glow-sm': '0 0 16px rgba(79,140,247,0.2)',
        'glow': '0 0 32px rgba(79,140,247,0.25)',
        'glow-lg': '0 0 64px rgba(79,140,247,0.3)',
        'glow-green': '0 0 32px rgba(52,211,153,0.25)',
        'glow-pink': '0 0 32px rgba(42,184,212,0.25)',
        'card': '0 1px 2px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)',
        'card-hover': '0 2px 4px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(79,140,247,0.1), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}