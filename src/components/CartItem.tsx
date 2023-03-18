import Image from "next/image"
import Styles from "../styles/CartItem.module.css"
import { faCirclePlus, faCircleMinus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { LineItem } from "@chec/commerce.js/types/line-item"
import { useContext } from "react"
import { CartContext } from "@/context/cart/CartProvider"

interface Props{
  product: LineItem
}

const CartItem = ({product}:Props) =>{

  const {updateQuantity,removeFromCart} = useContext(CartContext)

  const incremenQuantity = () => {
    let quantity = product.quantity + 1
    updateQuantity(product.id, quantity)
  }

  const decrementQuantity = () => {
    let quantity = product.quantity - 1
    updateQuantity(product.id, quantity)
  }

  const removeProduct = () =>{
    removeFromCart(product.product_id)
  }

  return(
    <div className={Styles.cartItem_container}>

      <motion.button
        whileTap={{scale: 0.4}}
        className={Styles.btn_trashIcon}
        onClick={removeProduct}
      >
        <FontAwesomeIcon icon={faTrash} className={Styles.trashIcon} />
      </motion.button>

      <Image width={400} height={300} src={product.image?.url??""} alt="Product image" className={Styles.cartItem_image}/>

      <div className={Styles.cartItem_info}>

        <span className={Styles.cartItem_name}>{product.name}</span>

        <span>Precio: ${product.price.raw}</span>

        <div className="d-flex justify-content-center align-items-center">

          {product.quantity <= 1?
          (""):
          (
            <motion.button 
              whileTap={{scale:0.6}} 
              className={Styles.cartItem_button}
              onClick={decrementQuantity}
            >
              <FontAwesomeIcon icon={faCircleMinus} className={Styles.cartItem_icon} />
            </motion.button>
          )
          }
          
          <span>{product.quantity}</span>

          <motion.button 
            whileTap={{scale:0.6}} 
            className={Styles.cartItem_button}
            onClick={incremenQuantity}
          >
            <FontAwesomeIcon icon={faCirclePlus} className={Styles.cartItem_icon} />
          </motion.button>
          
        </div>

        <span>Subtotal:  ${product.price.raw * product.quantity}</span>

      </div>

    </div>
  )

}
export default CartItem