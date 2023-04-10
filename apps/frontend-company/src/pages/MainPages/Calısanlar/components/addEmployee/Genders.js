import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';

function Genders() {
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
                label="Hizmet Verdiği Cinsiyet"
                variant="outlined"
                sx={{
                    width: '48%',
                }}
            />
            <TextField
                label="Çalışanın Cinsiyeti"
                variant="outlined"
                sx={{
                    width: '49%',
                }}
            />
        </Box>
    );
}

export default Genders;
