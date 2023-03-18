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
import { Box, IconButton, Typography } from '@mui/material';

import './styles.css';

function createData(name, time, price, worker, prim) {
    return { name, time, price, worker, prim };
}

const rows = [
    createData('Saç Boya', 30, 100, 'TREDNSWORKER', 20),
    createData('Saç Kesimi', 60, 80, 'TREDNSWORKER', 10),
    createData('Saç Yıkama', 60, 80, 'TREDNSWORKER', 30),
    createData('Saç Fön', 60, 100, 'TREDNSWORKER', 50),
    createData('Saç Şekil', 60, 80, 'TREDNSWORKER', 40),
];

export default function BasicTable(props) {
    const [open, setOpen] = React.useState(false);
    const { row } = props;
    return (
        <Box>
            {' '}
            <Typography variant="h6" gutterBottom component="div">
                Hizmetler
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="left">Saç Bakımı</TableCell>{' '}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setOpen(!open)}
                                >
                                    {open ? (
                                        <KeyboardArrowUpIcon />
                                    ) : (
                                        <KeyboardArrowDownIcon />
                                    )}
                                </IconButton>
                            </TableCell>
                            <TableCell align="left">Kaş Bakımı</TableCell>
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
                                                <TableCell />
                                                <TableCell>
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
                                            {rows.map((row) => (
                                                <TableRow>
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
                                                        {row.prim}
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
