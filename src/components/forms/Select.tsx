import { useState } from "react"
import { motion } from "framer-motion"
import Styles from "../../styles/Select.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

interface Props {
  label:string,
  options:string[],
  defaultValue:string
}

const Select = ({label,options,defaultValue}:Props) => {

  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)

  const handleSelect = (newValue: string) => {
    setValue(newValue)
    setIsOpen(false)
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
          {label}
          <FontAwesomeIcon icon={faChevronDown} className={Styles.select_icon} />
        </span>
        <span className={Styles.select_selected}>
          {value}
        </span>
      </motion.button>

      <motion.div className={Styles.select_content}
        animate={
          isOpen?
          {width:"100%",height:"10rem",y:0,opacity:1,borderRadius:"12px"}
          :{width:"0rem",height:"0rem",y:-40,opacity:0, borderRadius:"1000px"}
        }
        transition={{duration:.4}}

      >

        {
          options.map((option)=>{
              return (
                <span key={option} className={Styles.select_option} onClick={()=>{handleSelect(option)}}>
                  {option}
                </span>
              )
            }
          )
        }
      </motion.div>

    </div>
  )
}

export default Select;
