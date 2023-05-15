import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    FormControl,
    FormLabel,
    FormHelperText,
} from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function StaffDays() {
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleButtonClick = () => {
        setShowCheckboxes(!showCheckboxes);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('İzin Başlangıç Tarihi:', startDate);
        console.log('İzin Bitiş Tarihi:', endDate);
    };



    return (
        <>
            <Box
                sx={{
                    width: '95%',
                    background: '#FFFFFF',
                    border: '1.36634px solid #9A9A9A',
                    boxShadow: '0px 0px 21.8614px rgba(234, 76, 137, 0.06)',
                    borderRadius: '8.19802px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    mt: 3,
                
                }}
            >
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
                        width: '99.3%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',

                        '&:hover': {
                            backgroundColor: '#FFFF',
                            border: 'none',
                            boxShadow: 'none',
                        },
                        m: 0.99,
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
                        Personel İzin Günleri
                    </Typography>
                </Button>

                {showCheckboxes && (
                    <Box
                        component="form"
                        onSubmit={handleFormSubmit}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '95%',                            
                            m: 2,
                            ml:4,
                        }}
                    >
                        <DatePicker
                            selected={startDate}
                            onChange={handleStartDateChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="İzin Başlangıç Tarihi"
                            customInput={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        border: 'none',
                                        width: '70%',
                                    }}
                                />
                            }
                        />
                        <DatePicker
                            selected={endDate}
                            onChange={handleEndDateChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="İzin Bitiş Tarihi"
                            customInput={
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        border: 'none',
                                        width: '70%',
                                    }}
                                />
                            }
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '30%',
                               
                                backgroundColor: '#F75936',
                                '&:hover': { backgroundColor: '#F74600' },
                            }}
                        >
                            <Typography
                                variant="body2"
                                fontFamily="'Roboto', sans-serif"
                                fontWeight={500}
                                fontStyle="normal"
                                sx={{
                                    color: '#FFFFFF',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Kaydet
                            </Typography>
                        </Button>
                    </Box>
                )}
            </Box>
        </>
    );
}

export default StaffDays;
