import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot, c as createAstro, s as spreadAttributes, e as addAttribute, b as renderComponent, u as unescapeHTML, F as Fragment, f as renderHead } from './astro/server_B3MrmPLu.mjs';
import 'kleur/colors';
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';
import { c as config } from './settings_C6-V473n.mjs';
/* empty css                          */

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container px-5 mx-auto w-full max-w-5xl"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/components/Container.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Yandex.Metrika counter --><script type="text/javascript">\n	;(function (m, e, t, r, i, k, a) {\n		m[i] =\n			m[i] ||\n			function () {\n				;(m[i].a = m[i].a || []).push(arguments)\n			}\n		m[i].l = 1 * new Date()\n		for (var j = 0; j < document.scripts.length; j++) {\n			if (document.scripts[j].src === r) {\n				return\n			}\n		}\n		;(k = e.createElement(t)),\n			(a = e.getElementsByTagName(t)[0]),\n			(k.async = 1),\n			(k.src = r),\n			a.parentNode.insertBefore(k, a)\n	})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym")\n\n	ym(98763606, "init", {\n		clickmap: true,\n		trackLinks: true,\n		accurateTrackBounce: true,\n		webvisor: true,\n	})\n<\/script> ', '<noscript><div><img src="https://mc.yandex.ru/watch/98763606" style="position:absolute; left:-9999px;" alt=""></div></noscript><!-- /Yandex.Metrika counter --><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-RBN2YWCV3R"><\/script>'])), maybeRenderHead());
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/components/Analytics.astro", void 0);

const links = [
  {
    label: "Группы",
    href: "/groups",
    mdi: "mdi:home-group-plus"
  },
  {
    label: "Контакты",
    href: "/#contacts",
    mdi: "mdi:contactless-payment"
  },
  // {
  // 	label: "Ежедневник",
  // 	href: "/daily",
  // 	mdi: "mdi:account-box-edit-outline",
  // },
  {
    label: "Архивы & Посты",
    href: "/posts",
    mdi: "mdi:book-education"
  },
  {
    label: "Создать группу",
    href: "/#create-group",
    mdi: "mdi:creation-outline"
  }
  // {
  // 	label: "Вопросы&Ответы",
  // 	href: "/faq",
  // 	mdi: "mdi:format-quote-close",
  // },
];

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="71" height="23" viewBox="0 0 71 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.1159 13.8758L4.24794 19.6611C3.20108 20.6896 2.35624 21.2039 1.71343 21.2039C1.14408 21.2039 0.859409 21.0019 0.859409 20.5978C0.859409 19.9366 1.55732 19 2.95314 17.7878C3.66941 17.1634 4.5418 16.6399 5.5703 16.2175L7.69157 13.8758L6.09373 13.9309C5.39582 13.9309 5.04686 13.7289 5.04686 13.3249C5.04686 12.9943 5.4601 12.4433 6.28657 11.6719C7.11304 10.9005 7.75585 10.4138 8.215 10.2118C8.98638 9.86286 9.79448 9.68838 10.6393 9.68838C10.9148 9.68838 11.0526 9.76184 11.0526 9.90877C11.0526 10.0741 10.6944 10.1934 9.97814 10.2669C9.3537 10.3404 9.04148 10.4598 9.04148 10.625C9.04148 10.8271 9.1884 10.9097 9.48226 10.873L9.6751 10.8454L11.1903 10.7903C18.6469 4.30713 23.0456 1.06553 24.3863 1.06553C24.6251 1.06553 24.8454 1.18491 25.0475 1.42366C25.2495 1.64406 25.3505 1.892 25.3505 2.16749C25.3505 2.53481 25.1209 3.12252 24.6618 3.93063L21.1631 10.1016L22.7885 10.0465C22.9354 10.0281 23.1925 10.0832 23.5598 10.2118C22.8803 11.0015 22.1916 12.0392 21.4936 13.3249L19.2897 13.435L18.1602 15.4186C17.7562 16.1349 17.5541 16.5665 17.5541 16.7134C17.5541 16.8052 17.6092 16.9062 17.7194 17.0164C17.8296 17.1266 17.949 17.1817 18.0776 17.1817C18.3898 17.1817 19.1795 16.6858 20.4468 15.6941L20.9427 16.4103C18.5 18.7428 16.6726 19.9091 15.4604 19.9091C15.038 19.9091 14.689 19.7713 14.4135 19.4958C14.138 19.202 14.0003 18.8438 14.0003 18.4214C14.0003 17.7419 14.2666 16.9246 14.7992 15.9696L16.0665 13.683L10.1159 13.8758ZM18.1051 10.2394L21.8518 3.98573C19.2989 5.82233 16.6358 7.9987 13.8626 10.5148L18.1051 10.2394ZM41.2196 1.86445C40.9441 1.79098 40.6135 1.75425 40.2279 1.75425C40.0075 1.75425 39.6401 1.77262 39.1259 1.80935C38.6116 1.84608 38.2168 1.86445 37.9413 1.86445C37.7209 1.86445 37.4179 1.88281 37.0322 1.91955C36.6465 1.93791 36.3067 1.97465 36.0129 2.02974C35.719 2.06648 35.3517 2.12157 34.9109 2.19504C33.7171 2.3787 32.6702 2.60827 31.7703 2.88376C30.4479 3.30618 29.3368 3.7286 28.4369 4.15102C27.2982 4.72037 26.2146 5.37236 25.1861 6.107C24.6718 6.63962 24.4147 7.10795 24.4147 7.512C24.4147 7.78749 24.5616 8.04462 24.8555 8.28338C25.1493 8.52214 25.5718 8.74253 26.1227 8.94455C25.4616 9.10985 24.8096 9.27514 24.1668 9.44044C23.524 9.60573 22.8811 9.76184 22.2383 9.90877C21.9996 9.90877 21.669 9.76184 21.2466 9.46799C20.8241 9.17413 20.4568 8.80681 20.1446 8.36602C19.8324 7.92524 19.6763 7.512 19.6763 7.12632C19.6763 6.97939 19.7038 6.83246 19.7589 6.68553C19.9609 6.13455 20.264 5.65703 20.668 5.25298C21.0721 4.83056 21.6139 4.39896 22.2934 3.95818C23.3036 3.27863 24.5433 2.65419 26.0125 2.08484C27.6655 1.4604 29.3827 1.03798 31.1642 0.817585C32.1376 0.707388 33.0467 0.615558 33.8916 0.542095C34.7548 0.450264 35.4986 0.404348 36.123 0.404348C37.5005 0.404348 38.6667 0.431898 39.6218 0.486996C40.5768 0.542094 41.541 0.670657 42.5144 0.872683C42.441 0.909415 42.2206 1.08389 41.8532 1.39611C41.4859 1.70834 41.2747 1.86445 41.2196 1.86445ZM31.8529 4.45406C31.8529 4.63772 31.7519 5.03259 31.5499 5.63867C31.3662 6.22638 31.2377 6.65798 31.1642 6.93347C31.1459 7.09877 31.0081 7.61302 30.751 8.47622C30.4939 9.33942 30.1357 10.5516 29.6766 12.1127C29.2358 13.6554 28.8593 14.9411 28.5471 15.9696C28.2532 16.9797 28.0971 17.5215 28.0787 17.595C27.9318 18.0174 27.7573 18.4673 27.5553 18.9449C27.3716 19.4224 27.1053 19.9366 26.7564 20.4876C26.4258 21.0386 25.9942 21.5528 25.4616 22.0304C24.929 22.4344 24.4239 22.6364 23.9464 22.6364C23.4138 22.6364 22.973 22.3793 22.624 21.8651C22.2934 21.3692 22.1281 20.7815 22.1281 20.1019C22.1281 19.1836 22.3944 18.4582 22.9271 17.9255C23.1474 18.3296 23.3954 18.5316 23.6709 18.5316C24.0566 18.5316 24.479 18.1643 24.9381 17.4297C25.0667 17.2276 25.2504 16.943 25.4891 16.5756C25.7279 16.19 25.9207 15.8685 26.0676 15.6114C26.2146 15.3359 26.3707 15.0145 26.536 14.6472C26.9768 13.5085 27.3716 12.4249 27.7206 11.3964C27.7757 11.2311 27.8951 10.9005 28.0787 10.4047C28.2624 9.8904 28.4644 9.30269 28.6848 8.64151C28.9236 7.96197 29.1348 7.38344 29.3184 6.90592C29.5205 6.42841 29.7317 5.89579 29.9521 5.30808C30.2092 5.23462 30.5673 5.08769 31.0265 4.8673C31.4856 4.62854 31.7611 4.49079 31.8529 4.45406ZM38.9055 17.5123C38.8137 18.2469 38.7586 18.6326 38.7402 18.6694C38.63 18.7245 38.4372 18.853 38.1617 19.0551C37.9046 19.2387 37.6199 19.4132 37.3077 19.5785C37.0138 19.7254 36.7016 19.8448 36.371 19.9366C36.1139 20.0101 35.8476 20.0468 35.5721 20.0468C35.0762 20.0468 34.6721 19.955 34.3599 19.7713C34.2864 19.7346 34.1671 19.6795 34.0018 19.606C33.8548 19.5142 33.7079 19.4316 33.561 19.3581C33.4324 19.2663 33.313 19.1836 33.2029 19.1102C33.111 19.0183 33.0284 18.9173 32.9549 18.8071C32.4958 18.201 32.2662 17.2644 32.2662 15.9971C32.2662 15.2625 32.3121 14.5829 32.4039 13.9585C32.4958 13.3157 32.6427 12.5259 32.8447 11.5893C32.9182 11.075 33.0835 10.3496 33.3406 9.41289C33.6161 8.47622 33.8824 7.5671 34.1395 6.68553C34.415 5.80396 34.5895 5.23461 34.6629 4.97749C34.8282 4.8122 35.1221 4.58262 35.5445 4.28876C35.9853 3.97654 36.2332 3.79288 36.2883 3.73778C36.3251 3.73778 36.3618 3.75615 36.3985 3.79288C35.9027 5.50092 35.4986 7.34671 35.1864 9.33024C35.0578 10.1567 34.9476 11.2036 34.8558 12.4708C34.764 13.7381 34.718 14.7207 34.718 15.4186C34.718 16.0981 34.764 16.6491 34.8558 17.0715C35.0027 17.6592 35.2415 18.0725 35.5721 18.3112C35.8476 18.5133 36.1598 18.6143 36.5087 18.6143C36.6373 18.6143 36.7383 18.6143 36.8118 18.6143C36.9587 18.5959 37.1424 18.5316 37.3628 18.4214C37.6015 18.3112 37.9137 18.1368 38.2994 17.898C38.6851 17.6409 38.8871 17.5123 38.9055 17.5123ZM43.2417 10.322L47.5944 4.61935C44.6191 4.85811 42.1581 5.2989 40.2113 5.94171C39.2746 6.25393 38.6226 6.41004 38.2553 6.41004C37.9798 6.41004 37.8421 6.31821 37.8421 6.13455C37.8421 5.93252 38.1359 5.35399 38.7236 4.39896C39.3297 3.42556 39.7797 2.8103 40.0735 2.55317C40.6245 2.07566 41.8367 1.65324 43.71 1.28592C45.5833 0.900232 47.475 0.707389 49.3851 0.707389C51.9747 0.707389 54.0593 1.13899 55.6388 2.00219C57.0713 2.79193 57.7876 4.16939 57.7876 6.13455C57.7876 7.71403 57.4111 9.04557 56.6581 10.1292C55.5745 11.7086 53.9674 12.9759 51.837 13.9309C49.7249 14.8676 47.475 15.3359 45.0875 15.3359C44.5916 15.3359 43.5631 15.2808 42.002 15.1706L40.8449 17.0164C41.1939 17.0899 41.3683 17.2644 41.3683 17.5399C41.3683 17.7235 40.9735 18.348 40.1837 19.4132C39.7613 19.9825 39.5042 20.3223 39.4124 20.4325C39.045 20.7998 38.6777 20.9835 38.3104 20.9835C37.7043 20.9835 37.4013 20.6621 37.4013 20.0193C37.4013 19.3948 38.292 17.6225 40.0735 14.7023C39.2838 14.1513 38.8889 13.5912 38.8889 13.0218C38.8889 12.4341 39.192 11.9566 39.798 11.5893C40.4041 11.2036 41.552 10.7812 43.2417 10.322ZM45.0599 11.0658L44.4538 11.9474C45.5374 12.0392 46.2996 12.0851 46.7404 12.0851C48.1362 12.0851 49.578 11.8005 51.0656 11.2311C52.5533 10.6618 53.7011 9.9455 54.5092 9.0823C54.8582 8.71498 55.1612 8.25583 55.4184 7.70485C55.6938 7.15387 55.8316 6.7039 55.8316 6.35494C55.8316 5.82233 55.2806 5.39073 54.1787 5.06014C53.0767 4.72955 51.4054 4.53671 49.1647 4.48161C49.1464 5.01422 49.0178 5.43664 48.779 5.74886L45.6935 9.93632L46.1343 9.90877L46.9884 9.82612C47.0802 9.80776 47.2179 9.79857 47.4016 9.79857C47.6771 9.79857 47.8148 9.89959 47.8148 10.1016C47.8148 10.2302 47.7322 10.3312 47.5669 10.4047C47.4016 10.4598 46.9057 10.5791 46.0792 10.7628C45.7303 10.8363 45.3905 10.9373 45.0599 11.0658ZM67.3583 5.25298C67.6154 5.21625 67.8542 5.19788 68.0746 5.19788C69.3234 5.19788 70.0948 5.6754 70.3887 6.63043C70.4805 6.96102 70.5264 7.34671 70.5264 7.78749C70.5264 8.5405 70.3795 9.38534 70.0856 10.322C69.8101 11.2587 69.4704 12.1586 69.0663 13.0218C68.6623 13.8666 68.2582 14.5921 67.8542 15.1982C66.238 17.5307 64.4473 19.0734 62.4821 19.8264C61.1781 20.2672 60.0762 20.4876 59.1762 20.4876C58.864 20.4876 58.561 20.4601 58.2671 20.405C57.5141 20.258 56.8621 19.8632 56.3111 19.2203C55.7785 18.5775 55.3836 17.8245 55.1265 16.9613C54.851 16.0981 54.7133 15.2717 54.7133 14.4819C54.7133 14.4268 54.7133 14.3809 54.7133 14.3442C54.7133 14.2891 54.7133 14.234 54.7133 14.1789C54.8051 12.6729 55.3285 11.1577 56.2836 9.63328C57.2386 8.1089 58.4232 6.73145 59.8374 5.50092C61.2516 4.25203 62.6566 3.27863 64.0524 2.58072C65.4482 1.86445 66.5869 1.50631 67.4685 1.50631C67.946 1.50631 68.3041 1.62569 68.5429 1.86445C68.7266 1.97464 69.0204 2.29605 69.4245 2.82867C69.8469 3.36128 70.0581 3.76533 70.0581 4.04082C70.0581 4.13265 70.0214 4.20612 69.9479 4.26122C69.9112 4.29795 69.5347 4.43569 68.8184 4.67445C68.1021 4.91321 67.6154 5.10605 67.3583 5.25298ZM60.1129 11.8648L60.0578 10.7903C58.9007 11.9841 58.0559 13.6003 57.5233 15.639C57.3029 16.3552 57.1927 16.9062 57.1927 17.2919C57.1927 17.696 57.2845 18.0174 57.4682 18.2561C57.7069 18.55 58.0467 18.6969 58.4875 18.6969C58.9099 18.6969 59.3966 18.5684 59.9476 18.3112C60.6088 18.0541 61.2516 17.7235 61.876 17.3195C62.5188 16.897 63.1065 16.4287 63.6392 15.9145C64.1718 15.4002 64.6768 14.8492 65.1544 14.2615C65.6319 13.6554 66.0818 13.0126 66.5043 12.3331C66.8165 11.8923 67.2022 11.176 67.6613 10.1843C68.1388 9.17413 68.3776 8.33847 68.3776 7.6773C68.3776 7.01612 68.0746 6.6488 67.4685 6.57534C66.4951 6.57534 65.2278 7.06204 63.6667 8.03544C63.1892 8.34766 62.73 8.70579 62.2893 9.10985C61.8668 9.49553 61.4812 9.91795 61.1322 10.3771C60.7832 10.8179 60.4435 11.3138 60.1129 11.8648Z" fill="white"></path> </svg>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/components/Logo.astro", void 0);


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro("https://papro.vercel.app/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/samgold/Desktop/Проекты/a_procrastionations/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed z-10 top-0 left-0 right-0 transition-all duration-300 bg-transparent py-5"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex justify-between items-center"> <a href="/" aria-label="На главную">${renderComponent($$result2, "Logo", $$Logo, {})}</a> <nav id="nav" class="hidden md:flex space-x-5 text-white"> ${links && links.map((link) => renderTemplate`<a class="flex gap-2 items-center font-medium"${addAttribute(link.href, "href")}> ${link.mdi && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": link.mdi })}`} ${link.label} </a>`)} </nav> <button id="openMenu" class="bg-black border border-zinc-700 text-white px-4 py-2 rounded-lg block md:hidden">меню</button> <nav id="menu" class="absolute hidden border-t p-6 top-[80px] left-0 w-full h-screen bg-zinc-900/50 backdrop-blur-md"> <div class="flex w-full mt-6 items-center font-medium text-xl flex-col gap-6"> ${links && links.map((link) => renderTemplate`<a class="flex gap-1 items-center"${addAttribute(link.href, "href")}> ${link.mdi && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": link.mdi })}`} ${link.label} </a>`)} </div> </nav> </div> ` })} </header> `;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/components/Nav.astro", void 0);

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="mask-icon" href="/favicon.svg"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" sizes="57x57" href="/favicons/icons/favicon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="/favicons/icons/favicon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="/favicons/icons/favicon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="/favicons/icons/favicon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="/favicons/icons/favicon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="/favicons/icons/favicon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="/favicons/icons/favicon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="/favicons/icons/favicon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="/favicons/icons/favicon-180x180.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicons/icons/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicons/icons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="/favicons/icons/favicon-96x96.png"><link rel="icon" type="image/png" sizes="192x192" href="/favicons/icons/favicon-192x192.png"><link rel="shortcut icon" type="image/x-icon" href="/favicons/icons/favicon.ico"><link rel="icon" type="image/x-icon" href="/favicons/icons/favicon.ico"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="/favicons/icons/favicon-144x144.png"><meta name="msapplication-config" content="/favicons/icons/browserconfig.xml"><meta name="theme-color" content="#ffffff">`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/components/Favicons.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://papro.vercel.app/");
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEOHead;
  const {
    datePublished,
    name,
    author,
    title,
    type,
    description,
    ogImage,
    locale,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site)
  } = Astro2.props;
  const socialImageURL = new URL(
    ogImage ? ogImage : `/${config.site.OG.defaultImage}`,
    Astro2.url
  ).href;
  function formatCanonicalURL(url) {
    const path = url.toString();
    const hasQueryParams = path.includes("?");
    if (hasQueryParams) {
      path.replace(/\/?$/, "");
    }
    return path.replace(/\/?$/, hasQueryParams ? "" : "/");
  }
  const finalTitle = title || config.site.OG.title;
  const finalDescription = description || config.site.OG.description;
  const finalAuthor = author || config.site.OG.author;
  const finalOGImage = socialImageURL || config.site.OG.defaultImage;
  return renderTemplate(_a || (_a = __template(['<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', ">", "<title>", '</title><meta name="title"', '><meta name="description"', ">", '<meta property="og:type"', ">", '<meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">', "", "", '<!-- \u0422\u0432\u0438\u0442\u0442\u0435\u0440 - X. \u0421\u043C\u044B\u0441\u043B\u0430 \u043D\u0435\u0442, \u0435\u0441\u0438\u043B \u043F\u0440\u043E\u0435\u043A\u0442 \u0434\u0435\u043B\u0430\u0442\u044C \u0434\u043B\u044F \u0442\u0435\u0440\u0440\u0435\u0442\u043E\u0440\u0438\u044F\u0445 \u0420\u0424 --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta name="robots" content="index, follow"><!-- \u042D\u0442\u043E robots.txt \u043D\u043E \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439 humnas.txt  --><link type="text/plain" rel="author"', '><!-- RSS \u043B\u0435\u043D\u0442\u0430--><link rel="alternate" type="application/rss+xml" title="RSS"', '><!-- \u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430 sitemap.xml --><link rel="sitemap" href="/sitemap-index.xml">', "", "", "<!-- \u0415\u0441\u043B\u0438 \u0435\u0441\u0442\u044C PWA, \u0430 \u0442\u0430\u043A \u0443\u0434\u0430\u043B\u0438 -->", '<script src="/registerSW.js"><\/script><link rel="manifest" href="/manifest.webmanifest">'])), addAttribute(Astro2.generator, "content"), canonicalURL && renderTemplate`<link rel="canonical"${addAttribute(formatCanonicalURL(canonicalURL), "href")}>`, finalTitle, addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), finalAuthor && renderTemplate`<meta name="author"${addAttribute(finalAuthor, "content")}>`, addAttribute(type ? "article" : "website", "content"), canonicalURL && renderTemplate`<meta property="og:url"${addAttribute(formatCanonicalURL(canonicalURL), "content")}>`, addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(finalOGImage, "content"), locale || renderTemplate`<meta property="og:locale"${addAttribute(locale || config.site.OG.locale, "content")}>`, name || renderTemplate`<meta property="og:site_name"${addAttribute(name || config.site.OG.site_name, "content")}>`, type && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:author"${addAttribute(finalAuthor, "content")}><meta property="article:published_time"${addAttribute(datePublished, "content")}>` })}`, addAttribute(formatCanonicalURL(canonicalURL), "content"), addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(finalOGImage, "content"), addAttribute(`${Astro2.site}humans.txt`, "href"), addAttribute(`${Astro2.site}rss.xml`, "href"), config.verifications.yandex, config.verifications.google, config.verifications.bing, renderComponent($$result, "Favicons", $$Favicons, {}));
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/components/SEOHead.astro", void 0);

const $$Astro = createAstro("https://papro.vercel.app/");
const $$JustLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$JustLayout;
  const { datePublished, dateModified, title, description, type, ogImage } = Astro2.props;
  return renderTemplate`<html lang="ru" class="scroll-smooth h-full"> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": title, "description": description, "type": type, "ogImage": ogImage, "datePublished": datePublished, "dateModified": dateModified })}${renderComponent($$result, "Analytics", $$Analytics, {})}${renderSlot($$result, $$slots["schema_faq"])}${renderHead()}</head> <body class="relative scroll-m-4 w-full min-h-screen h-full bg-zinc-950 text-white font-sans"> ${renderComponent($$result, "Nav", $$Nav, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/a_procrastionations/src/layouts/JustLayout.astro", void 0);

export { $$Icon as $, $$JustLayout as a, $$Container as b };