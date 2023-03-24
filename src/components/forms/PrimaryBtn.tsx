import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import Styles from "../../styles/Form.module.css"

interface Props {
  children: ReactNode,
  callback: Function
}

export const PrimaryBtn = ({children,callback}:Props) => {
  return (
    <motion.button
      className={Styles.form_btnSubmit}
      whileTap={{scale:.6}}
      onClick={(e)=>{
        e.preventDefault()
        callback()
      }}>
      {children}
    </motion.button>
  )
}
