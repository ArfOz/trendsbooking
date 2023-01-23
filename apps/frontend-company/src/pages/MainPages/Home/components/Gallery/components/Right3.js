
import React from 'react'
import { Box, Typography } from '@mui/material'

function Right3() {
  return (
  <>
  <Box sx={{
                border: "1px solid #07232C",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height:"33%",            
                width:'100%',

             }}>
                <Typography
                            sx={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: '800',
                                fontSize: '64px',
                                lineHeight: '150%',
                                color: '#07232C',
                            }}
                        >
                            TrendsBiz
                        </Typography>
                
             </Box>
  </>
  )
}

export default Right3