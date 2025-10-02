import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://phoosy.github.io',
  // Set base to /BlogginIt/ only during production build
  base: process.env.NODE_ENV === 'production' ? '/BlogginIt' : '/',
});