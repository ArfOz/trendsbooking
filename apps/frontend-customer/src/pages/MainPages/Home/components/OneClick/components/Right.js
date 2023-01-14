import React from "react";
import { Box, Button, Typography } from "@mui/material";
import card4 from "../../../../../../assets/card4.svg";
import { style } from "./style";

function Right() {
  return (
    <>
      <Box sx={style.BoxContainer}>
        <Box sx={style.BoxinContainer}>
          <Box sx={style.BoxforTypography}>
            <Typography sx={style.TypographyTitle}>
              İşletmeler için TrendsBook
            </Typography>
            <Typography sx={style.TypographySubTitle}>
              Randevularını düzenle ödemelerini takip et reklam ver hepsini bir
              arada sadece bir tıkla yap
            </Typography>

            <Button
              variant="contained"
              color="info"
              size="small"
              sx={style.WorkWithUs}
            >
              Bizimle Çalış
            </Button>
          </Box>

          <Box sx={style.img}>
            <img src={card4} alt="" width="100%" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Right;
