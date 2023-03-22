import Layout from "@/components/Layout"
import Head from "next/head"
import SignupForm from "@/components/forms/SignupForm"

const Signup = () => {
  return(
    <Layout>
      <Head>
        <title>signup</title>
      </Head>
      <SignupForm />
    </Layout>
  )
}
export default Signup