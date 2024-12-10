import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><img src="https://cdt.vercel.app/_next/image?url=%2Fthemes%2Fcdt%2Fcdt-logo.png&w=64&q=75" alt="Canada's Digital Twin Docs" /> Canada's Digital Twin Docs</span>,
  project: {
    link: 'https://github.com/cimslab/cdt',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Canada\'s Digital Twin Docs',
  },
}

export default config
