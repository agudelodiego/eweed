import React, { useContext, useEffect, useState } from "react"
import Styles from "../../styles/Form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruckFast } from "@fortawesome/free-solid-svg-icons"
import Select from "./Select"
import { InputContainer } from "./InputContainer"
import { PrimaryBtn } from "./PrimaryBtn"
import { Form } from "./Form"
import { commerce } from "@/lib/commerce"
import { CartContext } from "@/context/cart/CartProvider"
import { LocaleListCountriesResponse } from "@chec/commerce.js/features/services"

interface Props {
  setStep: Function
}

export const ShippingAdressForm = ({setStep}:Props) => {

  const {remoteCart, token} = useContext(CartContext)

  const [contries, setContries] = useState<[string,string][]>([])
  const [country, setcountry] = useState<[string,string]>(["NI","Ninguno"])

  const [subDivisions, setSubDivisions] = useState<[string,string][]>([])
  const [subDivision, setSubDivision] = useState<[string,string]>(["NI","Ninguno"])

  const [shippingOptions, setShippingOptions] = useState<[string,string][]>([])
  const [shippinOption, setShippingOption] = useState<[string,string]>(["NI","Ninguno"])


  useEffect(() => {
    if(remoteCart && token){
      commerce.services.localeListShippingCountries(token.id)
        .then((res)=>{ setContries(Object.entries(res.countries)) })
        .catch((error)=>{console.log(error)})
    }
  }, [remoteCart,token])

  useEffect(() => {
    if(remoteCart && token && country){
      setSubDivision(["NI","Ninguno"])
      setShippingOption(["NI","Ninguno"])
      setSubDivisions([])
      setShippingOptions([])
      commerce.services.localeListShippingSubdivisions(token.id, country[0])
        .then((res) => { 
          setSubDivisions(Object.entries(res.subdivisions)) 
        })
        .catch((error) => console.log(error) )
    }
  }, [country])


  useEffect(() => {
    if(remoteCart && token && (subDivision[0]!="NI")){
      setShippingOption(["NI","Ninguno"])
      commerce.checkout.getShippingOptions(token.id,{country:country[0],region:subDivision[0]})
        .then((res)=>{
          let mapedResponse: [string,string][] = res.map((option)=>{return [option.id , option.description]})
          setShippingOptions(mapedResponse)
        })
        .catch((error)=>console.log(error))
    }
  }, [subDivision])

  
  const validateData = ()=>{
    console.log("hello")
    //setStep(2)
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

      {contries.length > 0?
        //*if(contries)...
          <InputContainer delay={.3}>
            <Select label="Pais de entrega" options={contries} selected={country} callback={setcountry} />
          </InputContainer>

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
          <InputContainer delay={.3}>
            <Select label="Departamento" options={subDivisions} selected={subDivision} callback={setSubDivision} />
          </InputContainer>

        :
        //*else...
         ""
      }
      
      {(subDivision[0] != "NI")?
        //*if(subDivision && subDivision && shippinOptions)...
          <InputContainer delay={.3}>
            <Select label="Empresa" options={shippingOptions} selected={shippinOption} callback={setShippingOption} />
          </InputContainer>

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
