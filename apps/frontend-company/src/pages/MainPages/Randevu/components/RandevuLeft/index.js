import { Box } from '@mui/material'
import React from 'react'
import Calendar from './components/Calendar'
import PersonelButton from './components/PersonelButton'



function RandevuLeft() {
  return (
    <>
    <Box sx={{
            
            width:'32%',
            height:'100vh',        
            background:'#FFFFFF',
            borderRadius:'12px',
            border:'2px solid red',
    }}>
      <Calendar/>
      <PersonelButton/>
       


    </Box>
    
    </>
  )
}

export default RandevuLeft