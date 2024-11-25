import '../chunks/page-ssr_CZvOfM4M.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderComponent } from '../chunks/astro/server_B3MrmPLu.mjs';
import 'kleur/colors';
import { b as $$Container, a as $$JustLayout } from '../chunks/JustLayout_CFWwZq7w.mjs';
import 'clsx';
import { u as urlFor, f as formatDate } from '../chunks/image_DQd4PqiR.mjs';
import { g as getAllPosts } from '../chunks/getPosts_lILfb0-i.mjs';
import { a as getPosts } from '../chunks/sanity_LF_t8ben.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://papro.vercel.app/");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { post, data, slug, isSanity } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(isSanity ? `/arhive/${post.slug.current}` : `/posts/${slug}`, "href")}> <article class="p-6 rounded-xl bg-zinc-900 ring-1 ring-zinc-800"> <div class="flex flex-col gap-4"> <h2 class="font-semibold text-xl"> ${isSanity ? post.title : data.title} </h2> <p class="text-zinc-400">${isSanity ? post.description : data.description}</p> ${isSanity && renderTemplate`<div class="flex items-center justify-between"> ${post.author && renderTemplate`<div class="flex gap-3 items-center"> ${post.author.picture && renderTemplate`<img class="rounded-full object-cover"${addAttribute(urlFor(post.author.picture).width(120).height(120).url(), "src")} loading="eager" width="35" height="35" decoding="async"${addAttribute(post.author.name, "alt")}>`} <span class="font-medium text-sm">${post.author.name}</span> </div>`} <span class="text-sm text-zinc-400">${formatDate(post.date)}</span> </div>`} </div> </article> </a>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/components/Post.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getAllPosts("posts");
  posts.length;
  const postsSanity = await getPosts();
  return renderTemplate`${renderComponent($$result, "JustLayout", $$JustLayout, { "title": `\u0410\u041F\u0420\u041E: \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B, \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F, \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0438 \u043E\u043F\u044B\u0442`, "description": "\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B, \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0410\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0445 \u041F\u0440\u043E\u043A\u0440\u0430\u0441\u0442\u0438\u043D\u0430\u0442\u043E\u0440\u043E\u0432" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-[120px]"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <h3 class="before:h-full pl-4 before:w-[4px] before:rounded-lg relative before:absolute before:left-0 before:bg-purple-500 mb-6 text-xl">
Посты и статьи от <b>сообщества.</b> </h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> ${posts && posts.map((post) => renderTemplate`${renderComponent($$result3, "Post", $$Post, { "data": post.data, "slug": post.slug })}`)} </div> <h3 class="before:h-full pl-4 before:w-[4px] before:rounded-lg relative before:absolute before:left-0 before:bg-lime-500 mt-12 mb-6 text-xl">
Посты от <b>авторов</b>: опыт, обзоры и прочее.
</h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> ${postsSanity.length > 0 ? postsSanity.map((group) => renderTemplate`${renderComponent($$result3, "Post", $$Post, { "isSanity": true, "post": group })}`) : renderTemplate`<span class="text-white italic">Нет пока что постов...</span>`} </div> ` })} </section> ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/pages/posts/index.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/a_procrastionations/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
