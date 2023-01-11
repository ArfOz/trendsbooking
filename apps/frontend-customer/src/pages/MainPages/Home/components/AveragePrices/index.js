import React from "react";
import { Box, CardContent, Stack, Typography } from "@mui/material";
import { style } from "./style";

const Average = () => {
  return (
    <Box sx={ style.BoxContainer}>
      
      <Box sx={{
        display: "flex",
        mb:4,
        ml:2,
      }}>
        <Typography sx={style.Ortalama}>Ortalama Fiyatlar -</Typography>
        <Typography sx={style.Beykoz}>İstanbul / Beykoz</Typography>
      </Box>

      <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
        }}
      >
     
          <CardContent >
            <Typography sx={style.Title}>Erkek Saç Traşı</Typography>
            <Typography sx={style.Fiyatlar}>65 TL</Typography>
          </CardContent>
       

        <CardContent>
          <Typography sx={style.Title}>Saç Boyama</Typography>

          <Typography sx={style.Fiyatlar}>450 TL</Typography>
        </CardContent>

        <CardContent>
          <Typography sx={ style.Title}>Kadın Saç Kesimi</Typography>

          <Typography sx={ style.Fiyatlar}>235 TL</Typography>
        </CardContent>

        <CardContent>
          <Typography sx={ style.Title}>Sauna</Typography>

          <Typography sx={ style.Fiyatlar}>300 TL</Typography>
        </CardContent>
        
        <CardContent>
          <Typography sx={ style.Title}>Cild Bakımı</Typography>

          <Typography sx={ style.Fiyatlar}>700 TL</Typography>
        </CardContent>
      </Box>
    </Box>
  );
};

export default Average;
