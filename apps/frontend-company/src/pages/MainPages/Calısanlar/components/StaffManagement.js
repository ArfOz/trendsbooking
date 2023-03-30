import React from 'react';

import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Popover,
    TextField,
    Typography,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import Input from '@mui/material/Input';

function StaffManagement() {
    // popover a ait box örneği için
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // popover a ait box örneği için
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    width: '95%',
                    m: 'auto',
                    mt: 15,
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
                        }}
                    >
                        Personel Yönetimi
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            color: '#9A9A9A',
                        }}
                    >
                        Tüm çalışanlarınızı tek bir yerden yönetin
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '20%',
                    }}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DownloadIcon color="info" />}
                        sx={{
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: 'white',
                            },
                            border: '1px solid #7D8398',
                        }}
                    >
                        İndir
                    </Button>
                    <Button
                        aria-describedby={id}
                        onClick={handleClick}
                        variant="contained"
                        color="primary"
                        sx={{
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: '#F74600',
                            },
                        }}
                    >
                        Yeni Çalışan
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 600, left: 800 }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                    >
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div>
                                <TextField
                                    label="With normal TextField"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                kg
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <FormControl
                                    sx={{ m: 1, width: '25ch' }}
                                    variant="outlined"
                                >
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                kg
                                            </InputAdornment>
                                        }
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                    />
                                    <FormHelperText id="outlined-weight-helper-text">
                                        Weight
                                    </FormHelperText>
                                </FormControl>
                                <FormControl
                                    sx={{ m: 1, width: '25ch' }}
                                    variant="outlined"
                                >
                                    <InputLabel htmlFor="outlined-adornment-password">
                                        Password
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={
                                                        handleClickShowPassword
                                                    }
                                                    onMouseDown={
                                                        handleMouseDownPassword
                                                    }
                                                    edge="end"
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">
                                        Amount
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                $
                                            </InputAdornment>
                                        }
                                        label="Amount"
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <TextField
                                    label="With normal TextField"
                                    id="filled-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                kg
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="filled"
                                />
                                <FormControl
                                    sx={{ m: 1, width: '25ch' }}
                                    variant="filled"
                                >
                                    <FilledInput
                                        id="filled-adornment-weight"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                kg
                                            </InputAdornment>
                                        }
                                        aria-describedby="filled-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                    />
                                    <FormHelperText id="filled-weight-helper-text">
                                        Weight
                                    </FormHelperText>
                                </FormControl>
                                <FormControl
                                    sx={{ m: 1, width: '25ch' }}
                                    variant="filled"
                                >
                                    <InputLabel htmlFor="filled-adornment-password">
                                        Password
                                    </InputLabel>
                                    <FilledInput
                                        id="filled-adornment-password"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={
                                                        handleClickShowPassword
                                                    }
                                                    onMouseDown={
                                                        handleMouseDownPassword
                                                    }
                                                    edge="end"
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    sx={{ m: 1 }}
                                    variant="filled"
                                >
                                    <InputLabel htmlFor="filled-adornment-amount">
                                        Amount
                                    </InputLabel>
                                    <FilledInput
                                        id="filled-adornment-amount"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                $
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <TextField
                                    label="With normal TextField"
                                    id="standard-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                kg
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="standard"
                                />
                                <FormControl
                                    variant="standard"
                                    sx={{ m: 1, mt: 3, width: '25ch' }}
                                >
                                    <Input
                                        id="standard-adornment-weight"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                kg
                                            </InputAdornment>
                                        }
                                        aria-describedby="standard-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                    />
                                    <FormHelperText id="standard-weight-helper-text">
                                        Weight
                                    </FormHelperText>
                                </FormControl>
                                <FormControl
                                    sx={{ m: 1, width: '25ch' }}
                                    variant="standard"
                                >
                                    <InputLabel htmlFor="standard-adornment-password">
                                        Password
                                    </InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={
                                                        handleClickShowPassword
                                                    }
                                                    onMouseDown={
                                                        handleMouseDownPassword
                                                    }
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    sx={{ m: 1 }}
                                    variant="standard"
                                >
                                    <InputLabel htmlFor="standard-adornment-amount">
                                        Amount
                                    </InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                $
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                        </Box>
                    </Popover>
                </Box>
            </Box>
        </>
    );
}

export default StaffManagement;
