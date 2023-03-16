import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Paper,
    Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';

function CheckBox() {
    const [showCheckboxes, setShowCheckboxes] = useState(false);

    const [clickAll, setClickAll] = useState(false);

    const handleChangeAll = (event) => {
        setClickAll(event.target.checked);
        setClick1(event.target.checked);
        setClick2(event.target.checked);
        setClick3(event.target.checked);
    };
    // option 1 için
    const [click1, setClick1] = useState(false);

    const handleChange1 = (event) => {
        setClick1(event.target.checked);
    };
    // option 2 için
    const [click2, setClick2] = useState(false);

    const handleChange2 = (event) => {
        setClick2(event.target.checked);
    };
    // option 3 için
    const [click3, setClick3] = useState(false);

    const handleChange3 = (event) => {
        setClick3(event.target.checked);
    };

    const handleButtonClick = () => {
        setShowCheckboxes(!showCheckboxes);
    };

    return (
        <>
            <Button
                variant="contained"
                onClick={handleButtonClick}
                startIcon={
                    showCheckboxes ? (
                        <ArrowDropDownIcon color="info" />
                    ) : (
                        <ArrowRightIcon color="info" />
                    )
                }
                sx={{
                    background: '#F2F8FF',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                    '&:hover': {
                        backgroundColor: '#F2F8FF',
                    },
                    m: 'auto',
                    mt:3,
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '20px',
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        color: 'black',
                    }}
                >
                    Personel
                </Typography>
            </Button>
            {showCheckboxes && (
                <Box
                    sx={{
                        flexDirection: 'column',
                        width: '70%',
                        m: 'auto',
                        mt:2,
                        borderLeft: '1px solid #D9D9D9',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            ml: 2,
                        }}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={clickAll}
                                    onChange={handleChangeAll}
                                    size="small"
                                    color="secondary"
                                />
                            }
                            label="Hepsi"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={click1}
                                    onChange={handleChange1}
                                    size="small"
                                    color="secondary"
                                />
                            }
                            label="Acun"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={click2}
                                    onChange={handleChange2}
                                    size="small"
                                    color="secondary"
                                />
                            }
                            label="Hadise"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={click3}
                                    onChange={handleChange3}
                                    size="small"
                                    color="secondary"
                                />
                            }
                            label="Murat"
                        />
                    </Box>
                </Box>
            )}
        </>
    );
}

export default CheckBox;
