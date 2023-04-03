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
import { ServiceGender, ServiceType } from '@prisma/client';
import React, { useState } from 'react';

const initialState = {
    ServiceType: '',
    ServiceTime: '',
    ServiceName: '',
    ServicePrice: '',
    ServicePrim: '',
    ServiceGender: '',
    Worker: '',
};

const ServiceModal = ({ open, onClose }) => {
    const [error, setError] = useState('');
    const [newService, setNewService] = React.useState(initialState);

    const handleChange = (event) => {
        setNewService({
            ...newService,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        setError('');
        event.preventDefault();
        // extract form data from event.target.elements
        // const formData = {
        //     serviceType: event.target.elements.ServiceType.value,
        //     serviceTime: event.target.elements.ServiceTime.value,
        //     serviceName: event.target.elements.ServiceName.value,
        //     servicePrice: event.target.elements.ServicePrice.value,
        //     servicePrim: event.target.elements.ServicePrim.value,
        //     serviceGender: event.target.elements.ServiceGender.value,
        //     worker: event.target.elements.Worker.value,
        // };

        // create a new service object by merging formData with initialData
        const newService = { ...initialState };

        // do something with the new service object, such as adding it to a list of services or sending it to a server
        console.log(newService);
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
                        <InputLabel>Servis Tipi</InputLabel>
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
                        <InputLabel>Servis Cinsiyeti</InputLabel>
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
                    />
                    <TextField
                        label="Hizmet Süresi"
                        variant="outlined"
                        name="ServiceTime"
                        value={newService.ServiceTime}
                        style={style.serviceTime}
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
                        name="ServiceName"
                        value={newService.ServiceName}
                        style={style.servicePrice}
                    />
                    <TextField
                        label="Hizmet Primi"
                        variant="outlined"
                        name="ServiceTime"
                        value={newService.ServiceTime}
                        style={style.servicePrim}
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
                            <MenuItem value="Haircut">Selim Yılmaz</MenuItem>
                            <MenuItem value="Coloring">Ahmet Ersoy</MenuItem>
                            <MenuItem value="Styling">Akif Aydın</MenuItem>
                            <MenuItem value="Shave">Azra Demir</MenuItem>
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
