import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { paginas } from './paginas/conteudo.mjs';

// base absoluta: o site vive na raiz do domínio vitordemelo.com.br e as páginas de serviço ficam em subpastas
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        ...Object.fromEntries(paginas.map((p) => [p.slug, resolve(import.meta.dirname, p.slug, 'index.html')])),
      },
    },
  },
});
