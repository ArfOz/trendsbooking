import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Button, IconButton, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { useEffect, useState } from 'react';
import './styles.css';

const axios = require('axios');

export default function BasicTable() {
    const [services, setServices] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState('');

    const getServices = async (token) => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const response = await axios.post(
                'http://localhost:3300/api/departments/getdetails',
                7,
                { headers },
            );
            const data = response.data;
            console.log(data);
            setServices(data);
        } catch (error) {
            console.log('Error fetching services data:', error);
        }
    };
    const token = JSON.parse(
        localStorage.getItem('loginUserCompany'),
    )?.AccessToken;

    useEffect(() => {
        getServices(token);
    }, []);

    return (
        <Box>
            <TableContainer
                component={Paper}
                sx={{
                    width: '95%',
                    m: 'auto',
                    mb: 1,
                    mt: 3,
                    borderRadius: '8px',
                }}
            >
                <Table aria-label="collapsible table">
                    <TableBody>
                        <TableRow hover>
                            <TableCell>
                                <IconButton
                                    aria-label="expand row"
                                    size="large"
                                    onClick={() => setOpen(!open)}
                                >
                                    {open ? (
                                        <KeyboardArrowUpIcon color="info" />
                                    ) : (
                                        <KeyboardArrowDownIcon color="info" />
                                    )}
                                </IconButton>
                            </TableCell>
                            <TableCell align="left" component="th" scope="row">
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    Kaş Bakımı
                                </Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell
                                style={{ paddingBottom: 0, paddingTop: 0 }}
                            >
                                <Collapse
                                    in={open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Seç</TableCell>
                                                <TableCell align="right">
                                                    Hizmet Adı
                                                </TableCell>
                                                <TableCell align="right">
                                                    Süre
                                                </TableCell>
                                                <TableCell align="right">
                                                    Fiyat
                                                </TableCell>
                                                <TableCell align="right">
                                                    Çalışan
                                                </TableCell>
                                                <TableCell align="right">
                                                    Prim
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        {/* <TableBody>
                                            {services.map((service, index) => (
                                                <Table key={index}>
                                                    <TableCell align="left">
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    size="small"
                                                                    color="secondary"
                                                                />
                                                            }
                                                            label="Seç"
                                                        />
                                                    </TableCell>

                                                    <TableCell align="right">
                                                        {service.ServiceName}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {service.ServiceTimes}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {service.Price}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {service.Worker}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Button
                                                            variant="contained"
                                                            sx={{
                                                                borderRadius:
                                                                    '40px',
                                                                width: '71px',
                                                                height: '24px',
                                                            }}
                                                        >
                                                            20
                                                        </Button>
                                                    </TableCell>

                                                    <TableCell align="right">
                                                        <Button variant="outlined">
                                                            Düzenle
                                                        </Button>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            sx={{
                                                                backgroundColor:
                                                                    '#FAFCFF',
                                                                textTransform:
                                                                    'capitalize',
                                                                '&:hover': {
                                                                    backgroundColor:
                                                                        '#FAFCFF',
                                                                },
                                                                borderRadius:
                                                                    '10px',
                                                                border: '1px solid #7D8398',
                                                            }}
                                                        >
                                                            Sil
                                                        </Button>
                                                    </TableCell>
                                                </Table>
                                            ))}
                                        </TableBody> */}
                                    </Table>
                                </Collapse>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
