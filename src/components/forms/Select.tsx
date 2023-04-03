import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Styles from "../../styles/Select.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { LocaleListCountriesResponse } from "@chec/commerce.js/features/services"

interface Props {
  label:string,
  options:[string,string][],
  selected:[string,string],
  callback: React.Dispatch<React.SetStateAction<[string, string]>>
}

const Select = ({label,options,selected,callback}:Props) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (newValue: [string,string]) => {
    setIsOpen(false)
    callback(newValue)
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
          {selected[1]}
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

        {options.length > 0?
          //* if(options)
            options.map((option)=>{
                return (
                  <span key={option[0]} className={Styles.select_option} onClick={()=>{handleSelect(option)}}>
                    {option[1]}
                  </span>
                )
              }
            )
          ://*else
          <div className="w-100 text-center pt-4">
            <div className="spinner-border text-white" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>

        }
      </motion.div>

    </div>
  )
}

export default Select;
