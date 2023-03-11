import Layout from "@/components/Layout"
import Building from "@/components/Building"
import Head from "next/head"


const Profile = () =>{
  return(
    <Layout>
      <Head>
        <title>profile</title>
        <meta name="description" content="Perfil de usuario eweed" />
      </Head>
      <Building name="Profile"/>
    </Layout>
  )
}
export default Profile