import { commerce } from "@/lib/commerce";
import {productsContextType} from "./types"
import { createContext, ReactNode, useEffect, useState } from "react";
import { ProductCollection } from "@chec/commerce.js/features/products";

const intitialState:ProductCollection = {
  data: [],
  meta: {
    pagination: {
    count: 0,
    current_page: 1,
    links: "",
    per_page: 0,
    total: 0,
    total_pages: 1
  }
  }
}


interface Props {
  children: ReactNode
}

//* ---> PRODUCTSCONTEXT <---
export const ProductsContext = createContext<productsContextType>({
  productsState: intitialState,
  loading: true,
  error: false,
  getProducts: ()=>null
})

export const ProductsProvider = ({children}:Props) =>{

  const [productsState,setProductsState] = useState(intitialState)
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState<any>(false)

  useEffect(() => console.log(error) ,[error])

  useEffect(()=> {getProducts()} ,[])

  const getProducts = async(query?:string)=>{

    setLoading(true)
    setError(false)

    if(query){
      commerce.products.list({query})
        .then((res) => setProductsState(res))
        .catch((e) => {
          setError({
            where: "getProducts: inside the if statement true",
            description:e
          }) 
        })
        .finally(() => setLoading(false))
    }
    else{
      commerce.products.list()
        .then((res) => setProductsState(res))
        .catch((e) => {
          setError({
            where: "getProducts: inside the if statement false",
            description:e
          }) 
        })
        .finally(() => setLoading(false))
    }
  }

  return(
    <ProductsContext.Provider value={{
      productsState,
      loading,
      error,
      getProducts
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

