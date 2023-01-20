import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { style } from "./style";
import Beardshaving from "./Beardshaving";
import Fade from "./Fade";

function Haircut() {
  return (
    <>
      <Box sx={style.spbox}>
        <Box>
          <Typography sx={style.haircut}>Saç Traşı</Typography>
        </Box>

        <Box sx={style.buttonbox}>
          <Typography sx={style.price}>120 TL</Typography>
          <Button variant="contained" sx={style.btnappointment}>
            Randevu Al
          </Button>
        </Box>
      </Box>
      <Divider/>
      <Beardshaving/>
      <Divider/>
      <Fade/>
      <Divider/>
  
    </>
  );
}

export default Haircut;
