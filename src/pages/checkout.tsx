import Layout from "@/components/Layout"
import Head from "next/head"
import CheckoutSteper from "@/components/checkout/CheckoutSteper"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/context/cart/CartProvider"

const Checkout = () => {

  const {remoteCart, token} = useContext(CartContext)
  const [ready,setReady] = useState(false)

  useEffect(() => {
    if(remoteCart && token){
      setReady(true)
    }
  },[remoteCart, token])

  return(
    <Layout>
      <Head>
        <title>checkout</title>
      </Head>

      {ready?
        //*if(ready)...
          <CheckoutSteper />

        :
        //*else...
          <div className="w-100 mt-5 pt-5 text-center">
            <h4 className="w-100 text-center">Procesando, por favor espere</h4>
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>  
      }

    </Layout>
  )
}
export default Checkout