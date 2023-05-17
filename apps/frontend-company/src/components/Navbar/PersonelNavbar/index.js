import React from 'react';
import NavbarLeft from './components/NavbarLeft';
import NavbarRight from './components/NavbarRight';
import { AppBar, Toolbar } from '@mui/material';
import NavbarTop from './components/NavbarTop';

function PersonelNavbar() {
    return (
        <>
        
            <AppBar position="sticky" color="info"
            sx={{
                boxShadow: "none",
                
            }}>
                <NavbarTop/>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        ml:5,
                        mr:5,
                    }}
                >
                    <NavbarLeft />
                    <NavbarRight />
                </Toolbar>
            </AppBar>
        </>
    );
}

export default PersonelNavbar;
