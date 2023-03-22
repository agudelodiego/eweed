import Styles from "../../styles/Form.module.css"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faUser, faCannabis } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"


import {formAnimation} from "../../utils/Animations"


const LoginForm = ()=>{
  return(
    <main className={Styles.form_container}>
      <motion.form
        initial={{x:1000,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:.3,delay:.2}}
        className={Styles.form}>

        <motion.div 
          initial={formAnimation.initial}
          animate={formAnimation.final}
          transition={{delay:.6}}
    
          className={Styles.form_brandContainer}>
          <FontAwesomeIcon icon={faCannabis} className={Styles.form_brandIcon} />
          <span className={Styles.form_brandText}>Ingresar</span>
        </motion.div>


        <motion.div 
          initial={formAnimation.initial}
          animate={formAnimation.final}
          transition={{delay:.8}}
          className={Styles.form_inputContainer}>
          <label htmlFor="userEmail" className={Styles.form_label}>
            Correo eletronico
          </label>
          <input type="email" id="userEmail" className={Styles.form_input} placeholder="ejemplo@gmail.com" />  
        </motion.div>


        <motion.div 
          initial={formAnimation.initial}
          animate={formAnimation.final}
          transition={{delay:1}}
          className={Styles.form_inputContainer}>
          <label htmlFor="userPassword" className={Styles.form_label}>
            Contraseña
          </label>
          <input type="password" id="userPassword" className={Styles.form_input} placeholder="**************" />  
        </motion.div>

        <div className={Styles.form_inputContainer}>

          <motion.button
            initial={formAnimation.initial}
            animate={formAnimation.final}
            transition={{delay:1.2}}
            whileTap={{scale:0.7}}
            className={Styles.form_btnSubmit}
          >
            <span className={Styles.form_submitText}>
              Ingresar
            </span>
            <FontAwesomeIcon icon={faUser} className={Styles.form_userIcon}/>
        
          </motion.button>

          <motion.button
            initial={formAnimation.initial}
            animate={formAnimation.final}
            transition={{delay:1.4}}
            whileTap={{scale:0.7}}
            className={Styles.form_btnGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} className={Styles.form_googleIcon}/>
            <span className={Styles.form_googleText}>
              Ingresar con google
            </span>
          </motion.button>

        </div>

        <motion.div
        initial={formAnimation.initial}
        animate={formAnimation.final}
        transition={{delay:1.6}}
          className={Styles.form_inputContainer}
          > 
          <span>
            Aun no tiene una cuenta ? <Link href="/signup">Resgistrate</Link>
          </span>
        </motion.div>

      </motion.form>
    </main>
  )
}
export default LoginForm