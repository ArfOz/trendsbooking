import React, { useState } from "react";
import { Menu, Box, Button } from "@mui/material";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import MenuIcon from "@mui/icons-material/Menu";
import { style } from "./style";

const MenuNavbar = () => {
  const [open, setopen] = useState(false);
 
                   
  return (
    <>
      <MenuIcon
        sx={{
          color: "#F65936",
        }}
        onClick={() => setopen(!open)}
      />
      <Menu
        id="navbar menu"
        aria-labelledby="navbar-menu"
        open={open}
        onClose={() => setopen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {/* right navbar */}
        <Box sx={style.menucountainer}>
          <Button
            sx={style.navbarbuttons}
           
          >
            Giriş Yap
          </Button>
          <Button
            variant="outlined"
            sx={style.navbarbuttons}
            onClick={() => {
              alert("işletme hesabı sayfasına yönlenecek");
            }}
          >
            İşletme Hesabı
          </Button>
          <Button
            variant="contained"
            sx={style.buttons}
            endIcon={<GTranslateIcon />}
            onClick={() => {
              alert("dil seçeneği ");
            }}
          >
            TR:
          </Button>
        </Box>
        {/* right navbar */}
      </Menu>
    </>
  );
};

export default MenuNavbar;
