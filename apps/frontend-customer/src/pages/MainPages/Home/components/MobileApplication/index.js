import React from "react";
import { style } from "./style";
import { Box, Button, Typography } from "@mui/material";
import googleplay from "../../../../../assets/googleplay.svg";
import appstore from "../../../../../assets/appstore.svg";

function Mobile() {
  return (
    <>
      <Box sx={style.BoxContainer}>
        <Box sx={style.BoxinContainer}>
          <Box sx={style.TypographyBox}>
            <Typography sx={style.Typography1}>
              Mobil Uygulama IOS, Android
            </Typography>
            <Typography sx={style.Typography2}>
              Mobile uygulamamızı indirerek müşterilerinizle iletişimde kalın
            </Typography>
          </Box>
          <Box sx={style.Buttons}>
            <Button variant="contained" color="secondary" sx={style.Button}>
              <img width="100px" src={googleplay} alt="" />
            </Button>
            <Button variant="contained" color="secondary" sx={style.Button}>
              <img width="100px" src={appstore} alt="" />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Mobile;
