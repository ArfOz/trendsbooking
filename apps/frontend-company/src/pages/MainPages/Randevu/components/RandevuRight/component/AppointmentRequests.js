import React from 'react';

import { Box, Typography } from '@mui/material';

function AppointmentRequests() {
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
                    fontSize="24px"
                    lineHeight="28px"
                    color="#07232C"
                >
                    Randevu İstekleri
                </Typography>
            </Box>
        </>
    );
}

export default AppointmentRequests;
