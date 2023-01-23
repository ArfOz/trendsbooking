import React from "react";
import { Box, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { style } from "./style";

const Services = () => {
  return (
    <Box sx={style.servicescontainer}>
      <Box>
        <Typography sx={style.services}>Hizmetler</Typography>
      </Box>

      {/* search */}
      <Box sx={style.searchbox}>
        <SearchIcon sx={{ ml: 2 }} />
        <InputBase
          placeholder="aradığınız hizmet........"
          sx={{ color: "#9A9A9A", ml: 2 }}
        />
      </Box>
      {/* search */}
    </Box>
  );
};

export default Services;
