// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OTTAA Project', // Title for your website.
  tagline: '',
  url: 'https://ottaa-project.github.io/', // Your website URL
  baseUrl: '/', // Base URL for your project */
  deploymentBranch:"master",
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'OTTAA-Project.github.io',
  organizationName: 'ottaa-project',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ottaa-project/OTTAA-Project.github.io/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode:{
        defaultMode:'light',
        disableSwitch:false,
        respectPrefersColorScheme: true,

      },
      navbar: {
        title: 'OTTAA Project',
        logo: {
          alt: 'OTTAA Project Logo',
          src: 'img/orange_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Readme',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/orgs/OTTAA-Project/',
            label: 'GitHub',
            position: 'right',
          },
        ],
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Readme',
                href:'/docs/',
              },
              {
                label: 'Contributing',
                href:'/docs/Community/Contributing',
              },
              {
                label: 'FAQs',
                href:'/docs/Community/faqs',
              },
              {
                label: 'Privacy Policy',
                href:'/docs/Community/privacypolicy',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/ottaaproject',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/zadpVETaFV',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/orgs/OTTAA-Project/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OTTAAProject `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,

        
      },
    }),
};

module.exports = config;
