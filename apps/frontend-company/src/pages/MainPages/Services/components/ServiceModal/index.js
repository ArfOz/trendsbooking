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
import { style } from './style';

import React, { useState } from 'react';

import { ServiceType } from '@prisma/client';
import { createService } from '../../../../../function/function';

const initialState = {
    ServiceType: '',
    ServiceTimes: '',
    ServiceName: '',
    Price: '',
    Prim: '',
    ServiceGender: '',
    Worker: '',
};

const ServiceModal = ({ open, onClose }) => {
    const [error, setError] = useState('');
    const [newService, setNewService] = React.useState(initialState);

    const handleChange = (event) => {
        console.log('deneme', event.target.value);
        setNewService({
            ...newService,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(newService);

        try {
            const result = await createService(newService);
            console.log('Service created successfully: ' + result);

            setNewService(initialState);
            //const newService = { ...initialState };

            // do something with the new service object, such as adding it to a list of services or sending it to a server
        } catch (error) {
            console.error('Error creating service:', error);

            setError('Error creating service');
        }
    };

    return (
        <Modal open={open} onClose={onClose} sx={style.modal}>
            <Box
                component="form"
                onSubmit={() => handleSubmit()}
                sx={style.form}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        mt: 8,
                        ml: 2,
                        mr: 2,
                    }}
                >
                    <FormControl variant="outlined" sx={style.serviceType}>
                        <InputLabel>Hizmet Tipi</InputLabel>
                        <Select
                            value={ServiceType}
                            label="Hizmet Türü"
                            name="ServiceType"
                            onChange={handleChange}
                        >
                            <MenuItem value="Haircut">Saç Kesimi</MenuItem>
                            <MenuItem value="Coloring">Saç Boyama</MenuItem>
                            <MenuItem value="Styling">Saç Styling</MenuItem>
                            <MenuItem value="Shave">Saç Yıkama</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" sx={style.serviceGender}>
                        <InputLabel>Hizmet Cinsiyeti</InputLabel>
                        <Select
                            value={newService.ServiceGender}
                            label="Service Gender"
                            name="ServiceGender"
                            onChange={handleChange}
                        >
                            <MenuItem value="Male">Erkek</MenuItem>
                            <MenuItem value="Female">Kadın</MenuItem>
                            <MenuItem value="Unisex">Unisex</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        mt: 8,
                        ml: 2,
                        mr: 2,
                    }}
                >
                    <TextField
                        label="Hizmet Adı"
                        variant="outlined"
                        name="ServiceName"
                        value={newService.ServiceName}
                        style={style.serviceName}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Hizmet Süresi"
                        variant="outlined"
                        name="ServiceTimes"
                        value={newService.ServiceTimes}
                        style={style.serviceTime}
                        onChange={handleChange}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        mt: 8,
                        ml: 2,
                        mr: 2,
                    }}
                >
                    <TextField
                        label="Hizmet Fiyatı"
                        variant="outlined"
                        name="Price"
                        value={newService.Price}
                        style={style.servicePrice}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Hizmet Primi"
                        variant="outlined"
                        name="Prim"
                        value={newService.Prim}
                        style={style.servicePrim}
                        onChange={handleChange}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',

                        mt: 8,
                        ml: 2,
                        mr: 2,
                    }}
                >
                    <FormControl variant="outlined" sx={style.serviceType}>
                        <InputLabel>Çalışan</InputLabel>
                        <Select
                            value={newService.Worker}
                            label="Worker"
                            name="Worker"
                            onChange={handleChange}
                        >
                            <MenuItem>Selim Yılmaz</MenuItem>
                            <MenuItem>Ahmet Ersoy</MenuItem>
                            <MenuItem>Akif Aydın</MenuItem>
                            <MenuItem>Azra Demir</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        mt: 8,
                        ml: 2,
                        mr: 2,
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={style.button}
                    >
                        Hizmet Ekle
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default ServiceModal;
