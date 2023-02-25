import { Box, Typography } from '@mui/material';

function Left4() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '85%',
                    ml: 4,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        width: '45%',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '30px',
                            lineHeight: '50px',
                            color: '#FFFFFF',
                        }}
                    >
                        1,500 TL
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '30px',
                            color: '#FFFFFF',
                        }}
                    >
                        Kart
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        borderRadius: '10px',
                        width: '25%',
                      
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '30px',
                            lineHeight: '50px',
                            color: '#FFFFFF',
                        }}
                    >
                        250 TL
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '30px',
                            color: '#FFFFFF',
                        }}
                    >
                        Havale / EFT
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Left4;
