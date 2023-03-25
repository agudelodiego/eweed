import React from "react"
import { PurchaseItem } from "./PurchaseItem"
import { useContext } from "react"
import { CartContext } from "@/context/cart/CartProvider"
import Styles from "../../styles/Purchase.module.css"

export const PurchaseSummary = () => {

  return (
    <div className="w-100">
      <div className="w-100 d-flex justify-content-evenly">
        <span>Imagen</span>
        <span>Producto</span>
        <span>Cantidad</span>
      </div>
      <PurchaseItem />
      <PurchaseItem />
      <PurchaseItem />
      <PurchaseItem />
      <PurchaseItem />

      <div className={Styles.purchase_summaryPriceLable}>
        Total a pagar: <span className={Styles.purchase_summaryPrice}>105000.00 $COP</span>
      </div>

    </div>
  )
}
