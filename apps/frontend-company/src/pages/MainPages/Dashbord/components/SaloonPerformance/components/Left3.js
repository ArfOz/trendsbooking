import { Box, Typography } from '@mui/material';

function Left3() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '85%',
                    ml:4,
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
                        2,450 TL
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
                        Ciro
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
                        400 TL
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
                        Nakit
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Left3;
