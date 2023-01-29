import React from 'react';
import { Box, Typography } from '@mui/material';
import Offer1 from '../../../../../../assets/Offer.png';
import { style } from './style';

function Offer() {
    return (
        <>
            <Box sx={style.provider}>
                <Box
                    sx={{
                        mr: 5,
                    }}
                >
                    <img src={Offer1} alt="" width="100%" height="50%" />
                </Box>
                <Box sx={style.typographyContainer}>
                    <Box>
                        <Typography sx={style.title}>
                            Offer more, earn better.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={style.subtitle}>
                            Did you know that your possibilities are much
                            greater than offering a classic range of services?
                            You can also sell products, gift cards, time passes
                            or service packages to attract customers and
                            increase revenue.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Offer;
