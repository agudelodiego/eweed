import { Cart } from "@chec/commerce.js/types/cart"
import { CheckoutToken } from "@chec/commerce.js/types/checkout-token"
import { Product } from "@chec/commerce.js/types/product"
import { Dispatch } from "react"

export type cartItem = {
  product: Product
  quantity:number
}

export type CartStateType = cartItem[]

export type CartContextType = {
  cartState: CartStateType,
  totalItems: number,
  subTotal: number,
  remoteCart: Cart | null,
  token: CheckoutToken | null,
  cartDispatch: Dispatch<CartActionsType>,
  initRemoteCart: Function,
  resetCart: Function
}

export type CartActionsType = {
  type: "ADD"|"REMOVE"|"UPDATE"|"EMPTY",
  payload?: cartItem
}

export type CartReducerType = (state:CartStateType, action: CartActionsType) => CartStateType