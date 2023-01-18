import React from "react";
import { Box, Typography } from "@mui/material";

import { style } from "./style";

function HeroTypography() {
  return (
    <>
      <Box sx={style.flexColumn}>
        <Box
          sx={{
            mt: 19,
          }}
        >
          <Typography sx={style.Bi}>Bi güzellik yapın!</Typography>
        </Box>
        <Box
          sx={{
            mt: 2,
          }}
        >
          <Typography sx={style.Size}>
            Size en uygun salonlardan online randevunuzu kolayca alın.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default HeroTypography;
