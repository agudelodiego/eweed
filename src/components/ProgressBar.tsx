import React from "react"
import { faCheck, faTruckFast, faCreditCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Styles from "../styles/ProgressBar.module.css"
import { motion } from "framer-motion"

interface Props {
  step:number
}

export const ProgressBar = ({step}:Props) => {

  return(
    <div className={Styles.progress_container}>

      <div className={`${Styles.progress_fistIconContainer} ${step>=1?Styles.progress_completed:""}`}>
        <FontAwesomeIcon icon={faTruckFast} className={Styles.progress_icon} />
      </div>
      <span className={Styles.progress_shippingText}>Entrega</span>

      <div className={`${Styles.progress_secondIconContainer} ${step>=2?Styles.progress_completed:""}`}>
        <FontAwesomeIcon icon={faCheck} className={Styles.progress_icon} />
      </div>
      <span className={Styles.progress_confirmationText}>Confirmacion</span>

      <div className={`${Styles.progress_thirdIconContainer} ${step>=3?Styles.progress_completed:""}`}>
        <FontAwesomeIcon icon={faCreditCard} className={Styles.progress_icon} />
      </div>
      <span className={Styles.progress_paymentText}>Pago</span>

      {step==1?<motion.div animate={{width:"0"}} className={Styles.progress_step} />:""}
      {step==2?<motion.div animate={{width:"10rem"}} className={Styles.progress_step} />:""}
      {step==3?<motion.div initial={{width:"10rem"}} animate={{width:"20rem"}} className={Styles.progress_step} />:""}

    </div>
  )
}
