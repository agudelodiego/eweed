import React from "react"
import Styles from "../../styles/Form.module.css"
import { motion } from "framer-motion"
import { formAnimation } from "@/utils/Animations"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruckFast } from "@fortawesome/free-solid-svg-icons"
import Select from "./Select"

export const ShippingAdressForm = () => {
  return (
    <motion.form
      initial={{x:1000,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:.3,delay:.2}}
      className={Styles.form}>

      <motion.div 
        initial={formAnimation.initial}
        animate={formAnimation.final}
        transition={{delay:.6}}
        className={Styles.form_inputContainer}>
        <span className="fs-4 mb-3">
          Informacion de entrega
        </span>
        <FontAwesomeIcon icon={faTruckFast} className={Styles.form_shippingIcon}/>
      </motion.div>
      
      <motion.div
        initial={formAnimation.initial}
        animate={formAnimation.final}
        transition={{delay:.8}}
        className={Styles.form_inputContainer}>
        <label htmlFor="userName" className={Styles.form_label}>
          Nombre de completo:
        </label>
        <input type="text" id="userName" className={Styles.form_input} placeholder="ejemploXD" />  
      </motion.div>

      <motion.div 
        initial={formAnimation.initial}
        animate={formAnimation.final}
        transition={{delay:1}}
        className={Styles.form_inputContainer}>
        <label htmlFor="userEmail" className={Styles.form_label}>
          Correo eletronico:
        </label>
        <input type="email" id="userEmail" className={Styles.form_input} placeholder="ejemplo@gmail.com" />  
      </motion.div>

      <motion.div
        initial={formAnimation.initial}
        animate={formAnimation.final}
        transition={{delay:1.2}}
        className={Styles.form_inputContainer}>
        <Select />
      </motion.div>

      <motion.div 
        initial={formAnimation.initial}
        animate={formAnimation.final}
        transition={{delay:1}}
        className={Styles.form_inputContainer}>
        <label htmlFor="postalCode" className={Styles.form_label}>
          Codigo postal
        </label>
        <input type="number" id="postalCode" className={Styles.form_input} placeholder="ejemplo: 050005" />  
      </motion.div>

    </motion.form>
  )
}
