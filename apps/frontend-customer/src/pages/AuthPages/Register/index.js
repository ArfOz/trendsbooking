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
    InputLabel,
    MenuItem,
    Modal,
    Input,
    Select,
    FormHelperText,
} from '@mui/material';
import LogoShort from '../../../components';
import { GoogleLoginButton } from 'react-social-login-buttons';
import LogoWordShort from './components/LogoWordShort';
import { Calculate } from '@mui/icons-material';
import { buttons, modal, boxStyle, input } from './style';
import ErrorModal from './components/ErrorModal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Verification from './components/Verification';
import { useAuth } from '../../../context/authContext';

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
    const maxSteps = 3;

    const auth = useAuth();

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
        setError(null);
    };

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

    const handleChangePhone = (e) => {
        registerForm['Phone'] = e;
    };

    //VERIFICATION
    const [verification, setVerification] = useState('');

    const handleChangeVerification = (e) => {
        setVerification(e);
    };

    const handleSubmitVerification = (e) => {
        e.preventDefault();
        console.log('verification', verification);
    };
    //VERIFICATION

    const [error, setError] = useState(null);
    const [response, setResponse] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        registerForm['Username'] =
            registerForm.FirstName + ' ' + registerForm.LastName;
        console.log('registerForm', registerForm);
        if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                registerForm.Email,
            )
        ) {
            setError('Lütfen geçerli bir email giriniz...');
        } else if (registerForm.Password.length < 6) {
            setError('Şifre en az 6 karakterden oluşmalıdır...');
        } else if (registerForm.Password !== confirmPassword) {
            setError('Şifre doğrulanamadı...');
        } else if (
            registerForm.Phone.length !== 12 ||
            parseInt(registerForm.Phone.slice(0, 2)) !== 90
        ) {
            setError('Lütfen geçerli bir telefon numarası giriniz...');
        } else {
            await auth.postRegister(registerForm);
        }
    };
    
    useEffect(() => {
        if (error) {
            handleOpenError(true);
        }
    }, [error]);

    useEffect(() => {
        if (response.LastName) {
            localStorage.setItem('registerResponse', JSON.stringify(response));
            setActiveStep(2);
        }
    }, [response]);

    return (
        <AuthLayout>
            <Box sx={{ backgroundColor: 'white' }}>
                <Grid container component="">
                    {/*##################  Form Section #################  */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box sx={boxStyle.leftMain}>
                            <Box sx={boxStyle.headerBox}>
                                <Box sx={boxStyle.LogoWordShort}>
                                    <LogoWordShort />
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
                                        {activeStep === 2
                                            ? 'Lütfen mailinize gelen doğrulama kodunu giriniz'
                                            : 'Hesap Oluşturun!'}
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
                                                autoComplete="text"
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
                                                autoComplete="text"
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
                                            autoComplete="email"
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
                                            autoComplete="password"
                                            variant="standard"
                                            value={registerForm.Password}
                                            onChange={handleChange}
                                            size="small"
                                            helperText="En az 6 karakterden oluşmalıdır."
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            name="confirmPassword"
                                            label="Şifreni doğrula"
                                            type="password"
                                            id="confirmPassword"
                                            autoComplete="password"
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
                                            {/* <InputLabel htmlFor="component-simple">
                                                Telefon Numarası
                                            </InputLabel>
                                            <Input
                                                required
                                                name="Phone"
                                                type="tel"
                                                id="Phone"
                                                autoComplete="tel"
                                                variant="standard"
                                                value={registerForm.Phone}
                                                onChange={handleChange}
                                                size="small"
                                                inputProps={{
                                                    pattern:
                                                        '[0-9]{3}-[0-9]{3}-[0-9]{4}',
                                                }}
                                                // error={}
                                            />
                                            <FormHelperText>
                                                Örnek: 123 456 7890
                                            </FormHelperText> */}
                                        </FormControl>
                                        <InputLabel htmlFor="component-simple">
                                            Telefon Numarası
                                        </InputLabel>
                                        <PhoneInput
                                            country={'tr'}
                                            value={registerForm.Phone}
                                            onChange={handleChangePhone}
                                            onlyCountries={['tr']}
                                            inputProps={{
                                                name: 'Phone',
                                                required: true,
                                                autoFocus: true,
                                                style: {
                                                    width: '100%',
                                                },
                                            }}
                                        />
                                        <FormHelperText>
                                            Örnek: +90 123 456 7890
                                        </FormHelperText>
                                        <TextField
                                            margin="normal"
                                            required
                                            name="BirthDate"
                                            type="date"
                                            id="BirthDate"
                                            autoComplete="date"
                                            value={registerForm.BirthDate}
                                            onChange={handleChange}
                                            size="small"
                                            inputProps={{ max: '2011-01-01' }}
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
                                                <MenuItem value={'Not specify'}>
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
                                    <Verification
                                        handleChangeVerification={
                                            handleChangeVerification
                                        }
                                    />
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
                                {activeStep < 1 && (
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
                                {activeStep === 1 && (
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
                                {activeStep == 2 && (
                                    <Button
                                        size="small"
                                        onClick={handleSubmitVerification}
                                        fullWidth
                                        variant="outlined"
                                        sx={buttons.back}
                                        disabled={activeStep <= 0}
                                    >
                                        DOĞRULA
                                    </Button>
                                )}
                                {activeStep === maxSteps - 2 && (
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
                    <Grid item xs={0} sm={0} md={6} lg={6} xl={6}>
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
