import { CartContext } from "@/context/cart/CartProvider"
import { useContext } from "react"
import { motion } from "framer-motion"
import Styles from "../../styles/CartSummary.module.css"

const CartSummary = ()=>{

  const {cartState, subTotal, cartDispatch} = useContext(CartContext)

  return(
    <div className={Styles.summary_container}>
      <h1 className="text-center text-success">Resumen de la compra</h1>
      <h4>Total de productos: {cartState.length}</h4>
      <h4>Total a pagar: {subTotal} $</h4>
      <h4>Tipo de moneda:  COP $</h4>
      <motion.button
        whileTap={{scale:0.7}}
        className={Styles.btn_pay}
      >
        Comprar productos
      </motion.button>
      <motion.button
        whileTap={{scale:0.7}}
        className={Styles.btn_delete}
        onClick={()=>{
          cartDispatch({
            type:"EMPTY"
          })
        }}
      >
        Eliminar carrito
      </motion.button>
    </div>
  )
}
export default CartSummary