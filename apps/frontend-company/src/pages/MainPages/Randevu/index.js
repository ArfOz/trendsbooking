import { Box } from '@mui/material';
import React from 'react';

import { MainLayout } from '../../../layout';
import Footer from '../../../components/Footer';
import { Navbar } from '../Dashbord/components';

import AppointmentCalendar from './components/AppointmentCalendar';
import Calendar from './components/RandevuLeft/components/Calendar';
import CheckBox from './components/RandevuLeft/components/CheckBox';
import MakeAnAppointment from './components/RandevuLeft/components/MakeAnAppointment';
import RightTop from './components/RandevuRight/component/RightTop';

const Randevu = () => {
    return (
        <MainLayout>
            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#F3F1F7',
                    border:'3px solid purple',
                }}
            >
                <Navbar />
                <AppointmentCalendar />
                <Box
                    sx={{
                        display: 'flex',
                        mt: 5,

                        '& > :first-child': {
                            width: '26%',
                        },
                        '& > :last-child': {
                            width: '66%',
                        },
                    }}
                >
                    <Box
                        sx={{
                            border: '2px solid red',
                            ml: 5,
                            mr: 5,
                            background: '#FFFFFF',
                            borderRadius: '12px',
                            position: 'relative',
                        }}
                    >
                        {/* Sol kutu */}
                        <Calendar />
                        <CheckBox/>
                        <CheckBox/>
                        <MakeAnAppointment/>
                        <MakeAnAppointment/>
                       
                    </Box>
                    <Box
                        sx={{
                            border: '2px solid blue',
                            background: '#FFFFFF',
                            borderRadius: '12px',
                        }}
                    >
                        <RightTop/>
                    </Box>
                </Box>

                

                {/* <Footer /> */}
            </Box>
        </MainLayout>
    );
};

export default Randevu;
