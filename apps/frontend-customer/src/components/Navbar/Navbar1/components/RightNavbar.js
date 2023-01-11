import React from "react";

import { AppBar, Box, Stack, Toolbar, Typography, Button } from "@mui/material";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { style } from "./style";

const RightNavbar = () => {
  return (
    <>
      {/* right navbar */}
      <Box sx={style.navbarbuttoncontainer}>
        <Button sx={style.navbarbuttons}>Giriş Yap</Button>
        <Button variant="outlined" sx={style.navbarbuttons}>
          İşletme Hesabı
        </Button>
        <Button
          variant="contained"
          sx={style.buttons}
          endIcon={<GTranslateIcon />}
        >
          TR:
        </Button>
      </Box>
      {/* right navbar */}
    </>
  );
};

export default RightNavbar;
