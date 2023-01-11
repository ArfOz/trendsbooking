import React from "react";
import { Box, Button, ButtonGroup, Fab, Typography } from "@mui/material";
import FooterLeft from "./FooterLeft";
import { Styles } from "./style";
import FooterRight from "./FooterRight";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import footerlogo from "../../assets/footerlogo.svg";

function FooterMain() {
  return (
    <>
      <Box sx={Styles.BoxContainer}>
        <Box sx={Styles.BoxinContainer}>
          <img src={footerlogo} alt="" width="83.6px" height="49.91px" />
          <FooterLeft />
          <FooterRight />
          <Fab color="secondary" aria-label="arrowup">
            <ArrowUpwardSharpIcon />
          </Fab>
        </Box>
      </Box>
      {/* ================600px============== */}
      <Box
        sx={Styles.BoxContainer600}
      >
        <Box
          sx={Styles.BoxinContainer600}
        >
          <img src={footerlogo} alt="" width="83.6px" height="49.91px" />

          <Box
            sx={Styles.LeftBoxContainer600}
          >
            <Box>
              <Typography textAlign="center" sx={Styles.Typography1}>
                123 Market St. #22B Charlottesville, California 44635
              </Typography>
            </Box>
            <Box sx={Styles.LeftBoxContainer}>
              <Typography mb="20px" sx={Styles.Typography2}>
                (434) 546-4356
              </Typography>
              <Typography sx={Styles.Typography2}>
                contact@lift.agency
              </Typography>
            </Box>
          </Box>

          <Box
            sx={Styles.LeftBoxContainer600}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
           
                width: "100%",
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
        </Box>
        <Fab color="secondary" aria-label="arrowup" sx={{
          mt:5,
        }}>
          <ArrowUpwardSharpIcon />
        </Fab>
      </Box>
    </>
  );
}

export default FooterMain;
