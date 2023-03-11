import Layout from "@/components/Layout"
import Building from "@/components/Building"
import Head from "next/head"


const Index = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Compra productos a base de cannabis al mejor precio y con la mejor calidad." />
      </Head>
      <Building name="Home" />
    </Layout>
  )
}
export default Index