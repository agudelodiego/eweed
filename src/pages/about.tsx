import Layout from "@/components/Layout"
import Building from "@/components/Building"
import Head from "next/head"

const About = ()=>{
  return(
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <Building name="Acerca" />
    </Layout>
  )
}
export default About