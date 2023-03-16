import { ReactNode, useContext } from "react"
import Navdesktop from "./Navdesktop"
import Styles from "../styles/Layout.module.css"
import Navmobile from "./Navmobile"
import { CartContext } from "@/context/cart/CartContext"

interface Props {
  children: ReactNode
}


const Layout = ({children}:Props) =>{

  const {cartstate} = useContext(CartContext)

  return(
    <>
      <div className={Styles.desk}>
        <Navdesktop products={cartstate.products.length} />
      </div>
      
      <div className={Styles.mobile}>
        <Navmobile products={cartstate.products.length} />
      </div>
      
      <div className={Styles.content}>
        {children}
      </div>  
    </>
    
  )
}
export default Layout