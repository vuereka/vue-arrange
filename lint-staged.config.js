export default {
  "{src,example}/**/*.{js,mjs,cjs,jsx,ts,tsx,vue}": [
    "pnpx prettier --write",
    "pnpx eslint --fix",
  ],
  "*.{js,ts,json}": ["pnpx prettier --write", "pnpx eslint --fix"],
  "**/*.{ts,tsx}": [() => "tsc --skipLibCheck --noEmit"],
};
