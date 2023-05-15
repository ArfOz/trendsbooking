import React, { useState } from "react";
import { Menu, Box, Button } from "@mui/material";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import { style } from "./style";

const MenuNavbar = () => {
  const [open, setopen] = useState(false);
  const Links = [
    { title: 'Giriş Yap', path: '/Auth/Login' },
    { title: 'İşletme Hesabı', path: '/Auth/Register' },
];
 
                   
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
        {Links.map((item, index) => (
                    <Link
                        to={item.path}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <Button
                            variant="outlined"
                            key={item.title}
                            sx={{
                                textTransform: 'capitalize',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    boxShadow: 'none',
                                    border: 'none',
                                },
                                ...(item.title === 'Giriş Yap' && {
                                    border: 'none',
                                }),
                                ...(item.title === 'İşletme Hesabı' && {
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        boxShadow: 'none',
                                    },
                                }),
                            }}
                        >
                            {item.title}
                        </Button>
                    </Link>
                ))}
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
