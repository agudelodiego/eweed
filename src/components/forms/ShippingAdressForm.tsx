import React from "react"
import Styles from "../../styles/Form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruckFast } from "@fortawesome/free-solid-svg-icons"
import Select from "./Select"
import { InputContainer } from "./InputContainer"
import { PrimaryBtn } from "./PrimaryBtn"
import { Form } from "./Form"

interface Props {
  setStep: Function
}

export const ShippingAdressForm = ({setStep}:Props) => {

  const validateData = ()=>{
    console.log("hello")
    setStep(2)
  }

  return (
    <Form>

      <InputContainer delay={.6}>
        <FontAwesomeIcon icon={faTruckFast} className={Styles.form_shippingIcon}/>
      </InputContainer>
      
      <InputContainer delay={.8}>
        <label htmlFor="userName" className={Styles.form_label}>
          Nombre de completo:
        </label>
        <input type="text" id="userName" className={Styles.form_input} placeholder="ejemploXD" />  
      </InputContainer>

      <InputContainer delay={1}>
        <label htmlFor="userEmail" className={Styles.form_label}>
          Correo eletronico:
        </label>
        <input type="email" id="userEmail" className={Styles.form_input} placeholder="ejemplo@gmail.com" />
      </InputContainer>

      <InputContainer delay={1.2}>
        <label htmlFor="postalCode" className={Styles.form_label}>
          Codigo postal:
        </label>
        <input type="number" id="postalCode" className={Styles.form_input} placeholder="ejemplo: 050005" /> 
      </InputContainer>

      <InputContainer delay={1.4}>
        <label htmlFor="address" className={Styles.form_label}>
          Direccion:
        </label>
        <input type="text" id="address" className={Styles.form_input} placeholder="ejemplo: Cra 52 #57-57"/>
      </InputContainer>

      <InputContainer delay={1.6}>
        <Select label="Pais de entrega" options={["Colombia"]} defaultValue="Colombia" />
      </InputContainer>

      <InputContainer delay={1.8}>
        <Select label="Departamento" options={["Ninguno","Antioquia","Cundinamarca","Huila","Guajira"]} defaultValue="Ninguno" />
      </InputContainer>

      <InputContainer delay={2}>
        <Select label="Empresa" options={["Ninguno","Servi entrega","Inter rapidisimo"]} defaultValue="Ninguno" />
      </InputContainer>

      <InputContainer delay={2.2}>
        <PrimaryBtn callback={validateData}>
          Siguiente
        </PrimaryBtn>
      </InputContainer>

    </Form>
  )
}
