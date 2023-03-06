import React from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material';

const MyStoreRight = () => {
  return (
   <>
   <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    

   }}>
    <Button
      sx={{
        width: '172px',
        height: '40px',
        borderRadius: '6px',
        backgroundColor: '#F75936',
        '&:hover': { backgroundColor: '#F74600' },
      }}
    >
      <Typography
        variant="body2"
        fontFamily="'Roboto', sans-serif"
        fontWeight={500}
        fontStyle="normal"
        sx={{ color: '#FFFFFF', textTransform: 'capitalize' }}
      >
        Mağazamı Görüntüle
      </Typography>
    </Button>

    <Button
      sx={{
        width: '172px',
        height: '40px',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: 'transparent',
      }}
    >
      <Typography
        variant="body2"
        fontFamily="'Roboto', sans-serif"
        fontWeight={500}
        fontStyle="normal"
        sx={{ color: '#F75936', textTransform: 'capitalize' }}
      >
        Çıkış Yap
      </Typography>
    </Button>
    

   </Box>
   
    
   </>
  )
}

export default MyStoreRight