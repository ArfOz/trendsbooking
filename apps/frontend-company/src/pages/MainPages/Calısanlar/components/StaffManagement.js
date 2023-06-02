import React, { useState } from 'react';
import axios from 'axios';
import createWorker from '../../../../../src/function/function';

import {
    Box,
    Button,
    Dialog,
    DialogContent,
    TextField,
    Typography,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import EditEmployee from './addEmployee/EditEmployee';


import Genders from './addEmployee/Genders';
import WorkingHours from './addEmployee/WorkingHours';
import VestingSettings from './addEmployee/VestingSettings';
import StaffDays from './addEmployee/StaffDays';
import CalendarColor from './addEmployee/CalendarColor';


function StaffManagement() {
    const [open, setOpen] = useState(false);

    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const handleCheckboxesClick = () => {
        setShowCheckboxes(!showCheckboxes);
    };

    const handleButtonClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const initialNewWorker = {
        DepartmentId: 8,
        FirstName: '',
        LastName: '',
        Phone: '',
        WorkTime: [
            {
                MorningStartAt: '',
                MorningEndAt: '',
                ShiftStart: '',
                ShiftEnd: '',
                NightStartAt: '',
                NightEndAt: '',
                Days: 0,
                Holiday: true,
            },
        ],
        Roles: 'WorkerBasic',
        Email: '',
        Password: '',
    };

    const [formData, setFormData] = useState(initialNewWorker);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    

    const handleAddWorkTime = () => {
        setFormData((prevData) => ({
            ...prevData,
            WorkTime: [
                ...prevData.WorkTime,
                {
                    MorningStartAt: '',
                    MorningEndAt: '',
                    ShiftStart: '',
                    ShiftEnd: '',
                    NightStartAt: '',
                    NightEndAt: '',
                    Days: 0,
                    Holiday: true,
                },
            ],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Backend'e formData'yı gönder.
        const token = localStorage.getItem('loginUserCompany')
            ? JSON.parse(localStorage.getItem('loginUserCompany')).AccessToken
            : '';
        console.log('newWorker :>> ', formData);
        console.log('token :>> ', token);

        axios
            .post('http://localhost:3300/api/departments/addworker', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                // İstek başarılı oldu
                console.log(response);
                setFormData(initialNewWorker); // Form verisini sıfırla
            })
            .catch((error) => {
                // İstek başarısız oldu
                console.error(error);
            });
    };
    console.log(formData);

    return (
        <>
       
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    width: '95%',
                    m: 'auto',
                    mt: 15,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '28px',
                        }}
                    >
                        Personel Yönetimi
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            color: '#9A9A9A',
                        }}
                    >
                        Tüm çalışanlarınızı tek bir yerden yönetin
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '20%',
                    }}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DownloadIcon color="info" />}
                        sx={{
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: 'white',
                            },
                            border: '1px solid #7D8398',
                        }}
                    >
                        İndir
                    </Button>
                    <Button
                        onClick={handleButtonClick}
                        variant="contained"
                        color="primary"
                        sx={{
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: '#F74600',
                            },
                        }}
                    >
                        Yeni Çalışan
                    </Button>
                </Box>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xl"
                fullWidth
                sx={{ height: '100vh' }}
            >
                <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                width: '95%',
                            }}
                        >
                            <EditEmployee />
                            <Button
                                onClick={handleClose}
                                variant="contained"
                                color="secondary"
                                endIcon={<HighlightOffIcon color="grey" />}
                                sx={{
                                    textTransform: 'capitalize',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        boxShadow: 'none',
                                    },
                                    color: '#9A9A9A',
                                }}
                            >
                                Kapat
                            </Button>
                        </Box>

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
                            <TextField
                                label="İsim"
                                name="FirstName"
                                value={formData.FirstName}
                                onChange={handleInputChange}
                                sx={{
                                    width: '49%',
                                }}
                            />
                            <TextField
                                label="Soyisim"
                                name="LastName"
                                value={formData.LastName}
                                onChange={handleInputChange}
                                sx={{
                                    width: '49%',
                                }}
                            />
                        </Box>
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
                            <TextField
                                label="Telefon"
                                name="Phone"
                                value={formData.Phone}
                                onChange={handleInputChange}
                                sx={{
                                    width: '49%',
                                }}
                            />
                            <TextField
                                label="E-mail"
                                name="Email"
                                value={formData.Email}
                                onChange={handleInputChange}
                                sx={{
                                    width: '49%',
                                }}
                            />
                        </Box>

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
                            <Box
                                sx={{
                                    width: '49%',
                                    background: '#FFFFFF',
                                    border: '1.36634px solid #9A9A9A',
                                    boxShadow:
                                        '0px 0px 21.8614px rgba(234, 76, 137, 0.06)',
                                    borderRadius: '8.19802px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={handleCheckboxesClick}
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
                                        Rol Ata
                                    </Typography>
                                </Button>
                            </Box>
                            <TextField
                                label="Şifre"
                                name="Password"
                                value={formData.Password}
                                onChange={handleInputChange}
                                sx={{
                                    width: '49%',
                                }}
                            />
                        </Box>
                        <Genders />
                        <WorkingHours />
                        <VestingSettings />
                        <StaffDays />
                        <CalendarColor />
                        
                    </Box>
                    <Button
                    type="submit"
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
                    </form>
                </DialogContent>
            </Dialog>

            {/* <MyFormComponent/> */}
            
            
        </>
    );
}
export default StaffManagement;
