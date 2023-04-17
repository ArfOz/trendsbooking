import React, { useState } from 'react';
import { Box, Button, Typography, Switch } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DeleteIcon from '@mui/icons-material/Delete';

function Saturday() {
    const [checked, setChecked] = useState(false);

    const handleSliderOnOff = () => {
        setChecked(!checked);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1.36634px solid #9A9A9A',
                    borderRadius: '10px',
                    width: '100%',
                    mt:1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        pr: 3,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Switch
                            color="blue"
                            value=""
                            checked={checked}
                            onChange={handleSliderOnOff}
                        />
                        <Typography variant="body1" color="#07232C">
                            cumartesi
                        </Typography>
                    </Box>
                    {checked ? (
                        <KeyboardArrowDownIcon color="info" />
                    ) : (
                        <KeyboardArrowUpIcon color="info" />
                    )}
                </Box>
                {checked ? (
                   <Box sx={{
                    ml:3,
                    mb:2,
                  }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                mt: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '70%',
                                }}
                            >
                                <Button
                                    variant="text"
                                    color="info"
                                    endIcon={
                                        <KeyboardArrowDownIcon color="info" />
                                    }
                                    sx={{
                                        background: '#FFFFFF',
                                        border: '1.36634px solid #9A9A9A',
                                        borderRadius: '10px',
                                        width: '45%',

                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',

                                        '&:hover': {
                                            backgroundColor: '#FFFF',
                                        },
                                    }}
                                >
                                    9:00
                                </Button>
                                <Typography variant="body1" color="initial">
                                    dan
                                </Typography>
                                <Button
                                    variant="text"
                                    color="info"
                                    endIcon={
                                        <KeyboardArrowDownIcon color="info" />
                                    }
                                    sx={{
                                        background: '#FFFFFF',
                                        border: '1.36634px solid #9A9A9A',
                                        borderRadius: '10px',
                                        width: '45%',

                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',

                                        '&:hover': {
                                            backgroundColor: '#FFFF',
                                        },
                                    }}
                                >
                                    13:00
                                </Button>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '8%',
                                    pr: 3,
                                }}
                            >
                                <AddIcon color="info" />
                                <EventNoteIcon color="info" />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                mt: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '70%',
                                }}
                            >
                                <Button
                                    variant="text"
                                    color="info"
                                    endIcon={
                                        <KeyboardArrowDownIcon color="info" />
                                    }
                                    sx={{
                                        background: '#FFFFFF',
                                        border: '1.36634px solid #9A9A9A',
                                        borderRadius: '10px',
                                        width: '45%',

                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',

                                        '&:hover': {
                                            backgroundColor: '#FFFF',
                                        },
                                    }}
                                >
                                    14:00
                                </Button>
                                <Typography variant="body1" color="initial">
                                    dan
                                </Typography>
                                <Button
                                    variant="text"
                                    color="info"
                                    endIcon={
                                        <KeyboardArrowDownIcon color="info" />
                                    }
                                    sx={{
                                        background: '#FFFFFF',
                                        border: '1.36634px solid #9A9A9A',
                                        borderRadius: '10px',
                                        width: '45%',

                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',

                                        '&:hover': {
                                            backgroundColor: '#FFFF',
                                        },
                                    }}
                                >
                                    17:00
                                </Button>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '8%',
                                    pr: 3,
                                }}
                            >
                                <DeleteIcon color="error" />
                                <EventNoteIcon color="info" />
                            </Box>
                        </Box>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

export default Saturday;
