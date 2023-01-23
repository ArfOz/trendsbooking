import React from "react";
import { Box, Button, Fab } from "@mui/material";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { style } from "./style";

const Appointment = () => {
  return (
    // container
    <Box sx={style.appoinmentcontainer}>
      {/* buttons */}
      <Box
        sx={style.appoinmentbox}
      >
        <Button
          variant="contained"
          color="secondary"
          startIcon={<SettingsPhoneIcon />}
          sx={style.button1}
        >
          0505 735 82 25
        </Button>
        <Button variant="contained" sx={style.button2}>
          Randevu Al
        </Button>
      </Box>
      {/* buttonlar */}
      {/* sosyalmedya */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          width: "18%",
        }}
      >
        <Fab
          sx={{
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "info.main",
            },
            zIndex: 1,
          }}
          color="info"
          aria-label="Instagram"
        >
          <InstagramIcon sx={{ color: "white" }} />
        </Fab>
        <Fab
          sx={{
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "info.main",
            },
            zIndex: 1,
          }}
          color="info"
          aria-label="Facebook"
        >
          <FacebookIcon sx={{ color: "white" }} />
        </Fab>
      </Box>

      {/* sosyalmedya */}
    </Box>
    // container
  );
};

export default Appointment;
