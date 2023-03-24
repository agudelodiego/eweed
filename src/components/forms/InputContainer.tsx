import Styles from "../../styles/Form.module.css"
import React, { ReactNode } from 'react'
import { motion } from "framer-motion"
import { formAnimation } from "@/utils/Animations"


interface Props {
  children: ReactNode,
  delay:number
}

export const InputContainer = ({children,delay}:Props) => {
  return (
    <motion.div 
        initial={formAnimation.initial}
        animate={formAnimation.final}
        transition={{delay}}
        className={Styles.form_inputContainer}>
        {children}
      </motion.div>
  )
}
