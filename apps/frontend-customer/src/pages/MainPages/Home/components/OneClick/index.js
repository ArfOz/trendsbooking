import React from "react";
import { Box } from "@mui/material";
import Left from "./components/Left";
import Right from "./components/Right";
import { style } from "./style";

function Oneclick() {
  return (
    <>
      <Box sx={style.BoxContainer}>
        <Left />
        <Right />
      </Box>
    </>
  );
}

export default Oneclick;
