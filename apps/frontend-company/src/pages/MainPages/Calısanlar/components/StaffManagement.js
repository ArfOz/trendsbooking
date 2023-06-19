import React, { useState } from "react";
import axios from "axios";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import DownloadIcon from "@mui/icons-material/Download";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {
  Button,
  Typography,
  Collapse,
  Box,
  Avatar,
  Snackbar,
  SnackbarContent,
} from "@mui/material";

function StaffManagement() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const [snackOpen, setSnackOpen] = useState(false);

  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleCloseSnackbar = () => {
    setSnackOpen(false);
  };

  const getDayLabel = (day) => {
    const daysOfWeek = [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar",
    ];
    return daysOfWeek[day];
  };

  const initialNewWorker = {
    DepartmentId: "",
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
    Password: "",
    Roles: "WorkerBasic",
    WorkTime: [
      {
        MorningStartAt: "",
        MorningEndAt: "",
        ShiftStart: "",
        ShiftEnd: "",
        NightStartAt: "",
        NightEndAt: "",
        Days: 0,
        Holiday: true,
      },
      {
        MorningStartAt: "",
        MorningEndAt: "",
        ShiftStart: "",
        ShiftEnd: "",
        NightStartAt: "",
        NightEndAt: "",
        Days: 1,
        Holiday: true,
      },
      {
        MorningStartAt: "",
        MorningEndAt: "",
        ShiftStart: "",
        ShiftEnd: "",
        NightStartAt: "",
        NightEndAt: "",
        Days: 2,
        Holiday: true,
      },
      {
        MorningStartAt: "",
        MorningEndAt: "",
        ShiftStart: "",
        ShiftEnd: "",
        NightStartAt: "",
        NightEndAt: "",
        Days: 3,
        Holiday: true,
      },
      {
        MorningStartAt: "",
        MorningEndAt: "",
        ShiftStart: "",
        ShiftEnd: "",
        NightStartAt: "",
        NightEndAt: "",
        Days: 4,
        Holiday: true,
      },
      {
        MorningStartAt: "",
        MorningEndAt: "",
        ShiftStart: "",
        ShiftEnd: "",
        NightStartAt: "",
        NightEndAt: "",
        Days: 5,
        Holiday: true,
      },
      {
        MorningStartAt: "",
        MorningEndAt: "",
        ShiftStart: "",
        ShiftEnd: "",
        NightStartAt: "",
        NightEndAt: "",
        Days: 6,
        Holiday: true,
      },
    ],
    // Image: null, // Eklenen resim
  };

  const [formData, setFormData] = useState(initialNewWorker);

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWorkTimeInputChange = (day, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      WorkTime: prevData.WorkTime.map((item) =>
        item.Days === day ? { ...item, [field]: value } : item
      ),
    }));
  };
 const [profilPicture, setProfilPicture] = useState(null)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
   

    reader.onloadend = () => {
      setProfilPicture(file);
      // setFormData((prevData) => ({
      //   ...prevData,
      //   Image: reader.result,
      // }));
    };

    reader.readAsDataURL(file);
  };

  const data = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Form verilerini konsola yazdırır.

    // Backend'e formData'yı gönder.
    const token = localStorage.getItem("loginUserCompany")
      ? JSON.parse(localStorage.getItem("loginUserCompany")).AccessToken
      : "";
    console.log("newWorker :>> ", formData);
    console.log("token :>> ", token);
    console.log(profilPicture)

    // const FormData = require('form-data');
// const fs = require('fs');

data.append('input', formData);
data.append('file', profilPicture);
console.log(data)


    axios
      .post("http://localhost:3300/api/departments/addworker", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // İstek başarılı oldu
        console.log(response.data);
        setSnackbarMessage("Çalışan başarıyla eklendi.");
        setSnackbarSeverity("success");
        setSnackOpen(true);
        setFormData(initialNewWorker);
      })
      .catch((error) => {
        // İstek başarısız oldu
        console.error("istek başarısz oldu", error);
        setSnackbarMessage("Çalışan eklenirken bir hata oluştu.");
        setSnackbarSeverity("error");
        setSnackOpen(true);
        setFormData(initialNewWorker);
      });
   
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "95%",
          m: "auto",
          mt: 15,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "28px",
            }}
          >
            Personel Yönetimi
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              color: "#9A9A9A",
            }}
          >
            Tüm çalışanlarınızı tek bir yerden yönetin
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "20%",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DownloadIcon color="info" />}
            sx={{
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "white",
              },
              border: "1px solid #7D8398",
            }}
          >
            İndir
          </Button>
          <Button
            onClick={handleOpen}
            variant="contained"
            color="primary"
            sx={{
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#F74600",
              },
            }}
          >
            Yeni Çalışan
          </Button>
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        fullWidth
        sx={{ height: "100vh" }}
      >
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Box>
              {/* resim ekle kapat kısım */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "95%",
                  height: "100%",
                  m: "auto",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "28px",
                      lineHeight: "24px",
                      mt: 2,
                    }}
                  >
                    Çalışan Düzenle
                  </Typography>

                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={formData.Image}
                      sx={{
                        width: "4.5cm",
                        height: "5cm",
                        borderRadius: "0.25rem",
                        objectFit: "cover",
                        objectPosition: "50% 20%",
                      }}
                    />

                    <input
                      type="file"
                      accept="image/*"
                      id="upload-image"
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                    />
                    <label htmlFor="upload-image">
                      <Button
                        component="span"
                        variant="contained"
                        color="secondary"
                        sx={{
                          textTransform: "capitalize",
                          boxShadow: "none",

                          "&:hover": {
                            boxShadow: "none",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        Resim Ekle
                      </Button>
                    </label>
                  </Box>
                </Box>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="secondary"
                  endIcon={<HighlightOffIcon color="grey" />}
                  sx={{
                    textTransform: "capitalize",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "white",
                      boxShadow: "none",
                    },
                    color: "#9A9A9A",
                  }}
                >
                  Kapat
                </Button>
              </Box>

              {/* resim ekle kapat kısım */}
              <Box
                sx={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: "auto",
                  mt: 3,
                }}
              >
                <TextField
                  label="İsim"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleInputChange}
                  sx={{
                    width: "49%",
                  }}
                />
                <TextField
                  label="Soyisim"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleInputChange}
                  sx={{
                    width: "49%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: "auto",
                  mt: 3,
                }}
              >
                <TextField
                  label="Telefon"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleInputChange}
                  sx={{
                    width: "49%",
                  }}
                />
                <TextField
                  label="E-mail"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  sx={{
                    width: "49%",
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: "auto",
                  mt: 3,
                }}
              >
                <TextField
                  label="Password"
                  name="Password"
                  type="password"
                  value={formData.Password}
                  onChange={handleInputChange}
                  sx={{
                    width: "49%",
                  }}
                />
                <TextField
                  label="Roles"
                  name="Roles"
                  value={formData.Roles}
                  onChange={handleInputChange}
                  sx={{
                    width: "49%",
                  }}
                />
              </Box>
            </Box>

            {/* çalışma saatleri */}
            <Box>
              <Button
                variant="contained"
                onClick={handleButtonClick}
                endIcon={
                  isOpen ? (
                    <ArrowDropDownCircleIcon color="primary" />
                  ) : (
                    <PlayCircleIcon color="primary" />
                  )
                }
                sx={{
                  background: "#FFFFFF",
                  border: "1px solid #D2D2D2",
                  boxShadow: "none",
                  width: "95%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#353535",
                  textTransform: "capitalize",

                  "&:hover": {
                    backgroundColor: "#FFFF",
                    border: "1px solid #D2D2D2 ",
                    boxShadow: "none",
                  },
                  m: "auto",
                  mt: 2,
                }}
              >
                Çalışma Saatleri
              </Button>
              <Collapse in={isOpen}>
                <Box
                  sx={{
                    width: "95%",
                    m: "auto",
                    mt: 2,
                    border: "1px solid #D2D2D2 ",
                    borderRadius: 2,
                  }}
                >
                  {formData.WorkTime.map((day) => (
                    <div key={day.Days}>
                      <Box>
                        <Box display="flex" alignItems="center">
                          <Switch
                            checked={!day.Holiday}
                            onChange={() =>
                              handleWorkTimeInputChange(
                                day.Days,
                                "Holiday",
                                !day.Holiday
                              )
                            }
                          />
                          <Typography>{getDayLabel(day.Days)}</Typography>
                        </Box>

                        {!day.Holiday && (
                          <Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "70%",
                                mt: 2,
                                ml: 5,
                              }}
                            >
                              <TextField
                                label="Sabah Başlangıç"
                                name="MorningStartAt"
                                value={day.MorningStartAt}
                                onChange={(e) =>
                                  handleWorkTimeInputChange(
                                    day.Days,
                                    "MorningStartAt",
                                    e.target.value
                                  )
                                }
                                sx={{
                                  width: "48%",
                                }}
                              />
                              <TextField
                                label="Sabah Bitiş"
                                name="MorningEndAt"
                                value={day.MorningEndAt}
                                onChange={(e) =>
                                  handleWorkTimeInputChange(
                                    day.Days,
                                    "MorningEndAt",
                                    e.target.value
                                  )
                                }
                                sx={{
                                  width: "48%",
                                }}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "70%",
                                mt: 2,
                                ml: 5,
                              }}
                            >
                              <TextField
                                label="Vardiya Başlangıç"
                                name="ShiftStart"
                                value={day.ShiftStart}
                                onChange={(e) =>
                                  handleWorkTimeInputChange(
                                    day.Days,
                                    "ShiftStart",
                                    e.target.value
                                  )
                                }
                                sx={{
                                  width: "48%",
                                }}
                              />
                              <TextField
                                label="Vardiya Bitiş"
                                name="ShiftEnd"
                                value={day.ShiftEnd}
                                onChange={(e) =>
                                  handleWorkTimeInputChange(
                                    day.Days,
                                    "ShiftEnd",
                                    e.target.value
                                  )
                                }
                                sx={{
                                  width: "48%",
                                }}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "70%",
                                mt: 2,
                                ml: 5,
                              }}
                            >
                              <TextField
                                label="öğleden sonra başlangıç"
                                name="NightStartAt"
                                value={day.NightStartAt}
                                onChange={(e) =>
                                  handleWorkTimeInputChange(
                                    day.Days,
                                    "NightStartAt",
                                    e.target.value
                                  )
                                }
                                sx={{
                                  width: "48%",
                                }}
                              />
                              <TextField
                                label="öğleden sonra bitiş"
                                name="NightEndAt"
                                value={day.NightEndAt}
                                onChange={(e) =>
                                  handleWorkTimeInputChange(
                                    day.Days,
                                    "NightEndAt",
                                    e.target.value
                                  )
                                }
                                sx={{
                                  width: "48%",
                                }}
                              />
                            </Box>
                          </Box>
                        )}
                      </Box>
                    </div>
                  ))}
                </Box>
              </Collapse>
            </Box>

            {/* çalışma saatleri */}

            <Box
              sx={{
                display: "flex",
              }}
            >
              <Button
                type="submit"
                sx={{
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48%",
                  m: "auto",
                  mt: 3,
                  backgroundColor: "#F75936",
                  "&:hover": { backgroundColor: "#F74600" },
                }}
              >
                <Typography
                  variant="body2"
                  fontFamily="'Roboto', sans-serif"
                  fontWeight={500}
                  fontStyle="normal"
                  sx={{ color: "#FFFFFF", textTransform: "capitalize" }}
                >
                  Ekle
                </Typography>
              </Button>
              <Button
                onClick={handleClose}
                sx={{
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48%",
                  m: "auto",
                  mt: 3,
                  backgroundColor: "#F75936",
                  "&:hover": { backgroundColor: "#F74600" },
                }}
              >
                <Typography
                  variant="body2"
                  fontFamily="'Roboto', sans-serif"
                  fontWeight={500}
                  fontStyle="normal"
                  sx={{ color: "#FFFFFF", textTransform: "capitalize" }}
                >
                  İptal et
                </Typography>
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor:
              snackbarSeverity === "success" ? "#43A047" : "#D32F2F",
          }}
          message={snackbarMessage}
        />
      </Snackbar>
    </Box>
  );
}

export default StaffManagement;
