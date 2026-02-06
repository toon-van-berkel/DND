import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html' // important for client-side routes
    }),
    paths: {
      // REQUIRED for GitHub Pages when deploying to https://user.github.io/<repo>/
      base: process.env.BASE_PATH ?? ''
    }
  }
};
