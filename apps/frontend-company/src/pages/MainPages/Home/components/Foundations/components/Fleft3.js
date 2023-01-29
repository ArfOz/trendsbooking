import React from 'react';
import { Box, Typography } from '@mui/material';
import CreditScoreRoundedIcon from '@mui/icons-material/CreditScoreRounded';
import { style } from './style';

function Fleft3() {
    return (
        <>
            <Box
                sx={style.rowContainer}
            >
                <Box
                    sx={{
                        background: '#F2F8FF',
                        borderRadius: '100%',
                    }}
                >
                    <CreditScoreRoundedIcon fontSize="large" />
                </Box>

                <Box
                    sx={style.typographyContainer}
                >
                   <Typography
                        sx={style.typography}
                    >
                        Mobile payments
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Fleft3;
