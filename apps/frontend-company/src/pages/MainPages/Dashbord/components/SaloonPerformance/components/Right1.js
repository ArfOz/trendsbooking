import { Box, Typography } from '@mui/material';

const paragraphText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac lorem sit amet purus mollis aliquet. Vivamus vel tortor mauris. Curabitur eu libero nec justo tincidunt malesuada. Nullam iaculis, elit vel pulvinar tincidunt, erat nunc pellentesque velit, sit amet commodo est mi in tellus. Suspendisse elementum justo non ante bibendum, sed imperdiet eros ultrices. Vestibulum fermentum magna eu nisl hendrerit tempor. Aliquam erat volutpat. Nulla lacinia diam et lectus bibendum, vel vestibulum velit tristique. Donec sollicitudin, magna sed vehicula commodo, ante ante pharetra nibh, sit amet dignissim felis nisi eu risus. Suspendisse potenti.`;



function Right1() {
  return (
    <Box sx={{
        height: "100%",
        overflowY: 'auto',
       pt:2,
       
        '& p': {
          marginBottom: '16px'
        }
        
        
        }}>
      {/* {[...Array(8)].map((_, index) => (
        <Typography key={index} variant="body1">
          {paragraphText}
        </Typography>
      ))} */}
    </Box>
  );
}

export default Right1;
