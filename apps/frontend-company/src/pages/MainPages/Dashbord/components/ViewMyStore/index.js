
import React from 'react'
import { Box } from '@mui/material'
import MyStoreLeft from './components/MyStoreLeft'
import MyStoreRight from './components/MyStoreRight'

function ViewMyStore() {
  return (
    <>
    <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"83%", 
        ml:20,    
        mt:10,
    }}>
        <MyStoreLeft/>
        <MyStoreRight/>

    </Box>
    
    </>
  )
}

export default ViewMyStore