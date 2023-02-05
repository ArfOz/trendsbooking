import React from 'react';

import { Box, Button } from '@mui/material';
import { style } from './style';

function Right() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    width: '15%',
                    height:'7vh',
                    mr: 0,
                  
                }}
            >
                <Button
                    variant="outlined"
                    sx={style.navbarbuttons}
                    onClick={() => {
                        alert('giriş yap sayfasına yönlenecek');
                    }}
                >
                    Giriş Yap
                </Button>

                <Button
                    sx={style.navbarbuttons}
                    onClick={() => {
                        alert('Üye ol sayfasına yönlenecek');
                    }}
                >
                    Üye Ol
                </Button>
            </Box>
        </>
    );
}

export default Right;
