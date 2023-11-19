export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n',],
  i18n: {
    locales: [
      {
        code: "en",
        name: 'English',
        file: "en-US.ts",
      },
      {
        code: "es",
        name: 'Español',
        file: "es-ES.ts",
      },
      {
        code: "fr",
        name: 'Français',
        file: "fr-FR.ts",
      },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
});
