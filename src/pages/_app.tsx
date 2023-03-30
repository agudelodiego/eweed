import "@/styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import type { AppProps } from "next/app"
import Head from "next/head"


//! ---> PROVIDERS <---
import { CartProvider } from "@/context/cart/CartProvider"
import { ProductsProvider } from "@/context/products/ProductsProvider"
import { UserProvider } from "@/context/user/UserProvider"



const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Head>
            <title>eweed</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  )
}
export default App