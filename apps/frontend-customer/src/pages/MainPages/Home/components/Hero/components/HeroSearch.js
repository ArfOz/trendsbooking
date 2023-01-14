import React from "react";
import { Box, Button, Divider, InputBase } from "@mui/material";

import { style } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";

const HeroSearch = () => {
  return (
    <Box sx={style.HeroSearchContainer}>
      <Box sx={style.flexCenter}>
        <SearchIcon sx={{ mr: 1 }} />
        <InputBase placeholder="aradığınız hizmet...." />
      </Box>

      <Box sx={style.flexCenter}>
        <Divider orientation="vertical" flexItem />
        <PlaceIcon sx={{ mr: 1 }} />
        <InputBase placeholder="Ankara...." />
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={style.buttons}
          onClick={() => {
            alert("aramazsan arama yar. aramazsan arama ");
          }}
        >
          Ara
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSearch;
