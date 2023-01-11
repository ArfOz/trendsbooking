import React from "react";
import { style } from "./style";
import { Box, Typography } from "@mui/material";

function Card1() {
  return (
    <>
      <Box sx={style.Box1}>
        <Typography sx={style.Typography1}>
          Kendinize bir güzellik yapın sizlere en güzel hizmeti vermek için
          çalışıyoruz
        </Typography>
      </Box>
    </>
  );
}

export default Card1;
