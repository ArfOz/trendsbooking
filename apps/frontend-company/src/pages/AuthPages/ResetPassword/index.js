import React from 'react';
import { AuthLayout } from '../../../layout';
import { Grid, Typography, Link, TextField, Box, Button } from '@mui/material';
import LogoWord from '../Login/components/LogoWord';
import { boxStyle } from './style';

function ResetPassword() {
    return (
        <AuthLayout>
            <Box>
                <Grid container spacing>
                    <Grid item xs={12} sm={6} md={6} l={12}>
                        <Box sx={boxStyle.logoWord}>
                            <LogoWord />
                        </Box>

                        <Box>
                            <Typography sx={boxStyle.headtext}>
                                Şifremi Unuttum
                            </Typography>
                            <Typography sx={boxStyle.secondtext}>
                                Şifreni mi unuttun hiç sorun değil.Lütfen
                                hesabınıza bağlı olan e-mail hesabını girin!
                            </Typography>
                        </Box>

                        <TextField
                            label="E-Posta Giriniz"
                            variant="standard"
                            size="large"
                            sx={boxStyle.input}
                        />
                        <Box>

                            <Button
                                size="large"
                                variant="outlined"
                                sx={boxStyle.backBtn}
                            >
                                Geri
                            </Button>
                            <Button
                                size="large"
                                variant="outlined"
                                sx={boxStyle.sendBtn}
                            >
                                Gönder
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} l={12}>
                        <Box
                            sx={{
                                border: '1px solid red',
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
