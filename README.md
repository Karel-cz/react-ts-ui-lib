# ⚛️ React TypeScript UI Library

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3+-61dafb.svg)](https://react.dev/)

A modern, type-safe React component library built with TypeScript. This library provides a collection of reusable UI components designed for both simple and complex use cases, with a focus on developer experience and flexibility.

---

## 📖 About the Project

**React TypeScript UI Library** is an open-source component library that aims to become a comprehensive collection of React components for building modern web applications. Our goal is to create a public TypeScript library with a wide range of contributors, offering both simple and complex components that can be easily integrated into any React project.

### 🎯 Vision

- **Simple & Complex Components**: From basic buttons to sophisticated layout components
- **Type-Safe**: Full TypeScript support with comprehensive type definitions
- **Community-Driven**: Built by and for the community
- **Modern & Flexible**: Built with the latest React patterns and best practices

### 🛠️ Technology Stack

- **React 18.3+** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development experience
- **Vite** - Fast build tool and development server
- **MDI Icons** - Material Design Icons integration

---

## ✨ Features

- ⚡ **TypeScript Support** - Full type definitions for all components
- 🎨 **Modern React Patterns** - Built with hooks and functional components
- 🎯 **Customizable Components** - Highly configurable with extensive prop options
- 🌙 **Theme Support** - Built-in dark mode support
- ♿ **Accessibility** - Components designed with accessibility in mind
- 📦 **Tree-Shakeable** - Import only what you need
- 🚀 **Lightweight** - Optimized bundle size
- 📚 **Well Documented** - Comprehensive documentation and examples

---

## 📦 Components

| Component | Icon | Description |
|-----------|------|-------------|
| **Button** | 🔘 | Versatile button component with multiple variants, sizes, and states |
| **Icon** | 🎨 | Icon component with Material Design Icons support |
| **Pending** | ⏳ | Loading spinner component for async operations |
| **SideBar** | 📋 | Sidebar navigation component with customizable items |
| **Navbar** | 🧭 | Top navigation bar with logo and customizable content |
| **Badge** | 🏷️ | Badge component for labels, tags, and status indicators |

> 💡 **Note**: Check out our [demo application](#-links--resources) to see all components in action with live examples!

---

## 🚀 Installation & Usage

### Installation

Install the library using npm, yarn, or pnpm:

```bash
npm install @react-ts-ui-lib/ui
# or
yarn add @react-ts-ui-lib/ui
# or
pnpm add @react-ts-ui-lib/ui
```

### Basic Usage

```tsx
import { Button, Badge, Icon } from '@react-ts-ui-lib/ui';

function App() {
  return (
    <div>
      <Button 
        label="Click me" 
        colorScheme="primary" 
        onClick={() => console.log('Clicked!')}
      />
      <Badge label="New" colorScheme="success" />
      <Icon icon="mdi-heart" size={24} />
    </div>
  );
}
```

### Quick Start

1. Install the library (see above)
2. Import the components you need
3. Start building! 🎉

---

## 💡 Examples

### Button Component

```tsx
import { Button } from '@react-ts-ui-lib/ui';

// Basic button
<Button label="Submit" onClick={handleSubmit} />

// Button with icon
<Button 
  label="Save" 
  icon="mdi-content-save" 
  iconPosition="left"
  colorScheme="primary"
/>

// Button with loading state
<Button 
  label="Loading..." 
  isPending 
  disabled 
/>

// Different sizes
<Button label="Small" size="sm" />
<Button label="Medium" size="md" />
<Button label="Large" size="lg" />
```

### Badge Component

```tsx
import { Badge } from '@react-ts-ui-lib/ui';

// Basic badge
<Badge label="New" colorScheme="success" />

// Badge with icon
<Badge 
  label="Pro" 
  icon="mdi-star" 
  colorScheme="warning"
/>

// Clickable badge
<Badge 
  label="Click me" 
  clickable 
  onClick={() => alert('Badge clicked!')}
/>
```

### Icon Component

```tsx
import { Icon } from '@react-ts-ui-lib/ui';

// Basic icon
<Icon icon="mdi-heart" />

// Icon with custom size
<Icon icon="mdi-star" size={32} />

// Icon with color
<Icon icon="mdi-check" color="#4CAF50" />
```



---

## 📜 License

This project is licensed under the **MIT License**.

### What MIT License Allows

✅ **Commercial use** - You can use this library in commercial projects  
✅ **Modification** - You can modify the code to suit your needs  
✅ **Distribution** - You can distribute the library or your modifications  
✅ **Private use** - You can use it in private projects  
✅ **Sublicensing** - You can include it in projects with different licenses  

### What MIT License Requires

📝 **Include copyright notice** - You must include the original copyright notice  
📝 **Include license text** - You must include the full MIT license text  

### What MIT License Does NOT Allow

❌ **Removing copyright or license notices** - You cannot remove attribution  

For the full license text, see the [LICENSE](LICENSE) file.

> **Note**: This is a permissive open-source license that allows maximum freedom while protecting the original authors' rights.

---

## 🤝 Contributing

We welcome contributions! This project is designed to be community-driven, and we'd love to have you on board. Contributors will be recognized in our [Contributors section](#-contributor-recognition).

### How to Contribute

Follow these steps to contribute to the project:

#### 1. ⭐ Star the Repository (Pleas)

**This is important!** Giving the repository a star helps with visibility and makes the project more discoverable. This helps attract more contributors and grows the community. Your support means a lot! 🌟

#### 2. 🍴 Fork the Repository

1. Go to the [GitHub repository](https://github.com/karel-cz/react-ts-ui-lib)
2. Click the "Fork" button in the top right corner
3. This creates a copy of the repository in your GitHub account

> **What is forking?** Forking creates your own copy of the project that you can modify without affecting the original.

#### 3. 📥 Clone Your Fork

Clone your forked repository to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/react-ts-ui-lib.git
cd react-ts-ui-lib
```

Add the original repository as an upstream remote:

```bash
git remote add upstream https://github.com/karel-cz/react-ts-ui-lib.git
```

#### 4. 🛠️ Set Up Development Environment

**Prerequisites:**
- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm))
- npm, yarn, or pnpm

**Install dependencies:**

```bash
npm i -ignore scrpits

```

**Run the demo application:**

```bash
npm run dev
```

This starts the demo app at `http://localhost:5173` (or similar) where you can see all components in action.

This builds the library package in the `library/ui/dist` directory.

#### 5. 🌿 Create a Branch from Development

**⚠️ CRITICAL: Always branch from the `development` branch, NOT `main`!**

The `main` branch is for stable releases. All new features and fixes should be based on `development`.

```bash
# Make sure you're up to date
git fetch upstream
git checkout development
git pull upstream development

# Create your feature branch
git checkout -b feature/your-feature-name development
# or for bug fixes:
git checkout -b fix/bug-description development
```

**Branch naming conventions:**
- `feature/component-name` - For new components or features
- `fix/bug-description` - For bug fixes
- `docs/update-readme` - For documentation updates
- `refactor/component-name` - For code refactoring

#### 6. ✏️ Make Your Changes

- Follow the existing code style and patterns
- Use TypeScript for all new code
- Add proper type definitions
- Follow React best practices
- Keep components modular and reusable
- Add comments for complex logic
- Test your changes in the demo app

**Code style guidelines:**
- Use functional components with hooks
- Use TypeScript interfaces for props
- Follow the existing component structure
- Use meaningful variable and function names

#### 7. 🔄 Sync Before Committing

**⚠️ CRITICAL: Always sync with the upstream `development` branch before committing!**

This is essential to avoid merge conflicts and ensure your changes work with the latest code.

**Step-by-step sync process:**

```bash
# Fetch the latest changes from upstream
git fetch upstream

# Update your local development branch
git checkout development
git rebase upstream/development

# Go back to your feature branch
git checkout feature/your-feature-name

# Rebase your branch on the updated development
git rebase development
```

**Why is this important?**
- Avoids merge conflicts
- Ensures your code works with the latest changes
- Keeps the git history clean
- Makes code review easier

If you encounter conflicts during rebase, resolve them and continue:

```bash
# After resolving conflicts
git add .
git rebase --continue
```

#### 8. 💾 Commit Your Changes

Write clear, descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format:

```bash
git add .
git commit -m "type(scope): description"
```

**Commit message format:**
- `feat(button): add loading state support`
- `fix(navbar): correct dark mode styling`
- `docs(readme): update installation instructions`
- `refactor(icon): simplify icon rendering logic`

**Commit types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

#### 9. 🚀 Push and Create Pull Request

**Push your branch to your fork:**

```bash
git push origin feature/your-feature-name
```

If you've rebased, you may need to force push (be careful with this):

```bash
git push origin feature/your-feature-name --force-with-lease
```

**Create a Pull Request:**

1. Go to your forked repository on GitHub
2. Click "New Pull Request"
3. Select `development` as the base branch (NOT `main`)
4. Select your feature branch
5. Fill out the PR template with:
   - Description of changes
   - Screenshots (if UI changes)
   - Related issues (if any)
   - Testing notes

**PR Requirements:**
- All code must be properly formatted
- No console errors or warnings
- Changes should be tested in the demo app
- Documentation updated if needed

#### 10. 👥 Contributor Recognition

Thank you for contributing! 🎉

All contributors will be:
- **Listed in the Contributors section** - Visible in our demo application
- **Recognized in the project** - Your contributions help make this library better
- **Part of the community** - Join a growing community of developers

Check out the [Contributors page](https://github.com/karel-cz/react-ts-ui-lib/graphs/contributors) to see all contributors!

---

## 🛠️ Development Setup

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **Package Manager**: npm, yarn, or pnpm
- **Git**: For version control

### Step-by-Step Setup

1. **Clone the repository** (or your fork):
   ```bash
   git clone https://github.com/karel-cz/react-ts-ui-lib.git
   cd react-ts-ui-lib
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the demo application**:
   ```bash
   npm run dev
   ```
   The demo app will be available at `http://localhost:5173`

### Workspace Structure

This project uses npm workspaces (monorepo structure):

```
react-ts-ui-lib/
├── library/
│   └── ui/              # The main library package
│       └── src/
│           ├── basic-components/
│           └── tools/
├── apps/
│   └── demo/            # Demo application
│       └── src/
└── package.json         # Root package.json with workspaces
```

### Troubleshooting

**Issue**: Dependencies not installing correctly
- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Issue**: Demo app not starting
- **Solution**: Make sure you're using Node.js 18+ and all dependencies are installed

**Issue**: Build errors
- **Solution**: Check TypeScript errors with `npm run build:ui` and fix any type issues

---

## 📁 Project Structure

```
react-ts-ui-lib/
├── library/
│   └── ui/                    # Main library package
│       ├── src/
│       │   ├── basic-components/   # React components
│       │   │   ├── Button.tsx
│       │   │   ├── Badge.tsx
│       │   │   ├── Icon.tsx
│       │   │   ├── Navbar.tsx
│       │   │   ├── SideBar.tsx
│       │   │   └── Pending.tsx
│       │   ├── tools/              # Utility functions
│       │   │   ├── colors.ts
│       │   │   ├── radius.ts
│       │   │   └── size.ts
│       │   └── index.ts            # Main export file
│       ├── package.json
│       └── vite.config.ts
├── apps/
│   └── demo/                  # Demo application
│       ├── src/
│       │   ├── app/            # Demo app components
│       │   ├── Documentation/  # Component documentation
│       │   └── main.tsx
│       └── package.json
├── LICENSE
└── README.md
```

### Monorepo Benefits

- **Shared dependencies** - Dependencies are managed at the root level
- **Easy development** - Work on library and demo simultaneously
- **Consistent tooling** - Same build tools and configurations
- **Workspace commands** - Run commands in specific workspaces

---

## 🗺️ Roadmap

We're constantly working on improving the library. Here's what's coming:

### Planned Features

- 🔄 More component variants and options
- 🎨 Additional theme customization options
- 📱 Mobile-responsive improvements
- ♿ Enhanced accessibility features
- 🧪 Comprehensive test coverage
- 📚 Expanded documentation

### Upcoming Components

- Data tables
- Forms and inputs
- Modals and dialogs
- Tooltips and popovers
- And more!

### Community Suggestions

Have an idea for a component or feature? We'd love to hear it! Open an issue or discussion on GitHub.

---

## 💬 Support & Community

### Getting Help

- **GitHub Issues** - Report bugs or request features
- **GitHub Discussions** - Ask questions and share ideas
- **Documentation** - Check the demo app for component examples

### Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please be respectful and constructive in all interactions.

---

## 🔗 Links & Resources

- 🔗 **GitHub Repository**: [karel-cz/react-ts-ui-lib](https://github.com/karel-cz/react-ts-ui-lib)
- 🎮 **Demo Application**: [Live Demo](https://github.com/karel-cz/react-ts-ui-lib) (when deployed)
- 📚 **Documentation**: See component examples in the demo app
- 👤 **Author**: [Karel-cz](https://github.com/Karel-cz)

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by the community**
