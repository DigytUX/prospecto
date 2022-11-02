import {
  Box,
  Container,
  Grid,
  TextField,
  Button
} from '@mui/material'
import {useEffect} from 'react'
import {LeadsTable} from '../Tables/LeadsTable'
import { getBusinesses } from '../../features/api/localBusinessSearch/businessScraper'

import example from '../../features/api/localBusinessSearch/example.json'

export const Dashboard = () => {
  console.log('example data', example.data)

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
          <LeadsTable data={example.data} />
        </Grid>
      </Grid>
    </Box>
  )
}