import React from "react"
import { Form } from "../forms/Form"
import { PurchaseSummary } from "../purchase/PurchaseSummary"
import { InputContainer } from "../forms/InputContainer"
import { PrimaryBtn } from "../forms/PrimaryBtn"
import { SecondaryBtn } from "../forms/SecondaryBtn"

interface Props {
  setStep: Function
}

export const Confirmation = ({setStep}:Props) => {

  const goBack = ()=>{
    console.log("Ejecucion de goBack en componente confirmacion")
    setStep(2)
  }

  const executePurchase = ()=>{
    console.log("Ejecucion de execute purchase")
  }

  return (
    <Form>
      
      <InputContainer delay={.6}>
        <h4>Confirma tu compra</h4>
      </InputContainer>

      <InputContainer delay={.8}>
        <PurchaseSummary />
      </InputContainer>
      
      <div className="w-100 mt-4 d-flex justify-content-between">
        <SecondaryBtn callback={goBack}>
          Atras
        </SecondaryBtn>
        <PrimaryBtn callback={executePurchase}>
          Comprar
        </PrimaryBtn>
      </div>

    </Form>
  )
}
