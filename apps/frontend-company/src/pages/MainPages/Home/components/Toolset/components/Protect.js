import React from 'react';
import { Box, Typography } from '@mui/material';
import Protect1 from '../../../../../../assets/Protect1.png';


function Protect() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    border: '3px solid green',
                    width: '40%',
                    height: '100%',
                }}
            >
                <Box>
                <img src={Protect1} alt="" width="50px" height="50px" />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '92%',
                        border: '2px solid red',
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
                            Don't waste precious time. Protect your profits.
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
