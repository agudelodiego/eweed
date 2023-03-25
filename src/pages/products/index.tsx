import Layout from "@/components/Layout"
import Head from "next/head"
import Products from "@/components/products/Products"

const ProductIndex = () => {
  return (
    <Layout>

      <Head>
        <meta name="description" content="Compra productos a base de cannabis al mejor precio y con la mejor calidad." />
      </Head>

      <Products />
      
    </Layout>
  )
}
export default ProductIndex