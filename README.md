# 🚀 Zikola Lab — Internship Monorepo

This repository is a centralized **Monorepo** managed with **Turborepo** and **pnpm**. It serves as the single source of truth housing all my technical tasks, feature implementations, and engineering experiments during my internship journey at **Zikola Lab**.

---

## 🏗️ Repository Architecture

Instead of scattering tasks across multiple isolated repositories, every major task or application layer is orchestrated inside unified workspaces:

*   **`apps/*`** – Standalone applications and complex tasks assigned during the internship (e.g., `dental-ops`, `glow-medical`). 
    > 💡 *Note: Each application here is fully decoupled, allowing independent configuration, environment variables, and **independent deployment** to its own unique URL.*
*   **`packages/*`** – Shared internal packages holding global configs (TypeScript profiles, ESLint standards, Tailwind CSS configurations) and the core Design System (`/ui`).

---

## 📦 Monorepo Dependency Management

Managing packages inside a Monorepo requires a strict and clean approach to prevent dependency hell:

*   **Global Dependencies:** Shared tools (like Prettier, Husky, or global TypeScript) are installed once at the root level.
*   **Workspace Filtering:** We use `pnpm --filter` to add or update packages inside a specific application or package without affecting the rest of the project.
*   **Internal Linking:** Local packages (like `packages/ui`) are linked into applications via pnpm workspaces using the `"package-name": "workspace:*"` syntax, ensuring real-time code updates during development.

---

## 🌿 Professional Git & Agile Workflow

To maintain production-grade standards, every task follows a strict Agile lifecycle before touching the protected `main` branch:

1.  **Issue Creation:** Each task starts as a tracked GitHub Issue defining core deliverables.
2.  **Isolated Branching:** Code is developed on a dedicated task branch linked directly to its Issue ID (e.g., `1-feat-paragraph-cva`).
3.  **Atomic Commits & Squashing:** Local micro-commits are squashed (`git rebase -i`) into a single descriptive semantic commit before the final push.
4.  **Pull Request & Code Review:** Merging into the `main` branch requires opening a Pull Request (PR) to trigger automated validation pipelines and supervisor code reviews.

---

## ⚡ Quick Start & Development Commands

```bash
# 1. Install dependencies across all workspaces cleanly
pnpm install

# 2. Run all applications in parallel development mode
pnpm dev

# 3. Run or develop a single specific app
pnpm --filter <app-name> dev

# 4. Build a specific application for independent deployment (e.g., dental-ops)
pnpm --filter dental-ops build