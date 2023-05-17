import { Box } from '@mui/material';
import React from 'react';

import { MainLayout } from '../../../layout';
import MainTop from './components/MainTop';
import Footer from '../../../components/Footer';

import PersonelNavbar from '../../../components/Navbar/PersonelNavbar';
import BasicTable from './components/ServiceList';
import CustomizedTabs from './components/GenderTabs/CustomizedTabs';

const Services = () => {
    return (
        <MainLayout>
            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#F3F1F7',
                }}
            >
                <PersonelNavbar />
                <MainTop />
                <CustomizedTabs />
                <BasicTable />
                <Footer />
            </Box>
        </MainLayout>
    );
};
export default Services;
