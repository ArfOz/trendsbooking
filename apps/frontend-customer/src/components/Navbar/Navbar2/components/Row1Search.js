import React from "react";
import {
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { style } from "./style";
// import ShopRectangle62 from "../../../assets/ShopRectangle 62.svg";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
// import android from "../../../assets/android.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Row1Search() {
  return (
    <>
      <Box sx={style.searchcontainer}>
        <Box sx={style.searchinclude}>
          <SearchIcon />
          <InputBase placeholder="aradığınız hizmet...." />
        </Box>

        <Box sx={style.searchinclude}>
          <Divider orientation="vertical" flexItem />
          <PlaceIcon />
          <InputBase placeholder="Ankara...." />
        </Box>

        <Box sx={style.searchinclude}>
          <Divider orientation="vertical" flexItem />
          <DateRangeIcon sx={{ paddingLeft: "10px", color: "black" }} />
          <InputBase placeholder="Tarih" sx={{ color: "#9A9A9A" }} />
        </Box>
      </Box>
    </>
  );
}

export default Row1Search;
