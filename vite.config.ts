import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  appType: 'mpa',
  plugins: [tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
        notarySolutions: fileURLToPath(new URL('./projects/notary-solutions.html', import.meta.url)),
        camelotVet: fileURLToPath(new URL('./projects/camelot-vet.html', import.meta.url)),
        raasinNonprofit: fileURLToPath(new URL('./projects/raasin-nonprofit.html', import.meta.url)),
      },
    },
  },
});
