import { CartContext } from "@/context/cart/CartContext"
import { ProductCart } from "@/context/cart/types"
import { useContext } from "react"
import CartItem from "./CartItem"


const Cart = ()=>{

  const {cartstate} = useContext(CartContext)

  return(
    <>
      <h1 className="mt-5 text-center text-success">
        Carrito de compras
      </h1>
      <div className="container d-flex flex-column align-items-center mb-5">
        
        {cartstate.products.length==0?
          (<h1 className="text-center">Tu carrito de compras esta vacio</h1>):

          (
            cartstate.products.map((product:ProductCart)=>{
            return (<CartItem key={product.item.id} product={product} />)
            })
          )
          
        }
      </div>
    </>
  )
}
export default Cart