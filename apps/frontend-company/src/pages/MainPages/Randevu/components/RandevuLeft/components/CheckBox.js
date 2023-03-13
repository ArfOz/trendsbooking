import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import line from '../../../../../../assets/line.png';
import {
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
    Box,
    Divider,
} from '@mui/material';

const CheckBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState([
        { id: 1, label: 'Hepsi', isChecked: false },
        { id: 2, label: 'Acun', isChecked: false },
        { id: 3, label: 'Hadise', isChecked: false },
        { id: 3, label: 'Murat', isChecked: false },
        { id: 3, label: 'Beyaz', isChecked: false },
    ]);

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxClick = (id) => {
        const updatedOptions = options.map((option) =>
            option.id === id
                ? { ...option, isChecked: !option.isChecked }
                : option,
        );
        setOptions(updatedOptions);
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleDropdownClick}
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

            {isOpen && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '70%',
                            borderLeft: '1px solid #D9D9D9',
                        }}
                    >
                        {options.map((option) => (
                            <Box
                                sx={{
                                    ml: 2,
                                }}
                                key={option.id}
                            >
                                <input
                                    type="checkbox"
                                    id={option.id}
                                    checked={option.isChecked}
                                    onChange={() =>
                                        handleCheckboxClick(option.id)
                                    }
                                />
                                <label htmlFor={option.id}>
                                    {option.label}
                                </label>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}
        </div>
    );
};

export default CheckBox;
