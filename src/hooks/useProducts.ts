import { Product } from "@chec/commerce.js/types/product";
import { useState, useEffect } from "react"; 
import { commerce } from "@/lib/commerce";


export const useProducts = ()=>{
  let [products,setProducts] = useState<Product[]>([])
  let [loading,setLoading] = useState(true)
  let [error, setError] = useState(false)

  useEffect(()=>{
    getProducts()
  },[])

  const getProducts = ()=>{
    setLoading(true)
    setError(false)

    commerce.products.list()
      .then(({data}) => {setProducts(data)})
      .catch((e) => setError(e))
      .finally(() => setLoading(false))
  } 

  const searchProducts = (query:string)=>{
    setLoading(true)
    setError(false)
    commerce.products.list({query})
      .then(({data}) => setProducts(data))
      .catch((e) => setError(error))
      .finally(() => setLoading(false))
  }

  return{products, loading, error, getProducts, searchProducts}
}