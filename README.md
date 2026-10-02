# Renata Portfolio

Minimal multi-page portfolio starter using Vite, HTML, Tailwind CSS, vanilla JavaScript, and custom CSS. Pages intentionally contain no visible content or design.

## Local development

Use Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Page paths are `/`, `/about.html`, `/projects/notary-solutions.html`, `/projects/camelot-vet.html`, and `/projects/raasin-nonprofit.html`.

```sh
npm run build
npm run preview
```

The build command generates `dist/`. Preview serves that production build locally.

## Structure

```text
public/
  documents/
  images/
    home/
    about/
    notary-solutions/
    camelot-vet/
    raasin-nonprofit/
src/
  css/
    styles.css
  js/
    main.js
projects/
  notary-solutions.html
  camelot-vet.html
  raasin-nonprofit.html
index.html
about.html
package.json
package-lock.json
vite.config.ts
vercel.json
.gitignore
README.md
```

Empty asset folders contain `.gitkeep` files so Git can retain them. The pre-existing `img/` folder is preserved and is not used by this starter.

## Files and configuration

- `package.json` declares the project, build dependencies, Node requirement, and `dev`, `build`, and `preview` commands. `private` prevents accidental npm publishing; `type: module` enables ES modules.
- `package-lock.json` records exact dependency versions for reproducible installs. Commit it along with `package.json`.
- `vite.config.ts` enables Tailwind's Vite plugin and lists all five HTML build entry points. `appType: 'mpa'` configures multi-page behavior. Vite loads the TypeScript configuration directly; application code remains vanilla JavaScript.
- `vercel.json` tells Vercel to use Vite, run `npm run build`, and publish `dist/` when you deploy.
- `.gitignore` excludes dependencies, generated builds, local deployment files, logs, and environment files from Git.
- `src/js/main.js` is loaded by every page and imports the shared stylesheet. Add shared behavior here later.
- `src/css/styles.css` imports Tailwind. Add custom CSS below the import when building the design. This setup uses Tailwind's Vite plugin, so no separate Tailwind or PostCSS configuration is needed.

## Assets

Place PNG files in the matching `public/images/` subfolder. Vite serves `public/` assets from the URL root and copies them unchanged into `dist/`. For example, a future file at `public/images/home/portrait.png` would be referenced as `/images/home/portrait.png`. Documents work the same way using `/documents/filename`.

## Reference

- [Vite multi-page builds](https://vite.dev/guide/build.html#multi-page-app)
- [Tailwind with Vite](https://tailwindcss.com/docs/installation/using-vite)
