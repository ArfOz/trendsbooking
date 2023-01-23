import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import booking from '../../../../assets/booking.svg';
import { style } from './style';

const Left = () => {
    return (
        <>
            <Box sx={style.container}>
                <Box
                    sx={{
                        height: '100%',
                    }}
                >
                    <Typography sx={style.typography}>Trends</Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mt: 1,
                    }}
                >
                    <Stack
                        sx={{
                            width: '25px',
                            ml: 4,
                            mt:0.5,
                        }}
                    >
                        <img src={booking} alt="" />
                    </Stack>

                    <Typography sx={style.Biz}>Biz</Typography>
                </Box>
            </Box>
        </>
    );
};

export default Left;
