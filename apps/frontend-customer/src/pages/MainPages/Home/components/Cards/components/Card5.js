import React from "react";
import { style } from "./style";
import { Box, Typography } from "@mui/material";

function Card5() {
  return (
    <>
      <Box sx={style.Box2}>
        <Typography sx={style.Typography2}>Randevu Takibi</Typography>
        <Typography sx={style.Typography3}>
          Tüm randevularınızı tek bir sistemde toplayarak çakışmaları
          engelleyin, randevularınızı kolayca yönetin
        </Typography>
      </Box>
    </>
  );
}

export default Card5;
