import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Styles } from "./style";

const Barberschop = () => {
  return (
    // container
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* Barberschop Ciach & Style */}

      <Box>
        <Typography sx={Styles.typographybarber}>
          Barberschop Ciach & Style
        </Typography>

        <Typography sx={Styles.typographyadress}>
          Kızılay, Yiğit Apartmanı, Meşrutiyet mahallesi, Konur Sok. D:No:9/11,
          06420 Ankara
        </Typography>
      </Box>
      <Box>
        <FavoriteBorderIcon sx={{ fontSize: 40 }} />
      </Box>

      {/* Barberschop Ciach & Style */}
    </Box>
    // container
  );
};

export default Barberschop;
