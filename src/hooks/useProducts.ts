import { Product } from "@chec/commerce.js/types/product";
import { useState, useEffect } from "react"; 
import { commerce } from "@/lib/commerce";

const fetchProducts = async ()=>{
  let { data } = await commerce.products.list()
  return data
}

export const useProducts = ()=>{
  let [products,setProducts] = useState<Product[]>([])
  let [loading,setLoading] = useState(true)
  let [error, setError] = useState(false)

  useEffect(()=>{

    setLoading(true)
    setError(false)

    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))

  },[])

  return{products, loading, error}
}