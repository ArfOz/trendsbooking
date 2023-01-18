import React from "react";
import { Box, Typography } from "@mui/material";
import { style } from "./style";

function FooterLeft() {
  return (
    <>
      <Box sx={style.LeftBoxContainer}>
        <Box
          sx={{
            width:{
              xs: "200px",
              sm: "200px",
              md: "200px",
              lg: "300px",
              xl: "300px",
            },
        
          }}
        >
          <Typography sx={style.Typography1}>
            123 Market St. #22B Charlottesville, California 44635
          </Typography>
        </Box>
        <Box sx={style.LeftBoxContainer}>
          <Typography sx={style.Typography2}>(434) 546-4356</Typography>
          <Typography sx={style.Typography2}>contact@lift.agency</Typography>
        </Box>
      </Box>
    </>
  );
}

export default FooterLeft;
