
import React from 'react';
import { Box } from '@mui/material';

import { Navbar } from '../Dashbord/components';
import PersonelNavbar from '../../../components/Navbar/PersonelNavbar';

import { MainLayout } from '../../../layout';
import Footer from '../../../components/Footer';
import StaffManagement from './components/StaffManagement';
import CustomizedTabs from './components/CustomizedTabs';
import TableStaff from './components/TableStaff';
import AddNewEmployeeForm from './components/AddNewEmployeeForm';


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
               <PersonelNavbar/>
               {/* <StaffManagement/> */}
               <AddNewEmployeeForm/>
               <CustomizedTabs/>
               <TableStaff/>
               <Footer/>


            </Box>

        </MainLayout>
    );
};

export default Calısanlar;
