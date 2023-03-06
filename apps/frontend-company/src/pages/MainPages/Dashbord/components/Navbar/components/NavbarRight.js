import React from 'react';
import { Box, Button } from '@mui/material';

import { style } from './style';

function NavbarRight() {
    const menuItems = [
        { title: 'Ürün Yönetimi', path: '/urun-yonetimi' },
        { title: 'Finans', path: '/finans' },
        { title: 'Raporlar', path: '/raporlar' },
        { title: 'Randevu Takvimi', path: '/randevu-takvimi' },
        { title: 'Adisyon', path: '/adisyon' },
        { title: 'Hizmet Yönetimi', path: '/hizmet-yonetimi' },
        { title: 'Çalışanlar', path: '/calisanlar' },
    ];

    return (
        <>
            <Box sx={style.menuItemsContainer}>
                {menuItems.map((item) => (
                    <Button
                        key={item.title}
                        sx={{
                            color: 'inherit',
                            textTransform: 'capitalize',
                        }}
                    >
                        {item.title}
                    </Button>
                ))}
            </Box>
        </>
    );
}

export default NavbarRight;
