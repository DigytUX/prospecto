import React, {useState, useEffect} from 'react'
import {Box} from '@mui/material'
import Splash from '../components/Splash/Splash'
import SalesExecutiveImage from '../assets/sales-executive.svg'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase/firebase.config";
import firebase from 'firebase/compat/app'

console.log('firebase', firebase)


/* Public Page  (no auth) */
export default function Welcome(){

  const [user, setUser] = useState<firebase.User | null>(null)

  return (
    <Splash 
      title="Find businesses that need your services" 
      text="SaaS" 
      image={SalesExecutiveImage} 
    />
  )
}