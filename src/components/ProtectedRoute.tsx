import React, {useContext, useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import {auth} from '../config/firebase/firebase.config'

interface Props {
  children:React.FC[]
}

export const ProtectedRoute:any = (props:Props) => {
  if(!localStorage.getItem('userId')) {
    return (
      <Navigate to='/' />
    )
  }

  return props.children
}