import React from 'react'
import { NavLink as Link, NavLink } from "react-router-dom";
import {Box} from '@mui/material'


// check if user is logged in 
// never render this page without checking for user's authentication status

export default function Home(){
  return (
    <Box>
      <NavLink to="/"><h1>Go To Welcome</h1></NavLink>
    </Box>
  )
}