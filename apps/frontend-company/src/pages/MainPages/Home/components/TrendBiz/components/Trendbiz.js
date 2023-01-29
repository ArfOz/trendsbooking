import React from 'react';
import { Box, Typography } from '@mui/material';
import { style } from './style';

function Trendbiz() {
    return (
        <>
            <Box sx={style.trendbizContainer}>
                <Box>
                    <Typography sx={style.title}>TrendsBIZ</Typography>
                </Box>
                <Box>
                    <Typography sx={style.platform}>
                        One platform, endless possibilities
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '75%',
                    }}
                >
                    <Typography sx={style.subtitle}>
                        You choose your own path and we help you follow it.
                        Because together we can do more. And better!
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Trendbiz;
