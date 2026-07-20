# GitHub Pages Deployment Workflow

This directory contains the automated GitHub Actions deployment pipeline for **Sewa AC Cikarang**.

---

## 🚀 Workflow Overview

The site is built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** without any external compilation steps.

The deployment configuration located in [.github/workflows/pages.yml](file:///home/langit/Dev/rent-web/.github/workflows/pages.yml) performs the following tasks:

1. **Trigger**: Automatically executes on every `push` to the `main` branch or when manually triggered via `workflow_dispatch`.
2. **Permissions**: Grants `pages: write` and `id-token: write` required for GitHub's OpenID Connect (OIDC) deployment authentication.
3. **Artifact Upload**: Packages the root directory (`.`) using `actions/upload-pages-artifact@v3`.
4. **Publishing**: Deploys the static bundle to GitHub Pages using `actions/deploy-pages@v4`.

---

## ⚙️ Required Repository Settings

To activate this automated deployment pipeline:

1. Open your repository on **GitHub.com**.
2. Navigate to **Settings** → **Pages** (under the *Code and automation* sidebar menu).
3. Under **Build and deployment**:
   - Locate the **Source** drop-down menu.
   - Change the selection from `Deploy from a branch` to **`GitHub Actions`**.
4. Save your changes. Subsequent pushes to `main` will deploy automatically.
