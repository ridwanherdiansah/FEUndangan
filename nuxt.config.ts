// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss() as any],
  },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, interactive-widget=resizes-content',
      title: 'Weding',
      // link: [
      //   {
      //     rel: 'icon',
      //     type: 'image/png',
      //     href: 'https://storage.mitra.care/aptavis/images/logo/favicon-aptalink.png'
      //   }
      // ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
