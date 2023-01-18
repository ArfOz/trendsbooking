
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { style } from "./style";

const Happier = () => {
  return (
    <Box
      sx={style.BoxContainer}
    >
      <Typography
        sx={style.Typography1}
      >
        Müşterileriniz Daha Mutlu
      </Typography>

      <Box sx={{       
        width:"70%",
        height:60,
      }}>
        <Typography
        sx={style.Typography2}
      >
        Kuaför salonundan hizmet alacak kişi için en önemli unsurlardan biri,
        almak istediği randevuyu istediği saatte ve istediği personelden
        alabilmekten geçer.
      </Typography>
      </Box>

      
    </Box>
  );
};

export default Happier;
