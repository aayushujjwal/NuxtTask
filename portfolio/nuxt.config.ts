import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Full Stack Developer Portfolio | Aayush",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Personal Portfolio Website. Hi, I am Aayush. I'm a Full Stack Developer based in India. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Aayush" },
        {
          name: "keywords",
          content:
            "Full Stack Developer, Software Developer, Software Engineer, Aayush, India",
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "Full Stack Developer Portfolio | Aayush",
        },
        {
          property: "og:site",
          content: "https://www.aayush.com/",
        },
        {
          property: "og:title",
          content: "Full Stack Developer Portfolio | Aayush",
        },
        {
          property: "og:description",
          content:
            "Personal Portfolio Website. Hi, I am Aayush. I'm a Full Stack Developer based in India. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
        },
        // sharing thumbmail img
        {
          property: "og:image",
          content: "https://www.eazypau.com/favicon-bw.png", ///favicon-wb.png
        },
        // google site verification
        {
          name: "google-site-verification",
          content: "CpKqeACrIS7JLwdilAnMgoDicJnoBaNmupPoq6fUtFs",
        },
      ],
      link: [{ rel: "icon", href: "/favicon-bw.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
  runtimeConfig: {
    public: {
      NUXT_GTM_ID: process.env.NUXT_GTM_ID,
    },
  },
});
