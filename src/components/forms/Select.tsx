import { useState } from "react"
import { motion } from "framer-motion"
import Styles from "../../styles/Select.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

interface Props {
  label:string
}

const Select = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("Colombia")


  const handleSelect = (newValue: string) => {
    setValue(newValue)
    setIsOpen(false)
    console.log("Ejecucion de handleSelect")
    console.log(newValue)
  }


  return (
    <div className={Styles.select_container}>
      
      <motion.button 
        className={Styles.select_button} 
        onClick={(e)=>{
          e.preventDefault()
          setIsOpen(!isOpen)
        }}
        whileTap={{scale:.6}}>
        <span className={Styles.select_label}>
          Selecciona un pais
          <FontAwesomeIcon icon={faChevronDown} className={Styles.select_icon} />
        </span>
        <span className={Styles.select_selected}>
          Colombia
        </span>
      </motion.button>

      <motion.div className={Styles.select_content}
        animate={
          isOpen?
          {scale:1,y:5,opacity:1,borderRadius:"12px",position:"relative"}
          :{scale:0,y:-80,opacity:0, borderRadius:"1000px",position:"absolute"}
        }
        transition={{duration:.4}}

      >

        <span className={Styles.select_option}>Colombiar</span>
        <span className={Styles.select_option}>Chile</span>
        <span className={Styles.select_option}>Panama</span>

      </motion.div>

    </div>
  )
}

export default Select;
