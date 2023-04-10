

import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

function CalendarColor() {
  
    return (
        <Box
            sx={{
                width: '95%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                m: 'auto',
                mt: 3,
            }}
        >
            <TextField
                label="Hizmet Ata"
                variant="outlined"
                
                sx={{
                    width: '48%',
                }}
            />
            <TextField
                label="Takvim Rengi"
                variant="outlined"
                
                sx={{
                    width: '49%',
                }}
            />
        </Box>
    );
}

export default CalendarColor;
