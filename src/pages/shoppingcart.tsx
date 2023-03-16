import Layout from "@/components/Layout"
import Head from "next/head"
import Cart from "@/components/Cart"


const Shoppingcart = () =>{
  return(
    <Layout>
      <Head>
        <title>shopping</title>
        <meta name="description" content="carrito de compras eweed" />
      </Head>
      <Cart />
    </Layout>
  )
}
export default Shoppingcart