import React from 'react';
import { Button, Typography } from '@mui/material';

function MakeAnAppointment() {
    return (
        <>
            <Button
                sx={{
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                    m: 'auto',
                    mt: 3,
                    backgroundColor: '#F75936',
                    '&:hover': { backgroundColor: '#F74600' },
                }}
            >
                <Typography
                    variant="body2"
                    fontFamily="'Roboto', sans-serif"
                    fontWeight={500}
                    fontStyle="normal"
                    sx={{ color: '#FFFFFF', textTransform: 'capitalize' }}
                >
                    Randevu Oluştur
                </Typography>
            </Button>
        </>
    );
}

export default MakeAnAppointment;
