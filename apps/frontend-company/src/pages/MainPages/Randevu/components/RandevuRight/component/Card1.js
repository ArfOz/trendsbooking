import React from 'react'
import { Box, Typography, Button } from '@mui/material';

function Card1() {
  return (
    <>
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            width: '30%',
            borderRadius: 5,
            height: '50vh',
            border: '1px solid #E3E3E3',
            mt: 3,
            ml: 3,
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                width: '90%',
                m: 'auto',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    mb: 2,
                }}
            >
                <Typography
                    fontFamily="Roboto"
                    fontWeight={700}
                    fontSize={20}
                    lineHeight={1.4}
                    color="#07232C"
                >
                    Caner Erkin
                </Typography>

                <Typography
                    fontFamily="Roboto"
                    fontWeight={400}
                    fontSize={15}
                    lineHeight={1.4}
                    color="#C6C6C6"
                >
                    #40391
                </Typography>
            </Box>
            <Box>
                <Typography
                    fontFamily="Roboto"
                    fontWeight={400}
                    fontSize={14}
                    lineHeight={1.04}
                    color="#07232C"
                >
                    1 Haziran, Pazartesi - 13:30
                </Typography>
            </Box>
        </Box>

        <Box
            sx={{
                borderTop: '1px solid #E3E3E3',
                borderBottom: '1px solid #E3E3E3',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
                width: '90%',
                height: '28vh',
                m: 'auto',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography
                    fontFamily="Roboto"
                    fontWeight={400}
                    fontSize={15}
                    lineHeight={1.8}
                    color="#07232C"
                >
                    Saç Kesimi
                </Typography>

                <Typography
                    fontFamily="Roboto"
                    fontWeight={400}
                    fontSize={15}
                    lineHeight={1.8}
                    color="#07232C"
                >
                    100TL
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography
                    fontFamily="Roboto"
                    fontWeight={400}
                    fontSize={15}
                    lineHeight={1.8}
                    color="#07232C"
                >
                    Cilt Bakımı
                </Typography>

                <Typography
                    fontFamily="Roboto"
                    fontWeight={400}
                    fontSize={15}
                    lineHeight={1.8}
                    color="#07232C"
                >
                    60TL
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography
                    fontFamily="Roboto"
                    fontWeight={400}
                    fontSize={15}
                    lineHeight={1.8}
                    color="#07232C"
                >
                    Berber
                </Typography>

                <Typography
                    fontFamily="Roboto"
                    fontWeight={400}
                    fontSize={15}
                    lineHeight={1.8}
                    color="#07232C"
                >
                    Sabri SarıOğlu
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography
                    fontFamily="Roboto"
                    fontWeight={800}
                    fontSize={15}
                    lineHeight={1.8}
                    color="#292D32"
                >
                    Total
                </Typography>

                <Typography
                    fontFamily="Roboto"
                    fontWeight={800}
                    fontSize={15}
                    lineHeight={1.8}
                    color="#292D32"
                >
                    160TL
                </Typography>
            </Box>
        </Box>

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '70%',
                m: 'auto',
            }}
        >
            <Button
                variant="contained"
                color="primary"
                sx={{
                    textTransform: 'capitalize',
                    '&:hover': {
                        backgroundColor: '#F74600',
                    },
                }}
            >
                onayla
            </Button>
            <Button
                variant="outlined"
                color="primary"
                sx={{
                    textTransform: 'capitalize',
                }}
            >
                Beklet
            </Button>
        </Box>
    </Box>
</>
  )
}

export default Card1