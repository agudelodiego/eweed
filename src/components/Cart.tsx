import { CartContext } from "@/context/cart/CartProvider"
import { useContext, useEffect } from "react"
import CartItem from "./CartItem"


const Cart = () => {

  const {cartstate} = useContext(CartContext)

  useEffect(()=>{
    console.log(cartstate)
  },[])

  return(
    <>
      <h1 className="mt-5 text-center text-success">
        Carrito de compras
      </h1>
      <div className="container d-flex flex-column align-items-center mb-5">
        
        {cartstate?.total_items==0?
          (<h1 className="text-center mt5 pt-5">Tu carrito de compras esta vacio</h1>):

          (
            cartstate?.line_items.map((product)=>{
            return (<CartItem key={product.id} product={product} />)
            })
          )
          
        }
      </div>
    </>
  )
}
export default Cart