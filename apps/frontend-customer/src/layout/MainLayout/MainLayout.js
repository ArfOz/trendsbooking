import { Box } from '@mui/material'
import React from 'react'
// import { Navbar } from '../../components'

const MainLayout = ({ children }) => {
  return (
    <Box>

      {/* <Navbar /> */}

      {children}
    </Box>
  )
}

export default MainLayout