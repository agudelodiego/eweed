import React, { Dispatch, SetStateAction } from "react"
import Styles from "../../styles/ProductDetail.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Slider } from "@/components/Slider"
import striptags from "striptags"
import { PrimaryBtn } from "@/components/forms/PrimaryBtn"
import { SecondaryBtn } from "@/components/forms/SecondaryBtn"
import { motion } from "framer-motion"
import { faShoppingCart, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Product } from "@chec/commerce.js/types/product"


interface Props {
  inCart: boolean,
  product: Product,
  quantity: number,
  addToCart: Function,
  removeFromCart: Function,
  setQuantity: Dispatch<SetStateAction<number>>
}

export const ProductPage = ({inCart,product,quantity,addToCart,removeFromCart,setQuantity}:Props) => {
  return (
    <div className={Styles.product_container}>

      <div className={Styles.product_imgContainer}>
        <Slider images={product?.assets}/>
      </div>
          
      <div className={Styles.product_detailsContainer}>
    
        {inCart?
          //*if(inCart)...
            <motion.div initial={{x:-300}} animate={{x:0}} className={Styles.product_inCartContainer}>
              En el carrito 
              <FontAwesomeIcon icon={faShoppingCart} className={Styles.product_cartIcon}/>
            </motion.div>

          ://*else...
            ""
        }
        
        <h2 className="">{product?.name}</h2>
        <span className={Styles.product_price}>{product?.price.formatted_with_code}</span>
        <p  className={Styles.product_descripton}>{striptags(product?.description??"")}</p>


        {inCart?
          //*if(inCart)
            ""
          ://*else...
            <>
              <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                
                  {quantity > 1?
                    //*if(quantity > 1)...
                      <motion.div
                        whileTap={{scale:.5}}>
                        <FontAwesomeIcon icon={faMinus} className={Styles.product_Icon} onClick={()=>{setQuantity( prev => prev - 1)}} />
                      </motion.div>

                    ://*else
                      ""
                  }
                  <span className={Styles.product_quantityText}>{quantity}</span>
                  <motion.div whileTap={{scale:.5}}>
                    <FontAwesomeIcon icon={faPlus} className={Styles.product_Icon} onClick={() => setQuantity(prev => prev + 1)} />
                  </motion.div>
                </div>
              </div>
            </>
          
        }
        
        
        <div className={Styles.product_btn}>
        
          {inCart?
            //*if(inCart)...
              <SecondaryBtn callback={removeFromCart}>
                Eliminar del carrito
              </SecondaryBtn>

            ://*else...
            <PrimaryBtn callback={addToCart}>
              Añadir al carrito
            </PrimaryBtn>
          }
        </div>
        
      </div>
              
    </div>
  )
}
