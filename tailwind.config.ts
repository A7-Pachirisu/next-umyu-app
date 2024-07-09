import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        dunggeunmo: ['DungGeunMo']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'custom-yellow': '#FFCC00',
        'custom-blue': '#0075BE',
        'custom-red': '#C63625',
        'custom-grey': '#949494',
        'custom-white': '#f1f8f8',
        'custom-black': '#000000',
        'bar-color': '#39394A'
      }
    }
  },
  plugins: []
};
export default config;
