import { CartActionsType, CartReducerType, CartStateType } from "./types";

export const CartReducer:CartReducerType = (state,action)=>{
  switch (action.type) {
    case "ADD":
      if(action.payload){
        return [...state, action.payload]
      }
      else{
        return state
      }

    case "REMOVE":
      if(action.payload){
        return state.filter((item) => item.product.id !== action.payload?.product.id)
      }
      else{
        return state
      }

    case "UPDATE":
      if(action.payload){
        return state.map((item) => {
          if(item.product.id == action.payload?.product.id) {
            return action.payload
          }
          else{
            return item
          }
        })
      }
      else{
        return state
      }
        
    
    case "EMPTY":
      return []

    default:
      return state
  }
}