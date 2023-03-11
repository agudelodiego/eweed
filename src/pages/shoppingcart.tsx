import Layout from "@/components/Layout"
import Building from "@/components/Building"
import Head from "next/head"


const Shoppingcart = () =>{
  return(
    <Layout>
      <Head>
        <title>shopping</title>
        <meta name="description" content="carrito de compras eweed" />
      </Head>
      <Building name="Shopping"/>
    </Layout>
  )
}
export default Shoppingcart