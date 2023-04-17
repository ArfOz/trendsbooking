import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';
import Saturday from './Saturday';
import Sunday from './Sunday';

function WorkingHours() {
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const handleButtonClick = () => {
        setShowCheckboxes(!showCheckboxes);
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
                        Çalışma Saatleri
                    </Typography>
                </Button>

                {showCheckboxes && (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '95%',
                        }}
                    >
                        <Monday />
                        <Tuesday />
                        <Wednesday />
                        <Thursday />
                        <Friday />
                        <Saturday />
                        <Sunday />
                    </Box>
                )}
            </Box>
        </>
    );
}

export default WorkingHours;
