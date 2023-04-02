import { commerce } from "@/lib/commerce"
import { ProductCollection } from "@chec/commerce.js/features/products"
import { useEffect, useState } from "react"

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


export const useProducts = () =>{

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

  return{
    productsState,
    loading,
    error,
    getProducts
  }
}
