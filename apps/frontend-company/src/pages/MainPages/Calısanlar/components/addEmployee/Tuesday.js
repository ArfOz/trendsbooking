import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Switch,
  FormControlLabel,
  Collapse,
  TextField,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";

function Tuesday() {
  const [isOpen, setIsOpen] = useState(false);
  const [workingHours, setWorkingHours] = useState([{ startTime: "", endTime: "" }, { startTime: "", endTime: "" }]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleStartTimeChange = (index, value) => {
    const newWorkingHours = [...workingHours];
    newWorkingHours[index].startTime = value;
    setWorkingHours(newWorkingHours);
  };

  const handleEndTimeChange = (index, value) => {
    const newWorkingHours = [...workingHours];
    newWorkingHours[index].endTime = value;
    setWorkingHours(newWorkingHours);
  };

  const handleSave = () => {
    console.log("Çalışma Saatleri:", workingHours);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1.36634px solid #9A9A9A",
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          pr: 3,
        }}
      >
        <FormControlLabel
          control={<Switch checked={isOpen} onChange={handleToggle} />}
          label="Salı"
        />
        {isOpen ? (
          <KeyboardArrowUpIcon color="info" />
        ) : (
          <KeyboardArrowDownIcon color="info" />
        )}
      </Box>
      <Collapse in={isOpen}>
        <Box sx={{ padding: "1rem" }}>
          {workingHours.map((hour, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <TextField
                label="Başlangıç Saati"
                type="time"
                value={hour.startTime}
                onChange={(e) => handleStartTimeChange(index, e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
                sx={{
                  width: "40%",
                }}
              />
              <Typography variant="body1" color="initial">
                {" "}
                den
              </Typography>
              <TextField
                label="Bitiş Saati"
                type="time"
                value={hour.endTime}
                onChange={(e) => handleEndTimeChange(index, e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
                sx={{
                  width: "40%",
                }}
              />
            </Box>
          ))}
          <Button variant="contained" color="primary" onClick={handleSave}>
            Kaydet
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
}

export default Tuesday;
