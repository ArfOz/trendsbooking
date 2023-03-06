import { Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

function CalendarRight() {
    const paragraphText = (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
               
            }}
        >

            <Box sx={{
               
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '40%',
            }}>
            <Box>
                <CircleIcon sx={{
                    width: '60px',
                    height: '60px',      
                   color: '#F7F8FA',
                    borderRadius: '100px',
                }}/>
            </Box>



            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '16px',
                        lineHeight: '34px',
                        alignItems: 'center',
                        color: '#07232C',
                    }}
                >
                    Mehmet Demir
                </Typography>


                <Typography
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '23px',
                        alignItems: 'center',
                        color: '#9A9A9A',
                    }}
                >
                    25 Ocr 2045
                </Typography>
            </Box>

            </Box>




            <Box>
                <Typography
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '20px',
                        lineHeight: '34px',
                        alignItems: 'center',
                        color: '#07232C',
                    }}
                >
                    250 TL
                </Typography>
            </Box>
        </Box>
    );

    return (
        <>
            <Box
                sx={{
                    width: '48%',
                    height: '100%',
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '24px',
                            lineHeight: '30px',
                            alignItems: 'center',
                            color: '#07232C',
                            mt: 4,
                            ml: 4,
                        }}
                    >
                        Ödeme Geçmişi
                    </Typography>
                </Box>
                <Box
                    sx={{
                     
                        width: '90%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        m:'auto',
                     
                    }}
                >
                    {[...Array(5)].map((_, index) => (
                        <Typography key={index} variant="body1">
                            {paragraphText}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default CalendarRight;
