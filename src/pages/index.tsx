import Layout from "@/components/Layout"
import Head from "next/head"
import Products from "@/components/Products"

const Index = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Compra productos a base de cannabis al mejor precio y con la mejor calidad." />
      </Head>
      <Products />
    </Layout>
  )
}
export default Index