import {
    FormControl,
    Modal,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Box,
} from '@mui/material';
// import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

// const useStyles = makeStyles((theme) => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         padding: theme.spacing(2),
//         backgroundColor: theme.palette.background.paper,
//         boxShadow: theme.shadows[5],
//         borderRadius: theme.shape.borderRadius,
//         outline: 'none',
//         width: 400,
//         maxWidth: '90%',
//     },
//     textField: {
//         marginTop: theme.spacing(2),
//         marginBottom: theme.spacing(2),
//     },
//     formControl: {
//         marginTop: theme.spacing(2),
//         marginBottom: theme.spacing(2),
//         minWidth: 120,
//     },
//     button: {
//         marginTop: theme.spacing(2),
//     },
// }));

const ServiceModal = ({ open, onClose, onAddService }) => {
    const classes = useStyles();
    const [serviceName, setServiceName] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [serviceGender, setServiceGender] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [serviceWorker, setServiceWorker] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddService({
            name: serviceName,
            type: serviceType,
            gender: serviceGender,
            price: servicePrice,
            worker: serviceWorker,
        });
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose} className={classes.modal}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                className={classes.form}
            >
                <TextField
                    label="Servis Adı"
                    variant="outlined"
                    className={classes.textField}
                    value={serviceName}
                    onChange={(event) => setServiceName(event.target.value)}
                />
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Servis Tipi</InputLabel>
                    <Select
                        value={serviceType}
                        onChange={(event) => setServiceType(event.target.value)}
                        label="Service Type"
                    >
                        <MenuItem value="Haircut">Saç Kesimi</MenuItem>
                        <MenuItem value="Coloring">Saç Boyama</MenuItem>
                        <MenuItem value="Styling">Saç Styling</MenuItem>
                        <MenuItem value="Shave">Saç Yıkama</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Servis Cinsiyeti</InputLabel>
                    <Select
                        value={serviceGender}
                        onChange={(event) =>
                            setServiceGender(event.target.value)
                        }
                        label="Service Gender"
                    >
                        <MenuItem value="Male">Erkek</MenuItem>
                        <MenuItem value="Female">Kadın</MenuItem>
                        <MenuItem value="Unisex">Unisex</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Servis Fiyatı"
                    variant="outlined"
                    className={classes.textField}
                    value={servicePrice}
                    onChange={(event) => setServicePrice(event.target.value)}
                />
                <TextField
                    label="Çalışan"
                    variant="outlined"
                    className={classes.textField}
                    value={serviceWorker}
                    onChange={(event) => setServiceWorker(event.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Hizmet Ekle
                </Button>
            </Box>
        </Modal>
    );
};

export default ServiceModal;
