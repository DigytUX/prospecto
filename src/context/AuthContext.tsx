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

export const AuthContextProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState<any>('');
  
  const createNewUser = (email:string, password:string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email:string, password:string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
    localStorage.removeItem('userId'); 
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser:any) => {
      if(currentUser !== null) {
        localStorage.setItem('userId', currentUser.uid); 
        setUser(currentUser)
      } else {
        localStorage.removeItem('userId'); 
        setUser(null)
      }
    })
    return () => {
      unsubscribe()
    }
  },[])

  return (
    <UserContext.Provider value={{createNewUser, user, signInUser, signOutUser}}>
      {children}
    </UserContext.Provider> 
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}