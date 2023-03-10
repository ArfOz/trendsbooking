import { Box } from '@mui/material';
import React from 'react';

import { MainLayout } from '../../../layout';
import Footer from '../../../components/Footer';
import { Navbar } from '../Dashbord/components';
import RandevuMain from './components';



const Randevu = () => {
    return (
        <MainLayout>
            <Box sx={{
                height: '100%',
                width: '100%',
                backgroundColor:'#F3F1F7',
            }}>
            <Navbar />
            <RandevuMain/>
            
            {/* <Footer /> */}
          
            </Box>
            
        </MainLayout>
    );
};

export default Randevu;