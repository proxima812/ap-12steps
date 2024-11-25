import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DqQUXBiJ.mjs';
import { manifest } from './manifest_nhaEKQSH.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/studio/_---params_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/arhive/_slug_.astro.mjs');
const _page4 = () => import('./pages/faq.astro.mjs');
const _page5 = () => import('./pages/groups.astro.mjs');
const _page6 = () => import('./pages/posts.astro.mjs');
const _page7 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page8 = () => import('./pages/robots.txt.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/arhive/[slug].astro", _page3],
    ["src/pages/faq.astro", _page4],
    ["src/pages/groups/index.astro", _page5],
    ["src/pages/posts/index.astro", _page6],
    ["src/pages/posts/[...slug].astro", _page7],
    ["src/pages/robots.txt.ts", _page8],
    ["src/pages/rss.xml.ts", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "8af187d5-74c8-4dc5-a3e2-69e17ff92d90",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
