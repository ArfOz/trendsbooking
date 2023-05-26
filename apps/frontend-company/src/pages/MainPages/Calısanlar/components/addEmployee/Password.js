import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function Password({ value1, value2, onChange1, onChange2 }) {
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const handleButtonClick = () => {
        setShowCheckboxes(!showCheckboxes);
    };
    return (
        <Box
            sx={{
                width: '95%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                m: 'auto',
                mt: 3,
            }}
        >
            <Box  sx={{
                    width: '48%',
                    background: '#FFFFFF',
                    border: '1.36634px solid #9A9A9A',
                    boxShadow: '0px 0px 21.8614px rgba(234, 76, 137, 0.06)',
                    borderRadius: '8.19802px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                     <Button
                variant="contained"
                onClick={handleButtonClick}
                endIcon={
                    showCheckboxes ? (
                        <ArrowDropDownCircleIcon color="primary" />
                    ) : (
                        <PlayCircleIcon color="primary" />
                    )
                }
                sx={{
                    background: '#FFFFFF',
                    border: 'none',
                    boxShadow: 'none',
                    width: '100%',                    
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                   
                 
                    '&:hover': {
                        backgroundColor: '#FFFF',
                        border: 'none',
                    boxShadow: 'none',
                    },
                   m:0.99
                  
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '20px',
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        color: '#9A9A9A',
                       
                    }}
                >
                    Rol Ata
                </Typography>
            </Button>
           

            </Box>
           


            <TextField
                label="Şifre"
                variant="outlined"
                value={value1}
                onChange={onChange1}
                sx={{
                    width: '49%',
                }}
            />
        </Box>
    );
}

export default Password;
