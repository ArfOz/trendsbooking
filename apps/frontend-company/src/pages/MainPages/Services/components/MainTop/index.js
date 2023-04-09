import React from 'react';
import { Box, Button } from '@mui/material';
import { Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ServiceModal from '../ServiceModal';

function MainTop() {
  const [modalOpen, setModalOpen] = React.useState(false);
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
                <Button onClick={() => setModalOpen(true)} variant="contained" sx={{m: 4}}>Yeni Hizmet</Button>

                <ServiceModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                />
            </Box>
        </Box>
    );
}

export default MainTop;
