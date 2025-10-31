## wad-ia-03 — React + Vite Sum Calculator

A small React application scaffolded with Vite. This project implements a simple sum calculator UI component and a few supporting UI primitives (dialog, inputs, theme toggle). It's intended as an individual assignment/example project.

Highlights
- Lightweight React app using Vite for fast dev experience and HMR.
- Small component set in `src/components` and a custom `useCalculator` hook in `src/hooks`.
- Minimal, opinionated UI primitives in `src/ui` for buttons, inputs and dialogs.

Table of contents
- Project overview
- Features
- Tech stack
- Quick start
- Project structure
- Usage
- Development notes
- Contributing

## Features
- Sum calculation UI (enter numbers, get sum).
- Accessible input components and result dialog.
- Light/dark theme toggle.
- Small, composable UI primitives for reuse.

## Tech stack
- React (JSX)
- Vite (dev server and build)
- ESLint (project linting)

## Quick start
Prerequisites
- Node.js 16+ (LTS recommended)

Install dependencies

```pwsh
npm install
```

Run development server

```pwsh
npm run dev
```

Build for production

```pwsh
npm run build
```

Preview production build locally

```pwsh
npm run preview
```

Notes on deploy
- This is a static front-end project; any static host (GitHub Pages, Netlify, Vercel) will work. If you're deploying to GitHub Pages, ensure the `homepage` (or predeploy script) in `package.json` is configured if required by your workflow.

## Project structure
Key files and folders (top-level `src` view):

- `src/main.jsx` — entry point
- `src/App.jsx` — root app component
- `src/components/` — app components
	- `SumCalculator.jsx` — main calculator UI
	- `ResultDialog.jsx` — dialog that shows results
	- `InputWithLabel.jsx` — labeled input component
	- `ThemeToggle.jsx` — toggles light/dark themes
	- `TooltipWrapper.jsx` — small tooltip helper
- `src/hooks/useCalculator.js` — hook that encapsulates calculation logic
- `src/lib/utils.js` — small utilities
- `src/ui/` — UI primitives (buttons, inputs, card, tooltip, etc.)

Other files
- `index.html` — app HTML template
- `vite.config.js` — Vite configuration
- `package.json` — scripts and dependencies

## Usage
Open the app in the browser (after `npm run dev`).

Typical workflow in the UI:
1. Enter numbers into the input fields in `SumCalculator`.
2. Submit or click the calculate button.
3. See results in `ResultDialog`.
4. Toggle theme using the `ThemeToggle` control.

## Development notes
- Keep components small and focused. `SumCalculator` delegates input rendering to `InputWithLabel` and shows results via `ResultDialog`.
- The hook `useCalculator` centralizes the calculation and validation logic.

Edge cases considered
- Empty inputs are handled by the hook and UI validation.
- Non-numeric input is sanitized/validated.

## Tests & linting
- If the project does not yet include tests, consider adding a minimal test for `useCalculator` (happy path + invalid input).
- Lint with ESLint using the project's existing config.

## Contributing
- Fork the repo, create a feature branch, and open a pull request.
- Keep changes focused and add tests for new behavior when possible.

## License
No license specified. Add a `LICENSE` file if you want to make the project open source.

---

If you'd like, I can also:
- add a short contributor guide or code of conduct,
- add a tiny unit test for `useCalculator`, or
- wire up a GitHub Pages deploy script and update `package.json`.

If you want any of those, tell me which and I'll add it next.
