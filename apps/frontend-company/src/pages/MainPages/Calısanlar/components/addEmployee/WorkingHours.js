import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';

function WorkingHours() {
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
                label="Çalışma Saatleri"
                variant="outlined"
                sx={{
                    width: '100%',
                }}
            />
           
           
        </Box>
    );
}

export default WorkingHours;
