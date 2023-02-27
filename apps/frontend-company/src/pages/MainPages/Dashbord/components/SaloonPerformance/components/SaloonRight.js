import { Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const paragraphText = (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <Box
            sx={{
                display: 'flex',
            }}
        >
            <CircleIcon sx={{ color: '#12B347' }} />
            <Typography
                sx={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '22px',
                    alignItems: 'center',
                    color: '#07232C',
                }}
            >
                Your password has been changed successfully
            </Typography>
        </Box>

        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                alignItems: 'center',
                color: '#9A9A9A',
            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor in
        </Typography>
    </Box>
);

function SaloonRight() {
    return (
        <>
            <Box
                sx={{
                    width: '48%',
                    height: '100%',
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    pl:2,
                }}
            >
                    <Typography
                sx={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '24px',
                    lineHeight: '30px',
                    alignItems: 'center',
                    color: '#07232C',
                }}
            >
                Bildirimler
            </Typography>
            

                <Box
                    sx={{
                        height: '90%',
                        overflowY: 'auto',
                        pt: 2,

                        '& p': {
                            marginBottom: '16px',
                        },
                    }}
                >
                
                    {[...Array(8)].map((_, index) => (
                        <Typography key={index} variant="body1">
                            {paragraphText}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default SaloonRight;
