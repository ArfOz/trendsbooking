import React from 'react';
import { Box, IconButton,Typography } from '@mui/material';


import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import { style } from './style';

const Software = () => {
    return (
        // container Box başlangıc
        <Box sx={style.BoxContainer}>
            <Box
                sx={{
                    position: 'absolute',

                    left: -45,
                    top: -18,
                }}
            >
                <IconButton aria-label="delete" color="primary">
                    <SouthEastOutlinedIcon fontSize="large" />
                </IconButton>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography sx={style.Typography1}>
                    Kuaför Salonunuz İçin
                </Typography>
                <Typography sx={style.Typography1}>
                    Eksiksiz Bir Yazılım
                </Typography>
            </Box>

            <Box>
                <Typography sx={style.Typography2}>
                    TrendsBooking'i ister bilgisayarınızdan, ister cep
                    telefonunuzdan, ister tabletinizden kullanarak
                    Randevularınızı, Ürün & Paket Satışlarınızı ve çok daha
                    fazlasını kolayca yönetebilirsiniz!
                </Typography>
            </Box>
        </Box>
        // container Box sonu
    );
};

export default Software;
