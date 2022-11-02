import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface BusinessData {
  name:string
  businessID:string
  city:string
  state:string
  country:string
  fullAddress:string
  googleID:string
  phoneNumber:string
  type:string
  website:string
  verified:boolean
  zip:string
  rating:number
  reviewCount:number
  priceLevel?:any | null
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

export const BasicTable = ({ data }:{ data:any }) => {

  const rows = createBusinessData()

  interface BusinessData {
    name:string
    businessID:string
    city:string
    state:string
    country:string
    fullAddress:string
    googleID:string
    phoneNumber:string
    type:string
    website:string
    verified:boolean
    zip:string
    rating:number
    reviewCount:number
    priceLevel?:any | null
  }
  
  function createBusinessData(){
    const formattedData = data.map((item:any, i:string) => ({
      name:item.name, 
      businessID:item.businessID,
      city:item.city,
      state:item.state,
      website:item.website,
      phoneNumber:item.phone_number,
      reviewCount:item.review_count,
      rating:item.rating,
      type:item.type
    }))
    
    return formattedData
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Website</TableCell>
            <TableCell align="right">Phone #</TableCell>
            <TableCell align="right">Reivew Count</TableCell>
            <TableCell align="right">Rating</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:any, i:number) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right"><a href={row.website} target='_blank'>website</a></TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
              <TableCell align="right">{row.reviewCount}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
