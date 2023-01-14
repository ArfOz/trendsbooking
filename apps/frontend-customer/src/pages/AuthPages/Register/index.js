import React, { useEffect, useState } from 'react';
import { AuthLayout } from '../../../layout';
import { useNavigate } from 'react-router-dom';
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
    Input,
    InputLabel,
    MenuItem,
    Modal,
    Select,
} from '@mui/material';
import LogoShort from '../../../components';
import { GoogleLoginButton } from 'react-social-login-buttons';
import LogoWordShort from './components/LogoWordShort';
import { Calculate } from '@mui/icons-material';
import { buttons, modal, boxStyle } from './style';
import { postRegister } from '../../../function/function';
import ErrorModal from './components/ErrorModal';

const initialState = {
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    Phone: '',
    BirthDate: '',
    Gender: '',
    CbFirst: false,
    Username: '',
};

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

const Register = () => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerForm, setRegisterForm] = useState(initialState);
    const navigate = useNavigate();
    const [activeElement, setActiveElement] = useState();
    const maxSteps = 2;

    //Slider
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = (e) => {
        setActiveElement(e.target.parentNode.childNodes[0].childNodes);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    useEffect(() => {
        if (activeElement) {
            Array.from(activeElement).map((item, index) => {
                if (index === activeStep) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    }, [activeStep]);
    //Slider

    //MODAL
    const [modalCheckbox, setModalCheckbox] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openError, setOpenError] = React.useState(false);
    const handleOpenError = () => setOpenError(true);
    const handleCloseError = () => {
        setOpenError(false);
        setError(null)
    }

    useEffect(() => {
        if (modalCheckbox) {
            setRegisterForm({ ...registerForm, ['CbFirst']: true });
            setModalCheckbox(false);
        }
    }, [modalCheckbox, registerForm.CbFirst]);
    //MODAL

    //CONFIRM PASSWORD
    useEffect(() => {
        // console.log('confirmPassword :>> ', confirmPassword);
        // console.log('registerForm.password :>> ', registerForm.password);
    }, [confirmPassword]);
    //CONFIRM PASSWORD

    const handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            setRegisterForm({
                ...registerForm,
                [e.target.name]: e.target.checked,
            });
        } else {
            setRegisterForm({
                ...registerForm,
                [e.target.name]: e.target.value,
            });
        }
    };

    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        registerForm['Username'] =
            registerForm.FirstName + ' ' + registerForm.LastName;
        console.log('registerForm', registerForm);

        if (registerForm.Password !== confirmPassword) {
            setError('Password does not match.');
        } else {
            await postRegister(registerForm, setError);
        }
        // if (
        //     registerForm.BirthDate &&
        //     registerForm.CbFirst &&
        //     registerForm.Email &&
        //     registerForm.FirstName &&
        //     registerForm.Gender &&
        //     registerForm.LastName &&
        //     registerForm.Password &&
        //     registerForm.Phone &&
        //     registerForm.Username
        // ) {
        // } else {
        //     await alert('Please fill required sections.');
        // }
        // error ?? handleOpen(true)
        // const user = await register(Email, password);
        // if (user) {
        //   navigate("/", {
        //     replace: true,
        //   });
        // }
    };

    useEffect(() => {
        if (error) {
            handleOpenError(true);
        }
    }, [error]);

    return (
        <AuthLayout>
            <Box sx={{ backgroundColor: 'white' }}>
                <Grid container component="">
                    {/*##################  Form Section #################  */}
                    <Grid item xs={6} sm={6} md={6} l={6} xl={6}>
                        <Box sx={boxStyle.leftMain}>
                            <Box sx={boxStyle.headerBox}>
                                <Box sx={boxStyle.LogoWordShort}>
                                    <LogoWordShort />
                                </Box>
                                <Box>
                                    <Typography
                                        component="h1"
                                        variant="h4"
                                        sx={{ color: '#F75936', mb: 2 }}
                                    >
                                        Hesap Oluşturun!
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography
                                component="p"
                                variant="text"
                                sx={{ width: '50%' }}
                                align="right"
                            >
                                {activeStep + 1}/{maxSteps}
                            </Typography>
                            <Box sx={boxStyle.progressBarEmpty}>
                                <Box
                                    sx={{
                                        borderRadius: '15px',
                                        background: ' #F75936',
                                        height: '10px',
                                        width: `${
                                            ((activeStep + 1) / maxSteps) * 100
                                        }%`,
                                    }}
                                ></Box>
                            </Box>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={boxStyle.form}
                            >
                                <Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Grid item>
                                            <Box>
                                                <GoogleLoginButton
                                                    onClick={() =>
                                                        alert(
                                                            'Merhaba Google ile giriş geliştirilmektedir.',
                                                        )
                                                    }
                                                >
                                                    <span>
                                                        Google ile Hesap Oluştur
                                                    </span>
                                                </GoogleLoginButton>
                                            </Box>
                                        </Grid>
                                        <Typography
                                            component="h1"
                                            variant="h6"
                                            align="center"
                                        >
                                            veya
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <TextField
                                                margin="normal"
                                                required
                                                id="FirstName"
                                                label="Ad"
                                                name="FirstName"
                                                autoComplete="FirstName"
                                                variant="standard"
                                                value={registerForm.FirstName}
                                                onChange={handleChange}
                                                height="80px"
                                                size="small"
                                                sx={{ width: '48%' }}
                                            />
                                            <TextField
                                                sx={{ width: '48%' }}
                                                margin="normal"
                                                required
                                                id="LastName"
                                                label="Soyad"
                                                name="LastName"
                                                autoComplete="LastName"
                                                variant="standard"
                                                value={registerForm.LastName}
                                                onChange={handleChange}
                                                width="343px"
                                                height="80px"
                                                size="small"
                                            />
                                        </Box>
                                        <TextField
                                            margin="normal"
                                            required
                                            id="Email"
                                            label="E-Posta Adresi"
                                            name="Email"
                                            autoComplete="Email"
                                            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                                            variant="standard"
                                            value={registerForm.Email}
                                            onChange={handleChange}
                                            width="343px"
                                            height="80px"
                                            size="small"
                                        />

                                        <TextField
                                            margin="normal"
                                            required
                                            name="Password"
                                            label="Şifre"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            variant="standard"
                                            value={registerForm.Password}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            name="confirmPassword"
                                            label="Şifreni doğrula"
                                            type="password"
                                            id="confirmPassword"
                                            autoComplete="current-password"
                                            variant="standard"
                                            value={confirmPassword}
                                            error={
                                                confirmPassword !==
                                                registerForm.Password
                                            }
                                            helperText={
                                                confirmPassword !==
                                                registerForm.Password
                                                    ? 'Şifre Doğrulanamadı'
                                                    : ''
                                            }
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value,
                                                )
                                            }
                                            size="small"
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'none',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <FormControl variant="standard">
                                            <InputLabel htmlFor="component-simple">
                                                Telefon Numarası
                                            </InputLabel>
                                            <Input
                                                required
                                                name="Phone"
                                                type="tel"
                                                id="Phone"
                                                autoComplete="current-Phone"
                                                variant="standard"
                                                value={registerForm.Phone}
                                                onChange={handleChange}
                                                size="small"
                                            />
                                        </FormControl>
                                        <TextField
                                            margin="normal"
                                            required
                                            name="BirthDate"
                                            type="date"
                                            id="BirthDate"
                                            autoComplete="current-BirthDate"
                                            value={registerForm.BirthDate}
                                            onChange={handleChange}
                                            size="small"
                                        />
                                        <FormControl fullWidth>
                                            <InputLabel id="Gender-label">
                                                Cinsiyet
                                            </InputLabel>
                                            <Select
                                                labelId="Gender-label"
                                                id="Gender"
                                                name="Gender"
                                                value={registerForm.Gender}
                                                label="Cinsiyet"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={'Male'}>
                                                    Erkek
                                                </MenuItem>
                                                <MenuItem value={'Female'}>
                                                    Kadın
                                                </MenuItem>
                                                <MenuItem value={''}>
                                                    Belirtmek İstemiyorum
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                id="CbFirst"
                                                name="CbFirst"
                                                value={registerForm.CbFirst}
                                                checked={registerForm.CbFirst}
                                                onChange={handleChange}
                                                label="Sözleşmeyi okudum kabul ediyorum"
                                            />
                                        </FormGroup>
                                    </Box>
                                </Box>
                                {activeStep === 1 && (
                                    <>
                                        <Button
                                            onClick={handleOpen}
                                            sx={modal.button}
                                        >
                                            Sözleşme
                                        </Button>
                                        <Modal
                                            open={open}
                                            onError={handleClose}
                                            sx={{
                                                backgroundColor: 'transparent',
                                            }}
                                        >
                                            <Box sx={modal}>
                                                <Typography
                                                    id="modal-modal-title"
                                                    variant="h4"
                                                    component="h2"
                                                    align="center"
                                                    sx={{
                                                        color: '#F75936',
                                                        width: '50%',
                                                        margin: 'auto',
                                                    }}
                                                >
                                                    Sözleşme
                                                </Typography>
                                                <Box sx={modal.scrollBar}>
                                                    <Typography sx={{ mt: 2 }}>
                                                        Hello and welcome to the
                                                        [company name] website.
                                                        We are excited to have
                                                        you as a customer!
                                                    </Typography>
                                                    <Typography sx={{ mt: 2 }}>
                                                        We hope that you will
                                                        find our products and
                                                        services useful, and we
                                                        want to make sure you
                                                        know how much we
                                                        appreciate your
                                                        business. That's why
                                                        we've created this
                                                        contract, which outlines
                                                        the terms of our
                                                        relationship. Let's jump
                                                        right in!
                                                    </Typography>
                                                    <Typography sx={{ mt: 2 }}>
                                                        This contract is between
                                                        [name], hereinafter
                                                        referred to as "you" or
                                                        "the customer", and
                                                        [company name],
                                                        hereinafter referred to
                                                        as "we". It establishes
                                                        the terms under which we
                                                        agree to provide goods
                                                        or services to you. If
                                                        you have any questions
                                                        about these terms,
                                                        please contact us at
                                                        [phone number].
                                                    </Typography>
                                                    <Typography sx={{ mt: 2 }}>
                                                        This agreement is
                                                        effective from the date
                                                        on which we send you an
                                                        invoice for the first
                                                        time (the "Effective
                                                        Date"). The term of
                                                    </Typography>
                                                </Box>
                                                <Button
                                                    sx={modal.checkbox}
                                                    onClick={() => {
                                                        handleClose();
                                                        setModalCheckbox(true);
                                                    }}
                                                >
                                                    Okudum Kabul Ediyorum
                                                </Button>
                                            </Box>
                                        </Modal>
                                    </>
                                )}
                                {activeStep !== maxSteps - 1 && (
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        fullWidth
                                        variant="outlined"
                                        sx={buttons.next}
                                        // disabled={activeStep === maxSteps - 1}
                                    >
                                        İLERİ
                                    </Button>
                                )}
                                {activeStep > 0 && (
                                    <Button
                                        size="small"
                                        onClick={handleBack}
                                        fullWidth
                                        variant="outlined"
                                        sx={buttons.back}
                                        disabled={activeStep <= 0}
                                    >
                                        GERİ
                                    </Button>
                                )}
                                {activeStep === maxSteps - 1 && (
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="outlined"
                                        sx={buttons.submit}
                                    >
                                        HESAP OLUŞTUR
                                    </Button>
                                )}
                                {activeStep == 0 && (
                                    <Grid container>
                                        <Grid item>
                                            <Link href="#" variant="body1">
                                                {'Zaten Hesabın var mı!'}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                )}
                                {/* <Copyright sx={{ mt: 5 }} /> */}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} l={6} xl={6}>
                        <Box sx={boxStyle.rightside}></Box>
                    </Grid>
                </Grid>
            </Box>
            <ErrorModal
                open={openError}
                handleClose={handleCloseError}
                error={error}
            />
        </AuthLayout>
    );
};

export default Register;
