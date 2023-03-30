
import React from 'react';
import { Box } from '@mui/material';

import { Navbar } from '../Dashbord/components';

import { MainLayout } from '../../../layout';
import Footer from '../../../components/Footer';
import StaffManagement from './components/StaffManagement';
import CustomizedTabs from './components/CustomizedTabs';
import TableStaff from './components/TableStaff';


const Calısanlar = () => {
    return (
        <MainLayout>
         
          <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#F3F1F7',
                    
                }}
            >
               <Navbar/>
               <StaffManagement/>
               <CustomizedTabs/>
               <TableStaff/>
               <Footer/>
            
          
            </Box>
            
        </MainLayout>
    );
};

export default Calısanlar;