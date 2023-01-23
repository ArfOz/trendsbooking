
import React from 'react'
import { Box, Typography } from '@mui/material'
import Company300 from '../../../../../../assets/Company300.png';

function Right1() {
  return (
    <>
             <Box sx={{
                border:"2px solid green",
                display: 'flex',
                justifyContent: 'space-between',
                height:"33%",
            
                width:'100%',

             }}>
               
                
            {/* box 1 */}
            <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        height: '100%',
                        width: '49%',
                        background: ' #F2F8FF',
                        borderRadius: '12px',
                        border:"5px solid blue",
                        
                    }}
                >
                    <Box sx={{
                        border: '5px solid black',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        height: '45%',
                        mt:2,

                    }}>
                         <Box sx={{
                        border:"2px solid red",
                       

                    }}>
                         <Typography
                            sx={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '150%',
                                color: '#F75936',
                            }}
                        >
                            CALENDAR AND VISITS
                        </Typography>
                    </Box>
                    <Box sx={{
                        border:"3px solid red",
                        width: '80%',
                    }}>
                    <Typography
                            sx={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '150%',
                                color: '#07232C',
                            }}
                        >
                            Team management and work schedules
                        </Typography>

                    </Box>

                    </Box>
                   
                     


            </Box>
            {/* box 1 */}
            {/* box 2 */}
            <Box
                    sx={{
                        height: '100%',
                        width: '49%',
                        background: '#D9D9D9',
                        borderRadius: '12px',
                        background: `url(${Company300})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        position: 'relative',
                    }}
                >

                </Box>
              
            {/* box 2 */}
            </Box> 
            </>
  )
}

export default Right1