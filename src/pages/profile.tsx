import Layout from "@/components/Layout"
import Building from "@/components/Building"
import Head from "next/head"
import { UserProfile } from "@/components/userProfile/UserProfile"


const Profile = () =>{
  return(
    <Layout>
      <Head>
        <title>profile</title>
        <meta name="description" content="Perfil de usuario eweed" />
      </Head>
      <UserProfile />
    </Layout>
  )
}
export default Profile