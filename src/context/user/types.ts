import { User, UserCredential } from "firebase/auth"
import { Dispatch, SetStateAction } from "react"

export type UserContextType ={
  user: User | null,
  setUser: Dispatch<SetStateAction<User | null>>
}