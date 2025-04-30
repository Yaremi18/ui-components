# 📦 ui-components

Reusable UI components library built with **React** and documented using **Storybook**. This project aims to provide a consistent, scalable, and customizable design system for web applications.

## 🧩 Description

`ui-components` is a collection of modular and tested React components, designed to accelerate front-end development across multiple projects. Each component is isolated, themed, and documented with live previews using Storybook.

## 🚀 Tech Stack

- **React** – UI library
- **Storybook** – Component documentation and showcase
- **Vite** – Lightning-fast bundler and dev server
- **ESLint & Prettier** – Code quality and formatting

## 🛠️ Install, run and build

First clone the repository and install the dependencies

```bash
git clone https://github.com/your-username/ui-components.git
cd ui-components
npm install
# or
yarn install
```

To start the Storybook development server:

```bash
npm run storybook
# or
yarn storybook
```

This will open Storybook at http://localhost:6006.

### Build the component library

```bash
npm run build
# or
yarn build
```

The output will go to the dist directory.

### Build the Storybook for static hosting

```bash
npm run build-storybook
# or
yarn build-storybook
```

The output will go to the storybook-static directory.
