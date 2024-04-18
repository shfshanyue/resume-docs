import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

import Logo from './components/logo'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – 一纸简历文档'
      }
    }
  },
  head: function useHead() {
    const { title } = useConfig()

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="一纸简历，使用 markdown 结合 AI 智能生成简历"
        />
        <meta
          name="og:title"
          content={title ? title + ' – 一纸简历' : '一纸简历'}
        />
        <meta name="apple-mobile-web-app-title" content="大厂面试每日一题" />
      </>
    )
  },
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
