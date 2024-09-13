// These styles apply to every route in the application
import { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initGA, logPageView } from '../lib/ga'
import { Router } from 'next/router'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_ID) {
      initGA()
      logPageView()
      Router.events.on('routeChangeComplete', logPageView)
    }
  }, [])
  
  return (
    <>
      <Head>
        <link rel="icon" href="/docs/icon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}