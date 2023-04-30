import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

function FirstLastName() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

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
                value={firstName}
                onChange={handleFirstNameChange}
                sx={{
                    width: '48%',
                }}
            />
            <TextField
                label="Soyisim"
                variant="outlined"
                value={lastName}
                onChange={handleLastNameChange}
                sx={{
                    width: '49%',
                }}
            />
        </Box>
    );
}

export default FirstLastName;
