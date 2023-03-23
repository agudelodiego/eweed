import Styles from "../../styles/Form.module.css"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faUserPlus, faCannabis } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { ShippingAdressForm } from "../forms/ShippingAdressForm"
import { ProgressBar } from "../ProgressBar"


import {formAnimation} from "../../utils/Animations"
import { useState } from "react"


const CheckoutSteper = ()=>{

  const [step,setStep] = useState(1)

  return(
    <main className={Styles.form_container}>
      <div className="text-center mb-5">
        <ProgressBar step={step} />
      </div>
      <ShippingAdressForm />
    </main>
  )
}
export default CheckoutSteper