import React from "react"
import Styles from "../../styles/Form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruckFast } from "@fortawesome/free-solid-svg-icons"
import Select from "./Select"
import { InputContainer } from "./InputContainer"
import { PrimaryBtn } from "./PrimaryBtn"
import { Form } from "./Form"
import { useShippingAddressForm } from "@/hooks/useShippingAddressForm"


interface Props {
  setStep: Function
}


export const ShippingAdressForm = ({setStep}:Props) => {

  const {
    setAddress,
    addressError,
    setName,
    nameError,
    setEmail,
    emailError,
    zipError,
    setZip,
    contries,
    setCountry,
    country,
    countryError,
    subDivisions,
    subDivision,
    subDivisionError,
    setSubDivision,
    shippinOption,
    setShippingOption,
    shippingOptions,
    validateData,
    shippinOptionError
  } = useShippingAddressForm(setStep)

  return (
    <Form>

      <InputContainer delay={.6}>
        <FontAwesomeIcon icon={faTruckFast} className={Styles.form_shippingIcon}/>
      </InputContainer>
      
      <InputContainer delay={.8}>
        <label htmlFor="userName" className={Styles.form_label} >
          Nombre de completo:
        </label>
        <input type="text" id="userName" className={`${Styles.form_input} ${nameError? "border border-danger" : ""}`} onChange={(e)=>setName(e.target.value)} placeholder="ejemploXD" />  
        <span className="text-danger text-center">{nameError?nameError:""}</span>
      </InputContainer>

      <InputContainer delay={1}>
        <label htmlFor="userEmail" className={Styles.form_label}>
          Correo eletronico:
        </label>
        <input type="email" id="userEmail" className={`${Styles.form_input} ${emailError? "border border-danger" : ""}`} onChange={(e)=>setEmail(e.target.value)} placeholder="ejemplo@gmail.com" />
        <span className="text-danger text-center">{emailError?emailError:""}</span>
      </InputContainer>

      <InputContainer delay={1.2}>
        <label htmlFor="postalCode" className={Styles.form_label}>
          Codigo postal:
        </label>
        <input type="number" id="postalCode" className={`${Styles.form_input} ${zipError? "border border-danger" : ""}`} onChange={(e)=>setZip(e.target.value)} placeholder="ejemplo: 050005" /> 
        <span className="text-danger text-center">{zipError?zipError:""}</span>
      </InputContainer>

      <InputContainer delay={1.4}>
        <label htmlFor="address" className={Styles.form_label}>
          Direccion:
        </label>
        <input type="text" id="address" className={`${Styles.form_input} ${addressError? "border border-danger" : ""}`} onChange={(e)=>setAddress(e.target.value)} placeholder="ejemplo: Cra 52 #57-57"/>
        <span className="text-danger text-center">{addressError?addressError:""}</span>
      </InputContainer>

      {contries.length > 0?
        //*if(contries)...
          <>
            <InputContainer delay={.3}>
              <Select label="Pais de entrega" options={contries} selected={country} callback={setCountry} />
            </InputContainer>
            <span className="text-danger text-center">{countryError?countryError:""}</span>
          </>
        :
        //*else...
          <div className="w-100 text-center">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>  
      }
      

      {(country[0] != "NI" )?
        //*if(country && subDivisions)...
        <>
          <InputContainer delay={.3}>
            <Select label="Departamento" options={subDivisions} selected={subDivision} callback={setSubDivision} />
          </InputContainer>
          <span className="text-danger text-center">{subDivisionError?subDivisionError:""}</span>
        </>

        :
        //*else...
         ""
      }
      
      {(subDivision[0] != "NI")?
        //*if(subDivision && subDivision && shippinOptions)...
        <>
          <InputContainer delay={.3}>
            <Select label="Empresa" options={shippingOptions} selected={shippinOption} callback={setShippingOption} />
          </InputContainer>
          <span className="text-danger text-center">{shippinOptionError?shippinOptionError:""}</span>
        </>
          

        :
        //*else...
          ""
      }

      <InputContainer delay={1.8}>
        <PrimaryBtn callback={validateData}>
          Siguiente
        </PrimaryBtn>
      </InputContainer>

    </Form>
  )
}
