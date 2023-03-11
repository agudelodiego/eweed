import Layout from "@/components/Layout"
import Building from "@/components/Building"
import Head from "next/head"


const Education = () =>{
  return(
    <Layout>
      <Head>
        <title>education</title>
        <meta name="description" content="Seccion de educacion eweed" />
      </Head>
      <Building name="Educacion"/>
    </Layout>
  )
}
export default Education