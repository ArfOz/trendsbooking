import React from 'react';
import { Box } from '@mui/material';
import ApRow1 from './components/ApRow1';
import ApRow2 from './components/ApRow2';

function AppointmentPerformance() {
    return (
        <>
            <Box
                sx={{
                    width: '79%',
                    height: '35vh',
                    background: '#FFFFFF',
                    borderRadius: '10px',
                    m: 'auto',
                    mt: 7,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <ApRow1 />
                <ApRow2 />
            </Box>
        </>
    );
}

export default AppointmentPerformance;
