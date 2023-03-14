import { Box } from '@mui/material';
import React from 'react';

import { MainLayout } from '../../../layout';
import MainTop from  './components/MainTop';
//import Footer from '../../../components/Footer'';
import {Navbar} from './components';

import Footer from '../../../components/Footer'

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
                {/* <EnhancedTable/> */}
                <Footer />
            </Box>
        </MainLayout>
    );
};
export default Services;
