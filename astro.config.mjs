import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://rajdevkar.github.io',
  integrations: [tailwind()]
});
