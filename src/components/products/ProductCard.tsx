import Image from "next/image"
import Style from "../../styles/ProductCard.module.css"
import { faCartPlus, faEye, faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import { Product } from "@chec/commerce.js/types/product"
import { CartContext } from "@/context/cart/CartProvider"
import Link from "next/link"


interface Props {
  product:Product
}


const ProductCard = ({product}:Props)=>{

  const [clicked, setClicked] = useState(false)
  const {cartState, cartDispatch} = useContext(CartContext)
  
  useEffect(()=>{
    cartState.forEach((item)=>{
      if(item.product.id == product.id){
        setClicked(true)
      }
    })
  },[cartState])

  const addCart =()=>{
    cartDispatch({
      type:"ADD",
      payload: {
        product:product,
        quantity: 1
      }
    })
    setClicked(true)
  }

  const deleteCart = ()=>{
    cartDispatch({
      type:"REMOVE",
      payload:{
        product:product,
        quantity: 0
      }
    })
    setClicked(false)
  }

  return(
    <>
      <div className={Style.cardContainer}>

      <div className={Style.imageContainer}>
        <Image width={200} height={200} src={product.image?.url ?? ""} className={`card-img-top ${Style.image}`} alt="Product image" />
      </div>

      <div className="card-body">

        <span className={Style.name}>{
          product.name}
        </span>

        <span className={Style.price}>
          {product.price.formatted_with_code}
        </span>

        <div className="d-flex justify-content-evenly pt-4 pb-3">

          <motion.div
            whileTap={{ scale: 0.4 }}
          >
            {clicked?(
              <button className={Style.btn_icon}>
                <FontAwesomeIcon onPointerDown={deleteCart} icon={faCartArrowDown} className={`${Style.cartIcon} color-orange`} />
              </button>
            ):(
              <button className={Style.btn_icon}>
                <FontAwesomeIcon onPointerDown={addCart} icon={faCartPlus} className={Style.cartIcon} />
              </button>
            )}
                     
          </motion.div>
          
          <motion.div whileTap={{ scale: 0.4 }}>
            <Link href={"/products/"+product.id} className={Style.btn_icon}>
              <FontAwesomeIcon icon={faEye} className={Style.cartIcon} />
            </Link>
          </motion.div>
                
          </div>

        </div>
      </div>
    </>
    
  )
}
export default ProductCard