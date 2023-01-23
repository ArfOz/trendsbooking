
import React from 'react'
import { Box } from '@mui/material'
import Tools from './components/Tools'
import Offer from './components/Offer'
import Protect from './components/Protect'
import Wings from './components/Wings'

function Toolset() {
  return (
    <>
    <Box sx={{
        border:"2px solid blue",
        display: "flex",
        justifyContent:"space-between",
        width:"80%",
        height:"15vh",
        m:"auto",
        mt:5,
    }}>
        <Tools/>
        <Offer/>

    </Box>
    <Box sx={{
        border:"2px solid blue",
        display: "flex",
        justifyContent:"space-between",
        width:"80%",
        height:"12vh",
        m:"auto",
        mt:5,
    }}>
        <Protect/>
        <Wings/>

    </Box>
    </>
  )
}

export default Toolset