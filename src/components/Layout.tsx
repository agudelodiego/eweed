import { ReactNode, useContext } from "react"
import Navdesktop from "./navbar/Navdesktop"
import Styles from "../styles/Layout.module.css"
import Navmobile from "./navbar/Navmobile"

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