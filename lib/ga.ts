import ReactGA from 'react-ga4'

export const initGA = () => {
  // 设置 GA code
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID || '')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname,
    title: window.document.title
  })
}
