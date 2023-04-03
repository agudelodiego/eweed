import { createContext, ReactNode, useEffect, useState } from "react"
import { checkoutStateType, PaymentDetailsStateType, ShippingInfoStateType } from "./types"

interface Props {
  children: ReactNode
}


const shippingInfoInitialState = {
  name: null,
  email: null,
  zip: null,
  address: null,
  country: null,
  subDivision: null,
  shippingOption: null
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
  setPaymentDetailsInfo: () => null
})

export const CheckoutProvider = ({children}:Props) => {

  const [shippingInfo,setShippingInfo] = useState<ShippingInfoStateType>(shippingInfoInitialState)
  const [paymentDetailsInfo, setPaymentDetailsInfo] = useState<PaymentDetailsStateType>(PaymentDetailsInitialState)
  
  return(
    <CheckoutContext.Provider value={{
      shippingInfo,
      setShippingInfo,
      paymentDetailsInfo,
      setPaymentDetailsInfo
    }}>
      {children}
    </CheckoutContext.Provider>
  )
}