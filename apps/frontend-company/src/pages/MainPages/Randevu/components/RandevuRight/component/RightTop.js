import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function RightTop() {
    const [selectedButton, setSelectedButton] = useState('gun');

    const handleButtonSelection = (value) => {
        setSelectedButton(value);
        // Seçili olan buton değerini başka işlemler için kullanabilirsiniz.
    };
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '95%',
                    m: 'auto',
                    mt:2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '30%',
                        height: '8vh',
                        border: '1px solid #D9D9D9',
                        borderRadius: '6px',
                    }}
                >
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            border: 'none',
                        }}
                        color="info"
                        variant={
                            selectedButton === 'gun' ? 'contained' : 'outlined'
                        }
                        onClick={() => handleButtonSelection('gun')}
                    >
                        Gün
                    </Button>
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            border: 'none',
                        }}
                        color="info"
                        variant={
                            selectedButton === 'hafta'
                                ? 'contained'
                                : 'outlined'
                        }
                        onClick={() => handleButtonSelection('hafta')}
                    >
                        Hafta
                    </Button>
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            border: 'none',
                        }}
                        color="info"
                        variant={
                            selectedButton === 'ay' ? 'contained' : 'outlined'
                        }
                        onClick={() => handleButtonSelection('ay')}
                    >
                        Ay
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '40%',
                    }}
                >
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            border: '1px solid #D9D9D9',
                            borderRadius: '6px',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '18px',
                            textAlign: 'center',
                        }}
                        color="info"
                    >
                        Bugün
                    </Button>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: 24,

                                textAlign: 'center',
                                color: '#07232C',
                            }}
                        >
                            Ocak-Şubat 2023
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '20%',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <ArrowBackIosNewIcon color="info" />
                        <ArrowForwardIosIcon color="info" />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default RightTop;
