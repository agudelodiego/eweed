import React, { useEffect, useState } from "react"
import { PurchaseItem } from "./PurchaseItem"
import { useContext } from "react"
import { CartContext } from "@/context/cart/CartProvider"
import Styles from "../../styles/Purchase.module.css"
import { LineItem } from "@chec/commerce.js/types/line-item"

export const PurchaseSummary = () => {

  const {remoteCart} = useContext(CartContext)


  return (
    <>
      
      <div className="w-100 d-flex justify-content-evenly">
        <span>Imagen</span>
        <span>Producto</span>
        <span>Cantidad</span>
      </div>
      
      {
        remoteCart?.line_items.map((item)=>{
          return <PurchaseItem key={item.id} image={item.image?.url??""} quantity={item.quantity} name={item.name} />
        })
      }

      <div className={Styles.purchase_summaryPriceLable}>
        Total a pagar: <span className={Styles.purchase_summaryPrice}>{remoteCart?.subtotal.formatted_with_code}</span>
      </div>
    
    </>
  )
}
