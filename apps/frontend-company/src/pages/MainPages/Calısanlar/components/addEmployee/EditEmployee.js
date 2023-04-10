import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function EditEmployee() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    width: '100%',
                    height: '100%',
                    m: 'auto',
                  
             
                  
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
                            lineHeight: '24px',
                        }}
                    >
                        Çalışan Düzenle
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '125px',
                            height: '125px',
                            background: '#D9D9D9',
                            borderRadius: '12px',

                            mt: 3,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '107px',
                                height: '107px',
                                border: '1px dashed #07232C',
                                borderRadius: '12px',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '16px',
                                    color: '#07232C',
                                }}
                            >
                                Resim Ekle
                            </Typography>
                        </Box>
                      
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default EditEmployee;
