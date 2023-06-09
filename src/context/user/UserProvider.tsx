import { auth } from "@/lib/firebase"
import { User} from "firebase/auth"
import { createContext, ReactNode, useEffect, useState } from "react"
import {UserContextType} from "./types"


interface Props {
  children: ReactNode
}


export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => null
})


export const UserProvider = ({children}:Props) => {

  const [user,setUser] = useState<User | null>(auth.currentUser)

  useEffect(() => {
    if(auth.currentUser){
      setUser(auth.currentUser)
    }
  }, [auth.currentUser])

  return(
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}