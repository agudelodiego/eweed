import { Product } from "@chec/commerce.js/types/product"
import { Dispatch } from "react"

export type cartItem = {
  product: Product
  quantity:number
}

export type CartStateType = cartItem[]

export type CartContextType = {
  cartState: CartStateType,
  totalItems:number,
  subTotal:number
  cartDispatch: Dispatch<CartActionsType>,
  initRemoteCart: Function
}

export type CartActionsType = {
  type: "ADD"|"REMOVE"|"UPDATE"|"EMPTY",
  payload?: cartItem
}

export type CartReducerType = (state:CartStateType, action: CartActionsType) => CartStateType