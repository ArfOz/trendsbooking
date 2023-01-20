import React from 'react';

import { Box, Typography } from '@mui/material';

function Center() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    width: '20%',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '31px',
                        color: '#9A9A9A',
                    }}
                >
                    Home
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '31px',
                        color: '#9A9A9A',
                    }}
                >
                    About
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '31px',
                        color: '#9A9A9A',
                    }}
                >
                    Contact
                </Typography>
            </Box>
        </>
    );
}

export default Center;
