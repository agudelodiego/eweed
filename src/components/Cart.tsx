import CartItem from "./CartItem"


export interface Item {
  id:string,
  name:string,
  price:string,
  quantity:number,
  image:string
}

const monckItems = [
  {
    id:"asdja",
    name:"producto prueba",
    price:"10.000 $",
    quantity:4,
    image:"https://images.pexels.com/photos/7773103/pexels-photo-7773103.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id:"alhkd",
    name:"producto prueba",
    price:"10.000 $",
    quantity:4,
    image:"https://images.pexels.com/photos/7773103/pexels-photo-7773103.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id:"18hkso",
    name:"producto prueba",
    price:"10.000 $",
    quantity:4,
    image:"https://images.pexels.com/photos/7773103/pexels-photo-7773103.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id:"0kak1jb",
    name:"producto prueba",
    price:"10.000 $",
    quantity:4,
    image:"https://images.pexels.com/photos/7773103/pexels-photo-7773103.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id:",annd2i",
    name:"producto prueba",
    price:"10.000 $",
    quantity:4,
    image:"https://images.pexels.com/photos/7773103/pexels-photo-7773103.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id:".alkeuqidnu",
    name:"producto prueba",
    price:"10.000 $",
    quantity:4,
    image:"https://images.pexels.com/photos/7773103/pexels-photo-7773103.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id:"bcnakbqugiuq9293",
    name:"producto prueba",
    price:"10.000 $",
    quantity:4,
    image:"https://images.pexels.com/photos/7773103/pexels-photo-7773103.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id:"96163hbo1gk1bc uc8b2",
    name:"producto prueba",
    price:"10.000 $",
    quantity:4,
    image:"https://images.pexels.com/photos/7773103/pexels-photo-7773103.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
]

const Cart = ()=>{
  return(
    <>
      <h1 className="mt-5 text-center text-success">
        Carrito de compras
      </h1>
      <div className="container d-flex flex-column align-items-center mb-5">
        {
          monckItems.map((item:Item)=>{
            return (<CartItem key={item.id} item={item} />)
          })
        }
      </div>
    </>
  )
}
export default Cart