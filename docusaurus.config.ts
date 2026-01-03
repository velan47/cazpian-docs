import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Cazpian Docs',
  tagline: 'AWS-first Lakehouse platform for Apache Iceberg & Spark',
  favicon: 'img/logo-only.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cazpian.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'velan47', // Usually your GitHub org/user name.
  projectName: 'cazpian-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/velan47/cazpian-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          editUrl:
            'https://github.com/velan47/cazpian-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Cazpian Logo',
        src: 'img/cazpian_logo.svg',
        href: '/',
      },
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://cazpian.ai', label: 'Main Site', position: 'right' },
        {
          href: 'https://github.com/velan47/cazpian-docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: ' ',
          items: [
            {
              html: `
                <div class="footer-tagline-container">
                  <div class="footer-logo-wrapper">
                    <img src="/img/cazpian_logo.svg" alt="Cazpian" class="footer-logo-custom" />
                  </div>
                  <p class="footer-tagline">
                    Launch governed compute, unify your data catalogs, and add AI agents to automate engineering so analytics and pipelines ship faster across cloud and on-prem.
                  </p>
                  <div class="footer-socials">
                    <a href="#" class="footer-social-link" aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="https://github.com/velan47/cazpian-docs" class="footer-social-link" aria-label="GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57 4.767-1.587 8.207-6.085 8.207-11.387 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="#" class="footer-social-link" aria-label="Twitter">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                  </div>
                </div>
              `,
            },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Cazpian Cloud', href: '#' },
            { label: 'Cazpian Enterprise', href: '#' },
            { label: 'Agent Studio', href: '#' },
            { label: 'AI Semantic Fabric', href: '#' },
            { label: 'HyperSQL Engine', href: '#' },
          ],
        },
        {
          title: 'Solutions',
          items: [
            { label: 'Analytics Acceleration', href: '#' },
            { label: 'Self-Service BI', href: '#' },
            { label: 'Data Science & ML', href: '#' },
            { label: 'Financial Services', href: '#' },
            { label: 'Healthcare', href: '#' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Documentation', to: '/docs/intro' },
            { label: 'Tutorials', href: '#' },
            { label: 'Blog', to: '/blog' },
            { label: 'Webinars', href: '#' },
            { label: 'Community', href: '#' },
          ],
        },
        {
          title: 'Quick Links',
          items: [
            { label: 'About', href: '#' },
            { label: 'Changelog', href: '#' },
            { label: 'Security', href: '#' },
            { label: 'Contact', href: '#' },
          ],
        },
        {
          title: 'Stay Updated',
          items: [
            {
              html: `
                <div class="footer-newsletter">
                  <p>Subscribe for product updates, tutorials, and release notes.</p>
                  <form class="newsletter-form">
                    <input type="email" placeholder="Enter your email" class="newsletter-input" />
                    <button type="submit" class="newsletter-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    </button>
                  </form>
                  <p class="newsletter-disclaimer">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
                </div>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cazpian, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
