import React from "react";
import { Box } from "@mui/material";
import SearchNavbarRow1 from "./SearchNavbarRow1";
import SearchNavbarRow2 from "./SearchNavbarRow2";
import SearchNavbar600px from "./SearchNavbar600px";

const SearchhNavbar = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "135px",
          width: "100%",
          background: "#07232C",
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          flexDirection: "column",
        }}
      >
        <SearchNavbarRow1 />
        <SearchNavbarRow2 />
      </Box>
      <SearchNavbar600px/>
    </Box>
  );
};

export default SearchhNavbar;
