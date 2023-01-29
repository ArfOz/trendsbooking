import React from 'react';
import { Box } from '@mui/material';
import Right1 from './Right1';
import Right2 from './Right2';
import Right3 from './Right3';
import { style } from './style';

function Right() {
    return (
        <>
            <Box sx={style.rightContainer}>
                <Right1 />
                <Right2 />
                <Right3 />
            </Box>
        </>
    );
}

export default Right;
