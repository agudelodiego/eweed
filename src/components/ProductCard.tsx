import Image from "next/image"
import Style from "../styles/ProductCard.module.css"
import { faCartPlus, faEye, faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { useState } from "react"
import { Product } from "@chec/commerce.js/types/product"


interface Props {
  product:Product
}


const ProductCard = ({product}:Props)=>{

  const [clicked, setClicked] = useState(false);

  const addCart =()=>{
    setClicked(true)
    console.log(clicked)
  }

  const deleteCart = ()=>{
    setClicked(false)
  }

  return(
    <>
      <div className={Style.cardContainer}>

      <div className={Style.imageContainer}>
        <Image width={200} height={200} src={product.image?.url ?? ''} className={`card-img-top ${Style.image}`} alt="Product image" />
      </div>

      <div className="card-body">

        <span className={Style.name}>{
          product.name}
        </span>

        <span className={Style.price}>
          {product.price.formatted_with_code}
        </span>

        <div className="d-flex justify-content-evenly pt-4">

          <motion.div
            whileTap={{ scale: 0.4 }}
          >
            {clicked?(
              <FontAwesomeIcon onPointerDown={deleteCart} icon={faCartArrowDown} className={`${Style.cartIcon} color-orange`} />
            ):(
              <FontAwesomeIcon onPointerDown={addCart} icon={faCartPlus} className={Style.cartIcon} />
            )}
                     
          </motion.div>
          
          <motion.div whileTap={{ scale: 0.4 }}>
            <FontAwesomeIcon icon={faEye} className={Style.cartIcon} />
          </motion.div>
                
          </div>

        </div>
      </div>
    </>
    
  )
}
export default ProductCard