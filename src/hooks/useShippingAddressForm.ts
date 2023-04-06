import { CartContext } from "@/context/cart/CartProvider"
import { CheckoutContext } from "@/context/checkout/CheckoutProvider"
import { UserContext } from "@/context/user/UserProvider"
import { commerce } from "@/lib/commerce"
import { useContext, useEffect, useState } from "react"


export const useShippingAddressForm = (setStep:Function) => {

  const {remoteCart, token} = useContext(CartContext)
  const {shippingInfo ,setShippingInfo} = useContext(CheckoutContext)
  const {user} = useContext(UserContext)

  const [name, setName] = useState("")
  const [nameError,setNameError] = useState<string | false>(false)

  const [city, setCity] = useState("")
  const [cityError, setCityError] = useState<string | false>(false)

  const [lastName, setLastName] = useState("")
  const [lastNameError, setLastNameError] = useState<string | false>(false)

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

  const [shippingOptions, setShippingOptions] = useState<[string,string, string][]>([])
  const [shippingOption, setShippingOption] = useState<[string, string, string]>(["NI","Ninguno","0"])
  const [shippingOptionError, setShippingOptionError] = useState<string | false>(false) 

  useEffect(()=>{
    let {name,email,zip,address} = shippingInfo
    if(name && email && zip && address){
      setName(name)
      setEmail(email)
      setZip(zip)
      setAddress(address)
    }
  },[shippingInfo])

  useEffect(()=>{

    if(user){
      if(user.email) setEmail(user.email)
    }
    
  }, [user])

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
      setShippingOption(["NI","Ninguno","0"])
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
      setShippingOption(["NI","Ninguno","0"])
      commerce.checkout.getShippingOptions(token.id,{country:country[0],region:subDivision[0]})
        .then((res)=>{
          let mapedResponse: [string, string, string][] = res.map((option)=>{return [option.id , option.description, option.price.formatted_with_code]})
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
    if(!lastName) setLastNameError("Debes introducir tu apellido")
    else setLastNameError(false)
  },[lastName])

  useEffect(()=>{
    if(!city) setCityError("Debes introducir la ciudad donde deseas que se entregue el producto.")
    else setCityError(false)
  },[city])
  
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
    if(shippingOption[0] == "NI") setShippingOptionError("Debes seleccionar la transportadora que entregara tu pedido.")
    else setShippingOptionError(false)
  },[shippingOption])


  const validateData = ()=>{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(name && email && emailRegex.test(email) && zip && address && country[0] != "NI" && subDivision[0] != "NI" && shippingOption[0] != "NI") {
      setShippingInfo({
        name,
        lastName,
        city,
        email,
        zip,
        address,
        country,
        subDivision,
        shippingOption
      })
      setStep(2)
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
    shippingOption,
    shippingOptionError,
    setShippingOption,
    validateData,
    address,
    setAddress,
    addressError,
    lastName,
    lastNameError,
    setLastName,
    city,
    setCity,
    cityError
  }
}
