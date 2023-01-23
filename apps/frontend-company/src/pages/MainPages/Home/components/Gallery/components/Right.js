
import React from 'react'
import { Box } from '@mui/material'
import Right1 from './Right1'
import Right2 from './Right2'
import Right3 from './Right3'

function Right() {
  return (
   <>
   <Box sx={{
    
    display: "flex",
    flexDirection: "column",
    justifyContent:"space-between",
    width:"59%",
    border:"5px solid red",
   }}>
   <Right1/>
   <Right2/>
   <Right3/>
   </Box>
   </>
  )
}

export default Right