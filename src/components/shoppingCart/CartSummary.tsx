import { CartContext } from "@/context/cart/CartProvider"
import { useContext } from "react"
import { motion } from "framer-motion"
import Styles from "../../styles/CartSummary.module.css"

const CartSummary = ()=>{

  const {cartstate, emptyCart} = useContext(CartContext)

  return(
    <div className={Styles.summary_container}>
      <h1 className="text-center text-success">Resumen de la compra</h1>
      <h4>Total de productos: {cartstate.total_items}</h4>
      <h4>Total a pagar: {cartstate.subtotal.formatted_with_symbol}</h4>
      <h4>Tipo de moneda: {cartstate.currency.code}</h4>
      <motion.button
        whileTap={{scale:0.7}}
        className={Styles.btn_pay}
      >
        Comprar productos
      </motion.button>
      <motion.button
        whileTap={{scale:0.7}}
        className={Styles.btn_delete}
        onClick={()=>{emptyCart()}}
      >
        Eliminar carrito
      </motion.button>
    </div>
  )
}
export default CartSummary