import React from "react";

import {
  Box,
  Button,
  Divider,
  InputBase,
  Stack,
  Typography,
  Fab,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import Vector from "../../../../assets/Vector.png";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { style } from "./style";
import MenuNavbar from "../../NavbarFirst/components/MenuNavbar";

const Nbar600px = () => {
  return (
    <>
      <Box
        sx={style.container600}
      >
        <Box
          sx={style.appbar600}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack
              sx={{
                width: "18px",
                marginLeft: "23px",
              }}
            >
              <img src={Vector} alt="" />
            </Stack>

            <Typography
              color="secondary"
              sx={style.TB600}
            >
              T<span style={{ color: "white" }}>B</span>
            </Typography>
          </Box>
          <MenuNavbar/>
        </Box>

        <Box
          sx={{
            mt: 8,
          }}
        >
          <Typography sx={style.beatiful600}>Bi güzellik yapın!</Typography>
        </Box>

        {/* searchbar */}

        <Box sx={style.searchbar600}>
          <Box
            sx={style.searchinclude}
          >
            <SearchIcon />
            <InputBase placeholder="aradığınız hizmet...." />
          </Box>

          <Divider orientation="vertical" variant="middle" flexItem />

          <Box
            sx={style.searchinclude}
          >
            <PlaceIcon />
            <InputBase placeholder="Ankara...." />
          </Box>

          <Box>
            <Button variant="contained" sx={style.buttons}>
              Ara
            </Button>
          </Box>
        </Box>

        {/* searchbar */}
        {/* Fab başlangıc -1- */}
        <Box
          sx={{
            mt: 8,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
            sx={{ "& > :not(style)": { m: 1 } }}
          >
            <Fab
              variant="extended"
              size="medium"
              aria-label="Kuaför"
              sx={style.fab}
            >
              Kuaför
            </Fab>
            <Fab
              variant="extended"
              size="medium"
              aria-label="Berber"
              sx={style.fab}
            >
              Berber
            </Fab>
            <Fab
              variant="extended"
              size="medium"
              aria-label="Güzellik"
              sx={style.fab}
            >
              Güzellik Salonu
            </Fab>
            <Fab
              variant="extended"
              size="medium"
              aria-label="Tırnak"
              sx={style.fab}
            >
              Tırnak Salonu
            </Fab>
          </Stack>
          {/* Fab son -1- */}
          {/* Fab başlangıc -2- */}
          <Stack direction="row" ml="12px" sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab
              variant="extended"
              size="medium"
              aria-label="Cild"
              sx={style.fab}
            >
              Cild Bakımı
            </Fab>
            <Fab
              variant="extended"
              size="medium"
              aria-label="Daha"
              sx={{
                background: "#FFFFFF",
                textTransform: "capitalize",
              }}
            >
              Daha Fazla
              <KeyboardArrowDownIcon />
            </Fab>
          </Stack>

          {/* Fab son -2- */}
        </Box>
      </Box>
    </>
  );
};

export default Nbar600px;
