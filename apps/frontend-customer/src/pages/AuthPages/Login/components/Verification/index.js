import React from 'react';
import ReactInputVerificationCode from 'react-input-verification-code';
import './verification.css';
import { Box, Button, Typography } from '@mui/material';

export default function Verification({
    handleChangeVerification,
    display,
    handleSubmitVerification,
}) {
    return (
        <Box
            sx={{
                display: { display },
                height: '93%',
                alignItems: 'center',
                flexDirection: 'column',
                m: 'auto',
                justifyContent: 'center',
            }}
            component="form"
            onSubmit={handleSubmitVerification}
        >
            <Typography
                component="h2"
                variant="h4"
                sx={{ color: '#F75936', mb: '7rem' }}
            >
                Hoşgeldiniz
            </Typography>
            <ReactInputVerificationCode
                autoFocus
                placeholder=""
                onChange={handleChangeVerification}
            />
            <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{
                    maxWidth: '280px',
                    mt: '9rem',
                    mb: '10px',
                    backgroundColor: '#F75936',
                    border: '1px solid green',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#F75936',
                    },
                }}
            >
                DOĞRULA
            </Button>
        </Box>
    );
}
