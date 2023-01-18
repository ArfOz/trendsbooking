import React from "react";
import AppBar from "@mui/material/AppBar";
import LogoWordLight from "../components/LogoWordLight";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Box from "@mui/material/Box";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import PlaceIcon from "@mui/icons-material/Mail";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Typography } from "@mui/material";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

const NavbarSearch = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          color: "white",
          bgcolor: "#07232C",
          position:"static"
        }}
      >
        <Toolbar>
          <IconButton>
            <LogoWordLight />
          </IconButton>
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
              marginLeft: "auto" 
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
          <Box sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto" }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    
    </Box>
    
    
  
  );
};

export default NavbarSearch;
