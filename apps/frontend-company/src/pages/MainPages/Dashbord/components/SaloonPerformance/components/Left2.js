import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import { Fab } from '@mui/material';

export default function Left2() {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '50%',
                justifyContent: 'space-between',
                alignItems: 'center',
                ml: 4,
            
            }}
        >
            <Fab color="secondary">
                <SingleBedIcon />
            </Fab>

            <Typography
                sx={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 36,
                    lineHeight: '60px',
                    color: '#FFFFFF',
                }}
            >
                12,566 TL
            </Typography>
        </Box>
    );
}
