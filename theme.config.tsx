import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

import Logo from './components/logo'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  head: function useHead() {
    const { title, frontMatter } = useConfig()
    const { route } = useRouter()
    
    const description = frontMatter.description || "一纸简历，使用 markdown 结合 AI 智能生成简历"
    const baseUrl = 'https://q.shanyue.tech'
    const canonicalUrl = `${baseUrl}${route}`

    return (
      <>
        <title>{title ? title + ' – 一纸简历' : '一纸简历'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="zh" />
        <meta name="description" content={description} />
        
        {/* OpenGraph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="一纸简历" />
        <meta property="og:title" content={title ? title + ' – 一纸简历' : '一纸简历'} />
        <meta property="og:description" content={description} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title ? title + ' – 一纸简历' : '一纸简历'} />
        <meta name="twitter:description" content={description} />
        
        <meta name="apple-mobile-web-app-title" content="一纸简历" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OpenGraph URL */}
        <meta property="og:url" content={canonicalUrl} />
        
        {/* Twitter URL */}
        <meta name="twitter:url" content={canonicalUrl} />
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
  footer: {
    content: <div className="grid w-full grid-cols-3">
      <div>
        <div className="text-xl">大厂面试每日一题</div>
        <div className="mt-4">勤学如春起之苗，不见其增，日有所长。</div>
        <div className="mt-4">辍学如磨刀之石，不见其损，日有所亏。</div>
      </div>
      <div>
        <div className="text-xl">我的网站</div>
        <ul className="flex flex-col gap-2 mt-4">
          <li>
            <a href="https://geek.shanyue.tech" className="inline-block border-b border-transparent text-primary dark:text-primary-dark hover:text-orange-500">掘金返现平台</a>
          </li>
          <li>
            <a href="https://devtool.tech" className="inline-block border-b border-transparent text-primary dark:text-primary-dark hover:text-orange-500">开发者工具大全</a>
          </li>
          <li>
            <a href="https://cv.devtool.tech" className="inline-block border-b border-transparent text-primary dark:text-primary-dark hover:text-orange-500">一纸简历</a>
          </li>
          <li>
            <a href="https://markdown.devtool.tech" className="inline-block border-b border-transparent text-primary dark:text-primary-dark hover:text-orange-500">码途编辑器</a>
          </li>
          <li>
            <a href="https://blog.shanyue.tech" className="inline-block border-b border-transparent text-primary dark:text-primary-dark hover:text-orange-500">山月的新博客</a>
          </li>
          <li>
            <a href="https://weekly.shanyue.tech" className="inline-block border-b border-transparent text-primary dark:text-primary-dark hover:text-orange-500">
              前端开发者周刊
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="text-xl">二维码</div>
        <div className="mt-4">
          关注公众号《互联网大厂面试》，每日推送一篇大厂面试题！
        </div>
        <img className="mt-4 rounded w-[180px] shadow" src="https://static.shanyue.tech/images/23-09-07/qrcode_for_gh_5f162937a2ad_258.6cc370.webp" />
      </div>
    </div>,
  },
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
}

export default config
