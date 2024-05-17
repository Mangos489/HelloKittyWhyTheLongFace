import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { HelloKitty } from './src/HelloKitty'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			fontFamily: {
				custom: ['ghost', 'sans-serif'],
				play: ['play', 'sans-serif'],
			  },
			animation: {
				'infinite-scroll': 'infinite-scroll 225s linear infinite',
			  },
			  keyframes: {
				'infinite-scroll': {
				  from: { transform: 'translateX(0)' },
				  to: { transform: 'translateX(-100%)' },
				}
			  },
			  
			  colors:{
				hewoo:'#FF9DF5',
				Mainpink: {
					50: "#FFFAFE",
					100: "#FFF5FE",
					200: "#FFF0FD",
					300: "#FFE5FC",
					400: "#FFE0FC",
					500: "#FFD7FB",
					600: "#FF7AF2",
					700: "#FF1AE8",
					800: "#BD00AA",
					900: "#5C0053",
					950: "#2E0029"
				  }
			}
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					HelloKitty,
				],
			},
		}),
	],
} satisfies Config;
