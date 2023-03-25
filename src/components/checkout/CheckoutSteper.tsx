import Styles from "../../styles/Form.module.css"
import { ShippingAdressForm } from "../forms/ShippingAdressForm"
import { ProgressBar } from "../ProgressBar"
import { useState } from "react"
import { PaymentDetailsForm } from "../forms/PaymentDetailsForm"
import { Confirmation } from "./Confirmation"


const CheckoutSteper = ()=>{

  const [step,setStep] = useState(1)

  return(
    <main className={Styles.form_container}>

      <div className="text-center mb-5">
        <ProgressBar step={step} />
      </div>

      {step==1?<ShippingAdressForm setStep={setStep} />:""}
      {step==2?<PaymentDetailsForm setStep={setStep} />:""}
      {step==3?<Confirmation setStep={setStep} />:""}
      
    </main>
  )
}
export default CheckoutSteper