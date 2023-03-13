import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
    Box,
} from '@mui/material';

const CheckBox = () => {
    const [isOpen, setIsOpen] = useState(true);

    const onClickEvent = () => {
        setIsOpen(!isOpen);
    };

    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
            <Button
                variant="contained"
                onClick={onClickEvent}
                sx={{
                    backgroundColor: '#F2F8FF',
                    borderRadius: '5px',
                    width: '90%',
                    ml: 2,
                    '&:hover': {
                        backgroundColor: '#F2F8FF',
                    },
                }}
                startIcon={
                    isOpen ? (
                        <ArrowRightIcon sx={{ color: 'black' }} />
                    ) : (
                        <ArrowDropDownIcon sx={{ color: 'black' }} />
                    )
                }
            >
                <Typography
                    fontFamily="Roboto"
                    fontWeight={500}
                    fontSize={14}
                    color="#07232C"
                    textTransform="capitalize"
                >
                    Personel
                </Typography>
            </Button>
           
            <Box
                sx={{
                    ml: 10,
                }}
            >
                <input type="checkbox" name="hepsi" id="" />
                <label for="hepsi"> Hepsi</label>
                <br></br>
            </Box>
            <Box
                sx={{
                    ml: 12,
                }}
            >
                <input type="checkbox" name="acun" id="" />
                <label for="acun"> Acun</label>
                <br></br>
                <input type="checkbox" name="tarık" id="" />
                <label for="tarık"> Tarık</label>
                <br></br>
                <input type="checkbox" name="derya" id="" />
                <label for="derya"> Derya</label>
                <br></br>
                <input type="checkbox" name="acun" id="" />
                <label for="acun"> Acun</label>
                <br></br>
                <input type="checkbox" name="tarık" id="" />
                <label for="tarık"> Tarık</label>
                <br></br>
            </Box>
        </>
    );
};

export default CheckBox;
