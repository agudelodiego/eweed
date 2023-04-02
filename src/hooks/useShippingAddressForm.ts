import { CartContext } from "@/context/cart/CartProvider"
import { commerce } from "@/lib/commerce"
import { useContext, useEffect, useState } from "react"


export const useShippingAddressForm = (setStep:Function) => {

  const {remoteCart, token} = useContext(CartContext)

  const [name, setName] = useState("")
  const [nameError,setNameError] = useState<string | false>(false)

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState<string | false>(false) 

  const [zip,setZip] = useState("")
  const [zipError,setZipError] = useState<string | false>(false)

  const [address,setAddress] = useState("")
  const [addressError,setAddressError] = useState<string | false>(false)

  const [contries, setContries] = useState<[string,string][]>([])
  const [country, setCountry] = useState<[string,string]>(["NI","Ninguno"])
  const [countryError, setCountryError] = useState<string | false>(false)

  const [subDivisions, setSubDivisions] = useState<[string,string][]>([])
  const [subDivision, setSubDivision] = useState<[string,string]>(["NI","Ninguno"])
  const [subDivisionError, setSubDivisionError] = useState<string | false>(false)

  const [shippingOptions, setShippingOptions] = useState<[string,string][]>([])
  const [shippinOption, setShippingOption] = useState<[string,string]>(["NI","Ninguno"])
  const [shippinOptionError, setShippingOptionError] = useState<string | false>(false) 


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
    if(country[0] == "NI") setCountryError("Debes seleccionar el pais donde sera entregado tu pedido.")
    else setCountryError(false)
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
    if(subDivision[0] == "NI") setSubDivisionError("Debes seleccionar la region donde sera entregado tu pedido.")
    else setSubDivisionError(false)
  }, [subDivision])


  useEffect(()=>{
    if(!name) setNameError("Debes introducir tu nombre.") 
    else setNameError(false)
  },[name])
  
  useEffect(()=>{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!email) setEmailError("Debes introducir tu correo electronico.")
    else if (!emailRegex.test(email)) setEmailError("Introduce un correo electronico valido. Ej: ejemplo@gamil.com")
    else setEmailError(false)
  },[email])


  useEffect(()=>{
    if(!address) setAddressError("Debes introducir la direccion donde deseas que sea entregado tu pedido.")
    else setAddressError(false)
  },[address])


  useEffect(()=>{
    if(!zip) setZipError("Debes introducir tu codigo postal.")
    else setZipError(false)
  },[zip])


  useEffect(()=>{
    if(shippinOption[0] == "NI") setShippingOptionError("Debes seleccionar la transportadora que entregara tu pedido.")
    else setShippingOptionError(false)
  },[shippinOption])


  const validateData = ()=>{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(name && email && emailRegex.test(email) && zip && address && country[0] != "NI" && subDivision[0] != "NI" && shippinOption[0] != "NI") {
      console.log("oeeeeee")
    }    
  }

  return {
    name,
    setName,
    nameError,
    email,
    setEmail,
    emailError,
    zip,
    setZip,
    zipError,
    contries,
    country,
    setCountry,
    countryError,
    subDivisions,
    subDivision,
    subDivisionError,
    setSubDivision,
    shippingOptions,
    shippinOption,
    shippinOptionError,
    setShippingOption,
    validateData,
    address,
    setAddress,
    addressError
  }
}
