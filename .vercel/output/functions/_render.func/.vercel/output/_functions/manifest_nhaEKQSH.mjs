import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Bqodi19Z.mjs';
import { g as decodeKey } from './chunks/astro/server_B3MrmPLu.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/samgold/Desktop/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/a_procrastionations/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DTIbhfSr.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DTIbhfSr.js"}],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CHJu8hRC.js"},{"type":"external","value":"/_astro/page.DTIbhfSr.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DSULSYzv.css"}],"routeData":{"route":"/groups","isIndex":true,"type":"page","pattern":"^\\/groups\\/?$","segments":[[{"content":"groups","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/groups/index.astro","pathname":"/groups","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CHJu8hRC.js"},{"type":"external","value":"/_astro/page.DTIbhfSr.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DSULSYzv.css"}],"routeData":{"route":"/posts","isIndex":true,"type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/index.astro","pathname":"/posts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://papro.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/samgold/Desktop/Проекты/a_procrastionations/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/samgold/Desktop/Проекты/a_procrastionations/src/utils/getPosts.ts",{"propagation":"in-tree","containsHead":false}],["/Users/samgold/Desktop/Проекты/a_procrastionations/src/pages/posts/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/samgold/Desktop/Проекты/a_procrastionations/src/pages/posts/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/samgold/Desktop/Проекты/a_procrastionations/src/pages/arhive/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/samgold/Desktop/Проекты/a_procrastionations/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/Users/samgold/Desktop/Проекты/a_procrastionations/src/pages/groups/index.astro",{"propagation":"none","containsHead":true}],["/Users/samgold/Desktop/Проекты/a_procrastionations/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/posts/[...slug]@_@astro":"pages/posts/_---slug_.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/groups/index@_@astro":"pages/groups.astro.mjs","\u0000@astro-page:src/pages/posts/index@_@astro":"pages/posts.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/arhive/[slug]@_@astro":"pages/arhive/_slug_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/src/content/posts/1.md?astroContentCollectionEntry=true":"chunks/1_Bo_Z5pN6.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/src/content/posts/2.md?astroContentCollectionEntry=true":"chunks/2_CBstOPvc.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/src/content/posts/3.md?astroContentCollectionEntry=true":"chunks/3_CF2AALuZ.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/src/content/posts/1.md?astroPropagatedAssets":"chunks/1_DIHpmkqV.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/src/content/posts/2.md?astroPropagatedAssets":"chunks/2_BQ1m2Igh.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/src/content/posts/3.md?astroPropagatedAssets":"chunks/3_Bk_wlaE_.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/src/content/posts/1.md":"chunks/1_CdVYL7V5.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/src/content/posts/2.md":"chunks/2_DhCr2sMP.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/src/content/posts/3.md":"chunks/3_CgJF0Cq8.mjs","\u0000@astrojs-manifest":"manifest_nhaEKQSH.mjs","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.CcQAigYg.js","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.BKZ4JwLW.js","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.I3dhq5xK.js","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.fw_M-6lk.js","astro:scripts/page.js":"_astro/page.DTIbhfSr.js","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2._cAki2lR.js","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.UR8dHy_q.js","/astro/hoisted.js?q=1":"_astro/hoisted.CHJu8hRC.js","@astrojs/react/client.js":"_astro/client.DAVXiJi4.js","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.3HQq6GoW.js","/astro/hoisted.js?q=0":"_astro/hoisted.cDZowrg8.js","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.oSB9a4mT.js","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.CEQyuKZP.js","/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.CWAEfVRR.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.DSULSYzv.css","/default-ogImage.png","/favicon.svg","/_astro/SanityVision.CWAEfVRR.js","/_astro/browser.7KqZ-Os9.js","/_astro/client.CF8elnFF.js","/_astro/client.DAVXiJi4.js","/_astro/hoisted.CHJu8hRC.js","/_astro/hoisted.cDZowrg8.js","/_astro/index.I3dhq5xK.js","/_astro/index2._cAki2lR.js","/_astro/index3.CEQyuKZP.js","/_astro/page.DTIbhfSr.js","/_astro/resources.BKZ4JwLW.js","/_astro/resources.CcQAigYg.js","/_astro/resources2.UR8dHy_q.js","/_astro/resources3.fw_M-6lk.js","/_astro/stegaEncodeSourceMap.oSB9a4mT.js","/_astro/studio-component.3HQq6GoW.js","/_astro/studio-component.DJopns1R.js","/svg/AA-ANON.svg","/svg/AA.png","/svg/AK.svg","/svg/ANON.svg","/svg/APKOM.svg","/svg/AT.svg","/svg/CLA.svg","/svg/DA.svg","/svg/DAA.svg","/svg/DAAA.svg","/svg/EA.svg","/svg/GA.svg","/svg/NA.png","/svg/SEX.svg","/svg/VDA.svg","/svg/aiz.svg","/svg/b2b.svg","/_astro/page.DTIbhfSr.js","/404.html","/faq/index.html","/robots.txt","/rss.xml","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"evNHXqrU0sybG+lyejHwXsaZwZqA72fWOahVYKZV07A=","experimentalEnvGetSecretEnabled":false});

export { manifest };
