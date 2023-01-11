import React from "react";
import { Box, ButtonGroup, Typography, Button } from "@mui/material";
import { Styles } from "./style";

function FooterRight() {
  return (
    <>
      <Box sx={Styles.LeftBoxContainer}>
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
          <Box sx={Styles.LeftBoxContainer}>
            <ButtonGroup
              variant="text"
              orientation="vertical"
              sixe="small"
              color="secondary"
            >
              <Button sx={Styles.RightButtons}>About</Button>
              <Button sx={Styles.RightButtons}>Growers</Button>
              <Button sx={Styles.RightButtons}>Merchants</Button>
              <Button sx={Styles.RightButtons}> Partners</Button>
              <Button sx={Styles.RightButtons}>contact</Button>
            </ButtonGroup>
          </Box>
          {/* =============facebook======= */}
          <Box sx={Styles.LeftBoxContainer}>
            <ButtonGroup
              variant="text"
              orientation="vertical"
              size="small"
              color="secondary"
            >
              <Button sx={Styles.RightButtons}>Facebook</Button>
              <Button sx={Styles.RightButtons}>Twitter</Button>
              <Button sx={Styles.RightButtons}>Linkedin</Button>
              <Button sx={Styles.RightButtons}>Instagram</Button>
            </ButtonGroup>
          </Box>
          {/* =============facebook======= */}
        </Box>
        <Box>
          <Typography sx={Styles.RightButtons}>
            © 2020 Lift media. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default FooterRight;
