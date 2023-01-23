import React from "react";
import { Box, Button, ButtonGroup, Fab, Typography } from "@mui/material";
import FooterLeft from "./components/FooterLeft";
import { style } from "./style";
import FooterRight from "./components/FooterRight";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import footerlogo from "../../assets/footerlogo.svg";

function Footer() {
  return (
    <>
      <Box sx={style.BoxContainer}>
        <Box sx={style.BoxinContainer}>
          <img src={footerlogo} alt="" width="83.6px" height="49.91px" />
          <FooterLeft />
          <FooterRight />
          <Fab color="secondary" aria-label="arrowup">
            <ArrowUpwardSharpIcon />
          </Fab>
        </Box>
      </Box>
      {/* ================600px============== */}
      <Box sx={style.BoxContainer600}>
        <Box sx={style.BoxinContainer600}>
          <img src={footerlogo} alt="" width="83.6px" height="49.91px" />

          <Box sx={style.LeftBoxContainer600}>
            <Box>
              <Typography textAlign="center" sx={style.Typography1}>
                123 Market St. #22B Charlottesville, California 44635
              </Typography>
            </Box>
            <Box sx={style.LeftBoxContainer}>
              <Typography mb="20px" sx={style.Typography2}>
                (434) 546-4356
              </Typography>
              <Typography sx={style.Typography2}>
                contact@lift.agency
              </Typography>
            </Box>
          </Box>

          <Box sx={style.LeftBoxContainer600}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",

                width: "100%",
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
        </Box>
        <Fab
          color="secondary"
          aria-label="arrowup"
          sx={{
            mt: 5,
          }}
        >
          <ArrowUpwardSharpIcon />
        </Fab>
      </Box>
    </>
  );
}

export default Footer;
