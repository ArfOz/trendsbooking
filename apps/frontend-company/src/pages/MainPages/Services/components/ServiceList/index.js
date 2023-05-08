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
import { makeStyles } from '@mui/styles';
import {getServices} from '../../../../../function/function';

function createData(ServiceName, ServiceTimes, Price, Worker, Prim) {
    return { ServiceName, ServiceTimes, Price, Worker, Prim };
}

const rows = [
    createData('Saç Boya', 30, 100, 'TREDNSWORKER', 20),
    createData('Saç Kesimi', 60, 80, 'TREDNSWORKER', 10),
    createData('Saç Yıkama', 60, 80, 'TREDNSWORKER', 30),
    createData('Saç Fön', 60, 100, 'TREDNSWORKER', 50),
    createData('Saç Şekil', 60, 80, 'TREDNSWORKER', 40),
];



export default function BasicTable() {
    const [services, setServices] = useState([]);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        async function getServicesData() {
            const data = await getServices();
            setServices(data);
        }
        getServicesData();
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
                                        <TableBody>
                                            {rows.map((row, index) => (
                                                <TableRow key={index}>
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
                                                        {row.ServiceName}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.ServiceTimes}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.Price}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.Worker}
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
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Collapse>
                            </TableCell>
                        </TableRow>
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
                            <TableCell align="left">
                                {' '}
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    Saç Bakımı
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
                                        <TableBody>
                                            {rows.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell align="right">
                                                        <FormGroup>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        size="small"
                                                                        color="secondary"
                                                                    />
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </TableCell>

                                                    <TableCell align="right">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.time}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.price}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.worker}
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
                                                        <Button
                                                            variant="outlined"
                                                            sx={{}}
                                                        >
                                                            Düzenle
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Collapse>
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
                            <TableCell align="left">
                                {' '}
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    Cilt Bakımı
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
                                        <TableBody>
                                            {rows.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell align="right">
                                                        <FormGroup>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        size="small"
                                                                        color="secondary"
                                                                    />
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </TableCell>

                                                    <TableCell align="right">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.time}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.price}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.worker}
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
                                                </TableRow>
                                            ))}
                                        </TableBody>
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
