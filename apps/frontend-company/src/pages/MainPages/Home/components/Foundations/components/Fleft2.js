import React from 'react';
import { Box, Typography } from '@mui/material';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import { style } from './style';


function Fleft2() {
    return (
        <>
            <Box
                sx={style.rowContainer}
            >
                <Box sx={{
                        background: '#F2F8FF',
                       
                        borderRadius: '100%',
                    }}>

                    <BusinessRoundedIcon fontSize='large'
                    />
                </Box>

                <Box
                    sx={style.typographyContainer}
                >
                    <Typography
                        sx={style.typography}
                    >
                        Business management
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Fleft2;
