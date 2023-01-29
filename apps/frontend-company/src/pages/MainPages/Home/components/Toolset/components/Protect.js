import React from 'react';
import { Box, Typography } from '@mui/material';
import Protect1 from '../../../../../../assets/Protect1.png';
import { style } from './style';

function Protect() {
    return (
        <>
            <Box sx={style.provider}>
                <Box
                    sx={{
                        mr: 3,
                    }}
                >
                    <img src={Protect1} alt="" width="100%" height="50%" />
                </Box>
                <Box sx={style.typographyContainer}>
                    <Box>
                        <Typography sx={style.title}>
                            Don't waste precious time. Protect your profits.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={style.subtitle}>
                            You love your job, so you spend a lot of time doing
                            it, but you want others to respect that. We want it
                            too. We will do everything so that not a single
                            minute is wasted.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Protect;
