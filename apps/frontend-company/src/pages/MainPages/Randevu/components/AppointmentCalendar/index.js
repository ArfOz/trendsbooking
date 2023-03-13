import React from 'react';

import { Box, Typography } from '@mui/material';

function AppointmentCalendar() {
    return (
        <>
            <Box
                sx={{
                    mt: 5,
                    ml: 5,
                }}
            >
                <Typography
                    fontFamily="Roboto"
                    fontWeight={700}
                    fontSize="32px"
                    lineHeight="38px"
                    color="#07232C"
                >
                    Randevu Takvimi
                </Typography>
            </Box>
        </>
    );
}

export default AppointmentCalendar;
