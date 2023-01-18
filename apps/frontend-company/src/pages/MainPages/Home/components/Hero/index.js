import React from "react";
import { Box } from "@mui/material";
import HeroBg from "./components/HeroBg";
import {style} from './style'

const Hero = () => {
  return (
    <>
      <Box
        sx={style.container}
      >
        <HeroBg />
      </Box>
    </>
  );
};

export default Hero;
