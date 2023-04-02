import Styles from "../../styles/SearchProduct.module.css"
import { faSearchengin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"



interface Props {
 getProducts: (query?: string | undefined) => Promise<void>
}

const SearchProduct = ({getProducts}:Props) => {

  const [inputValue, setInputValue] = useState("")

  useEffect(()=>{
    if(inputValue == ""){
      getProducts()
    }
  },[inputValue])

  return(
    <div className="container d-flex justify-content-center">

      <div className={`form-floating ${Styles.input}`}>
        <input type="text" className="form-control" id="floatingInput" placeholder="Busca un producto" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />
        <label htmlFor="floatingInput">Busca un producto</label>
      </div>

      <motion.button
        whileTap={{scale:0.6}}
        className={Styles.btnSearch}
        onClick={()=>{getProducts(inputValue)}}
      >
        <FontAwesomeIcon icon={faSearchengin} className={Styles.icon}/>
      </motion.button>

    </div>
  )
}
export default SearchProduct