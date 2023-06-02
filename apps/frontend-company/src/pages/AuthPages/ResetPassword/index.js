import React from 'react';
import { AuthLayout } from '../../../layout';
import { Grid, Typography, Link, TextField, Box, Button } from '@mui/material';
import LogoWord from '../Login/components/LogoWord';
import { boxStyle } from './style';

function ResetPassword() {
    return (
        <AuthLayout>
            <Box>
                <Grid container component="">
                    <Box sx={boxStyle.leftside}>
                        <Grid item xs={12} sm={6} md={6} l={12}>
                            <Grid item>
                                <Box sx={boxStyle.logoWord}>
                                    <LogoWord />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box>
                                    <Typography sx={boxStyle.headtext}>
                                        Şifremi Unuttum
                                    </Typography>
                                    <Typography sx={boxStyle.secondtext}>
                                        Şifreni mi unuttun hiç sorun
                                        değil.Lütfen hesabınıza bağlı olan
                                        e-mail hesabını girin!
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="E-Posta Giriniz"
                                    variant="standard"
                                    size="large"
                                />
                            </Grid>
                            <Grid item>
                                <Button size="large" variant="outlined">
                                    Geri
                                </Button>
                                <Button size="large" variant="outlined">
                                    Gönder
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                    <Grid item xs={12} sm={6} md={6} l={12}>
                        <Box
                            sx={{
                                backgroundImage:
                                    'url(https://www.pexels.com/photo/little-kitten-16450166/)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100vh',
                            }}
                        ></Box>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    );
}

export default ResetPassword;
