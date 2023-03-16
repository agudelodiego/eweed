import Styles from "../styles/SearchProduct.module.css"
import { faSearchengin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

const SearchProduct = ()=>{
  return(
    <div className="container d-flex justify-content-center">

      <div className={`form-floating ${Styles.input}`}>
        <input type="text" className="form-control" id="floatingInput" placeholder="Busca un producto" />
        <label htmlFor="floatingInput">Busca un producto</label>
      </div>

      <motion.button
        whileTap={{scale:0.6}}
        className={Styles.btnSearch}
      >
        <FontAwesomeIcon icon={faSearchengin} className={Styles.icon}/>
      </motion.button>

    </div>
  )
}
export default SearchProduct