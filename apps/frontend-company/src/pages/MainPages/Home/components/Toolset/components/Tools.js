import React from 'react';
import { Box, Typography } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { style } from './style';

function Tools() {
    return (
        <>
            <Box sx={style.provider}>
                <Box
                    sx={{
                        mr: 5,
                    }}
                >
                    <AccessAlarmIcon
                        sx={{
                            width: '100%',
                            height: '40%',
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

export default Tools;
