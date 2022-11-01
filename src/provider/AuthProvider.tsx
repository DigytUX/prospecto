import React,{useState, useEffect} from 'react'
import {AuthContext} from '../context/AuthContext'
import {auth} from '../config/firebase/firebase.config'
import {onAuthStateChanged} from "firebase/auth";

/* 
Note that the PropsWithChildren type is omitted from the props type 
of a FunctionalComponent after React 18,
this means that you have to include the children prop yourself:
*/

interface Props {
  children:React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({children}) => {

  // eventually replace any with the firebase user type
  const [user, setUser] = useState<any | null>(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser:any) => {
      setUser(firebaseUser);
    })

    return unsubscribe
  },[])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}