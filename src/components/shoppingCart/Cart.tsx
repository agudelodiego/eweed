import { CartContext } from "@/context/cart/CartProvider"
import { useContext } from "react"
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import Link from "next/link"

const Cart = () => {

  const {cartState} = useContext(CartContext)

  return(
    <>
      <h1 className="mt-5 text-center text-success">
        Carrito de compras
      </h1>
      <div className="container d-flex flex-column align-items-center mb-5">
        
        {
          cartState.length<1?
            <h1 className="text-center mt5 pt-5">
              Tu carrito de compras esta vacio. Vuelve a la <Link href="/">pagina principal</Link> y añade algun producto 
            </h1>
          : 

            <>
              {
                cartState.map((item) => {
                  return <CartItem key={item.product.id} item={item} />
                })
              }
              <CartSummary />
            </>  
        }
        
      </div>
    </>
  )
}
export default Cart