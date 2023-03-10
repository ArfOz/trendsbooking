import React, { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    Collapse,
    FormControlLabel,
    FormGroup,
    Typography,
} from '@mui/material';
import { ArrowRight, ArrowDropDown, CheckBox } from '@mui/icons-material';

function PersonelButton() {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Button
                variant="contained"
                startIcon={
                    isOpen ? (
                        <ArrowDropDown sx={{ color: '#07232C' }} />
                    ) : (
                        <ArrowRight sx={{ color: '#07232C' }} />
                    )
                }
                onClick={handleButtonClick}
                sx={{
                    width: '80%',
                    background: '#F2F8FF',
                    borderRadius: '5px',
                    '&:hover': { backgroundColor: '#F2F8FF' },
                    ml: 6,
                }}
            >
                <Typography
                    variant="body2"
                    fontFamily="'Roboto', sans-serif"
                    fontWeight={500}
                    fontStyle="normal"
                    sx={{ color: '#07232C', textTransform: 'capitalize' }}
                >
                    personel
                </Typography>
            </Button>
            {isOpen ? (
                <Box
                    sx={{
                        ml: 10,
                    }}
                >
                    <FormGroup>
                        <FormControlLabel
                            control={<CheckBox defaultChecked />}
                            label="ahmet"
                        />
                    </FormGroup>
                </Box>
            ) : null}
        </>
    );
}

export default PersonelButton;
