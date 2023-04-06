import Styles from "../../styles/Form.module.css"
import { ShippingAdressForm } from "../forms/ShippingAdressForm"
import { ProgressBar } from "../ProgressBar"
import { useState } from "react"
import { PaymentDetailsForm } from "../forms/PaymentDetailsForm"
import { Confirmation } from "./Confirmation"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"



//! -----------------------------> STRIPE INTEGRATION <---------------------------------
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK??"")
//! ------------------------------------------------------------------------------------


const CheckoutSteper = ()=>{

  const [step,setStep] = useState(1)

  return(
    <main className={Styles.form_container}>

      <div className="text-center mb-5">
        <ProgressBar step={step} />
      </div>

      {step==1?<ShippingAdressForm setStep={setStep} />:""}
      {step==2?<Confirmation setStep={setStep} />:""}
      {step==3?
        //*if
        <Elements stripe={stripePromise}>
          <PaymentDetailsForm setStep={setStep} />
        </Elements>
        
        //*else
        :""}
      
    </main>
  )
}
export default CheckoutSteper