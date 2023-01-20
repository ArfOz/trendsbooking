import React,{ useEffect, useState }  from 'react';
import { AuthLayout } from '../../../layout';
import { boxStyle } from './style';

import {
    Grid,
    Typography,
    Link,
    TextField,
    FormControlLabel,
    Box,
    Checkbox,
    Button,
    FormControl,
    FormGroup,
    InputLabel,
    MenuItem,
    Modal,
    Input,
    Select,
    FormHelperText,
} from '@mui/material';
import LogoWord from './components/LogoWord';


export default function Register() {


    return (
        <AuthLayout>
            <Box sx={{ backgroundColor: 'white' }}>
                <Grid container component="">
                    {/*##################  Form Section #################  */}
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Box sx={boxStyle.leftMain}>
                            <Box sx={boxStyle.headerBox}>
                                <Box sx={boxStyle.LogoWord}>
                                    <LogoWord />
                                </Box>
                                <Box>
                                    <Typography
                                        component="h1"
                                        variant="h4"
                                        sx={{
                                            color: '#F75936',
                                            mb: 2,
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            padding: '0 6rem',
                                        }}
                                    >
                                        {'Hesap Oluşturun!'}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={false} sm={false} md={4} lg={4} xl={4}>
                        <Box sx={boxStyle.rightside}></Box>
                    </Grid>
                </Grid>
            </Box>

        </AuthLayout>
    );
}
