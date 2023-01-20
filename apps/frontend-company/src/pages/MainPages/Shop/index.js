import React from 'react';
import { Box } from '@mui/material';

import { ShopsLeft, ShopsRight } from './components';
import NavbarSecond from '../../../components/Navbar/NavbarSecond'
import Footer from '../../../components/Footer';

function Shop() {
    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 113,
                }}
            >
                <NavbarSecond />
            </Box>

            <Box
                sx={{
                    mt: 20,
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'block',
                        lg: 'block',
                    },
                }}
            >
                <ShopsLeft />
            </Box>
            <Box
                sx={{
                    mt: 20,
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'block',
                        lg: 'block',
                    },
                }}
            >
                <ShopsRight />
            </Box>
            <Box
                sx={{
                    mt: {
                        xs: 65,
                        sm: 20,
                        md: 20,
                        lg: 20,
                    },
                    m: 1,
                    display: {
                        xs: 'block',
                        sm: 'block',
                        md: 'none',
                        lg: 'none',
                    },
                }}
            >
                <ShopsRight />
            </Box>
            <Box
                sx={{
                    mt: 20,
                    display: {
                        xs: 'block',
                        sm: 'block',
                        md: 'none',
                        lg: 'none',
                    },
                }}
            >
                <ShopsLeft />
            </Box>
            <Footer/>
        </>
    );
}

export default Shop;
