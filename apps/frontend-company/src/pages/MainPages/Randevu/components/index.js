import { Box } from '@mui/material';
import React from 'react';
import RandevuLeft from './RandevuLeft';
import RandevuRight from './RandevuRight/RandevuRight';

function RandevuMain() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    border:"3px solid blue",
                    width: '95%',
                    m:'auto',
                    mt:5,
                }}
            >
                <RandevuLeft />
                <RandevuRight />
            </Box>
        </>
    );
}

export default RandevuMain;
