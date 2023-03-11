import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Styles from "../styles/Building.module.css"
import { motion } from "framer-motion"


interface Props {
  name:string
} 


const Building = ({name}:Props)=>{
  return(
    <div className={Styles.contenainerBuilding}>

      <h1 className="text-center">
        Pagina {name} en construccion 
      </h1>

      <div className="d-flex justify-content-center align-items-center">

        <div className="mb-5">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FontAwesomeIcon icon={faGear} className={Styles.gear} />
          </motion.div>
        </div>
        
        <div className="mt-5">
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FontAwesomeIcon icon={faGear} className={Styles.gear} />
          </motion.div>
        </div>


      </div>

    </div>
  )
}
export default Building