import { Box } from '@mui/material';
import React from 'react';

import { MainLayout } from '../../../layout';

//import Footer from '../../../components/Footer'';
import {Navbar, MainTop} from './components';


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
                {/* <Footer /> */}
            </Box>
        </MainLayout>
    );
};
export default Services;
