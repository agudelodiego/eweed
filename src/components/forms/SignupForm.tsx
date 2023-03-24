import Styles from "../../styles/Form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faUserPlus, faCannabis } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { Form } from "./Form"
import { InputContainer } from "./InputContainer"
import { PrimaryBtn } from "./PrimaryBtn"
import { GoogleBtn } from "./GoogleBtn"

const SignupForm = ()=>{

  const validateData = ()=>{
    console.log("Ejecucion de signup validate data")
  }

  const signupWithGoogle = ()=>{
    console.log("Signup with goggle")
  }

  return(
    <main className={Styles.form_container}>
      <Form>

        <InputContainer delay={.6}>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faCannabis} className={Styles.form_brandIcon} />
            <span className={Styles.form_brandText}>Registrar</span>
          </div>
        </InputContainer>

        <InputContainer delay={.8}>
          <label htmlFor="userName" className={Styles.form_label}>
            Nombre de usuario
          </label>
          <input type="text" id="userName" className={Styles.form_input} placeholder="ejemploXD" />
        </InputContainer>

        <InputContainer delay={1}>
          <label htmlFor="userEmail" className={Styles.form_label}>
            Correo eletronico
          </label>
          <input type="email" id="userEmail" className={Styles.form_input} placeholder="ejemplo@gmail.com" />
        </InputContainer>

        <InputContainer delay={1.2}>
          <label htmlFor="userPassword" className={Styles.form_label}>
            Contraseña
          </label>
          <input type="password" id="userPassword" className={Styles.form_input} placeholder="**************" />
        </InputContainer>

        <InputContainer delay={1.4}>
          <label htmlFor="userConfirmation" className={Styles.form_label}>
            Confirme su contrasña
          </label>
          <input type="password" id="userConfirmation" className={Styles.form_input} placeholder="**************" />
        </InputContainer>

        <InputContainer delay={1.6}>
          <PrimaryBtn callback={validateData}>
            <span className={Styles.form_submitText}>
              Registrarse
            </span>
            <FontAwesomeIcon icon={faUserPlus} className={Styles.form_userIcon}/>
          </PrimaryBtn>
        </InputContainer>

        <InputContainer delay={1.8}>
          <GoogleBtn callback={signupWithGoogle}>
            <FontAwesomeIcon icon={faGoogle} className={Styles.form_googleIcon}/>
            <span className={Styles.form_googleText}>
              Registrar con google
            </span>
          </GoogleBtn>
        </InputContainer>

        <InputContainer delay={2}>
          <span className="text-center">Ya tienes una cuenta ? <Link href="/login">Ingresar</Link> </span>
        </InputContainer>

      </Form>
    </main>
  )
}
export default SignupForm