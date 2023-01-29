import React from 'react';
import { Box, Typography } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import { style } from './style';

function Wings() {
    return (
        <>
            <Box sx={style.provider}>
                <Box
                    sx={{
                        mr: 6,
                    }}
                >
                    <HandymanIcon
                        sx={{
                            width: '100%',
                            height: '40px',
                        }}
                    />
                </Box>
                <Box sx={style.typographyContainer}>
                    <Box>
                        <Typography sx={style.title}>
                            Tools with which you will spread your wings.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={style.subtitle}>
                            Manage your team, set up work schedules, check
                            inventory, process additional payments, and use
                            reports to make quantified decisions.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Wings;
