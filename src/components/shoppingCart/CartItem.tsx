import Image from "next/image"
import Styles from "../../styles/CartItem.module.css"
import { faCirclePlus, faCircleMinus, faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { useContext } from "react"
import { CartContext } from "@/context/cart/CartProvider"
import { cartItem } from "@/context/cart/types"

interface Props{
  item: cartItem
}

const CartItem = ({item}:Props) =>{

  const {cartDispatch} = useContext(CartContext)

  const incremenQuantity = () => {
    cartDispatch({
      type:"UPDATE",
      payload:{
        product: item.product,
        quantity: item.quantity + 1
      }
    })
  }

  const decrementQuantity = () => {
    cartDispatch({
      type:"UPDATE",
      payload:{
        product: item.product,
        quantity:item.quantity - 1
      }
    })
  }

  const removeProduct = () =>{
    cartDispatch({
      type:"REMOVE",
      payload:item
    })
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

      <Image width={400} height={300} src={item.product.image?.url??""} alt="Product image" className={Styles.cartItem_image}/>

      <div className={Styles.cartItem_info}>

        <span className={Styles.cartItem_name}>{item.product.name}</span>

        <span>Precio: ${item.product.price.raw}</span>

        <div className="d-flex justify-content-center align-items-center">

          {item.quantity <= 1?
            ""
          :
          
            <motion.button 
              whileTap={{scale:0.6}} 
              className={Styles.cartItem_button}
              onClick={decrementQuantity}
            >
              <FontAwesomeIcon icon={faMinus} className={Styles.cartItem_icon} />
            </motion.button>
          
          }
          
          <span>{item.quantity}</span>

          <motion.button 
            whileTap={{scale:0.6}} 
            className={Styles.cartItem_button}
            onClick={incremenQuantity}
          >
            <FontAwesomeIcon icon={faPlus} className={Styles.cartItem_icon} />
          </motion.button>
          
        </div>

        <span>Subtotal:  ${item.product.price.raw * item.quantity}</span>

      </div>

    </div>
  )

}
export default CartItem