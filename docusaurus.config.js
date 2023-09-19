// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Moolah Modding',
  tagline: 'Modding Utilities, Resources and Tutorials for the PAYDAY 3® video game',
  favicon: 'img/favicon.ico',

  url: 'https://moolah.dev',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MoolahModding/site/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/moolah-modding-social-card.jpg',
      navbar: {
        title: 'Moolah Modding',
        items: [
          {
            href: 'https://github.com/MoolahModding',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub organization ',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: 'This site is licensed under the GNU General Public License v3.0 (GPLv3) except where otherwise noted.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp']
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: 'M5RMK2P4A8',
        apiKey: 'b96dd23c4efe7d339319b0ef12da7ec3',
        indexName: 'moolah',
      },
    }),
};

module.exports = config;
