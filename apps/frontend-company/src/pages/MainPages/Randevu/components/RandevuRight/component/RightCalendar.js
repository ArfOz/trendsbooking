
import React from 'react'
import { Box } from '@mui/material'
import randevuRightCalendar from '../../../../../../assets/randevuRightCalendar.png'

function RightCalendar() {
  return (
    <>
    <Box sx={{
        width:'95%',
        height: "653px",
        background: "rgba(0, 0, 0, 0.4)",
        borderRadius: '20px',
        background: `url(${randevuRightCalendar})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        margin: "auto",       
        mt:3,
    }}>
        
    </Box>
    
    </>
  )
}

export default RightCalendar
