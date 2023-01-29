import React from 'react';
import { Box, Typography } from '@mui/material';
import { style } from './style';

function Left2() {
    return (
        <>
            <Box sx={style.left2Box}>
                <Box
                    sx={{
                        width: '90%',
                        m: 'auto',
                    }}
                >
                    <Typography sx={style.left2Typography}>
                        A new way to manage business
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Left2;
