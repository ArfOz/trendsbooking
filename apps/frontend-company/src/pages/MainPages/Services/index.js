import { Box } from '@mui/material';
import React from 'react';

import { MainLayout } from '../../../layout';
import MainTop from './components/MainTop';
import Footer from '../../../components/Footer';

import { Navbar } from './components';
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
                <Navbar />
                <MainTop />
                <CustomizedTabs />
                <BasicTable />
                <Footer />
            </Box>
        </MainLayout>
    );
};
export default Services;
