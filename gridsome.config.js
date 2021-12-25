// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const postcssPlugins = [
  tailwind("./tailwind.config.js"),
  autoprefixer({
    add: true,
    grid: true
  })
];


module.exports = {
  siteName: 'William Bondi',
  siteUrl: "https://www.williambondi.info",
  siteDescription: "",
  titleTemplate: "William Bondi",
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [
          'language-default',
          'en-us',
          'it-it',
        ],
        pathAliases: {
          'language-default': 'language-default',
          'en-us': 'en',
          'it-it': 'it',
        },
        fallbackLocale: 'en-us',
        defaultLocale: 'language-default',
        rewriteDefaultLanguage: false,
        messages: {
          'language-default': require('./src/locales/en-us.json'),
          'en-us': require('./src/locales/en-us.json'),
          'it-it': require('./src/locales/it-it.json'),
        }
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000 // default
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}
