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
                    alignItems: 'center',
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
                        Personel İzin Günleri
                    </Typography>
                </Button>

                {showCheckboxes && (
                    <form
                        onSubmit={handleFormSubmit}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '95%',
                            border: '1px solid red',
                        }}
                    >
                    
                            <DatePicker
                                selected={startDate}
                                onChange={handleStartDateChange}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="İzin Başlangıç Tarihi"
                                style={{
                                    width: '48%',
                                    background: '#FFFFFF',
                                    border: '1.36634px solid #9A9A9A',
                                    boxShadow: '0px 0px 21.8614px rgba(234, 76, 137, 0.06)',
                                    borderRadius: '8.19802px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                
                            />
                    

                        <DatePicker
                            selected={endDate}
                            onChange={handleEndDateChange}
                            dateFormat="dd/MM/yyyy"
                            className="form-control mt-2"
                            placeholderText="İzin Bitiş Tarihi"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                                mt: 2,
                                background: '#EA4C89',
                                color: '#FFFFFF',
                                borderRadius: '4.0989px',
                                '&:hover': {
                                    backgroundColor: '#EA4C89',
                                },
                            }}
                        >
                            Kaydet
                        </Button>
                    </form>
                )}
            </Box>
        </>
    );
}

export default StaffDays;
