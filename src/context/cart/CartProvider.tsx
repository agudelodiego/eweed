import { commerce } from "@/lib/commerce";
import { Cart } from "@chec/commerce.js/types/cart";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { cartContextType } from "./types";


const initialState: Cart = {
  id: "",
  created:0,
  updated: 0,
  expires: 0,
  total_items: 0,
  total_unique_items: 0,
  subtotal: {
    raw: 0,
    formatted: "",
    formatted_with_symbol: "",
    formatted_with_code: ""
  },
  currency: {
    symbol: "",
    code: ""
  },
  discount_code: "",
  hosted_checkout_url: "",
  line_items: []
}

interface Props {
  children: ReactNode
}

export const CartContext = createContext<cartContextType>({
  cartstate: initialState
})


export const CartProvider = ({ children }:Props) => {

  const [cartstate, setCartState] = useState<Cart>(initialState)

  useEffect(()=>{
    commerce.cart.retrieve()
      .then((cart) => {setCartState(cart)})
  },[])

  return (
    <CartContext.Provider value={{ cartstate }}>
      {children}
    </CartContext.Provider>
  );
};
