import { CheckoutContext } from "@/context/checkout/CheckoutProvider"
import { UserContext } from "@/context/user/UserProvider"
import { use, useContext, useEffect, useState } from "react"


export const usePaymentDetailsForm = (setStep:Function) => {

  const {user} = useContext(UserContext)
  const { paymentDetailsInfo, setPaymentDetailsInfo} = useContext(CheckoutContext)
  
  const [cardOwner, setCardOwner] = useState("")
  const [cardOwnerError, setCardOwnerError] = useState<string | false>(false)

  const [cardNumber, setCardNumber] = useState("")
  const [cardNumberError, setCardNumberError] = useState<string | false>(false)

  const [securityCode, setSecurityCode] = useState("")
  const [securityCodeError, setSecurityCodeError] = useState<string | false>(false)

  const [billingAddress, setBillingAddress] = useState("")
  const [billingAddressError, setBillingAddressError] = useState<string | false>(false)

  const [cardExpirationDate, setCardExpirationDate] = useState<Date | null>(null)
  const [cardExpirationDateError, setCardExpirationDateError] = useState<string | false>(false)



  useEffect(() => {
    if(user){
      if(user.displayName) setCardOwner(user.displayName)
    }
  },[user])

  useEffect(() => {
    let {cardOwner, cardNumber, cardExpirationDate, securityCode, billingAddress} = paymentDetailsInfo
    if(cardExpirationDate && cardNumber && cardOwner && securityCode && billingAddress){
      setCardOwner(cardOwner)
      setCardNumber(cardNumber)
      setCardExpirationDate(cardExpirationDate)
      setSecurityCode(securityCode)
      setBillingAddress(billingAddress)
    }
  }, [paymentDetailsInfo])

  useEffect(() => {
    if(cardOwner) setCardOwnerError(false)
    else setCardOwnerError("Debes introducir el titular de la tarjeta.")
  }, [cardOwner])

  useEffect(()=>{
    if(cardNumber) setCardNumberError(false)
    else setCardNumberError("Debe introducir el numero de su tarjeta.")
  }, [cardNumber])

  useEffect(()=>{
    if(securityCode) setSecurityCodeError(false)
    else setSecurityCodeError("Debes introducir el codigo de seguridad de tu tarjeta.")
  }, [securityCode])

  useEffect(()=>{
    if(billingAddress) setBillingAddressError(false)
    else setBillingAddressError("Debes introducir la direccion donde deseas que llegue tu factura.")
  }, [billingAddress])

  useEffect(()=>{
    if(cardExpirationDate) setCardExpirationDateError(false)
    else setCardExpirationDateError("Debes introducir la fecha de exipracion de tu tarjeta.")
  },[cardExpirationDate])

  const validateData = () => {
    if(cardOwner && cardNumber && securityCode && billingAddress && cardExpirationDate){
      setPaymentDetailsInfo({
        cardOwner,
        cardNumber,
        cardExpirationDate,
        securityCode,
        billingAddress
      })
      //setStep(3)
    }
    
    
  }
  
  return {
    cardOwner,
    setCardOwner,
    cardOwnerError,

    cardNumber,
    setCardNumber,
    cardNumberError,

    securityCode,
    setSecurityCode,
    securityCodeError,

    billingAddress,
    setBillingAddress,
    billingAddressError,

    cardExpirationDate,
    setCardExpirationDate,
    cardExpirationDateError,

    validateData
  }

}
