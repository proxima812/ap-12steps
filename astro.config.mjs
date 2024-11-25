import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import compress from "astro-compress"
import icon from "astro-icon"
import { defineConfig } from "astro/config"
import { VitePWA } from "vite-plugin-pwa"
import { manifest } from "./src/utils/libs/manifest"
import { config } from "/src/settings"

import sanity from "@sanity/astro"
import { loadEnv } from "vite"
const {
    PUBLIC_SANITY_STUDIO_PROJECT_ID,
    PUBLIC_SANITY_STUDIO_DATASET,
    PUBLIC_SANITY_PROJECT_ID,
    PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "")

// Different environments use different variables
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET

import cloudflare from "@astrojs/cloudflare"

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: `${config.site.base.url}`,

  prefetch: {
      prefetchAll: true,
      defaultStrategy: "viewport",
	},

  integrations: [
      sitemap({
          filter: page => page !== `${config.site.base.url}/studio`,
      }),
      tailwind({
          applyBaseStyles: false,
      }),
      sanity({
          projectId,
          dataset,
          studioBasePath: "/studio",
          useCdn: false,
          apiVersion: "2023-03-20", 
      }),
      compress(),
      react(),
      icon(),
	],

  // git
  // 	plugins: [
  // 		VitePWA({
  // 			registerType: "autoUpdate",
  // 			manifest,
  // 			includeAssets: ["favicon.svg"],
  // 			workbox: {
  // 				globDirectory: "dist",
  // 				globPatterns: [
  // 					"**/*.{js,html,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
  // 				],
  // 				navigateFallback: "/",
  // 				runtimeCaching: [
  // 					{
  // 						urlPattern: ({ request }) => request.destination === "image",
  // 						handler: "CacheFirst", // Кэшируем изображения
  // 						options: {
  // 							cacheName: "image-cache",
  // 							expiration: {
  // 								maxEntries: 50,
  // 								maxAgeSeconds: 7 * 24 * 60 * 60, // Кэшируем на неделю
  // 							},
  // 						},
  // 					},
  // 				],
  // 			},
  // 			devOptions: {
  // 				enabled: import.meta.env.MODE === "development" ? true : false,
  // 				navigateFallbackAllowlist: [/^\//],
  // 			},
  // 			experimental: {
  // 				directoryAndTrailingSlashHandler: true,
  // 			},
  // 		}),
  // 	],
  // },

  output: "hybrid",

  adapter: vercel(),
})