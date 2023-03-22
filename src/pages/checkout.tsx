import Layout from "@/components/Layout"
import Head from "next/head"
import CheckoutSteper from "@/components/checkout/CheckoutSteper"

const Checkout = () => {
  return(
    <Layout>
      <Head>
        <title>checkout</title>
      </Head>
      <CheckoutSteper />
    </Layout>
  )
}
export default Checkout