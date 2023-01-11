import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import ShopRectangle62 from "../../../../assets/ShopRectangle 62.svg";
import { style } from "./style";

function Row1TrendsBooking() {
  return (
    <>
      {/* TrendsBooking */}
      <Box
        sx={{
          display: {
            sm: "none",
            md: "block",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <Box>
            <Typography sx={style.trends}>Trends</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "35px",
                height: "13px",
                ml: 2.5,
                mb: 0.3,
              }}
            >
              <img src={ShopRectangle62} alt="" />
            </Box>
            <Box>
              <Typography sx={style.booking}>Booking</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* TrendsBooking */}
    </>
  );
}

export default Row1TrendsBooking;
