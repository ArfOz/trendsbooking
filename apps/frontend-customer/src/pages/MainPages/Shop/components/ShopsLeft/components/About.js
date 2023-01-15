import React from "react";
import { Box, Typography } from "@mui/material";
import { style } from "./style";

const About = () => {
  return (
    <Box sx={style.aboutcontainer}>
      <Typography sx={style.about}>Hakkımızda</Typography>
      <Typography sx={style.typography}>
        Barberschop Ciach & Style Men's Hairdresser💈 It was established in 2015
        out of passion for hairdressing. It is our job and at the same time a
        sneak peek and a hobby 🔥individual approach to the client gives us a
        mega effective work ...
      </Typography>
    </Box>
  );
};

export default About;
