import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Text colors
        'text-primary': 'var(--color-text-primary)',
        'text-muted': 'var(--color-text-muted)',
        'text-inverse': 'var(--color-text-inverse)',
        
        // Background colors
        'bg-page': 'var(--color-bg-page)',
        'bg-section': 'var(--color-bg-section)',
        'bg-overlay': 'var(--color-bg-overlay)',
        
        // Brand colors
        'brand-primary': 'var(--color-brand-primary)',
        'brand-secondary': 'var(--color-brand-secondary)',
        'brand-accent': 'var(--color-brand-accent)',
        
        // Border colors
        'border-light': 'var(--color-border-light)',
        'border-medium': 'var(--color-border-medium)',
        'border-dark': 'var(--color-border-dark)',
        
        // Status colors
        'status-success': 'var(--color-status-success)',
        'status-warning': 'var(--color-status-warning)',
        'status-error': 'var(--color-status-error)',
      },
      fontFamily: {
        'heading': ['var(--font-heading)'],
        'body': ['var(--font-body)'],
        'caption': ['var(--font-caption)'],
        'mono': ['var(--font-mono)'],
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        'section-y': 'var(--spacing-section-y)',
        'header-gap': 'var(--spacing-header-gap)',
        'tile-gap': 'var(--spacing-tile-gap)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        'tile': 'var(--radius-tile)',
        'button': 'var(--radius-button)',
      },
      fontSize: {
        'xs': ['var(--font-size-xs)', { lineHeight: 'var(--line-height-tight)' }],
        'sm': ['var(--font-size-sm)', { lineHeight: 'var(--line-height-tight)' }],
        'base': ['var(--font-size-base)', { lineHeight: 'var(--line-height-normal)' }],
        'lg': ['var(--font-size-lg)', { lineHeight: 'var(--line-height-normal)' }],
        'xl': ['var(--font-size-xl)', { lineHeight: 'var(--line-height-normal)' }],
        '2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-tight)' }],
        '3xl': ['var(--font-size-3xl)', { lineHeight: 'var(--line-height-tight)' }],
      },
      letterSpacing: {
        'wide': 'var(--letter-spacing-wide)',
      },
    },
  },
  plugins: [],
}

export default config
