import React, { useEffect, useState } from 'react';
import { AuthLayout } from '../../../layout';
import { modal, boxStyle } from './style';
import { styled } from '@mui/material/styles';
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
import Paper from '@mui/material/Paper';

const initialState = {
    FirstSecondName: '',
    TCId: '',
    Email: '',
    Password: '',
    Phone: '',
    TaxNu: '',
    CusGender: '',
    TaxOff: false,
    HallType: '',
    Iban: '',
};

export default function Register() {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerForm, setRegisterForm] = useState(initialState);

    const [activeElement, setActiveElement] = useState();
    const maxSteps = 3;

    //const auth = useAuth();

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
                    item.style.justifyContent = 'center';
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
    const [error, setError] = useState('');
    const [registered, setRegistered] = useState(false);

    const handleSubmit = async (e) => {
        setError('');
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
            setRegistered(false);
        } else if (registerForm.Password.length < 6) {
            setError('Şifre en az 6 karakterden oluşmalıdır...');
            setRegistered(false);
        } else if (registerForm.Password !== confirmPassword) {
            setError('Şifre doğrulanamadı...');
            setRegistered(false);
        } else if (
            registerForm.Phone.length !== 12 ||
            parseInt(registerForm.Phone.slice(0, 2)) !== 90
        ) {
            setError('Lütfen geçerli bir telefon numarası giriniz...');
            setRegistered(false);
        } else {
            await auth.postRegister(registerForm);
            setRegistered(true);
        }
    };
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
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                border: '1px solid red',
                                                m: 3,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent:
                                                        'space-around',
                                                    p: 1,
                                                    m: 1,
                                                }}
                                            >
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    id="FirstSecondName"
                                                    label="Adınız Soyadınız"
                                                    name="FirstSecondName"
                                                    autoComplete="text"
                                                    variant="outlined"
                                                    onChange={handleChange}
                                                    height="80px"
                                                    size="small"
                                                    sx={{
                                                        width: '40%',
                                                    }}
                                                />

                                                <TextField
                                                    margin="normal"
                                                    required
                                                    id="TCId"
                                                    label="TC Kimlik Numaranız"
                                                    name="TCId"
                                                    autoComplete="text"
                                                    variant="outlined"
                                                    onChange={handleChange}
                                                    height="80px"
                                                    size="small"
                                                    sx={{
                                                        width: '40%',
                                                    }}
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent:
                                                        'space-around',
                                                    p: 1,
                                                    m: 1,
                                                }}
                                            >
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    id="Email"
                                                    label="E-Posta Adresiniz"
                                                    name="Email"
                                                    autoComplete="email"
                                                    pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                                                    variant="outlined"
                                                    onChange={handleChange}
                                                    height="80px"
                                                    size="small"
                                                    sx={{
                                                        width: '40%',
                                                    }}
                                                />

                                                <TextField
                                                    margin="normal"
                                                    required
                                                    id="Password"
                                                    label="Şifreniz"
                                                    name="Password"
                                                    autoComplete="password"
                                                    variant="outlined"
                                                    onChange={handleChange}
                                                    height="80px"
                                                    size="small"
                                                    sx={{
                                                        width: '40%',
                                                    }}
                                                    helperText="En az 6 karakterden oluşmalıdır."
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent:
                                                        'space-around',
                                                    p: 1,
                                                    m: 1,
                                                }}
                                            >
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    id="Phone"
                                                    label="Telefon Numaranız"
                                                    name="Phone"
                                                    autoComplete="text"
                                                    variant="outlined"
                                                    onChange={handleChange}
                                                    height="80px"
                                                    size="small"
                                                    sx={{
                                                        width: '40%',
                                                    }}
                                                />

                                                <TextField
                                                    margin="normal"
                                                    required
                                                    name="confirmPassword"
                                                    label="Şifreni doğrula"
                                                    type="password"
                                                    id="confirmPassword"
                                                    autoComplete="password"
                                                    variant="outlined"
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
                                                    sx={{
                                                        width: '40%',
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'none',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    border: '1px solid red',
                                                    m: 3,
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent:
                                                            'space-around',
                                                        p: 1,
                                                        m: 1,
                                                    }}
                                                >
                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        id="TaxNu"
                                                        label="Vergi Numaranız"
                                                        name="TaxNu"
                                                        autoComplete="text"
                                                        variant="outlined"
                                                        onChange={handleChange}
                                                        height="80px"
                                                        size="small"
                                                        sx={{
                                                            width: '40%',
                                                        }}
                                                    />

                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        id="CusGender"
                                                        label="Hizmet Verilen Müşteri cinsiyeti"
                                                        name="CusGender"
                                                        autoComplete="text"
                                                        variant="outlined"
                                                        onChange={handleChange}
                                                        height="80px"
                                                        size="small"
                                                        sx={{
                                                            width: '40%',
                                                        }}
                                                    />
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent:
                                                            'space-around',
                                                        p: 1,
                                                        m: 1,
                                                    }}
                                                >
                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        id="TaxOff"
                                                        label="Vergi Dairesi"
                                                        name="TaxOff"
                                                        autoComplete="text"
                                                        variant="outlined"
                                                        onChange={handleChange}
                                                        height="80px"
                                                        size="small"
                                                        sx={{
                                                            width: '40%',
                                                        }}
                                                    />

                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        id="HallType"
                                                        label="Salon Türü"
                                                        name="Password"
                                                        autoComplete="password"
                                                        variant="outlined"
                                                        onChange={handleChange}
                                                        height="80px"
                                                        size="small"
                                                        sx={{
                                                            width: '40%',
                                                        }}
                                                        helperText="En az 6 karakterden oluşmalıdır."
                                                    />
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent:
                                                            'left',
                                                        p: 1,
                                                        m: 1,
                                                    }}
                                                >
                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        id="Iban"
                                                        label="IBAN Numaranız"
                                                        name="Iban"
                                                        autoComplete="text"
                                                        variant="outlined"
                                                        onChange={handleChange}
                                                        height="80px"
                                                        size="small"
                                                        sx={{
                                                            width: '40%',
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Button onClick={handleOpen} sx={modal.button}>
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
                                        Hello and welcome to the [company name]
                                        website. We are excited to have you as a
                                        customer!
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        We hope that you will find our products
                                        and services useful, and we want to make
                                        sure you know how much we appreciate
                                        your business. That's why we've created
                                        this contract, which outlines the terms
                                        of our relationship. Let's jump right
                                        in!
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        This contract is between [name],
                                        hereinafter referred to as "you" or "the
                                        customer", and [company name],
                                        hereinafter referred to as "we". It
                                        establishes the terms under which we
                                        agree to provide goods or services to
                                        you. If you have any questions about
                                        these terms, please contact us at [phone
                                        number].
                                    </Typography>
                                    <Typography sx={{ mt: 2 }}>
                                        This agreement is effective from the
                                        date on which we send you an invoice for
                                        the first time (the "Effective Date").
                                        The term of
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
                    </Grid>
                    <Grid item xs={false} sm={false} md={4} lg={4} xl={4}>
                        <Box sx={boxStyle.rightside}></Box>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    );
}
