import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import * as cssAnimate from "tailwindcss-animate";

function colorMix(rgbColor: string) {
  return `color-mix(in srgb, ${rgbColor} calc(100% * <alpha-value>), transparent)`;
}

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["dark"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        btn: "var(--shadow-btn)",
        "btn-hover": "var(--shadow-btn-hover)",
        "btn-active": "var(--shadow-btn-active)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: colorMix("var(--primary)"),
          foreground: colorMix("var(--primary-foreground)"),
          hover: colorMix("var(--primary-hover)"),
        },
        secondary: {
          DEFAULT: colorMix("var(--secondary)"),
          foreground: colorMix("var(--secondary-foreground)"),
          hover: colorMix("var(--secondary-hover)"),
        },
        destructive: {
          DEFAULT: colorMix("var(--destructive)"),
          foreground: colorMix("var(--destructive-foreground)"),
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: colorMix("var(--accent)"),
          foreground: colorMix("var(--accent-foreground)"),
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [cssAnimate],
} satisfies Config;
