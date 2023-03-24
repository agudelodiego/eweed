import { ReactNode } from "react";
import React from "react"
import { motion } from "framer-motion";
import Styles from "../../styles/Form.module.css"

interface Props {
  children: ReactNode
}

export const Form = ({children}:Props) => {
  return (
    <motion.form
      initial={{x:1000,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:.3,delay:.2}}
      className={Styles.form}>
      {children}
    </motion.form>
  )
}
