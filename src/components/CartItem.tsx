import Image from "next/image"
import Styles from "../styles/CartItem.module.css"
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { ProductCart } from "@/context/cart/types"

interface Props{
  product: ProductCart
}

const CartItem = ({product}:Props) =>{


  return(
    <div className={Styles.cartItem_container}>

      <Image width={400} height={300} src={product.item.image?.url ?? ""} alt={product.item.name} className={Styles.cartItem_image}/>

      <div className={Styles.cartItem_info}>

        <span className={Styles.cartItem_name}>{product.item.name}</span>

        <span>Precio: {product.item.price.formatted_with_symbol}</span>

        <div className="d-flex justify-content-center align-items-center">

          <motion.button whileTap={{scale:0.6}} className={Styles.cartItem_button}>
            <FontAwesomeIcon icon={faCircleMinus} className={Styles.cartItem_icon} />
          </motion.button>

          <span>{product.quantity}</span>

          <motion.button whileTap={{scale:0.6}} className={Styles.cartItem_button}>
            <FontAwesomeIcon icon={faCirclePlus} className={Styles.cartItem_icon} />
          </motion.button>
          
        </div>

        <span>Subtotal: 80000$</span>

      </div>

    </div>
  )

}
export default CartItem