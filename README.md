# Cazpian Documentation & Blog

This repository contains the source code for the Cazpian documentation and public blog site, built using **Docusaurus (v3)**. It features an automated blog generation system that allows you to manage blog posts via a single JSON file.

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 20 or higher.
- **Package Manager**: npm (standard with Node.js).

### Setup
1. Clone the repository to your local machine.
2. Open your terminal in the `cazpian-docs` folder.
3. Install dependencies:
   ```powershell
   npm install
   ```

---

## 🛠️ Commands Reference

| Command | Description | Recommended Usage |
| :--- | :--- | :--- |
| `npm start` | Runs the development server at `http://localhost:3000`. | Use this to preview your site while working. |
| `npm run gen-blog` | **[NEW]** Watches `blog-posts.json` for changes and updates blogs instantly. | **Run this in a separate terminal** while editing blogs. |
| `npm run build` | Compiles the site into static files in the `build/` folder. | Run this before deploying to production. |
| `npm run serve` | Serves the production build locally for testing. | Use this to verify the `build` folder works. |
| `npm run clear` | Clears the Docusaurus cache/build folders. | Use this if you see weird UI bugs or "old" content. |
| `npm run typecheck` | Validates TypeScript code for errors. | Run this to ensure code quality before building. |

---

## 📝 Writing Content

### 1. Adding/Editing Blogs (Recommended)
Instead of creating Markdown files manually, use the automated system:
1. Open `blog-posts.json`.
2. Add or modify an entry in the JSON array.
3. Ensure you have `npm run gen-blog` running in a terminal.
4. Your changes will automatically sync to the `blog/` folder and your local site.

### 2. Adding Documentation Pages
1. Create a new `.md` file in the `docs/` directory.
2. Add frontmatter (id, title, etc.) at the top.
3. Update `sidebars.ts` to place your new page in the navigation menu.

---

## 🌐 Deployment
To prepare the site for a web server (like Nginx on EC2):
1. Run `npm run build`.
2. Upload the contents of the `build/` folder to your server's web root.
3. Ensure your server is configured to serve static files.

---

*Happy Coding!* 🚀
