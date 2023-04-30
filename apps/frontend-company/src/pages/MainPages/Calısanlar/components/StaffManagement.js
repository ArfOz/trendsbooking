import React, { useState } from 'react';

import { Box, Button, Dialog, DialogContent, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import EditEmployee from './addEmployee/EditEmployee';

import FirstLastName from './addEmployee/FirstLastName';
import PhoneEmail from './addEmployee/PhoneEmail';
import Password from './addEmployee/Password';
import Genders from './addEmployee/Genders';
import WorkingHours from './addEmployee/WorkingHours';
import VestingSettings from './addEmployee/VestingSettings';
import StaffDays from './addEmployee/StaffDays';
import CalendarColor from './addEmployee/CalendarColor';
import AddDeleteButton from './addEmployee/AddDeleteButton';

function StaffManagement() {
    const [open, setOpen] = useState(false);

    const handleButtonClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  

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
                                    '&:hover': {
                                        backgroundColor: 'white',
                                    },
                                    color: '#9A9A9A',
                                }}
                            >
                                Kapat
                            </Button>
                        </Box>

                        <FirstLastName />
                        <PhoneEmail/>
                        <Password/>
                        <Genders/>
                        <WorkingHours/>
                        <VestingSettings/>
                        <StaffDays/>
                        <CalendarColor/>
                        <AddDeleteButton/>
                    
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
}
export default StaffManagement;
