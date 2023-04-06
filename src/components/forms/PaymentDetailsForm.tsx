import React, { useContext, useState } from "react"
import { Form } from "./Form"
import { InputContainer } from "./InputContainer"
import Styles from "../../styles/Form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard } from "@fortawesome/free-solid-svg-icons"
import "react-datepicker/dist/react-datepicker.css"
import { PrimaryBtn } from "./PrimaryBtn"
import { SecondaryBtn } from "./SecondaryBtn"
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import { CartContext } from "@/context/cart/CartProvider"
import { CheckoutContext } from "@/context/checkout/CheckoutProvider"
import { useRouter } from "next/router"
import { commerce } from "@/lib/commerce"
import { CheckoutCapture } from "@chec/commerce.js/types/checkout-capture"



interface Props {
  setStep: Function
}

export const PaymentDetailsForm = ({setStep}:Props) => {

  const {remoteCart,token, resetCart} = useContext(CartContext)
  const {shippingInfo, resetCheckout} = useContext(CheckoutContext)
  const router = useRouter()
  const [success,setSuccess] = useState<false | string>(false)
  const [error, setError] = useState<false | string>(false)
  const stripe = useStripe()
  const elements = useElements()

  const captureCheckout = async (newOrder: CheckoutCapture) => {
    if(token){
      try{
        let res = await commerce.checkout.capture(token.id, newOrder)
        console.group("commerce response")
        console.log(res)
        console.groupEnd()
        setSuccess("¡Uy que nota!. Acabas de hacer un pedido. Revisa tu correo electronico, en donde encontraras mas informacion")
        setError(false)
        resetCart()
        resetCheckout()
        setTimeout(()=> router.push("/"),4000)
      } 
      catch(error){
        console.log(error)
      }
    }
  }

  const pay = async() => {
    if(stripe && elements){

      let cardElement = elements.getElement(CardElement)
      
      if(cardElement && shippingInfo.subDivision && shippingInfo.country && token){


        let {error, paymentMethod} = await stripe.createPaymentMethod({
          type:"card",
          card: cardElement
        })

        if(error){
          setSuccess(false)
          setError("Ups, parece que ha ocurrido un error")
          console.log(error)
        }
        else{
          console.group("paymentMethod")
          console.log(paymentMethod)
          console.groupEnd()
        
          const orderData: CheckoutCapture = {
            line_items: remoteCart?.line_items,
            customer: {
              firstname: shippingInfo.name??"",
              lastname: shippingInfo.lastName??"",
              email: shippingInfo.email??""
            },
            shipping: {
              name: shippingInfo.name??"",
              street: shippingInfo.address??"",
              town_city: shippingInfo.city??"",
              county_state: `${shippingInfo.country[0]}-${shippingInfo.subDivision[0]}`,
              postal_zip_code: shippingInfo.zip??"",
              country: shippingInfo.country[0]
            },
            fulfillment: {
              shipping_method: paymentMethod?.id??""
            },
            billing: {
              name: shippingInfo.name??"",
              street: shippingInfo.address??"",
              town_city: shippingInfo.city??"",
              county_state: `${shippingInfo.subDivision[0]}-${shippingInfo.subDivision[1]}`,
              postal_zip_code: shippingInfo.zip??"",
              country: shippingInfo.country[0]
            },
            payment: {
              gateway: "stripe",
              stripe: {
                payment_method_id: paymentMethod?.id
              }
            },
            pay_what_you_want: remoteCart?.subtotal.raw as unknown as string
          }
          console.log(orderData)
          setSuccess("¡Uy que nota!. Acabas de hacer un pedido. Revisa tu correo electronico, en donde encontraras mas informacion")
          setError(false)
          resetCart()
          resetCheckout()
          setTimeout(()=> router.push("/"),4000)
          //captureCheckout(orderData)
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

      {success?
        //*if()
        <InputContainer delay={.3}>
          <span className="w-100 text-center text-success">{success}</span>
        </InputContainer>

        //*else
        :
        ""
      }

      {error?
        //*if()
        <InputContainer delay={.3}>
          <span className="w-100 text-center text-danger">{error}</span>
        </InputContainer>

        //*else
        :
        ""
      }

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
