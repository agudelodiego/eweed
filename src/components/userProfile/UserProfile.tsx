import React from "react"
import Styles from "../../styles/UserProfile.module.css"
import Image from "next/image"
import { motion } from "framer-motion"
import { PrimaryBtn } from "../forms/PrimaryBtn"

export const UserProfile = () => {

  const modifyProfile = ()=>{
    console.log("ejecucion Update profile")
  } 

  return (
    <div className={Styles.profile_container}>

      <div className={Styles.profile_userImageContainer}>
        <motion.div 
          initial={{opacity:0,scale:0}}
          animate={{opacity:1,scale:1}}
          transition={{delay:.5, duration:.3}}
          className={Styles.profile_userImageBackground}>
          <Image width={200} height={200} className={Styles.profile_userImage} alt="User profile" src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </motion.div>
      </div>

      <div className={Styles.profile_userInfoContainer}>
        <motion.span className={Styles.profile_infoItem}>
          Elva Gina Pestona
        </motion.span>
        <motion.span className={Styles.profile_infoItem}>
          elvaginapestona69@mail.com
        </motion.span>
        <motion.span className={Styles.profile_infoItem}>
          Telefono: (+99) 999-999-99-99
        </motion.span>
        <div className={Styles.profile_infoItem}>
          <PrimaryBtn callback={modifyProfile}>
            Modifical informacion
          </PrimaryBtn>
        </div>
      </div>

    </div>
  )
}
