import React from 'react';
import { Box, Typography } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { style } from './style';


function Fleft6() {
    return (
        <>
        <Box sx={style.rowContainer}>
            <Box
                sx={{
                    background: '#F2F8FF',
                    borderRadius: '100%',
                }}
            >
                <ApartmentIcon fontSize="large" />
            </Box>

            <Box sx={style.typographyContainer}>
                <Typography sx={style.typography}>
                Results submit
                </Typography>
            </Box>
        </Box>
    </>
    );
}

export default Fleft6;
