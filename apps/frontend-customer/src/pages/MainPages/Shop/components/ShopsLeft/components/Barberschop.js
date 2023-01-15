import React from "react";
import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { style } from "./style";

const Barberschop = () => {
  return (
    <Box sx={style.chopcontainer}>
      <Box sx={style.typcontainer}>
        <Typography sx={style.name}>Barberschop Ciach & Style</Typography>

        <Typography sx={style.address}>
          Kızılay, Yiğit Apartmanı, Meşrutiyet mahallesi, Konur Sok. D:No:9/11,
          06420 Ankara
        </Typography>
      </Box>
      <Box>
        <FavoriteBorderIcon sx={{ fontSize: 40 }} />
      </Box>
    </Box>
  );
};

export default Barberschop;
