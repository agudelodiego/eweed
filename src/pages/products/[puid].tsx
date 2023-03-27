import { CartContext } from "@/context/cart/CartProvider"
import { ProductsContext } from "@/context/products/ProductsProvider"
import { commerce } from "@/lib/commerce"
import { Product } from "@chec/commerce.js/types/product"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useContext } from "react"
import Styles from "../../styles/ProductDetail.module.css"
import Layout from "@/components/Layout"
import Head from "next/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { Slider } from "@/components/Slider"
import { text } from "stream/consumers"
import striptags from "striptags"
import { PrimaryBtn } from "@/components/forms/PrimaryBtn"
import { SecondaryBtn } from "@/components/forms/SecondaryBtn"
import { motion } from "framer-motion"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"


const ProductDetails = ()=>{

  const router = useRouter()
  const {cartState,cartDispatch} = useContext(CartContext)
  //const {productsState} = useContext(ProductsContext)
  const [product,setProduct] = useState<Product | null | undefined>(null)
  const [inCart, setInCart] = useState(false)
  
  useEffect(()=>{
    let id = router.query.puid as unknown as string
    commerce.products.retrieve(id)
      .then((item)=>{
        setProduct(item)
      })
  },[router])

  useEffect(()=>{
    let isInsideCart = cartState.find((item)=>{
      return item.product.id == product?.id
    })
    if(isInsideCart){
      setInCart(true)
    }
  },[cartState,product])

  useEffect(()=>{
    let isInsideCart = cartState.find((item)=>{
      return item.product.id == product?.id
    })
    if(inCart && !isInsideCart && product){
      cartDispatch({
        type:"ADD",
        payload:{
          product,
          quantity:1
        }
      })
    }
    else if(!inCart && isInsideCart && product){
      cartDispatch({
        type:"REMOVE",
        payload:{
          product,
          quantity:1
        }
      })
    }
  },[inCart])

  const toggle = ()=>{
    setInCart(prev => !prev)
  }

  return(
    <Layout>

      <Head>
        <title>{product?.name}</title>
      </Head>

      {product?
        (
          <div className={Styles.product_container}>

            <div className={Styles.product_imgContainer}>
              <Slider images={product?.assets}/>
            </div>
          
            <div className={Styles.product_detailsContainer}>
          
              {inCart?
              (<motion.div initial={{x:-300}} animate={{x:0}} className={Styles.product_inCartContainer}>
                En el carrito 
                <FontAwesomeIcon icon={faShoppingCart} className={Styles.product_cartIcon}/>
              </motion.div>)
              :
              ("")}

              
              <h2 className="">{product?.name}</h2>
              <span className={Styles.product_price}>{product?.price.formatted_with_code}</span>
              <p  className={Styles.product_descripton}>{striptags(product?.description??"")}</p>
              
              <div className={Styles.product_btn}>
              
                {
                  (inCart)?
                  (<SecondaryBtn callback={toggle}>
                    Eliminar del carrito
                  </SecondaryBtn>)
                  :
                  (<PrimaryBtn callback={toggle}>
                    Añadir al carrito
                  </PrimaryBtn>)
                }

              </div>
              
            </div>
              
          </div>
        )
        :
        (
          <div className="w-100 mt-5 pt-5 text-center">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )
      }

    </Layout>
  )
}


export default ProductDetails