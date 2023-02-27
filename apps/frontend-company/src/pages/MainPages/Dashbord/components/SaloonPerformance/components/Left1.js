import React from 'react';
import { Box, Fab, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Left1() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    width: '90%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ml: 4,
                }}
            >
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 24,
                        lineHeight: '30px',
                        color: '#FFFFFF',
                    }}
                >
                    Salon Performansı
                </Typography>

                <Fab color="info">
                    <ArrowForwardIcon />
                </Fab>
            </Box>
        </>
    );
}

export default Left1;
