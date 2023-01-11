import React, { useState, useEffect } from "react";

import { AppBar, Box, Toolbar } from "@mui/material";
import LeftNavbar from "./components/LeftNavbar";
import RightNavbar from "./components/RightNavbar";
import MenuNavbar from "./components/MenuNavbar";
import Navbar600px from "./components/Navbar600px";
import { style } from "./style";

const Navbar1 = () => {
  return (
    <>
     
        <AppBar sx={style.appbar}>
          <Toolbar>
            <Box sx={style.appcontainer}>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    ms: "block",
                    md: "block",
                  },
                }}
              >
                <LeftNavbar />
              </Box>
              <RightNavbar />
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "none",
                  },
                }}
              >
                <MenuNavbar />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
 
      <Navbar600px />
    </>
  );
};

export default Navbar1;
