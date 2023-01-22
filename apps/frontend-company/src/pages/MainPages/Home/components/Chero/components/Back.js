import { Box, Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

import React from 'react';
import herobg from '../../../../../../assets/herobg.png';
import herophone from '../../../../../../assets/herophone.png';


function Back() {
    return (
        <>
            <Box
                sx={{
                    height: '557px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: '30px',
                    background: `url(${herobg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    margin: 'auto',
                    mt: 12,
                    width: '95%',
                    position: 'relative',
                    border: '2px solid blue',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        background: '#FFFFFF',
                        boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
                        borderRadius: '15px',
                        width: '72px',
                        height: '72px',
                        position: 'absolute',
                        right: 745,
                        bottom: -30,
                    }}
                >
                    <IconButton aria-label="delete" color="primary">
                        <ExpandCircleDownOutlinedIcon />
                    </IconButton>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '-6px',
                        right: '87px',
                    }}
                >
                    <img src={herophone} alt="" />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'flex-start',
                        border: '4px solid red',
                        width: '50%',
                        height: '100%',
                        ml: 10,
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            border: '4px solid blue',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: 800,
                                fontSize: '70px',
                                lineHeight: '100%',
                                color: '#FFFFFF',
                            }}
                        >
                            You already have a business and a passion. Get more
                            from
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '75%',
                            border: '4px solid blue',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '20px',
                                lineHeight: '150%',
                                color: '#F2F8FF',
                            }}
                        >
                            Booksy Biz will help you with everyday duties, and
                            you will gain time to prepare for the challenges
                            tomorrow will bring.
                        </Typography>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            sx={{
                                width: '150%',
                                fontWeight: '600',
                                fontSize: '15px',
                                lineHeight: '200%',
                                color: ' #FFFFFF',
                                boxShadow: 'none',
                                textTransform: 'capitalize',
                                '&:hover': {
                                    backgroundColor: 'primary',
                                },
                                margin: 'auto',
                            }}
                        >
                            Ücretsiz Dene
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Back;
