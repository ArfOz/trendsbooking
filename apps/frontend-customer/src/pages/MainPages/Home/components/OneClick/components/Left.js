import React from "react";
import { Box, Button, Typography } from "@mui/material";
import card3 from "../../../../../../assets/card3.svg";
import { style} from "./style";

function TektıkLeft() {
  return (
    <>
      <Box sx={style.BoxContainer}>
        <Box sx={style.BoxinContainer}>
          <Box sx={style.BoxforTypography}>
            <Typography sx={style.TypographyTitle}>
              Kuaförüne tek tıkla ulaş
            </Typography>
            <Typography sx={style.TypographySubTitle}>
              Kendin için en güzel günü seç ve kuaförünü aramadan randevunu al.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={style.RegisterButton}
            >
              Kayıt Ol
            </Button>
          </Box>

          <Box sx={style.img}>
            <img src={card3} alt="" width="100%" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TektıkLeft;
