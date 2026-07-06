// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://talipyildiz.github.io',
  vite: {
    plugins: [
      // @ts-expect-error Vite plugin types differ between Astro and @tailwindcss/vite
      tailwindcss(),
    ],
  },

  integrations: [react()]
});