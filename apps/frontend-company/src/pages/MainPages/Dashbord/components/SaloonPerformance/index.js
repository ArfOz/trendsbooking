import React from 'react';
import { Box, Typography } from '@mui/material';
import SaloonLeft from './components/SaloonLeft';
import SaloonRight from './components/SaloonRight';


function SaloonPerformance() {
    return (
        <>
          <Box
                sx={{
                    width: '79%',
                    height: '64vh',
                    background: '#FFFFFF',
                    borderRadius: '10px',
                    m: 'auto',
                    mt: 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border:'5px solid blue',
                }}
            >
               <SaloonLeft/>
               <SaloonRight/>
               
            </Box>

        </>
    )
}

export default SaloonPerformance;
