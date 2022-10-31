import React, {useState, useContext} from 'react'
import {auth} from '../../config/firebase/firebase.config'
import {AuthContext} from "../../context/AuthContext";
import {createUserWithEmailAndPassword} from 'firebase/auth'

import {
  Container,
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

  const user = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
        console.error(error);
    }
  };

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

  const loginUser = () => {
    console.log(email, password)
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
                <Grid item xs={12}>
                  <Button onClick={createAccount} variant="contained">Login</Button>
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