import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
<<<<<<< HEAD
=======
import line from '../../../../../../assets/line.png';
>>>>>>> 9f92235e04dc18713e64f095d4b1cf65c1dbbc96
import {
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
    Box,
<<<<<<< HEAD
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
=======
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
>>>>>>> 9f92235e04dc18713e64f095d4b1cf65c1dbbc96
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
<<<<<<< HEAD
           
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
=======

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
>>>>>>> 9f92235e04dc18713e64f095d4b1cf65c1dbbc96
    );
};

export default CheckBox;
