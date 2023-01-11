import React from "react";
import { style } from "./style";
import { Box, Typography } from "@mui/material";

function Card3() {
  return (
    <>
      <Box sx={style.Box3}>
        <Typography sx={style.Typography2}>
          Make an appointment online
        </Typography>
        <Typography sx={style.Typography3}>
          Booksy is a free booking application, thanks to which you can easily
          find a free date and make an appointment conveniently.{" "}
        </Typography>
      </Box>
    </>
  );
}

export default Card3;
