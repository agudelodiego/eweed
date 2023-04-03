import { Dispatch, SetStateAction } from "react"


export type ShippingInfoStateType = {
  name: string | null,
  email: string | null,
  zip: string | null,
  address: string | null,
  country: [string,string] | null,
  subDivision: [string,string] | null,
  shippingOption: [string,string] | null
}

export type PaymentDetailsStateType = {
  cardOwner: string | null,
  cardNumber: string | null,
  securityCode: string | null,
  billingAddress: string | null,
  cardExpirationDate: Date | null
}

export type checkoutStateType = {
  shippingInfo: ShippingInfoStateType,
  setShippingInfo: Dispatch<SetStateAction<ShippingInfoStateType>>,
  paymentDetailsInfo: PaymentDetailsStateType,
  setPaymentDetailsInfo: Dispatch<SetStateAction<PaymentDetailsStateType>>
}