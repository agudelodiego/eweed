import { CartAction, CartState } from "./types"



export const cartReducer = (state: CartState, action: CartAction): CartState => {

  switch (action.type) {

    case "ADD":
      return {
        ...state,
        products: [...state.products, action.payload],
      }

    case "REMOVE":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.item.id !== action.payload.item.id
        ),
      }

    default:
      return state

  }

}