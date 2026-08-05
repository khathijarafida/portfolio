/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark glassmorphism palette
        midnight: {
          DEFAULT: '#080B1A', // deep midnight navy — base background
          50: '#0D1226',      // secondary background
        },
        // Purple identity
        purple: {
          DEFAULT: '#8B5CF6', // primary accent
          soft: '#A78BFA',    // secondary accent / lavender
          light: '#C4B5FD',   // light highlight
        },
        // Subtle secondary accent
        cyan: {
          accent: '#22D3EE',  // electric cyan — used sparingly
        },
        // Text
        ink: {
          DEFAULT: '#F8FAFC', // main text
          soft: '#A1A1AA',    // secondary text
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
        'purple-cyan': 'linear-gradient(90deg, #8B5CF6 0%, #22D3EE 100%)',
        'purple-lavender': 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 100%)',
        'purple-deep': 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.35)',
        'glass-lg': '0 12px 40px rgba(0, 0, 0, 0.45)',
        glow: '0 0 24px rgba(139, 92, 246, 0.35)',
        'glow-lg': '0 0 48px rgba(139, 92, 246, 0.45)',
        'glow-sm': '0 0 16px rgba(139, 92, 246, 0.3)',
        'glow-cyan': '0 0 24px rgba(34, 211, 238, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
