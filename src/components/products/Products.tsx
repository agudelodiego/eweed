import ProductCard from "./ProductCard"
import Style from "../../styles/Product.module.css"
import SearchProduct from "./SearchProduct"
import { Product } from "@chec/commerce.js/types/product"
import { useProducts } from "@/hooks/useProducts"


const Products = () =>{

  const {productsState,loading,getProducts} = useProducts()
  
  return(
    <>
      <SearchProduct getProducts={getProducts} />
      
      {
        loading?
          //*IF
          <div className="w-100 text-center mt-5">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>

        : //*ELSE
          <main className={Style.gallery}>
            {
              productsState.data?.map((product:Product)=>{
                return(
                  <div className="p-3" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                )
              })
            }
          </main> 
      }

      {
        (!productsState.data)&&(!loading)?
         //* IF
          <h2 className="text-center mt-5 pt-5">
            No se encontraron productos
          </h2>

        ://*ELSE
          ""
      }
    </>
    
  )
}
export default Products