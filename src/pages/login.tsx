import Building from "@/components/Building"
import Layout from "@/components/Layout"
import Head from "next/head"

const Login = () => {
  return(
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <Building name="login" />
    </Layout>
  )
}
export default Login