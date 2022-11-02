import React, {useContext, useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import {auth} from '../config/firebase/firebase.config'

interface Props {
  children:React.FC[]
}

export const ProtectedRoute:any = (props:Props) => {
  const user = UserAuth()
  
  if(!user.user) {
    return (
      <Navigate to='/' />
    )
  }

  return props.children
}