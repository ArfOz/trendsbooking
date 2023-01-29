import React from 'react';
import { Box, Typography } from '@mui/material';
import { style } from './style';

function Right1() {
    return (
        <>
            <Box sx={style.rowBox}>
                <Box sx={style.row1Box1Container}>
                    <Box sx={style.typographyContainer}>
                        <Box>
                            <Typography sx={style.title}>
                                CALENDAR AND VISITS
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '80%',
                            }}
                        >
                            <Typography sx={style.subtitle}>
                                Team management and work schedules
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={style.row1Box2Container}></Box>
            </Box>
        </>
    );
}

export default Right1;
