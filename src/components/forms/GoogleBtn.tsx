import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import Styles from "../../styles/Form.module.css"

interface Props {
  children: ReactNode,
  callback: Function
}

export const GoogleBtn = ({callback,children}:Props) => {
  return (
    <motion.button
    className={Styles.form_btnGoogle}
    whileTap={{scale:.6}}
    onClick={(e)=>{
      e.preventDefault()
      callback()
    }}>
      {children}
    </motion.button>
  )
}
