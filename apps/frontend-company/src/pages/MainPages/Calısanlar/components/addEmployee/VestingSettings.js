import { Box, TextField } from '@mui/material';
import React from 'react'

function VestingSettings() {
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
              label="Hak Ediş Ayarları"
              variant="outlined"
              sx={{
                  width: '100%',
              }}
          />
         
         
      </Box>
  );
}

export default VestingSettings