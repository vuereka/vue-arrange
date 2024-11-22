export default {
  "**/*.{js,jsx,ts,tsx}": ["pnpx prettier --write", "pnpx eslint --fix"],
  "**/*.{ts,tsx}": [() => "tsc --skipLibCheck --noEmit"],
};
