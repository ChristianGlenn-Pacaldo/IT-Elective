import type { Config } from "tailwindcss";

const config: Config = {
content: [
"./app//*.{js,ts,jsx,tsx,mdx}",
"./components//*.{js,ts,jsx,tsx,mdx}",
],
theme: {
extend: {
container: {
center: true,
padding: "1.5rem",
screens: {
"2xl": "1200px",
},
},
keyframes: {
wave: {
'0%': { transform: 'rotate(0.0deg)' },
'10%': { transform: 'rotate(14.0deg)' },
'20%': { transform: 'rotate(-8.0deg)' },
'30%': { transform: 'rotate(14.0deg)' },
'40%': { transform: 'rotate(-4.0deg)' },
'50%': { transform: 'rotate(10.0deg)' },
'60%': { transform: 'rotate(0.0deg)' },
'100%': { transform: 'rotate(0.0deg)' },
},
},
animation: {
'waving-hand': 'wave 2s linear infinite',
},
},
},
plugins: [],
};

export default config;