import React from 'react';
import { Box, Typography } from '@mui/material';
import LocalConvenienceStoreRoundedIcon from '@mui/icons-material/LocalConvenienceStoreRounded';
import { style } from './style';

function Fleft4() {
    return (
        <>
            <Box sx={style.rowContainer}>
                <Box
                    sx={{
                        background: '#F2F8FF',
                        borderRadius: '100%',
                    }}
                >
                    <LocalConvenienceStoreRoundedIcon fontSize="large" />
                </Box>

                <Box sx={style.typographyContainer}>
                    <Typography sx={style.typography}>
                    Marketing tools
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Fleft4;
