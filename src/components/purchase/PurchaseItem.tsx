import React from "react"
import Image from "next/image"
import Styles from "../../styles/Purchase.module.css"


interface Props {
  image: string,
  name: string,
  quantity: number
}

export const PurchaseItem = ({image,name,quantity}:Props) => {
  return (
    <div className={Styles.purchase_itemContainer}>

      <Image width={100} loading="lazy" height={100} src={image} alt="Product image" className={Styles.purchase_itemImage}/>

      <span className={Styles.purchase_itemName}>
        {name}
      </span>

      <span className={Styles.purchase_itemQuantity}>
        {quantity}
      </span>

    </div>
  )
}
