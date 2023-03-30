import Styles from "../../styles/Form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faUser, faCannabis } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { Form } from "./Form"
import { InputContainer } from "./InputContainer"
import { PrimaryBtn } from "./PrimaryBtn"
import { GoogleBtn } from "./GoogleBtn"
import { useContext, useState } from "react"
import { errorValidator } from "@/utils/firebase"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { UserContext } from "@/context/user/UserProvider"
import { useRouter } from "next/router"


const LoginForm = ()=>{

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const {setUser} = useContext(UserContext)
  const router = useRouter()

  const validateData = async()=>{
    setError("")
    if(!email || !password){
      setError("Debes llenar todos los campos para ingresar a la aplicacion")
    }
    else{
      try{
        let userCredentials = await signInWithEmailAndPassword(auth,email,password)
        setUser(userCredentials.user)
        router.push("/")
      }
      catch(error:any){
        let message = errorValidator(error.code)
        setUser(null)
        setError(message)
      }
    }
  }

  const loginWithGoogle = async() =>{
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
            <span className={Styles.form_brandText}>Ingresar</span>
          </div> 
        </InputContainer>

        <InputContainer delay={.8}>
          <label htmlFor="userEmail" className={Styles.form_label}>
            Correo eletronico
          </label>
          <input type="email" id="userEmail" className={Styles.form_input} placeholder="ejemplo@gmail.com" onChange={(e)=>{setEmail(e.target.value)}} />
        </InputContainer>

        <InputContainer delay={1}>
          <label htmlFor="userPassword" className={Styles.form_label}>
            Contraseña
          </label>
          <input type="password" id="userPassword" className={Styles.form_input} placeholder="**************" onChange={(e)=>{setPassword(e.target.value)}} />
        </InputContainer>

        <div className="text-danger text-center fs-5">
          {error}
        </div>

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