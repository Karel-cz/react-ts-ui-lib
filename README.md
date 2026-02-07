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

Rádi uvítáme příspěvky — i od začátečníků. Postupuj krok za krokem:

### 1. Vytvoř si kopii repozitáře (fork)

Na GitHubu otevři [karel-cz/react-ts-ui-lib](https://github.com/karel-cz/react-ts-ui-lib) a klikni na **Fork**. Vznikne ti kopie projektu pod tvým účtem.

### 2. Naklonuj si svůj fork na počítač

V terminálu (nahraď `TVE_GITHUB_JMENO` svým GitHub nickem):

```bash
git clone https://github.com/TVE_GITHUB_JMENO/react-ts-ui-lib.git
cd react-ts-ui-lib
```

Přidej původní repo jako „upstream“, aby sis mohl později stáhnout nové změny:

```bash
git remote add upstream https://github.com/karel-cz/react-ts-ui-lib.git
```

### 3. Vytvoř větev pro svoji úpravu

Všechny větve se zakládají z `main`. Vždy před vytvořením nové větve stáhni nejnovější kód:

```bash
git checkout main
git pull upstream main
git checkout -b muj-popis-zmeny
```

Příklad názvů větví: `pridani-tlacitka-loading`, `oprava-dark-mode`, `doplneni-dokumentace`.

### 4. Udělej změny v kódu

- Piš v TypeScriptu, drž se stylu existujícího kódu.
- Používej funkční komponenty a hooky.
- Ověř, že vše funguje: spusť `npm run dev` a vyzkoušej to v demo aplikaci.

### 5. Commitni a pushni

```bash
git add .
git commit -m "krátký popis toho, co jsi změnil"
git push origin muj-popis-zmeny
```

Commit zpráva může být např.: „Přidán loading stav u Button“, „Oprava stylů v dark mode“.

### 6. Otevři Pull Request (PR)

1. Jdi na svůj fork na GitHubu.
2. Klikni na **Compare & pull request** (GitHub ti to nabídne po pushi).
3. Základní větev (base) nech **main**.
4. Napiš, co jsi změnil, u úprav UI přidej screenshot.
5. Odešli PR.

Po schválení a mergi bude tvá změna v projektu a objevíš se mezi [přispěvateli](https://github.com/karel-cz/react-ts-ui-lib/graphs/contributors).

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
