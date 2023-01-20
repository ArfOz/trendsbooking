import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { style } from "./style";
import Haircut from "./Haircut";
import Beardshaving from "./Beardshaving";
import Fade from "./Fade";

const ServicesProvided = () => {
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={style.spcontainer}>
      <Box
        sx={{
          width: "50%",
          my: 3,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="info"
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab
            value="Erkek"
            label="Erkek"
            sx={{
              textTransform: "capitalize",
            }}
          />
          <Tab
            value="Kadın"
            label="Kadın"
            sx={{
              textTransform: "capitalize",
            }}
          />
        </Tabs>
      </Box>

      <Box>
        <Typography sx={style.sercicesprovided}>Popüler Hizmetler</Typography>
      </Box>

      <Beardshaving />
      <Divider />
      <Fade />
      <Divider />
    </Box>
  );
};

export default ServicesProvided;
