import React from 'react';
import { Box, Typography } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

function Tools() {
    return (
        <>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            border:"3px solid green",
            width:"40%",
            height:"100%",
        }}>

       
        <Box>
            <AccessAlarmIcon sx={{
                width: "35px",
                height: "35px",
            }}/>

        </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width:"92%",
                    border:"2px solid red",
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '800',
                            fontSize: '20px',
                            lineHeight: '23px',
                            color: '#07232C',
                        }}
                    >
                        Tools with which you will spread your wings.
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '19px',
                            color: '#9A9A9A',
                        }}
                    >
                        Manage your team, set up work schedules, check
                        inventory, process additional payments, and use reports
                        to make quantified decisions.
                    </Typography>
                </Box>
            </Box>
            </Box>
        </>
    );
}

export default Tools;
