import React, {useEffect, useState} from 'react'
import {createContext, useContext} from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import {auth} from '../config/firebase/firebase.config'

interface Props {
  children:React.ReactNode
}

const UserContext = createContext<any>('')

export const AuthContextProvider: React.FC<Props> =  ({children}) => {
  const [user, setUser] = useState<any | null>(null);
  const createNewUser = (email:string, password:string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email:string, password:string) => {
    console.log('sigining in the user')
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Here is the user from the Auth context', user)
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  })

  return (
    <UserContext.Provider value={{createNewUser, user, signInUser, signOutUser}}>
      {children}
    </UserContext.Provider> 
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}