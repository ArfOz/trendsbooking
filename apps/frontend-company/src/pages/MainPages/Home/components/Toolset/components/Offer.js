import React from 'react';
import { Box, Typography } from '@mui/material';
import Offer1 from '../../../../../../assets/Offer.png';


function Offer() {
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
                <Box >
                  <img src={Offer1} alt="" width="50px" height="50px" />
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
                            Offer more, earn better.
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
                            Did you know that your possibilities are much
                            greater than offering a classic range of services?
                            You can also sell products, gift cards, time passes
                            or service packages to attract customers and
                            increase revenue.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Offer;
