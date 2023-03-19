import React from 'react';

import { Box } from '@mui/material';

import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

function Cards() {
    return (
        <>
  
        <Box sx={{
            display: 'flex',
        }}>
             <Card1/>
             <Card2/>
             <Card3/>

        </Box>
        <Box>
        <Card4/>

        </Box>
        </>
      
    );
}

export default Cards;
