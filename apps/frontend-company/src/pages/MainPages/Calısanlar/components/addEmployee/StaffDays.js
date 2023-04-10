

import { Box, TextField } from '@mui/material';
import React from 'react'

function StaffDays() {
  return (
      <Box
          sx={{
              width: '95%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              m: 'auto',
              mt: 3,
          }}
      >
          <TextField
              label="Personel İzin Günleri"
              variant="outlined"
              sx={{
                  width: '100%',
              }}
          />
         
         
      </Box>
  );
}

export default StaffDays