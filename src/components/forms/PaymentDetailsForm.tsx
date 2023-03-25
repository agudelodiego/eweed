import React, { useState } from "react"
import { Form } from "./Form"
import { InputContainer } from "./InputContainer"
import Styles from "../../styles/Form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard } from "@fortawesome/free-solid-svg-icons"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { PrimaryBtn } from "./PrimaryBtn"
import { SecondaryBtn } from "./SecondaryBtn"

interface Props {
  setStep: Function
}

export const PaymentDetailsForm = ({setStep}:Props) => {

  const [startDate, setStartDate] = useState<Date | null>(null)

  const validateData = ()=>{
    console.log("Ejecicion de payment details")
    setStep(3)
  }

  const goBack = ()=>{
    console.log("Ejecucion de goBack en payment details")
    setStep(1)
  }

  return (
    <Form>

      <InputContainer delay={.6}>
        <FontAwesomeIcon icon={faCreditCard} className={Styles.form_shippingIcon} />
      </InputContainer>
      <InputContainer delay={.8}>
        <label htmlFor="cardOwner" className={Styles.form_label}>
          Titular de la targeta:
        </label>
        <input type="text" id="cardOwner" className={Styles.form_input} placeholder="ejmplo: Pepito Perez" />
      </InputContainer>

      <InputContainer delay={1}>
        <label htmlFor="cardCode">
          Numero de la targeta:
        </label>
        <input type="number" className={Styles.form_input} placeholder="000000000000" />
      </InputContainer>

      <InputContainer delay={1.2}>
        <label htmlFor="securityCode" className={Styles.form_label}>
          Codigo de seguridad
        </label>
        <input type="number" id="securityCode" className={Styles.form_input} placeholder="0000" />
      </InputContainer>

      <InputContainer delay={1.4}>
        <label htmlFor="billingAddress">
          Direccion de facturacion
        </label>
        <input type="text" id="billingAddress" className={Styles.form_input} placeholder="ejemplo@mail.com" />
      </InputContainer>

      <InputContainer delay={1.6}>
        <label htmlFor="" className={Styles.form_label}>
          Fecha de expiracion de la targeta:
        </label>
        <div>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className={Styles.form_input} />
        </div>
      </InputContainer>

      <div className="d-flex align-items-center justify-content-between w-100">
        <SecondaryBtn callback={goBack}>
          Atras
        </SecondaryBtn>
        <PrimaryBtn callback={validateData}>
          Siguiente
        </PrimaryBtn>
      </div>
    </Form>
  )
}
