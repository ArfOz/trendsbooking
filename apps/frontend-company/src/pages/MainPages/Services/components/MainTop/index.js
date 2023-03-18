import React from 'react';
import { Box, Button } from '@mui/material';
import { Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function MainTop() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                m: 3,
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" component="h2">
                    Hizmet Yönetimi
                </Typography>
                <Typography variant="h7" component="h4">
                    Tüm hizmetlerini tek bir yerden yönetin
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <Button variant="outlined" startIcon={<DownloadIcon />} sx={{m: 4}}>
                    İndir
                </Button>
                <Button variant="contained" sx={{m: 4}}>Yeni Hizmet</Button>
            </Box>
        </Box>
    );
}

export default MainTop;
