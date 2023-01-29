
import React from 'react'
import { Box } from '@mui/material'
import Fleft from './components/Fleft'
import Fright from './components/Fright'
import { style } from './style'

function Foundations() {
  return (
    <>
    <Box sx={style.foundationsContainer}>
        <Fleft/>
        <Fright/>
    </Box>
    </>
  )
}

export default Foundations