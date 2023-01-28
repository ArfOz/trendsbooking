import React from 'react';
import { Box, Typography } from '@mui/material';
import LocalConvenienceStoreRoundedIcon from '@mui/icons-material/LocalConvenienceStoreRounded';
function Fleft4() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    border: '3px solid green',
                    width: '40%',
                }}
            >
                <Box
                    sx={{
                        background: '#F2F8FF',
                        borderRadius: '100%',
                    }}
                >
                    <LocalConvenienceStoreRoundedIcon fontSize="large" />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80%',
                        border: '2px solid red',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight: '19px',
                            color: '#9A9A9A',
                        }}
                    >
                      Marketing tools
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Fleft4;
