import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

function Waiting() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '70%',
                    ml:3,
                    mt:3,
                }}
            >
                <Typography
                    fontFamily="Roboto"
                    fontWeight={500}
                    fontSize="19px"
                    lineHeight="19px"
                    color="#07232C"
                >
                    Bekleyen <span style={{ color: '#FF0000' }}>4</span>
                </Typography>
                <Typography
                    fontFamily="Roboto"
                    fontWeight={500}
                    fontSize="19px"
                    lineHeight="19px"
                    color="#9A9A9A"
                >
                    Onaylanan <span style={{ color: '#FF0000' }}>12</span>
                </Typography>
                <Typography
                    fontFamily="Roboto"
                    fontWeight={500}
                    fontSize="19px"
                    lineHeight="19px"
                    color="#9A9A9A"
                >
                    İşlemde <span style={{ color: '#FF0000' }}>3</span>
                </Typography>
                <Typography
                    fontFamily="Roboto"
                    fontWeight={500}
                    fontSize="19px"
                    lineHeight="19px"
                    color="#9A9A9A"
                >
                    Toplanan    <span style={{ color: '#FF0000' }}>8</span>
                </Typography>
            </Box>
            <Box>
            <Divider />

            </Box>
            
        </>
    );
}

export default Waiting;
