import React from 'react';
import { Box, Typography } from '@mui/material';
import Fleft1 from './Fleft1';
import Fleft2 from './Fleft2';
import Fleft3 from './Fleft3';
import Fleft4 from './Fleft4';
import Fleft5 from './Fleft5';
import Fleft6 from './Fleft6';
import LeftButton from './LeftButton';
import { style } from './style';

function Fleft() {
    return (
        <>
            <Box sx={style.leftContainer}>
                <Box
                    sx={{
                        width: '75%',
                        mt: 8,
                    }}
                >
                    <Typography sx={style.title}>
                        The foundations on which you can build your business
                    </Typography>
                </Box>
                {/* 00000000000 */}
                <Box
                    sx={style.componentsContainer}
                >
                    <Fleft1 />
                    <Fleft2 />
                    <Fleft3 />
                    <Fleft4 />
                    <Fleft5 />
                    <Fleft6 />
                    <LeftButton />
                </Box>

                {/* 00000000000 */}
            </Box>
        </>
    );
}

export default Fleft;
