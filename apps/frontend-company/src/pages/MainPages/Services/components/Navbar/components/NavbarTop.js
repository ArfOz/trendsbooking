import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { style } from './style';

function NavbarTop() {
    const navItems = [
        { title: 'Yorumlar', path: '/Yorumlar' },
        { title: 'Profile', path: '/profile' },
    ];
    return (
        <AppBar position="relative" color="NavbarTop">
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mr: 3,
                }}
            >
                {navItems.map((item) => (
                    <Button
                        key={item.title}
                        sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '16px',
                            color: '#FAFCFF',
                            textTransform: 'capitalize',
                        }}
                    >
                        {item.title}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default NavbarTop;
