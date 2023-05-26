import { Box } from '@mui/material';
import React from 'react';

import { MainLayout } from '../../../layout';
import Footer from '../../../components/Footer';
import PersonelNavbar from '../../../components/Navbar/PersonelNavbar';

import { AppointmentPerformance, Calendar, SaloonPerformance, ViewMyStore } from './components';

const Dashbord = () => {
    return (
        <MainLayout>
            <Box sx={{
                height: '100%',
                width: '100%',
                backgroundColor:   '#F3F1F7',
            }}>
            <PersonelNavbar/>
            <ViewMyStore />
            <AppointmentPerformance />
            <SaloonPerformance/>
            <Calendar/>
            <Footer />
          
            </Box>
            
        </MainLayout>
    );
};

export default Dashbord;
