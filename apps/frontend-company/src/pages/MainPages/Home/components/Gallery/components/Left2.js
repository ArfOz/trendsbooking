import React from 'react';
import { Box, Typography } from '@mui/material';

function Left2() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '35vh',
                    width: '100%',
                    background: '#F75936',
                    borderRadius: '12px',
                }}
            >
                <Box
                    sx={{
                       
                        width: '90%',
                        m: 'auto',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '48px',
                            lineHeight: '56px',
                            color: '#F2F8FF',
                        }}
                    >
                        A new way to manage business
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Left2;
