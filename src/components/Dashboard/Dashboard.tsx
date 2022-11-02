import {
  Box,
  Container,
  Grid,
  TextField,
  Button
} from '@mui/material'
import {useEffect, useState, useRef} from 'react'
import {BasicTable} from '../Tables/BasicTable'
import axios from 'axios'
import example from '../../features/api/localBusinessSearch/example.json'

export const Dashboard = () => {
  const [category, setCategory] = useState<string>('Dentists')
  const [location, setLocation] = useState<string>('Houston Texas')
  const [businessData, setBusinessData] = useState<any>([])

  /*Getting a loop API call limit exceeded */
  const getBusinesses = async () => {
    const options = {
      method: 'POST',
      url: 'https://local-business-data.p.rapidapi.com/search',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_LOCAL_BUSINESS_API_URL
      },
      data: '{"queries":["'+ category +' in '+ location +'"],"limit":20,"region":"us","language":"en"}'
    };
    
    try {
      const results = await axios.request(options)
    } catch (err) {}
  }

  return (
    <Box p={5}> 
      <Grid container maxWidth="fluid" spacing={5}>
        <Grid item xs={4}>
          <TextField placeholder='Plumbers, Dentists, Roofers..etc' sx={{width:'100%'}} />
        </Grid>
        <Grid item xs={4}>
          <TextField placeholder='San Fransisco, New York, Atlanta...etc' sx={{width:'100%'}} />
        </Grid>
        <Grid item xs={4}>
          <Button sx={{width:'100%', height:'100%'}} variant='contained'>Search</Button>
        </Grid>
        <Grid item xs={12}>
          <BasicTable data={example.data} />
        </Grid>
      </Grid>
    </Box>
  )
}