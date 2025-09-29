# Akshata Amara | Cyber Security & Gen-AI Portfolio

> An interactive, cybersecurity-themed portfolio for Akshata Amara, showcasing projects, skills, and achievements with a striking brutalist design aesthetic.

This project creates a production-grade, interactive portfolio for Akshata Amara, a Cyber-Security and Gen-AI specialist. The design is intentionally raw and striking, adhering to a Brutalist aesthetic with a light background, bold monospaced typography, and vibrant neon green and purple accents. The portfolio is a single-page application built for performance and a visually arresting user experience on a modern serverless stack with Cloudflare Workers.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/SpaceCat1404/akshata_portfolio)

## Table of Contents

- [✨ Key Features](#-key-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [💻 Development](#-development)
- [📦 Building for Production](#-building-for-production)
- [☁️ Deployment](#️-deployment)
- [📂 Project Structure](#-project-structure)
- [📄 License](#-license)

## ✨ Key Features

- **Striking Brutalist Design:** A raw, high-contrast, light-mode UI with sharp corners, thick borders, and a monospaced, terminal-like typography.
- **Vibrant Accent Colors:** A minimalistic palette of off-white, black, and striking neon green and purple accents.
- **Interactive Project Showcase:** A grid of project cards that open full-screen modals with detailed information, demos, and links.
- **Single-Page Application:** Smooth navigation between Home, About, Projects, and Contact sections.
- **Command Palette:** A `⌘K` / `Ctrl+K` interface for quick navigation, inspired by modern code editors.
- **High-Performance:** Built with Vite and deployed on Cloudflare's edge network for lightning-fast load times.
- **Responsive Perfection:** Flawless layouts across all device sizes, from mobile to desktop.

## 🛠️ Technology Stack

- **Frontend:** [React](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/), [Lucide React](https://lucide.dev/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Command Palette:** [cmdk](https://cmdk.paco.me/)
- **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- A [Cloudflare account](https://dash.cloudflare.com/sign-up).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/brutalist_portfolio_akshata.git
    cd brutalist_portfolio_akshata
    ```

2.  **Install dependencies:**
    This project uses Bun as the package manager.
    ```sh
    bun install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root of the project if any environment-specific variables are needed. (Currently, none are required for local development).

## 💻 Development

To start the local development server, run the following command. This will start the Vite development server, typically on `http://localhost:3000`.

```sh
bun run dev
```

The application will automatically reload if you change any of the source files.

## 📦 Building for Production

To create a production-ready build of the application, run:

```sh
bun run build
```

This command bundles the React application into static files for production and places them in the `dist` directory.

## ☁️ Deployment

This project is configured for seamless deployment to **Cloudflare Workers**.

1.  **Log in to Wrangler:**
    Authenticate the Wrangler CLI with your Cloudflare account.
    ```sh
    npx wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script, which first builds the project and then deploys it to your Cloudflare account.
    ```sh
    bun run deploy
    ```

Alternatively, you can deploy directly from your GitHub repository with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/SpaceCat1404/akshata_portfolio)

## 📂 Project Structure

```
.
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable React components (including shadcn/ui)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and data
│   ├── pages/           # Page components for routing
│   ├── App.tsx          # Root application component
│   ├── index.css        # Global CSS and Tailwind directives
│   └── main.tsx         # Application entry point
├── worker/              # Cloudflare Worker server-side code
│   └── index.ts         # Worker entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.