import React, {useState, useEffect} from 'react'
import {Box} from '@mui/material'
import Splash from '../components/Splash/Splash'
import SalesExecutiveImage from '../assets/sales-executive.svg'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app'

console.log('firebase', firebase)


/* Public Page  (no auth) */
export default function Welcome(){
  return (
    <Splash 
      title="Find businesses that need your services" 
      text="SaaS" 
      image={SalesExecutiveImage} 
    />
  )
}