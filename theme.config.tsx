import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

import Logo from './components/logo'

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo height={50} />
      <span className="ml-2 font-serif text-2xl font-bold text-orange-500 cursor-pointer">
        一纸简历文档
      </span>
    </>
  ),
  feedback: {
    content: null
  },
  editLink: {
    text: null
  },
  footer: {
    text: '一纸简历',
  },
}

export default config
