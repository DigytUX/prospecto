import React, {useEffect, useState, useContext} from 'react'
import {auth} from '../../config/firebase/firebase.config'
import {createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth'
import {UserAuth} from '../../context/AuthContext'

import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material'

import { errorPrefix } from '@firebase/util';

interface AppProps {
  title:string,
  text:string,
  image:string
}

interface Error {
  stack?: string;
  customData?:object
  code?:string
  name?:string
}

export default function Splash({
  title, 
  text, 
  image
}: AppProps){

  const {user, createNewUser, signInUser, signOutUser} = UserAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<null | string>(null)

  const styles = {
    Splash:{
      width:'100vw',
      height:'100vh',
      display:'flex',
      alignItems:'center'
    },
    LeftContent:{
      height:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    RightContent:{
      height:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    FormWrapper:{
      display:'flex',
      height:'auto'
    },
    TextField:{
      width:'100%'
    },
    Image:{
      width:'80%'
    }
  }

  useEffect(() => {
    console.log('USER', user)
  })

  const handleLogin = async () => {
    console.log('loggin you in')
    
    try {
      await createNewUser(
        email,
        password
      );
    } catch (error) {
      if (error instanceof Error) {
        let errorCode:string = ''

        for (const [key, value] of Object.entries(error)) {
          console.log('VALUE', value)
          if(key === 'code'){
            errorCode = value
          }
        }

        console.log('ERROR CODE', errorCode)
      
        switch(errorCode) {
          case 'auth/email-already-in-use':
            try {
              await signInUser(
                email, 
                password
              )
              setError(null)
            } catch (error) {
              if (error instanceof Error) {
                let errorCode:string = ''
                
                for (const [key, value] of Object.entries(error)) {
                  console.log(`${key}: ${value}`);
                  if(key === 'code'){
                    errorCode = value
                  }
                }
                /* Handle additional errors */
              }
            }
            break;
          case 'auth/insufficient-permission':
            break;
          case 'auth/internal-error':
            break;
          default:
            // code block
            setError(null)
        } 
      }
    };
  }

  const logOff = async() => {
    try {
      await signOutUser()
    } catch (error) {}
  }

  return (
    <Box sx={styles.Splash}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid sx={styles.LeftContent} item xs={12} lg={6}>
            <Box sx={styles.FormWrapper}> 
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h2" component="h1">{title}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" component="p">{text}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={e => setEmail(e.target.value)} value={email} sx={styles.TextField} placeholder="email" type="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={e => setPassword(e.target.value)} value={password} sx={styles.TextField} placeholder="password" type="password" />
                </Grid>
                <Grid item xs={6}>
                <Typography>{error}</Typography>
                {user && <Typography>You are logged in</Typography>}
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                     <Button sx={{width:'100%'}} onClick={handleLogin} variant="contained">Login</Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button sx={{width:'100%'}} onClick={logOff} variant="contained">Log Off</Button>
                    </Grid> 
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid sx={styles.RightContent} item xs={12} lg={6}>
            <Box sx={styles.Image} component="img" src={image} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}