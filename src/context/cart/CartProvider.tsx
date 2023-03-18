import { commerce } from "@/lib/commerce";
import { RemoveResponse } from "@chec/commerce.js/features/cart";
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
  cartstate: initialState,
  addToCart: () => null,
  removeFromCart: () => null,
  updateQuantity: () => null,
  emptyCart: () => null
})


export const CartProvider = ({ children }:Props) => {

  const [cartstate, setCartState] = useState<Cart>(initialState)

  useEffect(()=>{
    commerce.cart.retrieve()
      .then((cart) => {setCartState(cart)})
  },[])

  const addToCart = async(pid:string,quantity:number)=>{
    let cart = await commerce.cart.add(pid, quantity) as unknown as Cart
    setCartState(cart)
  }

  const removeFromCart = async (pid:string)=>{
    let item= cartstate.line_items.find((item)=>{
      return item.product_id == pid
    })
    let cart = await commerce.cart.remove(item?.id ?? "") as unknown as Cart
    setCartState(cart)
  }

  const updateQuantity = async(itemId:string, quantity:number) => {
    let cart = await commerce.cart.update(itemId,{quantity}) as unknown as Cart
    setCartState(cart)
  }

  const emptyCart = async() =>{
    let cart = await commerce.cart.empty() as unknown as Cart
    setCartState(cart)
  }

  return (
    <CartContext.Provider value={{ 
      cartstate, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      emptyCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
