import React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import logoWordUs from '../../../assets/logoWordUs.png';
import DepartmentsCards from './CardSwiper';

function Departments() {
    return (
        <Box sx={{ m: 3 }}>
            <AppBar
                position="static"
                sx={{ backgroundColor: 'white', boxShadow: 'none' }}
            >
                <Toolbar>
                    <img src={logoWordUs} alt="logoWord" />
                </Toolbar>
            </AppBar>
            <Box>
                <Typography
                    variant="h1"
                    component="div"
                    sx={{
                        width: '220px',
                        height: '18px',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '28px',
                        lineHeight: '150%',
                        m: 3,
                    }}
                >
                    Şubeler
                </Typography>
                <Typography
                    variant="h2"
                    component="div"
                    sx={{
                        width: '300px',
                        height: '15px',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '15px',
                        mt: 5,
                        ml:3,
                        mb:5
                    }}
                >
                    Devam etmek için bir şube seçiniz
                </Typography>
            </Box>

            <DepartmentsCards />
        </Box>
    );
}

export default Departments;
