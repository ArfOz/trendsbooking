import React from "react";
import { Box, ButtonGroup, Typography, Button } from "@mui/material";
import { style } from "./style";

function FooterRight() {
  return (
    <>
      <Box sx={style.LeftBoxContainer}>
        <Box
          sx={{
            display: "flex",
            width:{
              xs: "200px",
              sm: "200px",
              md: "200px",
              lg: "300px",
              xl: "300px",
            },
            justifyContent: "space-between",
       
          }}
        >
          <Box sx={style.LeftBoxContainer}>
            <ButtonGroup
              variant="text"
              orientation="vertical"
              sixe="small"
              color="secondary"
            >
              <Button sx={style.RightButtons}>About</Button>
              <Button sx={style.RightButtons}>Growers</Button>
              <Button sx={style.RightButtons}>Merchants</Button>
              <Button sx={style.RightButtons}> Partners</Button>
              <Button sx={style.RightButtons}>contact</Button>
            </ButtonGroup>
          </Box>
          {/* =============facebook======= */}
          <Box sx={style.LeftBoxContainer}>
            <ButtonGroup
              variant="text"
              orientation="vertical"
              size="small"
              color="secondary"
            >
              <Button sx={style.RightButtons}>Facebook</Button>
              <Button sx={style.RightButtons}>Twitter</Button>
              <Button sx={style.RightButtons}>Linkedin</Button>
              <Button sx={style.RightButtons}>Instagram</Button>
            </ButtonGroup>
          </Box>
          {/* =============facebook======= */}
        </Box>
        <Box>
          <Typography sx={style.RightButtons}>
            © 2020 Lift media. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default FooterRight;
