import React from "react";
import { Box, Button, Fab, Stack } from "@mui/material";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Styles } from "./style";

const Appointment = () => {
  return (
    // container
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      {/* buttonlar */}
      <Stack direction="row" spacing={4}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<SettingsPhoneIcon />}
          sx={Styles.button505}
        >
          0505 735 82 25
        </Button>
        <Button variant="contained" sx={Styles.buttonrandevu}>
          Randevu Al
        </Button>
      </Stack>
      {/* buttonlar */}
      {/* sosyalmedya */}
      <Stack direction="row" spacing={2}>
        <Fab
          sx={{
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "info",
            },
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
              backgroundColor: "info",
            },
          }}
          color="info"
          aria-label="Facebook"
        >
          <FacebookIcon sx={{ color: "white" }} />
        </Fab>
      </Stack>

      {/* sosyalmedya */}
    </Box>
    // container
  );
};

export default Appointment;
