import { createContext, useReducer, ReactNode } from "react";
import { cartReducer } from "./CartReducer";
import { CartContextValue, CartState } from "./types";


interface Props {
  children: ReactNode
}

const initialState: CartState = {
  products: [],
}

export const CartContext = createContext<CartContextValue>({
  cartstate: initialState,
  cartdispatch: () => null,
});

export const CartProvider = ({ children }:Props) => {

  const [cartstate, cartdispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{cartstate,cartdispatch}}>
      {children}
    </CartContext.Provider>
  )

}
