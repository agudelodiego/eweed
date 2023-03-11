import { ReactNode } from "react"
import Navdesktop from "./Navdesktop"
import Styles from "../styles/Layout.module.css"
import Navmobile from "./Navmobile"

interface Props {
  children: ReactNode
}


const Layout = ({children}:Props) =>{

  return(
    <>
      <div className={Styles.desk}>
        <Navdesktop />
      </div>
      
      <div className={Styles.mobile}>
        <Navmobile />
      </div>
      
      <div className={Styles.content}>
        {children}
      </div>  
    </>
    
  )
}
export default Layout