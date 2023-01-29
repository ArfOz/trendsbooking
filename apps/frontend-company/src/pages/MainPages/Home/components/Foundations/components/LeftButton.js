import React from 'react';

import { Box, Button } from '@mui/material';
import { style } from './style';

function LeftButton() {
    return (
        <>
            <Box>
                <Button
                    variant="contained"
                    color="info"
                    size="large"
                    sx={style.leftButton}
                >
                    Hemen Ücretsiz Dene
                </Button>
            </Box>
        </>
    );
}

export default LeftButton;
