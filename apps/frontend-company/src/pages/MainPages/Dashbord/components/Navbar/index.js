import React from 'react';
import NavbarLeft from './components/NavbarLeft';
import NavbarRight from './components/NavbarRight';
import { AppBar, Toolbar } from '@mui/material';

function Navbar() {
    return (
        <>
            <AppBar position="fixed" color="info"
            sx={{
                boxShadow: "none",
            }}>
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

export default Navbar;
