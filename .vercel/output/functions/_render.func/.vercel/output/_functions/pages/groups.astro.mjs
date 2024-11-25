import '../chunks/page-ssr_CZvOfM4M.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderComponent, F as Fragment } from '../chunks/astro/server_B3MrmPLu.mjs';
import 'kleur/colors';
import { $ as $$Icon, b as $$Container, a as $$JustLayout } from '../chunks/JustLayout_CFWwZq7w.mjs';
import { $ as $$H2PresentSection } from '../chunks/H2PresentSection_Cu5nqj_4.mjs';
import { g as getGroups } from '../chunks/sanity_LF_t8ben.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://papro.vercel.app/");
const $$GroupCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GroupCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(post.title, "aria-label")} class="hover:bg-zinc-800/60 ease-linear transition-colors p-6 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 relative flex flex-col gap-3"> <span class="absolute top-4 right-4">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:account-group" })}</span> <span class="text-sm text-purple-500 font-bold">${post.day}</span> <h3 class="font-bold">${post.title}</h3> <div> <div class="flex items-center gap-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-top-right" })} <span>Формат:</span> </div> <p class="text-zinc-400">${post.description}</p> </div> <div> <div class="flex items-center gap-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:clock" })} <span>Время:</span> </div> <p class="text-zinc-400">${post.time}</p> </div> <div> <div class="flex items-center gap-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:account-arrow-right" })} <span>Ведущий(-ая)</span> </div> <p class="text-zinc-400">${post.authors}</p> </div> <a target="_blank"${addAttribute(post.link, "href")} class="py-2 px-4 hover:bg-green-400/10 transition-colors ease-linear hover:text-green-600 text-green-700 flex w-full justify-center items-center gap-1 bg-green-600/10 rounded-lg"> <span>Присоединиться</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-top-right" })} </a> </article>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/components/GroupCard.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const groups = await getGroups();
  return renderTemplate`${renderComponent($$result, "JustLayout", $$JustLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section id="groups" class="py-[120px]"> ${renderComponent($$result3, "H2PresentSection", $$H2PresentSection, { "icon": "mdi:telegram" }, { "name": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "name" }, { "default": ($$result5) => renderTemplate`Онлайн группы` })}`, "p": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "p" }, { "default": ($$result5) => renderTemplate`АП ведут встречи по проблеме, лени и прокрастинации.` })}` })} <div class="grid grid-cols-1 md:grid-cols-2 items-start lg:grid-cols-3 gap-6"> ${groups.length > 0 ? groups.map((group) => renderTemplate`${renderComponent($$result3, "GroupCard", $$GroupCard, { "post": group })}`) : renderTemplate`<span class="text-white">Нет пока что групп...</span>`} </div> </section> ` })} ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/pages/groups/index.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/a_procrastionations/src/pages/groups/index.astro";
const $$url = "/groups";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
