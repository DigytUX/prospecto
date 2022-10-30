import React from 'react'
import { NavLink as Link, NavLink } from "react-router-dom";
import {Box} from '@mui/material'

export default function Home(){
  return (
    <Box>
      <NavLink to="/welcome"><h1>Go To Welcome</h1></NavLink>
    </Box>
  )
}