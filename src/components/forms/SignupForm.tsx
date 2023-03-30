import Styles from "../../styles/Form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faUserPlus, faCannabis } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { Form } from "./Form"
import { InputContainer } from "./InputContainer"
import { PrimaryBtn } from "./PrimaryBtn"
import { GoogleBtn } from "./GoogleBtn"
import { useContext, useState } from "react"
import {auth} from "../../lib/firebase"
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { UserContext } from "@/context/user/UserProvider"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { errorValidator } from "@/utils/firebase"

const SignupForm = ()=>{

  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmation,setConfirmation] = useState("")
  const [error,setError] = useState("")
  const {setUser} = useContext(UserContext)
  const router = useRouter()

  const validateData = async()=>{

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(!email || !password || !confirmation){
      setError("Tienes que llenar todos los campos para registrarte en al aplicacion")
    }
    else if(!emailRegex.test(email)){
      setError("Debes introducir un correo electronico valido")
    }
    else if(password != confirmation){
      setError("La contraseña y la confirmacion no coinciden")
    }
    else if(password.length < 7){
      setError("La contraseña debe contener al menos 7 caracteres")
    }
    else{
      setError("")
      try{
        let userCredential = await createUserWithEmailAndPassword(auth,email,password)
        setUser(userCredential.user)
        await sendEmailVerification(userCredential.user)
        router.push("/")
      } 
      catch(error: any){
        let message = errorValidator(error.code)
        setUser(null)
        setError(message)
      }
    }
  }

  const signupWithGoogle = async() => {
    setError("")
    let provider = new GoogleAuthProvider()
    try{
      let userCredentials = await signInWithPopup(auth,provider)
      setUser(userCredentials.user)
      router.push("/")
    }
    catch(error:any){
      let message = errorValidator(error.code)
      setUser(null)
      setError(message)
    }
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
          <label htmlFor="userEmail" className={Styles.form_label}>
            Correo eletronico
          </label>
          <input type="email" id="userEmail" className={Styles.form_input} placeholder="ejemplo@gmail.com" onChange={(e)=>{setEmail(e.target.value)}} required />
        </InputContainer>

        <InputContainer delay={1}>
          <label htmlFor="userPassword" className={Styles.form_label}>
            Contraseña
          </label>
          <input type="password" id="userPassword" className={Styles.form_input} placeholder="**************" onChange={(e)=>{setPassword(e.target.value)}} required />
        </InputContainer>

        <InputContainer delay={1.2}>
          <label htmlFor="userConfirmation" className={Styles.form_label}>
            Confirme su contrasña
          </label>
          <input type="password" id="userConfirmation" className={Styles.form_input} placeholder="**************" onChange={(e)=>{setConfirmation(e.target.value)}} required />
        </InputContainer>

        <div className="text-danger text-center fs-5">
          {error}
        </div>

        <InputContainer delay={1.4}>
          <PrimaryBtn callback={validateData}>
            <span className={Styles.form_submitText}>
              Registrarse
            </span>
            <FontAwesomeIcon icon={faUserPlus} className={Styles.form_userIcon} />
          </PrimaryBtn>
        </InputContainer>

        <InputContainer delay={1.6}>
          <GoogleBtn callback={signupWithGoogle}>
            <FontAwesomeIcon icon={faGoogle} className={Styles.form_googleIcon}/>
            <span className={Styles.form_googleText}>
              Registrar con google
            </span>
          </GoogleBtn>
        </InputContainer>

        <InputContainer delay={1.8}>
          <span className="text-center">Ya tienes una cuenta ? <Link href="/login">Ingresar</Link> </span>
        </InputContainer>

      </Form>
    </main>
  )
}
export default SignupForm