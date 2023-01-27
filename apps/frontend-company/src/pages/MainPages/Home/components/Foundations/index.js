
import React from 'react'
import { Box } from '@mui/material'
import Fleft from './components/Fleft'
import Fright from './components/Fright'

function Foundations() {
  return (
    <>
    <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        border:"3px solid blue",
        width:"90%",
        height:"95vh",
        m:"auto",
        mt:5,
        mb:10,
    }}>
        <Fleft/>
        <Fright/>
    </Box>
    </>
  )
}

export default Foundations