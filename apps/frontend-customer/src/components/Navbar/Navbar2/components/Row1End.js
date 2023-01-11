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

// import ShopRectangle62 from "../../../../assets/ShopRectangle 62.svg";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
// import android from "../../../../assets/android.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GTranslateIcon from "@mui/icons-material/GTranslate";

function Row1End() {
  return (
    <>
      <Box sx={style.rowendcontainer1}>
        <CalendarMonthIcon
          sx={{
            display: {
              sm: "none",
              md: "block",
            },
          }}
        />

        <FavoriteIcon />
        <Badge
          variant="dot"
          color="green"
          sx={{
            display: {
              sm: "none",
              md: "block",
            },
          }}
        >
          <NotificationsIcon color="secondary" />
        </Badge>
        <Avatar
          sx={{
            witdh: "38px",
            height: "38px",
          }}
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="Jane Doe"
        />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          endIcon={<GTranslateIcon />}
        >
          TR:
        </Button>
      </Box>
    </>
  );
}

export default Row1End;
