import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Platform Overview',
      items: [
        'platform/what-is-cazpian',
        'platform/key-features',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/high-level-architecture',
        'architecture/control-plane-data-plane',
      ],
    },
    {
      type: 'category',
      label: 'AI Studio',
      items: [
        'ai-studio/overview',
        'ai-studio/agents-basics',
      ],
    },
    {
      type: 'category',
      label: 'Billing & Accounts',
      items: [
        'billing/overview',
      ],
    },
  ],
};

export default sidebars;
