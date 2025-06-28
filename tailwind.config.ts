
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#3B82F6',
					50: '#EBF2FF',
					100: '#D6E4FF',
					500: '#3B82F6',
					600: '#2563EB',
					700: '#1D4ED8',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#10B981',
					50: '#ECFDF5',
					100: '#D1FAE5',
					500: '#10B981',
					600: '#059669',
					700: '#047857',
					foreground: '#FFFFFF'
				},
				success: {
					DEFAULT: '#10B981',
					50: '#ECFDF5',
					500: '#10B981',
					600: '#059669'
				},
				warning: {
					DEFAULT: '#F59E0B',
					50: '#FFFBEB',
					500: '#F59E0B',
					600: '#D97706'
				},
				destructive: {
					DEFAULT: '#EF4444',
					50: '#FEF2F2',
					500: '#EF4444',
					600: '#DC2626',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F8FAFC',
					foreground: '#64748B'
				},
				accent: {
					DEFAULT: '#F1F5F9',
					foreground: '#0F172A'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#0F172A'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#0F172A'
				},
			},
			borderRadius: {
				lg: '12px',
				md: '8px',
				sm: '6px'
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'pulse-soft': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				}
			},
			animation: {
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite'
			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
				'hover': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
