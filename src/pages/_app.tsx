import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navdesktop from '@/components/Navdesktop'
import type { AppProps } from 'next/app'

import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>eweed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default App