import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B3MrmPLu.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Очень часто, сталкиваясь с определёнными ситуациями в одной из групп, люди начинают делать выводы обо всём сообществе в целом. Однако, в АП действует принцип: <strong>«Главное — принципы, а не личности» (12 традиция).</strong></p>\n<p><strong>Каждая группа</strong>— это небольшая часть большого сообщества, и опыт, стиль ведения собраний и атмосфера могут существенно отличаться. Если вам не подошла какая-то группа, это вовсе не значит, что всё сообщество плохое или неэффективное. Люди и группы могут быть разными, но основополагающие принципы остаются неизменными.</p>\n<p>Возможно, в конкретной группе вы встретили кого-то, чьё поведение вам не понравилось или показалось неправильным. Но помните, что в основе <strong>работы АП лежит поддержка и взаимопомощь, а не идеальные люди</strong>. Мы все приходим сюда с разными историями и трудностями. <strong>Главное</strong> — это стремление к переменам и поддержка друг друга на этом пути.</p>\n<p>В любой момент можно <strong>найти другую группу</strong> или <strong>поговорить с кем-то о ваших впечатлениях</strong>. Открытость и стремление понять — основа работы АПРО. Не судите обо всём сообществе по одной встрече или одному человеку!</p>";

				const frontmatter = {"title":"Не судите по одной группе! АП (АПРО) - это не одна группа.","description":"\"Главное принципы, а не личности\" - 12 традиция","datePublished":"2024-10-29T11:30:00Z"};
				const file = "/Users/samgold/Desktop/Проекты/a_procrastionations/src/content/posts/3.md";
				const url = undefined;
				function rawContent() {
					return "\nОчень часто, сталкиваясь с определёнными ситуациями в одной из групп, люди начинают делать выводы обо всём сообществе в целом. Однако, в АП действует принцип: **«Главное — принципы, а не личности» (12 традиция).**\n\n**Каждая группа**— это небольшая часть большого сообщества, и опыт, стиль ведения собраний и атмосфера могут существенно отличаться. Если вам не подошла какая-то группа, это вовсе не значит, что всё сообщество плохое или неэффективное. Люди и группы могут быть разными, но основополагающие принципы остаются неизменными.\n\nВозможно, в конкретной группе вы встретили кого-то, чьё поведение вам не понравилось или показалось неправильным. Но помните, что в основе **работы АП лежит поддержка и взаимопомощь, а не идеальные люди**. Мы все приходим сюда с разными историями и трудностями. **Главное** — это стремление к переменам и поддержка друг друга на этом пути.\n\nВ любой момент можно **найти другую группу** или **поговорить с кем-то о ваших впечатлениях**. Открытость и стремление понять — основа работы АПРО. Не судите обо всём сообществе по одной встрече или одному человеку!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
