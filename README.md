# ⚛️ React TypeScript UI Library

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3+-61dafb.svg)](https://react.dev/)

A modern, type-safe React component library built with TypeScript. Reusable UI components and utilities for building web applications.

---

## 📖 About the Project

**React TypeScript UI Library** is an open-source component library for React applications. It provides a growing set of UI components (buttons, inputs, modals, navbars, badges, and more) plus small utilities (validation, clipboard, storage). The library is built with TypeScript, supports theming and dark mode, and is designed to be easy to integrate and extend.

### 🎯 Vision

- **Simple & complex components** — from Button and Badge to Block, Modal, SideBar, Navbar
- **Type-safe** — full TypeScript support and exported types
- **Community-driven** — open for contributions
- **Modern stack** — React 18+, Vite, MDI icons

### 🛠️ Technology Stack

- **React 18.3+** — hooks, functional components
- **TypeScript** — type-safe APIs
- **Vite** — build and dev server
- **MDI Icons** — Material Design Icons

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** (or yarn/pnpm)

### Run the project locally

1. **Clone the repository** (or your fork):

   ```bash
   git clone https://github.com/karel-cz/react-ts-ui-lib.git
   cd react-ts-ui-lib
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the demo app**:

   ```bash
   npm run dev
   ```

   Demo runs at `http://localhost:5173` and showcases all components.

---

## 🤝 Contributing

We happily welcome contributions — including from beginners. Follow these steps:

### 1. Fork the repository

On GitHub, open [karel-cz/react-ts-ui-lib](https://github.com/karel-cz/react-ts-ui-lib) and click **Fork**. This creates a copy of the repo under your account.

### 2. Clone your fork

In your terminal (replace `YOUR_GITHUB_USERNAME` with your GitHub username):

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/react-ts-ui-lib.git
cd react-ts-ui-lib
```

Add the original repo as `upstream` so you can pull new changes later:

```bash
git remote add upstream https://github.com/karel-cz/react-ts-ui-lib.git
```

### 3. Create a feature branch

All branches should be created from `main`. Always pull the latest code before creating a new branch:

```bash
git checkout main
git pull upstream main
git checkout -b my-feature-or-fix
```

Example branch names: `add-button-loading-state`, `fix-dark-mode`, `update-documentation`.

### 4. Make your changes

- Write TypeScript and follow the existing code style.
- Use functional components and hooks.
- Verify everything works: run `npm run dev` and test in the demo app.

### 5. Commit and push

```bash
git add .
git commit -m "short description of your change"
git push origin my-feature-or-fix
```

Example commit messages: "Add loading state to Button", "Fix styles in dark mode".

### 6. Open a Pull Request (PR)

1. Go to your fork on GitHub.
2. Click **Compare & pull request** (GitHub usually suggests this after a push).
3. Keep the base branch as **main**.
4. Describe what you changed; for UI changes, please add a screenshot.
5. Submit the PR.

After review and merge, your change will be part of the project and you will appear among the [contributors](https://github.com/karel-cz/react-ts-ui-lib/graphs/contributors).

---

## 📁 Project Structure

```
react-ts-ui-lib/
├── package.json              # Root workspace config & scripts
├── jest.config.js            # Tests
├── LICENSE
├── README.md
│
├── library/
│   ├── ui/                   # Main UI library (@react-ts-ui-lib/ui)
│   │   ├── src/
│   │   │   ├── basic-components/
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── Block.tsx
│   │   │   │   ├── Box.tsx
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── ButtonGroup.tsx
│   │   │   │   ├── Checkbox.tsx
│   │   │   │   ├── CopyToClipboard.tsx
│   │   │   │   ├── Date.tsx
│   │   │   │   ├── Documentation.tsx
│   │   │   │   ├── Icon.tsx
│   │   │   │   ├── InfoGroup.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Label.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── Number.tsx
│   │   │   │   ├── Pending.tsx
│   │   │   │   ├── Popover.tsx
│   │   │   │   ├── ProfileCard.tsx
│   │   │   │   ├── Radios.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   ├── SideBar.tsx
│   │   │   │   ├── TabGroup.tsx
│   │   │   │   ├── ThemeToggle.tsx
│   │   │   │   └── UtilityDocumentation.tsx
│   │   │   ├── tools/
│   │   │   │   ├── colors.ts
│   │   │   │   ├── labelSize.ts
│   │   │   │   ├── radius.ts
│   │   │   │   └── size.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   └── utilities/            # Shared utilities (e.g. copyToClipboard, validateEmail)
│       ├── copyToClipboard.ts
│       ├── generatePassword.ts
│       ├── generateRandomString.ts
│       ├── getMostFrequentValue.ts
│       ├── parseQueryString.ts
│       ├── storage.ts
│       ├── validateEmail.ts
│       ├── validateJson.ts
│       └── index.ts
│
└── apps/
    └── demo/                 # Demo app (component showcase & docs)
        ├── src/
        │   ├── app/          # App layout, routing, context
        │   ├── documentation/  # Per-component docs (basic-components/, utilities/)
        │   ├── locales/
        │   └── main.tsx
        ├── package.json
        └── vite.config.ts
```

---

## 📝 Code Examples

### Button

```tsx
import { Button } from "@react-ts-ui-lib/ui";

<Button text="Click me" onClick={() => console.log("clicked")} />
<Button text="Primary" significance="primary" />
<Button text="Disabled" disabled />
```

### Badge

```tsx
import { Badge } from "@react-ts-ui-lib/ui";

<Badge text="New" significance="primary" />
<Badge text="Done" significance="success" />
```

### Input with Label

```tsx
import { Input, Label } from "@react-ts-ui-lib/ui";

<Label text="Email" />
<Input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="you@example.com"
/>
```

### ThemeToggle (dark mode)

```tsx
import { ThemeToggle } from "@react-ts-ui-lib/ui";

<ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
```

---

## 🗺️ Roadmap

- More component variants and theme options
- Mobile-responsive and accessibility improvements
- Broader test coverage and documentation
- Community-driven ideas — open an issue or discussion with suggestions

---

## 💬 Support & Links

- **Issues & feature requests**: [GitHub Issues](https://github.com/karel-cz/react-ts-ui-lib/issues)
- **Discussions**: [GitHub Discussions](https://github.com/karel-cz/react-ts-ui-lib/discussions)
- **Repository**: [karel-cz/react-ts-ui-lib](https://github.com/karel-cz/react-ts-ui-lib)
- **Author**: [Karel-cz](https://github.com/Karel-cz)

---

## 📄 License

MIT — see [LICENSE](LICENSE).

---

**Made with ❤️ by the community**
