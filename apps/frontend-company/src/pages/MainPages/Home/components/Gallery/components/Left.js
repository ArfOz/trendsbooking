import React from 'react';
import { Box } from '@mui/material';

import Left1 from './Left1';
import Left2 from './Left2';
import { style } from './style';

function Left() {
    return (
        <>
            <Box sx={style.leftContainer}>
                <Left1 />
                <Left2 />
            </Box>
        </>
    );
}

export default Left;
