import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Styles } from "./style";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Typography sx={Styles.hakkımızda}>Hakkımızda</Typography>
      <Typography sx={Styles.typography}>
        Barberschop Ciach & Style Men's Hairdresser💈 It was established in 2015
        out of passion for hairdressing. It is our job and at the same time a
        sneak peek and a hobby 🔥individual approach to the client gives us a
        mega effective work ...
      </Typography>
    </Box>
  );
};

export default About;
