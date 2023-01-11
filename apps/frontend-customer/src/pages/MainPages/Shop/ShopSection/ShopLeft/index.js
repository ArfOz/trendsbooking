
import React from 'react'
import { Box } from '@mui/material'
import Barberschop from './Barberschop'
import Appointment from './Appointment'
import About from './About'
import LeftEnd from './LeftEnd'


function ShopsLeftMain() {
  return (
    <>
    <Box sx={{
        width: "55%",
        height: "793px",
        m:5,
   

    }}>
      <Barberschop/>
      <Appointment/>
      <About/>
      <LeftEnd/>

    </Box>
    
    
    </>
  )
}

export default ShopsLeftMain