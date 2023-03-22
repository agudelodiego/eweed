import Styles from "../../styles/Form.module.css"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faUserPlus, faCannabis } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"


import {formAnimation} from "../../utils/Animations"


const SignupForm = ()=>{
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
          <span className={Styles.form_brandText}>Registrar</span>
        </motion.div>


        <motion.div
          initial={formAnimation.initial}
          animate={formAnimation.final}
          transition={{delay:.8}}
          className={Styles.form_inputContainer}>
          <label htmlFor="userName" className={Styles.form_label}>
            Nombre de usuario
          </label>
          <input type="text" id="userName" className={Styles.form_input} placeholder="ejemploXD" />  
        </motion.div>


        <motion.div 
          initial={formAnimation.initial}
          animate={formAnimation.final}
          transition={{delay:1}}
          className={Styles.form_inputContainer}>
          <label htmlFor="userEmail" className={Styles.form_label}>
            Correo eletronico
          </label>
          <input type="email" id="userEmail" className={Styles.form_input} placeholder="ejemplo@gmail.com" />  
        </motion.div>


        <motion.div 
          initial={formAnimation.initial}
          animate={formAnimation.final}
          transition={{delay:1.2}}
          className={Styles.form_inputContainer}>
          <label htmlFor="userPassword" className={Styles.form_label}>
            Contraseña
          </label>
          <input type="password" id="userPassword" className={Styles.form_input} placeholder="**************" />  
        </motion.div>

        <motion.div 
          initial={formAnimation.initial}
          animate={formAnimation.final}
          transition={{delay:1.4}}
          className={Styles.form_inputContainer}>
          <label htmlFor="userConfirmation" className={Styles.form_label}>
            Confirme su contrasña
          </label>
          <input type="password" id="userConfirmation" className={Styles.form_input} placeholder="**************" />  
        </motion.div>

        <div className={Styles.form_inputContainer}>

          <motion.button
            initial={formAnimation.initial}
            animate={formAnimation.final}
            transition={{delay:1.6}}
            whileTap={{scale:0.7}}
            className={Styles.form_btnSubmit}
          >
            <span className={Styles.form_submitText}>
              Registrarse
            </span>
            <FontAwesomeIcon icon={faUserPlus} className={Styles.form_userIcon}/>
        
          </motion.button>

          <motion.button
            initial={formAnimation.initial}
            animate={formAnimation.final}
            transition={{delay:1.8}}
            whileTap={{scale:0.7}}
            className={Styles.form_btnGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} className={Styles.form_googleIcon}/>
            <span className={Styles.form_googleText}>
              Registrar con google
            </span>
          </motion.button>

        </div>

        <motion.div 
          initial={formAnimation.initial}
          animate={formAnimation.final}
          transition={{delay:2}}
          className={Styles.form_inputContainer}>
          <span className="text-center">Ya tienes una cuenta ? <Link href="/login">Ingresar</Link> </span>
        </motion.div>

      </motion.form>
    </main>
  )
}
export default SignupForm