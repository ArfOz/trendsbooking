import React from "react";
import { style } from "./components/style";
import { Box,  Typography } from "@mui/material";

import Soru1 from "./components/Question1";
import Soru2 from "./components/Question2";
import Soru3 from "./components/Question3";
import Soru4 from "./components/Question4";

function Questions() {
  

  return (
    <>
    
      <Box sx={style.TypographyBox}>
        <Typography sx={style.Typography1}>Sıkca Sorulan Sorular</Typography>
        <Typography sx={style.Typography2}>
          Sizlere en iyi hizmeti sunabilmek için çok çalışıyoruz. Sizler için en
          çok sorulan soruları derledik
        </Typography>
      </Box>

      <Soru1 />
      <Soru2 />
      <Soru3 />
      <Soru4 />
    </>
  );
}

export default Questions;
