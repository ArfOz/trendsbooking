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
import { createServices } from './../../../../../function/function';

const initialState = {
    DepartmentId: 1,
    ServiceType: '',
    ServiceTimes: '',
    ServiceName: '',
    Price: '',
    Prim: '',
    ServiceGender: '',
    Worker: '',
    Token: JSON.parse(localStorage.getItem('loginUserCompany'))?.AccessToken
};

const ServiceModal = ({ open, onClose }) => {
    const [error, setError] = useState('');
    const [newService, setNewService] = React.useState(initialState);

    const handleChange = (event) => {
        //const { name, value } = event.target;
        console.log('name', event.target.name);
        console.log('value', event.target.value);

        setNewService({
            ...newService,
            [event.target.name]: event.target.value,
        });
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert('Submit', event.target.name);
        console.log('post', newService);

        // setNewService({
        //     ...newService,
        //     Token: JSON.parse(localStorage.getItem('loginUserCompany')).AccessToken,
        // });
        console.log('newService :>> ', newService);

        try {
            const result = await createServices(newService);
            console.log('Service created successfully: ' + result);

            setNewService(initialState);
            //const newService = { ...initialState };
        } catch (error) {
            console.error('Error creating service:', error);

            setError('Error creating service');
        }
    };

    return (
        <Modal open={open} onClose={onClose} sx={style.modal}>
            <Box component="form" onSubmit={handleSubmit} sx={style.form}>
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
                            value={newService.ServiceType}
                            label="Hizmet Türü"
                            name="ServiceType"
                            onChange={handleChange}
                        >
                            <MenuItem value="Hair">Saç </MenuItem>
                            <MenuItem value="Nail">Tırnak</MenuItem>
                            <MenuItem value="Makeup">Makyaj</MenuItem>
                            <MenuItem value="Massage">Masaj</MenuItem>
                            <MenuItem value="Wax">Wax Stil</MenuItem>
                            <MenuItem value="Solarium">Solaryum</MenuItem>
                            <MenuItem value="Skincare">Cilt Bakımı</MenuItem>
                            <MenuItem value="LaserHairRemowal">
                                Lazer Saç Kesim
                            </MenuItem>
                            <MenuItem value="Tattoo">Tattoo</MenuItem>
                            <MenuItem value="Others">Diğer</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" sx={style.serviceGender}>
                        <InputLabel>Hizmet Cinsiyeti</InputLabel>
                        <Select
                            value={newService.ServiceGender}
                            label="Hizmet Cinsiyeti"
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
                        value={newService.price}
                        style={style.servicePrice}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Hizmet Primi"
                        variant="outlined"
                        name="Prim"
                        value={newService.prim}
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
                    <TextField
                        label="Çalışan"
                        variant="outlined"
                        name="Worker"
                        value={newService.worker}
                        style={style.servicePrim}
                        onChange={handleChange}
                    />
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
