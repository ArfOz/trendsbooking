import { Box, Button } from '@mui/material';
import React,{useState} from 'react'

function RightTop() {
    const [selectedButton, setSelectedButton] = useState('gun');

    const handleButtonSelection = (value) => {
        setSelectedButton(value);
        // Seçili olan buton değerini başka işlemler için kullanabilirsiniz.
    };
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '95%',
                   
                 
                   
                }}
            >
                
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '23%',
                    height: '8vh',
                    border: '1px solid #D9D9D9',
                    borderRadius: '6px',
                }}>
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            border:'none'
                        }}
                        color="info"
                        variant={
                            selectedButton === 'gun' ? 'contained' : 'outlined'
                        }
                        onClick={() => handleButtonSelection('gun')}
                    >
                        Gün
                    </Button>
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            border:'none'
                        }}
                        color="info"
                        variant={
                            selectedButton === 'hafta'
                                ? 'contained'
                                : 'outlined'
                        }
                        onClick={() => handleButtonSelection('hafta')}
                    >
                        Hafta
                    </Button>
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                            border:'none'
                        }}
                        color="info"
                        variant={
                            selectedButton === 'ay' ? 'contained' : 'outlined'
                        }
                        onClick={() => handleButtonSelection('ay')}
                    >
                        Ay
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default RightTop