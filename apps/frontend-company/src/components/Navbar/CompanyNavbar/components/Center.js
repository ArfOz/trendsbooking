import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

function Center() {
    const HomeAboutContact = [
        { title: 'Home', path: '/dashboard' },
        { title: 'About', path: '/calısanlar' },
        { title: 'Contact', path: '/randevu' },
    ];
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    width: '20%',
                }}
            >
                {HomeAboutContact.map((item) => (
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: 'white',
                                boxShadow: 'none',
                            },
                            color: '#9A9A9A',
                        }}
                    >
                        <Link
                            to={item.path}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            {item.title}
                        </Link>
                    </Button>
                ))}
            </Box>
        </>
    );
}

export default Center;
