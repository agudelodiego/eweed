import React from "react"
import Image from "next/image"
import Styles from "../../styles/Purchase.module.css"



export const PurchaseItem = () => {
  return (
    <div className={Styles.purchase_itemContainer}>

      <Image width={100} height={100} src="https://images.pexels.com/photos/7773109/pexels-photo-7773109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product image" className={Styles.purchase_itemImage}/>

      <span className={Styles.purchase_itemName}>
        Producto de prueba
      </span>

      <span className={Styles.purchase_itemQuantity}>
        5
      </span>

    </div>
  )
}
