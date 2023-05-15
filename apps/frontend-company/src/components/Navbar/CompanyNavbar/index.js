import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Center from './components/Center';

import Left from './components/Left';
import Right from './components/Right';


const CompanyNavbar = () => {
    return (
        <>
            <AppBar
                position="fixed"
                color="secondary"
                sx={{
                    boxShadow: 'none',
                }}
            >
                <Toolbar>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'flex-end',
                            mt:2,
                    
                        }}
                    >
                        <Left />
                        <Center />
                        <Right />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default CompanyNavbar;
