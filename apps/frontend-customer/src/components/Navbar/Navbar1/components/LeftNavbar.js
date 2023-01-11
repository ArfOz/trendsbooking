import React from "react";

import { AppBar, Box, Stack, Toolbar, Typography, Button } from "@mui/material";
import booking from "../../../../assets/booking.svg";
import { style } from "./style";



const LeftNavbar = () => {
  return (
    <>
      {/* TrendsBooking */}
     
         <Box sx={style.container}>
        <Typography sx={style.typography}>Trends</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack
            sx={{
              width: "40px",
              marginLeft: "23px",
            }}
          >
            <img src={booking} alt="" />
          </Stack>

          <Typography sx={style.Booking}>Booking</Typography>
        </Box>
      </Box>
    
     
      {/* TrendsBooking */}
    </>
  );
};

export default LeftNavbar;
