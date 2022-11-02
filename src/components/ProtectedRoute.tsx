import React from 'react'
import {Navigate} from 'react-router-dom'

interface Props {
  children:React.FC
}

export const ProtectedRoute:any = (props:Props) => {
  if(!localStorage.getItem('userId')) {
    return (
      <Navigate to='/' />
    )
  }

  return props.children
}