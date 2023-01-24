import React from 'react';
import { Box, Typography } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Fleft1 from './Fleft1';
import Fleft2 from './Fleft2';
import Fleft3 from './Fleft3';
import Fleft4 from './Fleft4';
import Fleft5 from './Fleft5';
import Fleft6 from './Fleft6';
import LeftButton from './LeftButton';

function Fleft() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '50%',
                    border: '2px solid red',
                }}
            >
                <Box
                    sx={{
                        border: '3px solid red',
                        width: '75%',
                        mt:8,
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '800',
                            fontSize: '36px',
                            lineHeight: '42px',
                            color: '#07232C',
                        }}
                    >
                        The foundations on which you can build your business
                    </Typography>
                </Box>
                {/* 00000000000 */}
                <Box
                    sx={{
                        border: '3px solid blue',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '70%',
                    }}
                >
                    <Fleft1 />
                    <Fleft2 />
                    <Fleft3 />
                    <Fleft4 />
                    <Fleft5 />
                    <Fleft6 />
                    <LeftButton/>
                </Box>

                {/* 00000000000 */}
            </Box>
        </>
    );
}

export default Fleft;
