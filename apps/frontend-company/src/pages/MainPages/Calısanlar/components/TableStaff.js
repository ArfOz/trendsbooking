import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Checkbox, FormControlLabel } from '@mui/material';

function TableStaff() {
    return (
        <TableContainer
            component={Paper}
            sx={{
                width: '95%',
                m: 'auto',
                mt: 3,
                borderRadius: '8px',
            }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <FormControlLabel
                                control={
                                    <Checkbox size="small" color="secondary" />
                                }
                                label="isim"
                            />
                        </TableCell>
                        <TableCell>Telefon</TableCell>
                        <TableCell>Rol</TableCell>
                        <TableCell>Maaş</TableCell>
                        <TableCell>Prim</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <FormControlLabel
                                control={
                                    <Checkbox size="small" color="secondary" />
                                }
                                label={
                                    <Avatar
                                        sx={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src="https://randomuser.me/api/portraits/women/19.jpg"
                                        alt="tarık mengüç"
                                    />
                                }
                            />
                            Tarık Mengüç
                        </TableCell>
                        <TableCell>555-1234</TableCell>
                        <TableCell>Yönetici</TableCell>
                        <TableCell>5000 TL</TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                sx={{
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#F74600',
                                    },
                                    borderRadius: '40px',
                                }}
                            >
                                %10
                            </Button>
                        </TableCell>
                        <TableCell
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '60%',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    backgroundColor: '#FAFCFF',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#FAFCFF',
                                    },
                                    borderRadius: '10px',
                                    border: '1px solid #7D8398',
                                }}
                            >
                                Düzenle
                            </Button>

                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    backgroundColor: '#FAFCFF',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#FAFCFF',
                                    },
                                    borderRadius: '10px',
                                    border: '1px solid #7D8398',
                                }}
                            >
                                Sil
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <FormControlLabel
                                control={
                                    <Checkbox size="small" color="secondary" />
                                }
                                label={
                                    <Avatar
                                        sx={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src="https://randomuser.me/api/portraits/women/39.jpg"
                                        alt="acun yıldız"
                                    />
                                }
                            />
                            Acun Yıldız
                        </TableCell>
                        <TableCell>555-5678</TableCell>
                        <TableCell>Çalışan</TableCell>
                        <TableCell>3500 TL</TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                sx={{
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#F74600',
                                    },
                                    borderRadius: '40px',
                                }}
                            >
                                %10
                            </Button>
                        </TableCell>
                        <TableCell
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '60%',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    backgroundColor: '#FAFCFF',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#FAFCFF',
                                    },
                                    borderRadius: '10px',
                                    border: '1px solid #7D8398',
                                }}
                            >
                                Düzenle
                            </Button>

                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    backgroundColor: '#FAFCFF',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#FAFCFF',
                                    },
                                    borderRadius: '10px',
                                    border: '1px solid #7D8398',
                                }}
                            >
                                Sil
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <FormControlLabel
                                control={
                                    <Checkbox size="small" color="secondary" />
                                }
                                label={
                                    <Avatar
                                        sx={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src="https://randomuser.me/api/portraits/women/49.jpg"
                                        alt="Jane Doe"
                                    />
                                }
                            />
                            Jane Doe
                        </TableCell>
                        <TableCell>555-9012</TableCell>
                        <TableCell>Çalışan</TableCell>
                        <TableCell>4000 TL</TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                sx={{
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#F74600',
                                    },
                                    borderRadius: '40px',
                                }}
                            >
                                %10
                            </Button>
                        </TableCell>
                        <TableCell
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '60%',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    backgroundColor: '#FAFCFF',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#FAFCFF',
                                    },
                                    borderRadius: '10px',
                                    border: '1px solid #7D8398',
                                }}
                            >
                                Düzenle
                            </Button>

                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    backgroundColor: '#FAFCFF',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#FAFCFF',
                                    },
                                    borderRadius: '10px',
                                    border: '1px solid #7D8398',
                                }}
                            >
                                Sil
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <FormControlLabel
                                control={
                                    <Checkbox size="small" color="secondary" />
                                }
                                label={
                                    <Avatar
                                        sx={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src="https://randomuser.me/api/portraits/women/19.jpg"
                                        alt="tarık mengüç"
                                    />
                                }
                            />
                            Tarık Mengüç
                        </TableCell>
                        <TableCell>555-1234</TableCell>
                        <TableCell>Yönetici</TableCell>
                        <TableCell>5000 TL</TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                sx={{
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#F74600',
                                    },
                                    borderRadius: '40px',
                                }}
                            >
                                %10
                            </Button>
                        </TableCell>
                        <TableCell
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '60%',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    backgroundColor: '#FAFCFF',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#FAFCFF',
                                    },
                                    borderRadius: '10px',
                                    border: '1px solid #7D8398',
                                }}
                            >
                                Düzenle
                            </Button>

                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    backgroundColor: '#FAFCFF',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#FAFCFF',
                                    },
                                    borderRadius: '10px',
                                    border: '1px solid #7D8398',
                                }}
                            >
                                Sil
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <FormControlLabel
                                control={
                                    <Checkbox size="small" color="secondary" />
                                }
                                label={
                                    <Avatar
                                        sx={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src="https://randomuser.me/api/portraits/women/39.jpg"
                                        alt="acun yıldız"
                                    />
                                }
                            />
                            Acun Yıldız
                        </TableCell>
                        <TableCell>555-5678</TableCell>
                        <TableCell>Çalışan</TableCell>
                        <TableCell>3500 TL</TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                sx={{
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#F74600',
                                    },
                                    borderRadius: '40px',
                                }}
                            >
                                %10
                            </Button>
                        </TableCell>
                        <TableCell
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '60%',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    backgroundColor: '#FAFCFF',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#FAFCFF',
                                    },
                                    borderRadius: '10px',
                                    border: '1px solid #7D8398',
                                }}
                            >
                                Düzenle
                            </Button>

                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    backgroundColor: '#FAFCFF',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        backgroundColor: '#FAFCFF',
                                    },
                                    borderRadius: '10px',
                                    border: '1px solid #7D8398',
                                }}
                            >
                                Sil
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableStaff;
