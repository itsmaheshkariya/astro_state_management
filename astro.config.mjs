import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), react(), svelte(), tailwind()],
  // output: "server",
  // adapter: node()
});