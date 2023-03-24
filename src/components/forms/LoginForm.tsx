import Styles from "../../styles/Form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faUser, faCannabis } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { Form } from "./Form"
import { InputContainer } from "./InputContainer"
import { PrimaryBtn } from "./PrimaryBtn"
import { GoogleBtn } from "./GoogleBtn"


const LoginForm = ()=>{

  const validateData = ()=>{
    console.log("Ejecucion del login")
  }

  const loginWithGoogle = () =>{
    console.log("Login con google")
  }

  return(
    <main className={Styles.form_container}>
      <Form>

        <InputContainer delay={.6}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faCannabis} className={Styles.form_brandIcon} />
            <span className={Styles.form_brandText}>Ingresar</span>
          </div> 
        </InputContainer>

        <InputContainer delay={.8}>
          <label htmlFor="userEmail" className={Styles.form_label}>
            Correo eletronico
          </label>
          <input type="email" id="userEmail" className={Styles.form_input} placeholder="ejemplo@gmail.com" />
        </InputContainer>

        <InputContainer delay={1}>
          <label htmlFor="userPassword" className={Styles.form_label}>
            Contraseña
          </label>
          <input type="password" id="userPassword" className={Styles.form_input} placeholder="**************" />
        </InputContainer>

        <InputContainer delay={1.2}>
          <PrimaryBtn callback={validateData}>
            <span className={Styles.form_submitText}>
              Ingresar
            </span>
            <FontAwesomeIcon icon={faUser} className={Styles.form_userIcon}/>
          </PrimaryBtn>
        </InputContainer>

        <InputContainer delay={1.4}>
          <GoogleBtn callback={loginWithGoogle}>
            <FontAwesomeIcon icon={faGoogle} className={Styles.form_googleIcon}/>
            <span className={Styles.form_googleText}>
              Ingresar con google
            </span>
          </GoogleBtn>
        </InputContainer>

        <InputContainer delay={1.6}>
          <span>
            Aun no tiene una cuenta ? <Link href="/signup">Resgistrate</Link>
          </span>
        </InputContainer>

      </Form>
    </main>
  )
}
export default LoginForm