import React from 'react';
import { Box } from '@mui/material';
import Tools from './components/Tools';
import Offer from './components/Offer';
import Protect from './components/Protect';
import Wings from './components/Wings';
import { style } from './style';

function Toolset() {
    return (
        <>
            <Box sx={style.toolSetContainer}>
                <Tools />
                <Offer />
            </Box>
            <Box sx={style.toolSetContainer}>
                <Protect />
                <Wings />
            </Box>
        </>
    );
}

export default Toolset;
