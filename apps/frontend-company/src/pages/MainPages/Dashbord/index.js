import { Box } from '@mui/material';
import React from 'react';

import { MainLayout } from '../../../layout';

import { AppointmentPerformance, Navbar, ViewMyStore } from './components';

const Dashbord = () => {
    return (
        <MainLayout>
            <Box sx={{
                height: '100vh',
                width: '100%',
                backgroundColor:   '#F3F1F7',
            }}>
            <Navbar />
            <ViewMyStore />
            <AppointmentPerformance />
          
            </Box>
            
        </MainLayout>
    );
};

export default Dashbord;
