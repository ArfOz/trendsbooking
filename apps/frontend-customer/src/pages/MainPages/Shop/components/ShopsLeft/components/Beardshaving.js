import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { style } from "./style";

function Beardshaving() {
  return (
    <>
      <Box sx={style.spbox}>
        <Box>
          <Typography sx={style.haircut}>Sakal Traşı</Typography>
        </Box>

        <Box sx={style.buttonbox}>
          <Typography sx={style.price}>50 TL</Typography>
          <Button variant="contained" sx={style.btnappointment}>
            Randevu Al
          </Button>
        </Box>
      </Box>
  
    </>
  );
}

export default Beardshaving;