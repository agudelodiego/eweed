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


const ProductDetails = ()=>{

  const router = useRouter()
  //const {cartState} = useContext(CartContext)
  //const {productsState} = useContext(ProductsContext)
  const [product,setProduct] = useState<Product | null | undefined>(null)
  
  useEffect(()=>{
    let id = router.query.puid as unknown as string
    commerce.products.retrieve(id)
      .then((item)=>setProduct(item))
  },[router])

  return(
    <Layout>

      <Head>
        <title>{product?.name}</title>
      </Head>

      <div className={Styles.product_container}>

        <div className={Styles.product_imgContainer}>
          <Slider images={product?.assets}/>
        </div>

        <div className={Styles.product_detailsContainer}>
          otro xd
        </div>

      </div>

    </Layout>
  )
}


export default ProductDetails