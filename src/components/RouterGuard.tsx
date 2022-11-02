import React,{useContext} from 'react'
import {Navigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

interface Props {
  children:React.ReactNode
}

export const RouterGuard:any = (props:Props) => {
  const user = useContext(AuthContext)

  console.log('here is the user form router guard', user)
  
  if(!user) {
    console.log('there is no user')
    return <Navigate to="/" />
  }

  return props.children
}