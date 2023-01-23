import React from 'react';
import { Box, Typography } from '@mui/material';

import Left1 from './Left1';
import Left2 from './Left2';


function Left() {
    return (
        <>
            <Box
            sx={{
               
                display: "flex",
                flexDirection: "column",
                justifyContent:"space-between",
                width:"40%",
            }}
                
            >
                <Left1 />
                <Left2 />
            </Box>

         
        </>
    );
}

export default Left;
