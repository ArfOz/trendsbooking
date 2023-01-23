import React from 'react';
import { Box, Typography } from '@mui/material';


import Left1 from './Left1';
import Left2 from './Left2';
import Right1 from './Right1';

function Gallery() {
    return (
        <>
            {/* ===LeftContainer=== */}
            <Box
                sx={{
                    border: '5px solid blue',
                    display: 'flex',
                    width: '35%',
                    height: '110vh',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                }}
            >
                {/* ===picture1=== */}
               <Left1/>
                {/* ===picture1=== */}

               <Left2/>
            </Box>
            {/* ===LeftContainer=== */}


           <Right1/>

          

           
            


            </>
    );
}

export default Gallery;
