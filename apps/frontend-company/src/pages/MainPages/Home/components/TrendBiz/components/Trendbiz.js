
import React from 'react'
import { Box, Typography } from '@mui/material'

function Trendbiz() {
  return (
   <>
   <Box sx={{
    border:"3px solid blue",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
    width:"50%",
    height:"25vh",
    m:"auto",
    mt:5,
   }}>
    <Box >
        <Typography 
         sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '800',
            fontSize: '16px',
            lineHeight: '110%',
            color: '#F75936',
        }}>
        TrendsBIZ 
        </Typography>
    </Box>
    <Box>
        <Typography 
        sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '800',
            fontSize: '40px',
            lineHeight: '110%',
            color: '#07232C',
        }}>
        
       One platform, endless possibilities
        </Typography>
    </Box>
    <Box sx={{
        width:"75%",
    }}>
    <Typography 
        sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '23px',
            color: '#9A9A9A',
            textAlign: 'center',
           
        }}>
        You choose your own path and we help you follow it. Because together we can do more. And better!
        </Typography>
    </Box>

   </Box>
   </>
  )
}

export default Trendbiz