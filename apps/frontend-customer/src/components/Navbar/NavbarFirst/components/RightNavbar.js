import React from 'react';

import { AppBar, Box, Stack, Toolbar, Typography, Button } from '@mui/material';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { Link } from 'react-router-dom';
import { style } from './style';

const RightNavbar = () => {
    const Buttons = [{ title: 'Giriş Yap', path: '/Auth/Login' }];
    return (
        <>
            {/* right navbar */}
            <Box sx={style.navbarbuttoncontainer}>
                <Button sx={style.navbarbuttons}>
                    <Link to={Buttons.path}>{Buttons.title}</Link>
                </Button>
                <Button variant="outlined" sx={style.navbarbuttons}>
                    İşletme Hesabı
                </Button>
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
