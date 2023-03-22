import Layout from "@/components/Layout"
import Head from "next/head"
import LoginForm from "@/components/forms/LoginForm"

const Login = () => {
  return(
    <Layout>
      <Head>
        <title>login</title>
      </Head>
      <LoginForm />
    </Layout>
  )
}
export default Login