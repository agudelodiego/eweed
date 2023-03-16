import "@/styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import type { AppProps } from "next/app"
import Head from "next/head"

//* Contexts for the shoppingCart
import { CartProvider } from "@/context/cart/CartContext"


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CartProvider>
      <Head>
        <title>eweed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </CartProvider>
  )
}
export default App