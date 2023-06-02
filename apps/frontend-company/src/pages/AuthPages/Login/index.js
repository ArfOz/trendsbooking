import React, { useContext, useEffect } from 'react';
import { AuthLayout } from '../../../layout';
import LogoWord from './components/LogoWord';
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
import { Context } from '../../../context/Context';
import { boxStyle } from './style';
import { useAuth } from '../../../context/authContext';
import ErrorModal from './components/ErrorModal';
import Verification from './components/Verification';

const initialState = {
    Email: JSON.parse(localStorage.getItem('loginForm'))?.Email,
    Password: JSON.parse(localStorage.getItem('loginForm'))?.Password,
    // Remember: localStorage.getItem('remember'),
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

const Login = () => {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState(initialState);
    const [remember, setRemember] = useState(
        JSON.parse(localStorage.getItem('rememberCompany')),
    );
    const auth = useAuth();

    // Error Modal
    const [error, setError] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setError(null);
    };
    // Error Modal

    const handleChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };
    const handleRemember = (e) => {
        // setLoginForm({ ...loginForm, ['remember']: e.target.checked });
        setRemember(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (remember) {
            localStorage.setItem('rememberCompany', remember);
            localStorage.setItem('loginFormCompany', JSON.stringify(loginForm));
        } else {
            localStorage.setItem('remember', remember);
            localStorage.removeItem('loginForm');
        }
        await auth.postLogin(loginForm);
    };

    useEffect(() => {
        localStorage.setItem(
            'loginUserCompany',
            JSON.stringify(auth.loginUser),
        );
        // if (auth.loginUser) {
        //     navigate("/")
        // }
    }, [auth.loginUser]);

    useEffect(() => {
        if (
            auth.loginErrors?.response.data.details ==
            'Parola veya Email adresi yanlış.'
        ) {
            setError('E-posta adresi veya şifre yanlış!!!');
        } else if (auth.loginErrors?.response.data.code == 406) {
            setError('Kullanıcı Bulunamadı. Lütfen kayıt olunuz!!!');
        } else if (
            auth.loginErrors?.response.data.details ==
            'Lütfen hesabınızı etkinleştiriniz.'
        ) {
            auth.sendCode({
                Email: loginForm.Email,
            });
        } else {
            setError('');
        }
    }, [auth.loginErrors]);

    useEffect(() => {
        if (error) {
            handleOpen(true);
        }
    }, [error]);

    //VERIFICATION
    const [verification, setVerification] = useState('');

    const handleChangeVerification = (e) => {
        setVerification(e);
    };

    const handleSubmitVerification = async (e) => {
        e.preventDefault();
        console.log('verification', verification);
        await auth.verifyCode({
            Code: parseInt(verification),
            Token: auth.sendCodeData?.Token,
        });
    };
    //VERIFICATION

    useEffect(() => {
        if (auth.loginUser?.AccessToken) {
            navigate('/');
        }
        if (auth.verifyCodeData?.Success) {
            window.location.reload(true);
        }
    }, [auth.verifyCodeData, auth.loginUser]);
    console.log(auth.loginErrors);
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
                            <Box
                                sx={
                                    // burası email verification ile değişecek
                                    !(
                                        auth.loginErrors?.response.data.details?.toString() ===
                                        'Lütfen hesabınızı etkinleştiriniz.'
                                    )
                                        ? boxStyle.leftside
                                        : { display: 'none' }
                                }
                            >
                                <Box sx={{ m: 5 }}>
                                    <Typography
                                        component="h2"
                                        variant="h3"
                                        style={{ color: '#07232C', m: 2 }}
                                    >
                                        Hoşgeldiniz
                                    </Typography>
                                </Box>

                                <Grid item>
                                    <Box sx={{ m: 0, width: '100%' }}>
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
                                        //height="80px"
                                        //size="large"
                                        value={loginForm.Email}
                                        onChange={handleChange}
                                        //sx={{ width: '100%' }}
                                        fullWidth
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        name="Password"
                                        label="Şifre"
                                        type="password"
                                        id="password"
                                        variant="standard"
                                        //height="80px"
                                        //size="large"
                                        autoComplete="current-password"
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
                                        //size='large'
                                        fullWidth
                                        variant="outlined"
                                        sx={{
                                            mt: '30px',
                                            mb: '30px',
                                            backgroundColor: '#07232C',
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
                        <Verification
                            handleChangeVerification={handleChangeVerification}
                            handleSubmitVerification={handleSubmitVerification}
                            display={
                                // burası email verification ile değişecek
                                // auth.loginUser?.Success ? 'flex' : 'none'
                                auth.loginErrors?.response.data.details?.toString() ===
                                'Lütfen hesabınızı etkinleştiriniz.'
                                    ? 'flex'
                                    : 'none'
                            }
                        />
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
            <ErrorModal open={open} handleClose={handleClose} error={error} />
        </AuthLayout>
    );
};

export default Login;
