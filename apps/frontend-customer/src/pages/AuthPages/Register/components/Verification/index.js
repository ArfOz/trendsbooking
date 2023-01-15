import React from 'react';
import ReactInputVerificationCode from 'react-input-verification-code';
import './verification.css';
import { Box } from '@mui/material';

export default function Verification({handleChangeVerification}) {
    return (
        <Box
            sx={{
                display: 'none',
                height: '360px',
                alignItems: 'center',
            }}
        >
            <ReactInputVerificationCode
                autoFocus
                placeholder=""
                onChange={handleChangeVerification}
            />
        </Box>
    );
}
