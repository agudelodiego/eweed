import ProductCard from "./ProductCard"
import Style from "../styles/Product.module.css"
import SearchProduct from "./SearchProduct"
import { Product } from "@chec/commerce.js/types/product"
import { useProducts } from "@/hooks/useProducts"
import { useState } from "react"


const Products = () =>{

  const {products,loading,getProducts,searchProducts} = useProducts()
  const [query, setQuery] = useState("")

  const search = (query:string) => {
    setQuery(query)
    searchProducts(query)
  }

  const retrive = ()=>{
    getProducts()
  }

  return(
    <>
      <SearchProduct search={search} retrive={retrive} />
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
              products?.map((product:Product)=>{
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
      {(!products)&&(!loading)?
      (<h2 className="text-center">Producto <span className="text-success">{query}</span> no encontrado</h2>):
      ("")
    }
    </>
    
  )
}
export default Products