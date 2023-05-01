import React, { useEffect, useRef, useState } from 'react';
import { AuthLayout } from '../../../layout';
import { buttons, modal, boxStyle, input } from './style';
import { styled } from '@mui/material/styles';
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
    CircularProgress,
} from '@mui/material';
import LogoWord from './components/LogoWord';
import { useAuth } from '../../../context/authContext';
import Verification from './components/Verification';
import ErrorModal from './components/ErrorModal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { isValid } from 'iban';

const initialState = {
    Username: '',
    FirstName: '',
    LastName: '',
    TCKN: '',
    Email: '',
    Password: '',
    Phone: '',
    TaxNo: '',
    Sector: '',
    TaxAdmin: '',
    Salon: '',
    IBAN: '',
    Country: 'tr',
    City: '',
    District: '',
    CbFirst: false,
    Neighborhood: '',
};

export default function Register() {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerForm, setRegisterForm] = useState(initialState);
    const [activeElement, setActiveElement] = useState();
    const [successMessage, setSuccessMessage] = useState('');
    const maxSteps = 4;
    const auth = useAuth();
    const navigate = useNavigate();

    const title = [
        'Kullanıcı Bilgileri',
        'İşletme Bilgileri',
        'İşletme Bilgileri',
        '',
    ];

    //Slider
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = (e) => {
        setActiveElement(
            e.target.parentNode.parentNode.childNodes[0].childNodes[0]
                .childNodes,
        );
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

    const [buttonsChild, setButtonsChild] = useState(1);
    const buttonsRef = useRef();
    useEffect(() => {
        if (buttonsRef.current.childNodes.length === 1) {
            setButtonsChild(1);
        } else {
            setButtonsChild(2);
        }
    }, [activeStep]);

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

    //VERIFICATION
    const [verification, setVerification] = useState('');

    const handleChangeVerification = (e) => {
        setVerification(e);
    };
    const handleSubmitVerification = async (e) => {
        e.preventDefault();
        console.log('verification', verification);
        if (auth.registerUser.Token) {
            await auth.verifyCode({
                Code: parseInt(verification),
                Token: auth.registerUser.Token,
            });
        }
    };

    useEffect(() => {
        if (auth.verifyCodeData?.Success) {
            setError('Kaydınız başarılı bir şekilde gerçekleşmiştir.');
            setSuccessMessage('Başarılı:');
        }
    }, [auth.verifyCodeData]);

    const handleSuccess = () => {
        setOpen(false);
        navigate('/');
    };

    //VERIFICATION

    const [error, setError] = useState('');
    const [registered, setRegistered] = useState(false);

    const handleSubmit = async (e) => {
        setError('');
        e.preventDefault();
        console.log('registerForm', registerForm);
        registerForm['Username'] =
            registerForm.FirstName + ' ' + registerForm.LastName;
        await auth.postRegister(registerForm);
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
        } else if (
            registerForm.TCKN.length !== 11 ||
            registerForm.TCKN[0] == 0 ||
            registerForm.TCKN[10] % 2 == 1 ||
            isNaN(registerForm.TCKN)
        ) {
            setError('Lütfen geçerli bir TC Kimlik numarası giriniz...');
            setRegistered(false);
            // } else if (
            //     !isValid(registerForm.IBAN)
            // ) {
            //     setError('Lütfen geçerli bir IBAN giriniz...');
            //     setRegistered(false);
        } else {
            setRegistered(true);
        }
    };

    useEffect(() => {
        if (registered) {
            console.log('auth.registerErrors :>> ', auth.registerErrors);
            if (auth.registerErrors?.response.data.Code == 411) {
                setError('Lütfen sözleşmeyi okuyup kabul ediniz!!!');
            } else if (
                auth.registerErrors?.response.data.details?.toString() ===
                'Ooops... User already exists'
            ) {
                setError(
                    'Lütfen daha önce kayıt olmamış bir email ile giriş yapınız!!!',
                );
            } else if (auth.registerErrors?.response.data.Code == 412) {
                let initialValues = {
                    FirstName: 'Ad',
                    LastName: 'Soyad',
                    IBAN: 'IBAN Numarası',
                    Salon: 'Salon Türü',
                    Sector: 'Cinsiyet',
                    TCKN: 'TC Kimlik Numarası',
                    TaxNo: 'Vergi Numarası',
                    TaxAdmin: 'Vergi Dairesi'
                };
                let emptyValues = [];
                for (const key in registerForm) {
                    if (Object.hasOwnProperty.call(registerForm, key)) {
                        const element = registerForm[key];
                        if (!element) {
                            emptyValues.push(initialValues[key]);
                        }
                    }
                }
                emptyValues.length > 1 && emptyValues.splice(-1, 0, 've');
                let newError = replaceChar(
                    replaceChar(
                        emptyValues.join(', '),
                        '',
                        emptyValues.join(', ').lastIndexOf(','),
                    ),
                    '',
                    replaceChar(
                        emptyValues.join(', '),
                        '',
                        emptyValues.join(', ').lastIndexOf(','),
                    ).lastIndexOf(','),
                );
                console.log(newError);

                emptyValues.length > 0 &&
                    setError(
                        `${
                            emptyValues.length > 1 ? newError : emptyValues
                        } boş bırakılamaz!!!`,
                    );
            } else {
                setError('');
                // setActiveStep(2);
            }
        }
    }, [auth.registerErrors]);

    function replaceChar(origString, replaceChar, index) {
        let firstPart = origString.substr(0, index);
        let lastPart = origString.substr(index + 1);

        let newString = firstPart + replaceChar + lastPart;
        return newString;
    }

    useEffect(() => {
        if (error) {
            handleOpenError(true);
        }
    }, [error]);

    useEffect(() => {
        if (auth.registerUser?.Data === 'Email onayı bekleniyor') {
            setActiveStep(3);
        }
        //console.log('auth.registerUser', auth.registerUser);
    }, [auth.registerUser]);

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
                                            color: '#07232C',
                                            mb: 2,
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            padding: '0 6rem',
                                        }}
                                    >
                                        {activeStep === 3
                                            ? 'Lütfen mailinize gelen doğrulama kodunu giriniz'
                                            : 'Hesap Oluşturun!'}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '90%',
                                }}
                            >
                                <Typography
                                    component="p"
                                    variant="text"
                                    sx={{ width: '50%', fontWeight: '600' }}
                                    align="left"
                                >
                                    {title[activeStep]}
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="text"
                                    sx={{ width: '50%' }}
                                    align="right"
                                >
                                    {activeStep + 1}/{maxSteps}
                                </Typography>
                            </Box>
                            <Box sx={boxStyle.progressBarEmpty}>
                                <Box
                                    sx={{
                                        borderRadius: '15px',
                                        background: ' #07232C',
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
                                        {/*##################  Page  1 #################  */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                m: 3,
                                            }}
                                        >
                                            <Box sx={input.formBox}>
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    id="FirstName"
                                                    label="Adınız"
                                                    name="FirstName"
                                                    autoComplete="text"
                                                    variant="outlined"
                                                    onChange={handleChange}
                                                    height="80px"
                                                    size="small"
                                                    sx={input.formInput}
                                                    value={
                                                        registerForm.FirstName
                                                    }
                                                />

                                                <TextField
                                                    margin="normal"
                                                    required
                                                    id="LastName"
                                                    label="Soyadınız"
                                                    name="LastName"
                                                    autoComplete="text"
                                                    variant="outlined"
                                                    onChange={handleChange}
                                                    height="80px"
                                                    size="small"
                                                    sx={input.formInput}
                                                    value={
                                                        registerForm.LastName
                                                    }
                                                />
                                            </Box>
                                            <Box sx={input.formBox}>
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    id="Email"
                                                    label="E-Posta Adresiniz"
                                                    name="Email"
                                                    autoComplete="email"
                                                    variant="outlined"
                                                    onChange={handleChange}
                                                    height="80px"
                                                    size="small"
                                                    sx={input.formInput}
                                                    value={registerForm.Email}
                                                />

                                                <TextField
                                                    margin="normal"
                                                    required
                                                    id="Password"
                                                    type="password"
                                                    label="Şifreniz"
                                                    name="Password"
                                                    autoComplete="password"
                                                    pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                                                    variant="outlined"
                                                    onChange={handleChange}
                                                    height="80px"
                                                    size="small"
                                                    sx={input.formInput}
                                                    helperText="En az 6 karakterden oluşmalıdır."
                                                    value={
                                                        registerForm.Password
                                                    }
                                                />
                                            </Box>
                                            <Box sx={input.formBox}>
                                                {/* <TextField
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
                                                    sx={input.formInput}
                                                    value={registerForm.Phone}
                                                /> */}
                                                <Box sx={{ width: '40%' }}>
                                                    <InputLabel htmlFor="component-simple">
                                                        Telefon Numarası
                                                    </InputLabel>
                                                    <PhoneInput
                                                        country={'tr'}
                                                        value={
                                                            registerForm.Phone
                                                        }
                                                        onChange={
                                                            handleChangePhone
                                                        }
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
                                                </Box>
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
                                                    sx={input.formInput}
                                                />
                                            </Box>
                                        </Box>
                                        {/*##################  Page 2 #################  */}
                                        <Box
                                            sx={{
                                                display: 'none',
                                                flexDirection: 'column',
                                                m: 3,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}
                                            >
                                                <Box sx={input.formBox}>
                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        id="TaxNo"
                                                        label="Vergi Numaranız"
                                                        name="TaxNo"
                                                        autoComplete="text"
                                                        variant="outlined"
                                                        onChange={handleChange}
                                                        height="80px"
                                                        size="small"
                                                        sx={input.formInput}
                                                    />

                                                    <FormControl
                                                        sx={input.formSelect}
                                                        size="small"
                                                    >
                                                        <InputLabel>
                                                            Cinsiyet
                                                        </InputLabel>
                                                        <Select
                                                            id="Sector"
                                                            name="Sector"
                                                            label="Cinsiyet"
                                                            defaultValue={''}
                                                            onChange={
                                                                handleChange
                                                            }
                                                        >
                                                            <MenuItem
                                                                value={'Male'}
                                                            >
                                                                Erkek
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={'Female'}
                                                            >
                                                                Kadın
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={
                                                                    'NottoSay'
                                                                }
                                                            >
                                                                Belirtmek
                                                                İstemiyorum
                                                            </MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                                <Box sx={input.formBox}>
                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        id="TaxAdmin"
                                                        label="Vergi Dairesi"
                                                        name="TaxAdmin"
                                                        autoComplete="text"
                                                        variant="outlined"
                                                        onChange={handleChange}
                                                        //height="80px"
                                                        size="small"
                                                        sx={input.formInput}
                                                        value={
                                                            registerForm.TaxAdmin
                                                        }
                                                    />

                                                    <FormControl
                                                        sx={input.formSelect}
                                                        size="small"
                                                    >
                                                        <InputLabel>
                                                            Salon Türü
                                                        </InputLabel>
                                                        <Select
                                                            id="Salon"
                                                            name="Salon"
                                                            label="Salon Türü"
                                                            defaultValue={''}
                                                            onChange={
                                                                handleChange
                                                            }
                                                        >
                                                            <MenuItem
                                                                value={'Hair'}
                                                            >
                                                                Saç
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={'Nail'}
                                                            >
                                                                Tırnak
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={'MakeUp'}
                                                            >
                                                                Makyaj
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={
                                                                    'Massage'
                                                                }
                                                            >
                                                                Masaj
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={'Wax'}
                                                            >
                                                                Wax
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={
                                                                    'Solarium'
                                                                }
                                                            >
                                                                Solaryum
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={
                                                                    'SkinCare'
                                                                }
                                                            >
                                                                Cilt Bakımı
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={
                                                                    'LaserHairRemoval'
                                                                }
                                                            >
                                                                Lazer Saç Kesimi
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={'Tattoo'}
                                                            >
                                                                Tattoo
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={'Others'}
                                                            >
                                                                Diğerleri
                                                            </MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    {/* <TextField
                                                        margin="normal"
                                                        required
                                                        id="Salon"
                                                        label="Salon Türü"
                                                        name="Salon"
                                                        autoComplete="text"
                                                        variant="outlined"
                                                        onChange={handleChange}
                                                        height="80px"
                                                        size="small"
                                                        sx={{
                                                            width: '50%',
                                                            ml: 15,
                                                        }}
                                                        helperText="En az 6 karakterden oluşmalıdır."
                                                        value={
                                                            registerForm.Salon
                                                        }
                                                    /> */}
                                                </Box>
                                                <Box sx={input.formBox}>
                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        id="IBAN"
                                                        label="IBAN Numaranız"
                                                        name="IBAN"
                                                        autoComplete="text"
                                                        variant="outlined"
                                                        onChange={handleChange}
                                                        // height="80px"
                                                        size="small"
                                                        sx={input.formInput}
                                                        value={
                                                            registerForm.IBAN
                                                        }
                                                    />
                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        id="TCKN"
                                                        label="TC Kimlik Numaranız "
                                                        name="TCKN"
                                                        autoComplete="text"
                                                        onChange={handleChange}
                                                        // height="80px"
                                                        size="small"
                                                        sx={input.formInput}
                                                        value={
                                                            registerForm.TCKN
                                                        }
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                        {/*##################  Page 3 #################  */}
                                        <Box
                                            sx={{
                                                display: 'none',
                                                flexDirection: 'column',
                                                m: 3,
                                            }}
                                        >
                                            <Grid
                                                container
                                                compenent=""
                                                sx={{
                                                    p: '8px',
                                                    m: '8px',
                                                }}
                                            >
                                                <Grid item md={6} lg={6} xl={6}>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection:
                                                                'column',
                                                        }}
                                                    >
                                                        <TextField
                                                            margin="normal"
                                                            required
                                                            id="City"
                                                            label="Şehir"
                                                            name="City"
                                                            autoComplete="text"
                                                            variant="outlined"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            height="80px"
                                                            size="small"
                                                            sx={{
                                                                width: '80%',
                                                            }}
                                                            value={
                                                                registerForm.City
                                                            }
                                                        />
                                                        <TextField
                                                            margin="normal"
                                                            required
                                                            id="District"
                                                            label="İlçe"
                                                            name="District"
                                                            autoComplete="text"
                                                            variant="outlined"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            height="80px"
                                                            size="small"
                                                            sx={{
                                                                width: '80%',
                                                            }}
                                                            value={
                                                                registerForm.District
                                                            }
                                                        />
                                                        <TextField
                                                            margin="normal"
                                                            required
                                                            id="Neighborhood"
                                                            label="Sokak"
                                                            name="Neighborhood"
                                                            autoComplete="text"
                                                            variant="outlined"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            height="80px"
                                                            size="small"
                                                            sx={{
                                                                width: '80%',
                                                            }}
                                                            value={
                                                                registerForm.Neighborhood
                                                            }
                                                        />
                                                        <FormGroup>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox />
                                                                }
                                                                id="CbFirst"
                                                                name="CbFirst"
                                                                value={
                                                                    registerForm.CbFirst
                                                                }
                                                                checked={
                                                                    registerForm.CbFirst
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                label="Sözleşmeyi okudum kabul ediyorum"
                                                            />
                                                        </FormGroup>
                                                    </Box>
                                                </Grid>
                                                <Grid item md={6} lg={6} xl={6}>
                                                    <Box
                                                        sx={{
                                                            backgroundColor:
                                                                'rgba(217,217,217)',
                                                            width: '100%',
                                                            height: '380px',
                                                            borderRadius:
                                                                '16px',
                                                        }}
                                                    ></Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Verification
                                            handleChangeVerification={
                                                handleChangeVerification
                                            }
                                        />
                                    </Box>
                                </Box>
                                {activeStep === 2 && (
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
                                                        color: '#07232C',
                                                        width: '30%',
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
                                <Box
                                    ref={buttonsRef}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: `${
                                            buttonsChild == 1
                                                ? 'flex-end'
                                                : 'space-between'
                                        }`,
                                        m: 'auto',
                                        width: '90%',
                                        mt: 8,
                                    }}
                                >
                                    {activeStep < 3 && activeStep > 0 && (
                                        <Button
                                            size="large"
                                            onClick={handleBack}
                                            variant="outlined"
                                            sx={buttons.back}
                                            disabled={activeStep <= 0}
                                        >
                                            GERİ
                                        </Button>
                                    )}
                                    {activeStep < 2 && (
                                        <Button
                                            onClick={handleNext}
                                            variant="outlined"
                                            size="large"
                                            sx={buttons.back}
                                            // disabled={activeStep === maxSteps - 1}
                                        >
                                            İLERİ
                                        </Button>
                                    )}
                                    {activeStep == 3 && (
                                        <Button
                                            size="small"
                                            onClick={handleSubmitVerification}
                                            variant="outlined"
                                            sx={buttons.back}
                                            disabled={activeStep <= 0}
                                        >
                                            DOĞRULA
                                        </Button>
                                    )}
                                    {activeStep === 2 && (
                                        <Button
                                            type="submit"
                                            variant="outlined"
                                            sx={buttons.back}
                                        >
                                            {auth.isLoading ? (
                                                <CircularProgress />
                                            ) : (
                                                'HESAP OLUŞTUR'
                                            )}
                                        </Button>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={false} sm={false} md={4} lg={4} xl={4}>
                        <Box sx={boxStyle.rightside}></Box>
                    </Grid>
                </Grid>
            </Box>
            <ErrorModal
                open={openError}
                handleClose={handleCloseError}
                error={error}
                successMessage={successMessage}
                handleSuccess={handleSuccess}
            />
        </AuthLayout>
    );
}
