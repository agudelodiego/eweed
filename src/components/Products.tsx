import ProductCard from "./ProductCard"
import Style from "../styles/Product.module.css"
import SearchProduct from "./SearchProduct"
import { useState, useEffect } from "react"
import { Product } from "@chec/commerce.js/types/product"
import { useProducts } from "@/hooks/useProducts"


const Products = () =>{

  let {products,loading,error} = useProducts()
  useEffect(()=>{
    console.log(error)
  },[error])


  return(
    <>
      <SearchProduct />
      {loading?
        (
          <div className="w-100 text-center mt-5">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ):
        (
          <main className={Style.gallery}>
            {
              products.map((product:Product)=>{
                return(
                  <div className="p-3" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                )
              })
            }
          </main>
        )
      }
    </>
    
  )
}
export default Products