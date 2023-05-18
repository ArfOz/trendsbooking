import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function AddDeleteButton({ onClick }) {
    return (
        <>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width:'97%'
            }}>
                <Button
                    sx={{
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '48%',
                        m: 'auto',
                        mt: 3,
                        border:'1px solid #F75936',
                        backgroundColor: '#FFFFFF',
                        '&:hover': { backgroundColor: '#FFFFFF' },
                    }}
                >
                    <Typography
                        variant="body2"
                        fontFamily="'Roboto', sans-serif"
                        fontWeight={500}
                        fontStyle="normal"
                        sx={{ color: '#F75936', textTransform: 'capitalize' }}
                    >
                        Sil
                    </Typography>
                </Button>
                <Button
                    sx={{
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '48%',
                        m: 'auto',
                        mt: 3,
                        backgroundColor: '#F75936',
                        '&:hover': { backgroundColor: '#F74600' },
                    }}
                    onClick={onClick}
                >
                    <Typography
                        variant="body2"
                        fontFamily="'Roboto', sans-serif"
                        fontWeight={500}
                        fontStyle="normal"
                        sx={{ color: '#FFFFFF', textTransform: 'capitalize' }}
                    >
                        Ekle
                    </Typography>
                </Button>
            </Box>
        </>
    );
}

export default AddDeleteButton;
