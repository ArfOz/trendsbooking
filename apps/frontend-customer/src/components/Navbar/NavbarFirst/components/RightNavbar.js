import React from 'react';

import { Box, Button } from '@mui/material';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { Link } from 'react-router-dom';
import { style } from './style';

const RightNavbar = () => {
    const Links = [
        { title: 'Giriş Yap', path: '/Auth/Login' },
        { title: 'İşletme Hesabı', path: '/Auth/Register' },
    ];

    return (
        <>
            {/* right navbar */}
            <Box sx={style.navbarbuttoncontainer}>
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
                                    border: 'none',
                                },
                                ...(item.title === 'Giriş Yap' && {
                                    border: 'none',
                                }),
                                ...(item.title === 'İşletme Hesabı' && {
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        boxShadow: 'none',
                                    },
                                }),
                            }}
                        >
                            {item.title}
                        </Button>
                    </Link>
                ))}
                <Button
                    variant="contained"
                    sx={style.buttons}
                    endIcon={<GTranslateIcon />}
                >
                    TR:
                </Button>
            </Box>
            {/* right navbar */}
        </>
    );
};

export default RightNavbar;
