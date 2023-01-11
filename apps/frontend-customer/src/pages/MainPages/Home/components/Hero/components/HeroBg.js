import React from "react";
import { Box, Button } from "@mui/material";
import Herotypography from "./Herotypography";
import HeroSearch from "./HeroSearch";
import { style } from "./style";
import hrbg from "../../../../../../assets/hrbg.png";

function HeroBg() {
  return (
    <>
      <Box sx={style.HeroBgContainer}>
        <Box sx={style.flexColumn}>
          <Herotypography />
          <HeroSearch />
          <Button 
            sx={{
              mt: 10,
            }}
          >
            <img src={hrbg} alt="" width="40px" />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default HeroBg;
