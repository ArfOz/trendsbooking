import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { style } from "./style";

function Fade() {
  return (
    <>
      <Box sx={style.spbox}>
        <Box>
          <Typography sx={style.haircut}>Fade</Typography>
        </Box>

        <Box sx={style.buttonbox}>
          <Typography sx={style.price}>25TL</Typography>
          <Button variant="contained" sx={style.btnappointment}>
            Randevu Al
          </Button>
        </Box>
      </Box>
  
    </>
  );
}

export default Fade;