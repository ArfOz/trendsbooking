import React from 'react';
import { Box, Typography } from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { style } from './style';

function Fleft5() {
    return (
        <>
        <Box sx={style.rowContainer}>
            <Box
                sx={{
                    background: '#F2F8FF',
                    borderRadius: '100%',
                }}
            >
                <VerifiedUserOutlinedIcon fontSize="large" />
            </Box>

            <Box sx={style.typographyContainer}>
                <Typography sx={style.typography}>
                Protection against absences
                </Typography>
            </Box>
        </Box>
    </>
    );
}

export default Fleft5;
