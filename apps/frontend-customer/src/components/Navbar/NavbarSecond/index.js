import React from "react";

import { Box } from "@mui/material";
import { style } from "./style";
import Row1TrendsBooking from "./components/Row1TrendsBooking";
import Row1TB from "./components/Row1TB";
import Row1Search from "./components/Row1Search";
import Row1End from "./components/Row1End";
import Row2Tabs from "./components/Row2Tabs";
import Nbar600px from "./components/Nbar600px";

function NavbarSecond() {
  return (
    <>
      <Box sx={style.container}>
        <Box sx={style.row1}>
          <Row1TrendsBooking />
          <Row1TB />
          <Row1Search />
          <Row1End />
        </Box>
        <Box>
          <Row2Tabs />
        </Box>
      </Box>
      <Nbar600px />
    </>
  );
}

export default NavbarSecond;
