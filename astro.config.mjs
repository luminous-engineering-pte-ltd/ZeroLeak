import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://zeroleak.com.sg',
  vite: {
    plugins: [tailwindcss()]
  }
});
