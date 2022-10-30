import React from 'react'
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material'

interface AppProps {
  title:string,
  text:string,
  image:string
}

export default function Splash({
  title, 
  text, 
  image
}: AppProps){

  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography>{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{text}</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField placeholder="email" type="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField placeholder="password" type="password" />
          </Grid>
          <Grid item xs={12}>
            <Button>Login</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
          <Box component="img" src={image} />
      </Grid>
    </Grid>
  )

}