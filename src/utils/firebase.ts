export const errorValidator = (error:string) =>{
  switch (error) {
    case "auth/email-already-in-use":
      return "El correo electronico ya se encuentra en uso, si ya posee una cuenta ingrese con esta."

    case "auth/invalid-email":
      return "El correo electronico es invalido."
    
    case "auth/weak-password":
      return "La contraseña es demasiado debil, usa mas caractere y no olvides colocar caracteres mayusculas y minusculas."

    case "auth/user-disable":
      return "La cuenta de usuario fue suspendida por el administrador de la plataforma."

    case "uth/wrong-password":
      return "El correo electronico o la contraseña son incorrectas."

    default:
      return "Ups, ha ocurrido un error, por favor vuelva a intentarlo."
  }
}
