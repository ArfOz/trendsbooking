import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';

function Password() {
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
                label="Rol Ata"
                variant="outlined"
                sx={{
                    width: '48%',
                }}
            />
            <TextField
                label="Şifre"
                variant="outlined"
                sx={{
                    width: '49%',
                }}
            />
        </Box>
    );
}

export default Password;
