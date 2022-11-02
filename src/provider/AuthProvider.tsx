import React,{useState, useEffect} from 'react'
import {AuthContext} from '../context/AuthContext'
import {auth} from '../config/firebase/firebase.config'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
/* 
Note that the PropsWithChildren type is omitted from the props type 
of a FunctionalComponent after React 18,
this means that you have to include the children prop yourself:
*/
interface Props {
  children:React.ReactNode
}

export const createUser = (email:string, password:string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signInUser = (email:string, password:string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = () => {
  return signOut(auth)
}

export const AuthProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser:any) => {
      setUser(firebaseUser);
    })

    return unsubscribe
  },[])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

