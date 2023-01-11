import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  InputBase,
  Stack,
  Typography,
  Menu,
  Fab,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import MenuIcon from "@mui/icons-material/Menu";
import PlaceIcon from "@mui/icons-material/Place";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoWordShort from '../../LogoWordShort';

const SearchNavbar600px = () => {
  const [open, setopen] = useState(false);
  return (
    <Box
      sx={{
        color: "#07232C",
        width: "580px",
        height: "460px",
        background: "#07232C",
        display: {
          xs: "block",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        p="10px 15px 0px 15px"
      >
       <IconButton>
            <LogoWordShort/>
      </IconButton>
        <MenuIcon
          sx={{
            color: "#F65936",
            display: {
              xs: "block",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
          onClick={() => setopen(!open)}
        />
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
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
          <Stack
            direction="column"
            spacing={4}
            sx={{
              width: 250,
              height: "600vh",
              paddingTop: "50px",
            }}
          >
            <Button
              variant="text"
              size="large"
              color="mycolor"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Giriş Yap
            </Button>
            <Button
              variant="text"
              size="large"
              color="mycolor"
              sx={{
                textTransform: "capitalize",
                border: "1px solid #F65936 ",
                padding: "10px",
              }}
            >
              İşletme Hesabı
            </Button>

            <Button
              size="large"
              color="mycolor"
              sx={{
                border: "1px solid #F65936 ",
                padding: "10px",
              }}
              variant="contained"
              //textColor="primary"
              endIcon={<LanguageSharpIcon color="primary" />}
            >
              <Typography variant="subtitle" color="primary">
                TR:
              </Typography>
            </Button>
          </Stack>
        </Menu>
      </Stack>

      {/* 600px bir güzellik yapın */}
      <Box>
        <Typography
          fontFamily="Roboto"
          fontStyle="normal"
          fontWeight="700"
          fontSize="40px"
          lineHeight="44px"
          color="#F2F8FF"
          textAlign="center"
          mt="60px"
        >
          Bi güzellik yapın!
        </Typography>

        {/* searchbar başlangıç */}

        <Box
          width="498px"
          height="64px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="#FFFFFF"
          boxShadow="0px 0px 20px rgba(0, 0, 0, 0.08)"
          borderRadius="6px"
          marginTop="50px"
          marginLeft="43px"
        >
          <Stack direction="row" padding="15px" spacing={1}>
            <Stack direction="row" spacing={1}>
              <SearchIcon sx={{ paddingLeft: "10px", color: "black" }} />
              <InputBase
                placeholder="aradığınız hizmet...."
                sx={{ color: "#9A9A9A", paddingLeft: "10px" }}
              />
            </Stack>

            <Stack direction="row" spacing={1}>
              <Divider orientation="vertical" flexItem />
              <PlaceIcon sx={{ paddingLeft: "10px", color: "black" }} />
              <InputBase placeholder="Ankara...." sx={{ color: "#9A9A9A" }} />
            </Stack>

            <Stack>
              <Button color="mycolor" variant="contained">
                Ara
              </Button>
            </Stack>
          </Stack>
        </Box>

        {/* searchbar sonu */}
        {/* Fab başlangıc -1- */}
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
          mt="30px"
          sx={{ "& > :not(style)": { m: 1 } }}
        >
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="Kuaför"
            sx={{ textTransform: "capitalize" }}
          >
            Kuaför
          </Fab>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="Berber"
            sx={{ textTransform: "capitalize" }}
          >
            Berber
          </Fab>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="Güzellik"
            sx={{ textTransform: "capitalize" }}
          >
            Güzellik Salonu
          </Fab>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="Tırnak"
            sx={{ textTransform: "capitalize" }}
          >
            Tırnak Salonu
          </Fab>
        </Stack>
        {/* Fab son -1- */}
        {/* Fab başlangıc -2- */}
        <Stack
          direction="row"
          ml="12px"
          mt="25px"
          sx={{ "& > :not(style)": { m: 1 } }}
        >
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="Cild"
            sx={{ textTransform: "capitalize" }}
          >
            Cild Bakımı
          </Fab>
          <Fab
            variant="extended"
            size="medium"
            color="myblack"
            aria-label="Daha"
            sx={{ textTransform: "capitalize", color: "white" }}
          >
            Daha Fazla
            <KeyboardArrowDownIcon />
          </Fab>
        </Stack>

        {/* Fab son -2- */}
      </Box>
    </Box>
  );
};

export default SearchNavbar600px;
