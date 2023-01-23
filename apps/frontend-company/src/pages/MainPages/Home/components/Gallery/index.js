import React from 'react';
import { Box, Typography } from '@mui/material';

import Left from './components/Left';
import Right from './components/Right';

function Gallery() {
    return (
        <>
           
                <Box
                    sx={{
                        border: '5px solid blue',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '80%',
                        height: '108vh',
                        m:'auto',
                        mt:5
                       
                        
                    }}
                >
                    <Left />
                    <Right/>
                </Box>
        
        </>
    );
}

export default Gallery;
