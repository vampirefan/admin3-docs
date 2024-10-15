import { globSync } from 'glob'

const routes = globSync('./content/**/*.md')
  .map(path =>
    path.slice(7, -3).replace(/\d+\./g, '').replace(/\\/g, '/'),
  )

export default defineNuxtConfig({
  ssr: false,

  /* Fix content module static generate issue */
  nitro: {
    prerender: {
      routes: [...routes],
    },
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/dark/css-vars.css',
    '@/assets/css/main.css',
  ],

  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    // '@pinia/nuxt',
  ],

  content: {
    documentDriven: true,
    navigation: {
      fields: ['title', 'icon', 'image'],
    },
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'xml', 'py'],
    },
    experimental: {
      advanceQuery: false,
      clientDB: true,
      stripQueryParameters: true,
    },
  },

  devtools: { enabled: false },
  features: { inlineStyles: false },
  compatibilityDate: '2024-10-08',
})
