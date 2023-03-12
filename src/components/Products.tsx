import ProductCard from "./ProductCard"
import Style from "../styles/Product.module.css"


export interface Product {
  id:number,
  name:string,
  price:number,
  soldOut:boolean,
  image:string
}
const mockData: Product[] = [
  {
    id:1,
    name:"Cripa 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/7773110/pexels-photo-7773110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:2,
    name:"Punto rojo 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/8139074/pexels-photo-8139074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:3,
    name:"Blue satelite 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/7667726/pexels-photo-7667726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:4,
    name:"Cripa 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/7773110/pexels-photo-7773110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:5,
    name:"Punto rojo 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/8139074/pexels-photo-8139074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:6,
    name:"Blue satelite 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/7667726/pexels-photo-7667726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:7,
    name:"Cripa 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/7773110/pexels-photo-7773110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:8,
    name:"Punto rojo 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/8139074/pexels-photo-8139074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:9,
    name:"Blue satelite 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/7667726/pexels-photo-7667726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:10,
    name:"Cripa 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/7773110/pexels-photo-7773110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:11,
    name:"Punto rojo 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/8139074/pexels-photo-8139074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:12,
    name:"Blue satelite 10g",
    price:20000,
    soldOut:false,
    image:"https://images.pexels.com/photos/7667726/pexels-photo-7667726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  
]


const Products = () =>{
  return(
    <main className={Style.gallery}>

      

        {
          mockData.map((product:Product)=>{
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
export default Products