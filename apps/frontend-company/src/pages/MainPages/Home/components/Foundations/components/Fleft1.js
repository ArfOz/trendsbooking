import React from 'react';
import { Box, Typography } from '@mui/material';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import { style } from './style';


function Fleft1() {
    return (
        <>
            <Box
                sx={style.rowContainer}
            >
                <Box
                    sx={{
                        background: '#FFFFFF',
                        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.1)',
                        borderRadius: '6px',
                    }}
                >
                    <DateRangeRoundedIcon fontSize="large" />
                </Box>

                <Box
                    sx={style.typographyContainer}
                >
                    <Typography
                        sx={style.calendar}
                    >
                        Calendar and visits
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Fleft1;
