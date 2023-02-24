import React from 'react';
import { Box, Typography } from '@mui/material';

function ApRow22() {
    return (
        <>
            
                <Box
                    sx={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #D9D9D9',
                        borderRadius: 6,
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '24%',
                        height: '18vh',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: 14,
                            lineHeight: '20px',
                            color: '#07232C',
                        }}
                    >
                        Tamamlanan Randevular
                    </Typography>
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '75%',
                        
                        }}>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: 24,
                                lineHeight: '36px',
                                color: '#07232C',
                            }}
                        >
                          13
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: 12,
                                lineHeight: '18px',
                                color: '#EE3C3C',
                            }}
                        >
                            -0.56%
                        </Typography>
                    </Box>
                </Box>
      
        </>
    );
}

export default ApRow22;
