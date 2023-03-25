import { CartContext } from "@/context/cart/CartProvider"
import { ProductsContext } from "@/context/products/ProductsProvider"
import { Product } from "@chec/commerce.js/types/product"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useContext } from "react"


const ProductDetails = ()=>{

  const router = useRouter()
  //const {cartState} = useContext(CartContext)
  const {productsState} = useContext(ProductsContext)
  const [product,setProduct] = useState<Product | null | undefined>(null)
  
  useEffect(()=>{
    let id = router.query.puid
    let productFound = productsState.data.find((product)=>{
      return product.id == id
    })
    setProduct(productFound)
    console.log(productFound)
  },[router])

  return(
    <h4>Hello</h4>
  )
}


export default ProductDetails