import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const inlineSpriteSheets = [
  readFileSync(resolve(__dirname, 'public/heroicons.svg'), 'utf8'),
  readFileSync(resolve(__dirname, 'public/icons.svg'), 'utf8'),
].join('')

function buildAssetRecoveryScript() {
  return `<script>
(() => {
  const retryFlag = 'data-public-fallback-applied';
  const boundFlag = 'data-public-fallback-bound';
  const toPublicPath = (value) => {
    if (!value || !value.startsWith('/') || value.startsWith('/public/')) return value;
    return '/public' + value;
  };

  const retryImageFromPublic = (img) => {
    const source = img.getAttribute('src');
    const fallback = toPublicPath(source);
    if (!fallback || fallback === source || img.getAttribute(retryFlag) === '1') return;
    img.setAttribute(retryFlag, '1');
    img.src = fallback;
  };

  const bindImageFallback = (img) => {
    if (img.getAttribute(boundFlag) === '1') return;
    img.setAttribute(boundFlag, '1');

    const check = () => {
      if (img.complete && img.naturalWidth === 0) {
        retryImageFromPublic(img);
      }
    };

    img.addEventListener('error', () => retryImageFromPublic(img), { once: true });
    requestAnimationFrame(check);
    window.addEventListener('load', check, { once: true });
  };

  document.querySelectorAll('img[src]').forEach(bindImageFallback);

  const repairSpriteRefs = async () => {
    const refs = new Set();

    document.querySelectorAll('use').forEach((node) => {
      const href = node.getAttribute('href') || node.getAttribute('xlink:href');
      if (!href || !href.startsWith('/') || href.startsWith('/public/') || !href.includes('#')) return;
      refs.add(href.split('#')[0]);
    });

    if (!refs.size) return;

    const brokenRoots = new Set();

    await Promise.all([...refs].map(async (assetPath) => {
      try {
        const response = await fetch(assetPath, { cache: 'no-store' });
        const contentType = response.headers.get('content-type') || '';
        response.body?.cancel?.();

        if (!response.ok || !contentType.includes('image/svg+xml')) {
          brokenRoots.add(assetPath);
        }
      } catch {
        brokenRoots.add(assetPath);
      }
    }));

    if (!brokenRoots.size) return;

    document.querySelectorAll('use').forEach((node) => {
      const attr = node.hasAttribute('href') ? 'href' : 'xlink:href';
      const href = node.getAttribute(attr);
      if (!href || !href.startsWith('/') || href.startsWith('/public/') || !href.includes('#')) return;

      const [assetPath, fragment] = href.split('#');
      if (!fragment || !brokenRoots.has(assetPath)) return;

      node.setAttribute(attr, toPublicPath(assetPath) + '#' + fragment);
    });
  };

  repairSpriteRefs();
})();
</script>`
}

function assetRecoveryPlugin() {
  return {
    name: 'asset-recovery-plugin',
    transformIndexHtml(html) {
      return html
        .replaceAll('/heroicons.svg#', '#')
        .replaceAll('/icons.svg#', '#')
        .replace('</body>', `${inlineSpriteSheets}${buildAssetRecoveryScript()}</body>`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), assetRecoveryPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        help: resolve(__dirname, 'help.html'),
        articles: resolve(__dirname, 'articles.html'),
        article: resolve(__dirname, 'article.html'),
        contact: resolve(__dirname, 'contact.html'),
        terms: resolve(__dirname, 'terms.html'),
        privacy: resolve(__dirname, 'privacy.html'),
      },
    },
  },
})
