import React from 'react'
import {
  Box,
  Grid,
  Typography,
  TextField, 
  Button
} from '@mui/material'

interface Data{
  queries: string[]
  limit:number
  region:string
  coordinates:string
}

export default function SearchForm(){
  const styles:any = {
    TextField:{
      width:'100%'
    }
  } 

  const handleSearch = () => {
    console.log('handling search')
    return
  }

  console.log(typeof styles.TextField)

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <TextField placeholder='Industry or category' sx={styles.TextField} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField placeholder='Location' sx={styles.TextField} />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleSearch} variant='contained'>Search</Button>
        </Grid>
      </Grid>
    </Box>
  )
}