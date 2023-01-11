import React from "react";
import { Box, Typography } from "@mui/material";
import { Styles } from "./style";

function FooterLeft() {
  return (
    <>
      <Box sx={Styles.LeftBoxContainer}>
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
          <Typography sx={Styles.Typography1}>
            123 Market St. #22B Charlottesville, California 44635
          </Typography>
        </Box>
        <Box sx={Styles.LeftBoxContainer}>
          <Typography sx={Styles.Typography2}>(434) 546-4356</Typography>
          <Typography sx={Styles.Typography2}>contact@lift.agency</Typography>
        </Box>
      </Box>
    </>
  );
}

export default FooterLeft;
