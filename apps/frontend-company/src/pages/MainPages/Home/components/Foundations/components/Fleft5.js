import React from 'react';
import { Box, Typography } from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
function Fleft5() {
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
                    <VerifiedUserOutlinedIcon fontSize="large" />
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
                        Protection against absences
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Fleft5;
