import { Cart } from "@chec/commerce.js/types/cart"


export interface cartContextType {
  cartstate:Cart,
  addToCart: Function,
  removeFromCart: Function,
  updateQuantity: Function,
  emptyCart: Function
}