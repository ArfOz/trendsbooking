import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

function Right() {
    const Links = [
        { title: 'Giriş Yap', path: '/Auth/Login' },
        { title: 'Üye Ol', path: '/Auth/Register' },
    ];

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: {
                        sm: '28%',
                        md: '24%',
                        lg: '18%',
                    },
                }}
            >
                {Links.map((item, index) => (
                    <Link
                        to={item.path}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <Button
                            variant="outlined"
                            key={item.title}
                            sx={{
                                textTransform: 'capitalize',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    boxShadow: 'none',
                                },
                            }}
                        >
                            {item.title}
                        </Button>
                    </Link>
                ))}
            </Box>
        </>
    );
}

export default Right;
