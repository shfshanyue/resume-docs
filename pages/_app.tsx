// These styles apply to every route in the application
import { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initGA, logPageView } from '../lib/ga'
import { Router } from 'next/router'
 
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.gaId) {
      initGA()
      logPageView()
      Router.events.on('routeChangeComplete', logPageView)
    }
  }, [])
  
  return <Component {...pageProps} />
}