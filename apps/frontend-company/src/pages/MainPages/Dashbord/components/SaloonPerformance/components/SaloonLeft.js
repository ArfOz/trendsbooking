import React from 'react';
import { Box } from '@mui/material';

import Left1 from './Left1';
import Left2 from './Left2';
import Left3 from './Left3';
import Left4 from './Left4';
import Left5 from './Left5';

function SaloonLeft() {
    return (
        <>
            <Box
                sx={{
                    width: '48%',
                    height: '100%',
                    backgroundColor: '#07232C',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'space-between',
                }}
            >
                <Left1 />
                <Left2 />
                <Left3 />
                <Left4 />
                <Left5 />
            </Box>
        </>
    );
}

export default SaloonLeft;
