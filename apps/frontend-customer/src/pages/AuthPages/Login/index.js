import React, { useContext, useEffect } from 'react';
import { AuthLayout } from '../../../layout';
import LogoWord from './components/LogoWord/LogoWord';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Grid,
    Typography,
    Link,
    TextField,
    Box,
    Button,
    FormControlLabel,
    Checkbox,
    CircularProgress,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { boxStyle } from './style';
import { useAuth } from '../../../context/authContext';

const initialState = {
    Email: JSON.parse(localStorage.getItem('loginForm'))?.Email,
    Password: JSON.parse(localStorage.getItem('loginForm'))?.Password,
    Remember: localStorage.getItem('remember'),
};

//Ayrı  component  yazılabilir
function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="http://trendsbooking.com/">
                trendsbooking.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState(initialState);
    const [remember, setRemember] = useState(
        JSON.parse(localStorage.getItem('remember')),
    );

    const auth = useAuth();

    const handleChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };
    const handleRemember = (e) => {
        setLoginForm({ ...loginForm, ['Remember']: e.target.checked });
        setRemember(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (remember) {
            localStorage.setItem('remember', remember);
            localStorage.setItem('loginForm', JSON.stringify(loginForm));
        } else {
            localStorage.setItem('remember', remember);
            localStorage.removeItem('loginForm');
        }
        await auth.postLogin(loginForm);
    };
    useEffect(() => {
        localStorage.setItem("loginUser",JSON.stringify(auth.loginUser))
    }, [auth.loginUser]);

    return (
        <AuthLayout>
            <Box sx={{ backgroundColor: 'white' }}>
                <Grid container component="">
                    {/*##################  Form Section #################  */}
                    <Grid item xs={12} sm={6} md={6} l={12}>
                        <Grid item>
                            <Box sx={boxStyle.logoWord}>
                                <LogoWord />
                            </Box>
                        </Grid>

                        {auth.isLoading ? (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: '93%',
                                    alignItems: 'center',
                                }}
                            >
                                <CircularProgress />
                            </Box>
                        ) : (
                            <Box sx={boxStyle.leftside}>
                                <Typography
                                    component="h2"
                                    variant="h4"
                                    style={{ color: '#F75936' }}
                                >
                                    Hoşgeldiniz
                                </Typography>
                                <Grid item>
                                    <Box sx={{ m: 2 }}>
                                        <GoogleLoginButton
                                            onClick={() =>
                                                alert(
                                                    'Merhaba Google ile giriş geliştirilmektedir.',
                                                )
                                            }
                                        >
                                            <span>Google ile Giriş Yap</span>
                                        </GoogleLoginButton>
                                    </Box>
                                </Grid>
                                <Typography component="h1" variant="h6">
                                    veya
                                </Typography>
                                <Box
                                    component="form"
                                    noValidate
                                    onSubmit={handleSubmit}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <TextField
                                        margin="normal"
                                        required
                                        id="email"
                                        label="E-Posta Adresi"
                                        name="Email"
                                        autoComplete="email"
                                        variant="standard"
                                        autoFocus
                                        height="80px"
                                        size="small"
                                        value={loginForm.Email}
                                        onChange={handleChange}
                                        sx={{ width: '100%' }}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        name="Password"
                                        label="Şifre"
                                        type="password"
                                        id="password"
                                        variant="standard"
                                        height="80px"
                                        size="small"
                                        autoComplete="password"
                                        value={loginForm.Password}
                                        onChange={handleChange}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={handleRemember}
                                                checked={remember}
                                                value="Remember"
                                                color="primary"
                                            />
                                        }
                                        label="Beni Hatırla"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="outlined"
                                        sx={{
                                            mt: '30px',
                                            mb: '10px',
                                            backgroundColor: '#F75936',
                                            border: '1px solid green',
                                            color: 'white',
                                        }}
                                    >
                                        Giriş Yap
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <RouterLink
                                                to="/auth/reset-password"
                                                variant="body1"
                                            >
                                                Şifremi unuttum!
                                            </RouterLink>
                                        </Grid>
                                        <Grid item>
                                            <RouterLink
                                                to="/auth/register"
                                                variant="body1"
                                            >
                                                Hesap Oluştur!
                                            </RouterLink>
                                        </Grid>
                                    </Grid>
                                    <Copyright sx={{ mt: 5 }} />
                                </Box>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} l={6}>
                        <Box
                            sx={{
                                backgroundImage:
                                    'url(https://source.unsplash.com/random)',
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
};

export default Login;
