
import React from 'react'
import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

const MyStoreLeft = () => {
  return (
   <>
   <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '12vh',
     
   }}>
    <Typography
      variant="h4" // font-size: 24px; line-height: 28px;
      fontFamily="'Roboto', sans-serif" // font-family: 'Roboto';
      fontWeight={700} // font-weight: 700;
      fontStyle="normal" // font-style: normal;
      align="center" // align-items: center;
      sx={{ color: '#07232C' }} // color: #07232C;
    >
      Kadir Alkan Hair Artist Çukurambar
    </Typography>
    <Box display="flex" alignItems="center">
      <Typography
        variant="body1" // font-size: 16px; line-height: 19px;
        fontFamily="'Roboto', sans-serif" // font-family: 'Roboto';
        fontWeight={500} // font-weight: 500;
        fontStyle="normal" // font-style: normal;
        sx={{ color: '#07232C', mr: '8px' }} // color: #07232C;
      >
        Salon Puanı
      </Typography>
      
      {[1, 2, 3, 4, 5].map((index) => (
        <StarIcon key={index}   border= "1.5px solid #292D32" sx={{ 
          color: index <= 4 ? '#F7BC11' : '#C4C4C4',
        
        
        }} />
      ))}
    </Box>

   </Box>
   </>
  )
}

export default MyStoreLeft