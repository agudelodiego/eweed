import { ProductCollection } from "@chec/commerce.js/features/products";
import { Product } from "@chec/commerce.js/types/product";


export interface ProductsError {
  where:string,
  description:string
}


export interface productsContextType {
  productsState: ProductCollection,
  loading: Boolean,
  error: any,
  getProducts: Function
}