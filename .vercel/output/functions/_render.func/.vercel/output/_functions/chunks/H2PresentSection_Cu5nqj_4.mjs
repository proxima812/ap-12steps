import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as renderSlot } from './astro/server_B3MrmPLu.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './JustLayout_CFWwZq7w.mjs';

const $$Astro = createAstro("https://papro.vercel.app/");
const $$H2PresentSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H2PresentSection;
  const { icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex gap-3 flex-col mb-6"> <h2 class="text-2xl flex items-center font-medium gap-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon })} <span> ${renderSlot($$result, $$slots["name"])}</span> </h2> <p class="text-zinc-400"> ${renderSlot($$result, $$slots["p"])} </p> </section>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/components/ui/H2PresentSection.astro", void 0);

export { $$H2PresentSection as $ };
