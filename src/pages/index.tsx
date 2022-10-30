import React from 'react'
import {Box} from '@mui/material'
import Splash from '../components/Splash/Splash'
import SalesExecutiveImage from '../assets/sales-executive.svg'

import {app} from '../config/firebase/firebase.config'

console.log('Firebase', app)

/* Public Page  (no auth) */
export default function Welcome(){
  return (
  <Splash 
    title="Find businesses that need your services" 
    text="" 
    image={SalesExecutiveImage} 
  />
  )
}