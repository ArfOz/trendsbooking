import React from 'react';
import { Box, Typography } from '@mui/material';
import Left1 from './components/Left1';
import Left2 from './components/Left2';
import Right1 from './components/Right1';

function Gallery() {
    return (
        <>
        <Box sx={{
          border:"4px solid purple",
          display:"flex",
          width:"70%",
          m:'auto',
          mt:5,

        }}>

     
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
                <Left1 />

                <Left2 />
            </Box>
            {/* ===LeftContainer=== */}

            <Right1 />
            </Box>
        </>
    );
}

export default Gallery;
