import React from 'react';
import { Box,} from '@mui/material';
import CalendarLeft from './components/CalendarLeft';
import CalendarRight from './components/CalendarRight';

function Calendar() {
    return (
        <>
            <Box
                sx={{
                    width: '79%',
                    height: '64vh',
                    borderRadius: '10px',
                    m: 'auto',
                    mt: 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <CalendarLeft />
                <CalendarRight />
            </Box>
        </>
    );
}

export default Calendar;
