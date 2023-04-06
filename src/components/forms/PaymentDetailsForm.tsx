import React, { useContext, useEffect, useState } from "react"
import { Form } from "./Form"
import { InputContainer } from "./InputContainer"
import Styles from "../../styles/Form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard } from "@fortawesome/free-solid-svg-icons"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { PrimaryBtn } from "./PrimaryBtn"
import { SecondaryBtn } from "./SecondaryBtn"
import { usePaymentDetailsForm } from "@/hooks/usePaymentDetailsForm"
import {Elements, CardElement, useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement} from "@stripe/react-stripe-js"
import {CreatePaymentMethodData, loadStripe, StripeCardElement} from "@stripe/stripe-js"
import { CartContext } from "@/context/cart/CartProvider"




interface Props {
  setStep: Function
}

export const PaymentDetailsForm = ({setStep}:Props) => {

  const {remoteCart} = useContext(CartContext)
  const [success,setSuccess] = useState<boolean | null>(null)
  const stripe = useStripe()
  const elements = useElements()

  const pay = async() => {
    if(stripe && elements){

      let cardElement = elements.getElement(CardElement)
      
      if(cardElement){


        let {error, paymentMethod} = await stripe.createPaymentMethod({
          type:"card",
          card: cardElement
        })

        if(error){
          console.log("Ups ha ocurrido un error")
          console.log(error)
        }
        else{
          console.log("Sin errores")
          console.log(paymentMethod)
        }

      }
    }
    console.log("xd")
  }
  

  const goBack = ()=>{
    setStep(2)
  }

  return (
    <Form>

      <InputContainer delay={.6}>
        <span className="fs-5">Informacion de pago</span>
        <FontAwesomeIcon icon={faCreditCard} className={Styles.form_shippingIcon} />
      </InputContainer>

      <InputContainer delay={.8}>
        <label htmlFor="customerCard" className={Styles.form_label}>Tarjeta</label>
        <CardElement id="customerCard" className={`${Styles.inputBorder} col-12 col-md-10 col-lg-8`} />
      </InputContainer>

      <InputContainer delay={1}>
        <div className="w-100 d-flex justify-content-between align-items-center">
          <SecondaryBtn callback={goBack}>
            Atras
          </SecondaryBtn>
          <PrimaryBtn callback={pay}>
            Pagar
          </PrimaryBtn>
        </div>
      </InputContainer>

    </Form>  
  )
}
