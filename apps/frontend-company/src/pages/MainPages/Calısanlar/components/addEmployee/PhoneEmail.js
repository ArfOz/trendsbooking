import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';

function PhoneEmail({ value1, value2, onChange1, onChange2 }) {
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
                label="Telefon"
                variant="outlined"
                value={value1}
                onChange={onChange1}
                sx={{
                    width: '48%',
                }}
            />
            <TextField
                label="Email"
                variant="outlined"
                value={value2}
                onChange={onChange2}
                sx={{
                    width: '49%',
                }}
            />
        </Box>
    );
}

export default PhoneEmail;
