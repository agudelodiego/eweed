import { Product } from "@chec/commerce.js/types/product";
import { Dispatch } from "react";


//* ProductCart:
// ProductCart will be each of the products that user wanna introduce in the shopping cart
export interface ProductCart {
  item: Product,
  quantity: number
}

//* CartState:
// This will be the state basically is an array of products 
export interface CartState {
  products: ProductCart[]
}

//* CartAction
// This is the structure for perfom any operation inside the user shopping cart
export interface CartAction {
  type: "ADD"|"REMOVE",
  payload: ProductCart
}

export type CartDispatch = Dispatch<CartAction>;

//* CartContextValue:
// The structure of the context
export interface CartContextValue {
  cartstate: CartState,
  cartdispatch: CartDispatch,
}
