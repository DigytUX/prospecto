import React from 'react'
import {Box} from '@mui/material'
import Splash from '../components/Splash/Splash'
import SalesExecutiveImage from '../assets/sales-executive.svg'

export default function Welcome(){
  return (
  <Splash 
    title="Find businesses that need your services" 
    text="" 
    image={SalesExecutiveImage} 
  />
  )
}