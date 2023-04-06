import  { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { CartReducer } from "./CartReducer";
import { CartContextType, CartStateType } from "./types";
import { Cart } from "@chec/commerce.js/types/cart";
import { commerce } from "@/lib/commerce";
import { CheckoutToken } from "@chec/commerce.js/types/checkout-token";


interface Props {
  children: ReactNode
}

const initialState: CartStateType = []

export const CartContext = createContext<CartContextType>({
  cartState: initialState,
  totalItems: 0,
  subTotal: 0,
  remoteCart: null,
  token: null,
  cartDispatch: () => null,
  initRemoteCart: () => null
})

export const CartProvider = ({children}:Props) => {

  const [cartState,cartDispatch] = useReducer(CartReducer,initialState)
  const [subTotal,setSubTotal] = useState(0)
  const [totalItems,setTotalItems] = useState(0)
  const [remoteCart,setRemoteCard] = useState<Cart | null>(null)
  const [token, setToken] = useState<CheckoutToken | null>(null)

  useEffect(()=>{
    setSubTotal(cartState.reduce((accumulator, item) => {
      let subTotal = item.product.price.raw * item.quantity
      return accumulator + subTotal
    },0))
    setTotalItems(cartState.reduce((accumulator,item)=>{
      return accumulator + item.quantity
    },0))
  },[cartState])

  const initRemoteCart = async() => {
    try{
      setRemoteCard(null)
      setToken(null)
      await commerce.cart.empty()
      for(let i=0; i<cartState.length; i++){
        let item = cartState[i]
        let cart = await commerce.cart.add(item.product.id, item.quantity) as unknown as Cart
        if(i == (cartState.length - 1)){
          setRemoteCard(cart)
          let checkoutToken = await commerce.checkout.generateToken(cart.id, {type:"cart"})
          setToken(checkoutToken)
        }
      }
    }
    catch(error){
      console.log(error)
    }
  }

  return(
    <CartContext.Provider value={{
      cartState,
      subTotal,
      totalItems,
      remoteCart,
      token,
      cartDispatch,
      initRemoteCart}}>
      {children}
    </CartContext.Provider>
  )
}
