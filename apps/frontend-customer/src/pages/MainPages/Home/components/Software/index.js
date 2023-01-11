import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SouthEastSharpIcon from "@mui/icons-material/SouthEastSharp";
import Arrow from "../../../../../assets/Arrow.svg";
import { style } from "./style";


const Software = () => {
  return (
    // container Box başlangıc
    <Box
      sx={style.BoxContainer}
    >
      <Box
        sx={{
          mb: 5,
          mr: 1,
        }}
      >
        <img src={Arrow} alt="" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={style.Typography1}
        >
          Kuaför Salonunuz İçin
        </Typography>
        <Typography
          sx={style.Typography1}
        >
          Eksiksiz Bir Yazılım
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={style.Typography2}
        >
          TrendsBooking'i ister bilgisayarınızdan, ister cep telefonunuzdan,
          ister tabletinizden kullanarak Randevularınızı, Ürün & Paket
          Satışlarınızı ve çok daha fazlasını kolayca yönetebilirsiniz!
        </Typography>
      </Box>
    </Box>
    // container Box sonu
  );
};

export default  Software;
