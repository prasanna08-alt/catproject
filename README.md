# Cat Eye Login — React + SVG + GSAP + Three.js

A responsive login-page recreation inspired by the supplied reference. It includes a green reveal background, an SVG cat mascot, GSAP eye/paw/head animation, mouse-following pupils, and a subtle Three.js particle layer.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code / terminal.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL Vite prints (usually `http://localhost:5173`).

## Interactions
- Move your mouse: cat pupils follow.
- Focus/type in username: cat looks upward briefly.
- Focus/type in password: cat closes its eyes and raises its paws.
- Submit with empty fields: validation message appears.
- Submit with both fields filled: demo success message appears. This is a front-end demonstration only; it does not authenticate against a server.
- Password visibility, remember-me checkbox, forgot-password feedback and sign-up feedback work.

The Three.js particle layer is decorative and the layout falls back gracefully if WebGL is unavailable. The form is a demo; connect it to a real authentication endpoint before using it with real accounts.
