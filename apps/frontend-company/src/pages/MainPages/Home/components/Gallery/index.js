import React from 'react';
import { Box } from '@mui/material';

import Left from './components/Left';
import Right from './components/Right';
import { style } from './style';

function Gallery() {
    return (
        <>
            <Box sx={style.componentsContainer}>
                <Left />
                <Right />
            </Box>
        </>
    );
}

export default Gallery;
