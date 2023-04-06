import { createContext, ReactNode, useEffect, useState } from "react"
import { checkoutStateType, PaymentDetailsStateType, ShippingInfoStateType } from "./types"

interface Props {
  children: ReactNode
}


const shippingInfoInitialState = {
  name: null,
  lastName: null,
  email: null,
  zip: null,
  address: null,
  country: null,
  subDivision: null,
  shippingOption: null,
  city: null
}

const PaymentDetailsInitialState = {
  cardOwner: null,
  cardNumber: null,
  securityCode: null,
  billingAddress: null,
  cardExpirationDate: null
}

export const CheckoutContext = createContext<checkoutStateType>({
  shippingInfo: shippingInfoInitialState,
  setShippingInfo: () => null,
  paymentDetailsInfo: PaymentDetailsInitialState,
  setPaymentDetailsInfo: () => null,
  resetCheckout: () => null
})

export const CheckoutProvider = ({children}:Props) => {

  const [shippingInfo,setShippingInfo] = useState<ShippingInfoStateType>(shippingInfoInitialState)
  const [paymentDetailsInfo, setPaymentDetailsInfo] = useState<PaymentDetailsStateType>(PaymentDetailsInitialState)
  
  const resetCheckout = ()=>{
    setShippingInfo(shippingInfoInitialState)
    setPaymentDetailsInfo(PaymentDetailsInitialState)
  }

  return(
    <CheckoutContext.Provider value={{
      shippingInfo,
      setShippingInfo,
      paymentDetailsInfo,
      setPaymentDetailsInfo,
      resetCheckout
    }}>
      {children}
    </CheckoutContext.Provider>
  )
}