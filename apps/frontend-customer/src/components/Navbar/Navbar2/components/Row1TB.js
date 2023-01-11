import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import ShopRectangle62 from "../../../../assets/ShopRectangle 62.svg";
import { style } from "./style";

function Row1TB() {
  return (
   <>
       {/* TB */}
       <Box
        marginRight="30px"
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
          },
        }}
      >
        <Stack direction="row">
          <Typography
            sx={style.T}
          >
            T
          </Typography>

          <Stack direction="column" spacing={0.4}>
            <Stack
              sx={{
                width: "14.73px",
                height: "3.88",
                marginLeft: "3px",
                padding: "0px",
                color: "white",
              }}
            >
              <img src={ShopRectangle62} alt="" />
            </Stack>

            <Typography
              sx={style.B}
            >
              B
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* TB*/}

   </>
  )
}

export default Row1TB