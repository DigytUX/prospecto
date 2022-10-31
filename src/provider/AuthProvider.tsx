import React,{useState, useEffect} from 'react'
import { AuthContext } from '../context/AuthContext'
import firebase from 'firebase/compat/app'
import { auth } from '../config/firebase/firebase.config'
import {User} from '@firebase/auth-types';
/* 
Note that the PropsWithChildren type is omitted from the props type 
of a FunctionalComponent after React 18,
this means that you have to include the children prop yourself:
*/

interface Props {
  children:React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  
  /* Not liking the firebase type */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    }
  })

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
}