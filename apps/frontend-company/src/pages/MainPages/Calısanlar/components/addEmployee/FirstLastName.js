import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

function FirstLastName({ value1, value2, onChange1, onChange2 }) {
  

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
                label="İsim"
                variant="outlined"
                value={value1}
                onChange={onChange1}
                sx={{
                    width: '48%',
                }}
            />
            <TextField
                label="Soyisim"
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

export default FirstLastName;
