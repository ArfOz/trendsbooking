import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, IconButton } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function NavbarTop() {
    const navItems = [
        { title: 'Destek', path: '/Destek' },
        { title: 'Yorumlar', path: '/Yorumlar' },
        { title: 'Çıkış Yap', path: '/Çıkış Yap' },
        { title: 'Profile', path: '/profile', hasIcon: true },
    ];
    return (
        <>
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
                            startIcon={
                                item.hasIcon ? (
                                    <PermIdentityIcon sx={{ color: 'white' }} />
                                ) : null
                            }
                            key={item.title}
                            sx={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '16px',
                                color: '#FAFCFF',
                                textTransform: 'capitalize',
                                mx: 3,
                            }}
                        >
                            {item.title}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavbarTop;
