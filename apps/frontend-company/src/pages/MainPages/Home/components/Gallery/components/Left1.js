
import React from 'react'
import { Box } from '@mui/material'
import Company295 from '../../../../../../assets/Company295.png';

function Left1() {
  return (
    <>
     <Box
                    sx={{
                        height: '70vh',
                        width: '100%',
                        background: '#D9D9D9',
                        borderRadius: '12px',
                        background: `url(${Company295})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        position: 'relative',
                    }}
                ></Box>
    </>
  )
}

export default Left1