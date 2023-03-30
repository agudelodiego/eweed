import { CartContext } from "@/context/cart/CartProvider"
import { commerce } from "@/lib/commerce"
import { Product } from "@chec/commerce.js/types/product"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useContext } from "react"
import Styles from "../../styles/ProductDetail.module.css"
import Layout from "@/components/Layout"
import Head from "next/head"
import { ProductPage } from "@/components/products/ProductPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Slider } from "@/components/Slider"
import striptags from "striptags"
import { PrimaryBtn } from "@/components/forms/PrimaryBtn"
import { SecondaryBtn } from "@/components/forms/SecondaryBtn"
import { motion } from "framer-motion"
import { faShoppingCart, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"


const ProductDetails = ()=>{

  const router = useRouter()
  const {cartState,cartDispatch} = useContext(CartContext)
  const [product,setProduct] = useState<Product | null | undefined>(null)
  const [quantity,setQuantity] = useState(1)
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
      setQuantity(isInsideCart.quantity)
    }
  },[cartState,product])

  const addToCart = ()=>{
    if(product){
      cartDispatch({
        type:"ADD",
        payload:{
          product,
          quantity
        }
      })
      setInCart(true)
    }
  }

  const removeFromCart = ()=>{
    if(product){
      cartDispatch({
        type:"REMOVE",
        payload:{
          product,
          quantity
        }
      })
      setInCart(false)
    }
  }
  return(
    <Layout>

      <Head>
        <title>{product?.name}</title>
      </Head>

      {product?
        //* if(product)...
          <ProductPage 
            addToCart={addToCart} 
            removeFromCart={removeFromCart} 
            inCart={inCart} 
            quantity={quantity} 
            product={product} 
            setQuantity={setQuantity} 
          />

        ://*else...
          <div className="w-100 mt-5 pt-5 text-center">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
      }

    </Layout>
  )
}


export default ProductDetails