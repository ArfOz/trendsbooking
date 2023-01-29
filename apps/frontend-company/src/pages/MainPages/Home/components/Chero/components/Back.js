import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import herophone from '../../../../../../assets/herophone.png';
import { style } from './style';

function Back() {
    return (
        <>
            <Box sx={style.trendBizBackground}>
                <Box sx={style.circleDown}>
                    <IconButton aria-label="circleDown" color="primary">
                        <ExpandCircleDownOutlinedIcon />
                    </IconButton>
                </Box>

                <Box sx={style.heroPhone}>
                    <img src={herophone} alt="" />
                </Box>
                <Box sx={style.leftContainer}>
                    <Box
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Typography sx={style.typography1}>
                            You already have a business and a passion. Get more
                            from
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '75%',
                        }}
                    >
                        <Typography sx={style.typography2}>
                            Booksy Biz will help you with everyday duties, and
                            you will gain time to prepare for the challenges
                            tomorrow will bring.
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="contained" sx={style.button}>
                            Ücretsiz Dene
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Back;
