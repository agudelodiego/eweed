import React, { useContext, useEffect } from "react"
import Styles from "../../styles/UserProfile.module.css"
import Image from "next/image"
import { motion } from "framer-motion"
import { PrimaryBtn } from "../forms/PrimaryBtn"
import { SecondaryBtn } from "../forms/SecondaryBtn"
import { UserContext } from "@/context/user/UserProvider"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export const UserProfile = () => {

  const {user,setUser} = useContext(UserContext)
  const router = useRouter()

  /* const modifyProfile = ()=>{
    console.log("ejecucion Update profile")
  } */ 

  const logout = () => {
    setUser(null)
  }

  return (
    <div className={Styles.profile_container}>
      {user?
      (<>
        <div className={Styles.profile_userImageContainer}>
          <motion.div 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{delay:.5, duration:.3}}
            className={Styles.profile_userImageBackground}>
            
            {user.photoURL?
              <Image width={400} height={400} className={Styles.profile_userImage} alt="User profile" src={user.photoURL} />  
            :
              <FontAwesomeIcon icon={faUser} className={Styles.profile_userImage}/>
            }
            
          </motion.div>
        </div>

        <div className={Styles.profile_userInfoContainer}>

          {user.displayName?
            <motion.span className={Styles.profile_infoItem}>
              {user.displayName}
            </motion.span>
            :
            ""}
          
          <motion.span className={Styles.profile_infoItem}>
            {user.email}
          </motion.span>

          {user.phoneNumber?
            <motion.span className={Styles.profile_infoItem}>
              {user.phoneNumber}
            </motion.span>
          :""}
          
          {/* <div className={Styles.profile_infoItem}>
            <PrimaryBtn callback={modifyProfile}>
              Modifical informacion
            </PrimaryBtn>
          </div> */}
          <div className={Styles.profile_infoItem}>
            <SecondaryBtn callback={logout}>
              Cerrar sesion
            </SecondaryBtn>
          </div>
        </div>
      </>)
      :
      (<div className={Styles.profile_noneUser}>
        <h3>No se reconoce al usuario</h3>
        <div className="text-center">
          <PrimaryBtn callback={()=>router.push("/login")}>
            Ingresar
          </PrimaryBtn>
        </div>
        <div className="text-center mt-3">
          <SecondaryBtn callback={()=>router.push("/signup")}>
            Registrate
          </SecondaryBtn>
        </div>
      </div>)
      }
    </div>
  )
}
