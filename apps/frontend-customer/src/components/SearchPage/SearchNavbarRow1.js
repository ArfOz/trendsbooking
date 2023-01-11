import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import ShopRectangle62 from "../../../assets/ShopRectangle 62.svg";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import LogoWordLight from "../../LogoWordLight";
import LogoWordShort from '../../LogoWordShort';


const SearchNavbarRow1 = () => {
  return (
    // container Box başlangıc
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        pt: 2,
      }}
    >
      {/* TrendsBooking */}
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
          marginRight:"20px",
        }}
      >
      <IconButton>
            <LogoWordLight />
      </IconButton>
      </Box>

      {/* TrendsBooking */}

      {/* TB başlangıç */}
      <Box
      marginRight="30px"
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
          },
        }}
      >
       <IconButton>
            <LogoWordShort/>
      </IconButton>
      </Box>

      {/* TB bitiş */}

      {/* searchbar başlangıç */}

      <Box
        sx={{
          width: "600px",
          height: "42px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: "6px",
        }}
      >
        <Stack direction="row" spacing={1}>
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

          <Stack direction="row" spacing={1}>
            <Divider orientation="vertical" flexItem />
            <DateRangeIcon sx={{ paddingLeft: "10px", color: "black" }} />
            <InputBase placeholder="Tarih" sx={{ color: "#9A9A9A" }} />
          </Stack>
        </Stack>
      </Box>

      {/* searchbar sonu */}

      {/* kalb ve diğerleri başlangıc */}
      <Stack direction="row" spacing={4}>
        {/* md button */}
        <Button
          variant="text"
          startIcon={<FavoriteIcon />}
          size="large"
          color="primary"
          sx={{
            display:{
              xs: "none",
              sm:"none",
              md:"flex",
            }
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
            }}
          >
            beğendiklerim
          </Typography>
        </Button>
         {/* md button */}
         {/* xs button */}
         <Button
          variant="text"
          startIcon={<FavoriteIcon />}
          size="large"
          color="primary"
          sx={{
            display:{
              xs: "block",
              sm:"block",
              md:"none",
            }
          }}
        >
         
        </Button>

         {/* xs button */}



        <Stack direction="row" spacing={4}>
          <Badge variant="dot" color="success">
            <NotificationsIcon color="primary" />
          </Badge>
          <Avatar
            sx={{
              witdh: "38px",
              height: "38px",
            }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
        </Stack>

        <Button
          sx={{
            width: "72px",
            height: "32px",
          }}
          color="primary"
          variant="contained"
          //svgtextColor="myblack"
          endIcon={<LanguageSharpIcon color="myblack" />}
        >
          <Typography variant="subtitle" color="myblack">
            TR:
          </Typography>
        </Button>
      </Stack>

      {/* kalb ve diğerleri bitiş */}
    </Box>
    // container Box bitiş
  );
};

export default SearchNavbarRow1;
