import React from "react";
import { Box } from "@mui/material";

import ShopsLeft from "./components/ShopsLeft";
import ShopsRight from "./components/ShopsRight";
// import Navbar2 from "../../../components/Navbar/navbar2/Navbar2";

function Shop() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 113,
        }}
      >
        {/* <Navbar2 /> */}
      </Box>

      <Box
        sx={{
          mt: 20,
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}
      >
        <ShopsLeft />
      </Box>
      <Box
        sx={{
          mt: 20,
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}
      >
        <ShopsRight />
      </Box>
      <Box
        sx={{
          mt:{
            xs: 65,
            sm: 20,
            md: 20,
            lg: 20,

          },
        m:1,
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <ShopsRight />
      </Box>
      <Box
        sx={{
          mt: 20,
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <ShopsLeft />
      </Box>
    </>
  );
}

export default Shop;
