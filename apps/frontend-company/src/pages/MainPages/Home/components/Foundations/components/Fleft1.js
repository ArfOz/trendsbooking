import React from 'react';
import { Box, Typography } from '@mui/material';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
function Fleft1() {
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
                        background: '#FFFFFF',
                        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.1)',
                        borderRadius: '6px',
                    }}
                >
                    <DateRangeRoundedIcon fontSize="large" />
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
                            fontWeight: '900',
                            fontSize: '20px',
                            lineHeight: '19px',
                            color: '#07232C',
                        }}
                    >
                        Calendar and visits
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Fleft1;
