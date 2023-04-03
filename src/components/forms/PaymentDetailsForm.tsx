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
import { usePaymentDetailsForm } from "@/hooks/usePaymentDetailsForm"

interface Props {
  setStep: Function
}

export const PaymentDetailsForm = ({setStep}:Props) => {

  const {
    cardOwner,
    setCardOwner,
    cardOwnerError,

    cardNumber,
    setCardNumber,
    cardNumberError,

    securityCode,
    setSecurityCode,
    securityCodeError,

    billingAddress,
    setBillingAddress,
    billingAddressError,

    cardExpirationDate,
    setCardExpirationDate,
    cardExpirationDateError,

    validateData
  } = usePaymentDetailsForm(setStep)

  const goBack = ()=>{
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
        <input type="text" id="cardOwner" value={cardOwner} onChange={(e)=>setCardOwner(e.target.value)} className={`${Styles.form_input} ${cardOwnerError?"border border-danger":""}`} placeholder="ejmplo: Pepito Perez" />
        <span className="text-danger text-center">{cardOwnerError?cardOwnerError:""}</span>
      </InputContainer>

      <InputContainer delay={1}>
        <label htmlFor="cardCode">
          Numero de la targeta:
        </label>
        <input type="number" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} className={`${Styles.form_input} ${cardNumberError?"border border-danger":""}`} placeholder="000000000000" />
        <span className="text-danger text-cente">{cardNumberError?cardNumberError:""}</span>
      </InputContainer>

      <InputContainer delay={1.2}>
        <label htmlFor="securityCode" className={Styles.form_label}>
          Codigo de seguridad
        </label>
        <input type="number" value={securityCode} id="securityCode" className={`${Styles.form_input} ${securityCodeError?"border border-danger":""}`} onChange={(e)=>setSecurityCode(e.target.value)} placeholder="0000" />
        <span className="text-danger text-cente">{securityCodeError?securityCodeError:""}</span>
      </InputContainer>

      <InputContainer delay={1.4}>
        <label htmlFor="billingAddress">
          Direccion de facturacion
        </label>
        <input type="text" value={billingAddress} id="billingAddress" onChange={(e)=>setBillingAddress(e.target.value)} className={`${Styles.form_input} ${billingAddressError?"border border-danger":""}`} placeholder="ejemplo: Cra 52 #57-57" />
        <span className="text-danger text-cente">{billingAddressError?billingAddressError:""}</span>
      </InputContainer>

      <InputContainer delay={1.6}>
        <label htmlFor="" className={Styles.form_label}>
          Fecha de expiracion de la targeta:
        </label>
        <div>
          <DatePicker selected={cardExpirationDate} onChange={(date) => setCardExpirationDate(date)} className={`${Styles.form_input} ${cardExpirationDateError?"border border-danger":""}`} placeholderText="mes/dia/año"/>
        </div>
        <span className="text-danger text-cente">{cardExpirationDateError?cardExpirationDateError:""}</span>
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
