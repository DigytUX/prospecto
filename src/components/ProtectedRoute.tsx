import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

interface Props {
  children:React.ReactNode
}

export const RouterGuard:any = (props:Props) => {
  const {user} = UserAuth()
  if(!user) {
    return (
      <Navigate to='/' />
    )
  }
  return props.children
}