import React from 'react';

import { Box,Button } from '@mui/material';

function LeftButton() {
    return (
        <>
        <Box>
            <Button
                variant="contained"
                color="info"
                size="large"
                sx={{
                   
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    width:"50%",
                    ml:20,
                  
                   
                }}
            >
                Hemen Ücretsiz Dene
            </Button>
        </Box>
            
        </>
    );
}

export default LeftButton;
