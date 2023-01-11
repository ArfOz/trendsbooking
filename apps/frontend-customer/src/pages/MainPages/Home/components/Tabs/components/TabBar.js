import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { style } from "./style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={style.BoxContainer}>
      <Box sx={style.TabContainer}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Kuaför" {...a11yProps(0)} sx={style.Tabs} />
          <Tab label="Berber" {...a11yProps(1)} sx={style.Tabs} />
          <Tab label="Güzellik Salonu" {...a11yProps(2)} sx={style.Tabs} />
          <Tab label="Tırnak Salonu" {...a11yProps(3)} sx={style.Tabs} />
          <Tab label="Cilt Bakımı" {...a11yProps(4)} sx={style.Tabs} />
          <Tab label="Masaj" {...a11yProps(5)} sx={style.masajspa} />
          <Tab label="Spa" {...a11yProps(6)} sx={style.masajspa} />
          <Tab label="Daha Fazla" {...a11yProps(7)} sx={style.Tabs} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        Kuaför
      </TabPanel>
      <TabPanel value={value} index={1}>
        Berber
      </TabPanel>
      <TabPanel value={value} index={2}>
        Güzellik Salonu
      </TabPanel>
      <TabPanel value={value} index={3}>
        Tırnak Salonu
      </TabPanel>
      <TabPanel value={value} index={4}>
        Cilt Bakımı
      </TabPanel>
      <TabPanel value={value} index={5}>
        Masaj
      </TabPanel>
      <TabPanel value={value} index={6}>
        Spa
      </TabPanel>
      <TabPanel value={value} index={7}>
        Daha Fazla
      </TabPanel>
    </Box>
  );
}
