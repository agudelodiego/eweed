import  { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { CartReducer } from "./CartReducer";
import { CartContextType, CartStateType } from "./types";


interface Props {
  children: ReactNode
}

const initialState: CartStateType = []

export const CartContext = createContext<CartContextType>({
  cartState: initialState,
  totalItems: 0,
  subTotal: 0,
  cartDispatch: () => null
})

export const CartProvider = ({children}:Props) => {

  const [cartState,cartDispatch] = useReducer(CartReducer,initialState)
  const [subTotal,setSubTotal] = useState(0)
  const [totalItems,setTotalItems] =useState(0)

  useEffect(()=>{
    setSubTotal(cartState.reduce((accumulator, item) => {
      let subTotal = item.product.price.raw * item.quantity
      return accumulator + subTotal
    },0))
    setTotalItems(cartState.reduce((accumulator,item)=>{
      return accumulator + item.quantity
    },0))
  },[cartState])

  return(
    <CartContext.Provider value={{
      cartState,
      subTotal,
      totalItems,
      cartDispatch}}>
      {children}
    </CartContext.Provider>
  )
}
