import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { style } from "./style";

function createData(day, hour) {
  return { day, hour };
}

const rows = [
  createData("Pazartesi", "8:00 - 17:00"),
  createData("Salı", "8:00 - 17:00"),
  createData("Çarşamba", "8:00 - 17:00"),
  createData("Perşembe", "8:00 - 17:00"),
  createData("Cuma", "8:00 - 17:00"),
  createData("Cumartesi", "8:00 - 13:00"),
  createData("Pazar", "Kapalı"),
];

const LeftEnd = () => {
  return (
    <>
      <Box sx={style.boxcontainer}>
        <Box sx={style.ourteam}>
          {/* navigation */}
          <Box sx={style.navigation}>{/* navigation */}</Box>
          {/* navigation */}

          {/*  ourteam*/}
          <Box sx={style.ourteambox}>
            <Typography sx={style.typography1}>Ekibimiz</Typography>

            <Box sx={style.avatarbox}>
              <Stack spacing={2} sx={style.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/women/89.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={style.avatarname}>Tarık</Typography>
              </Stack>
              <Stack spacing={2} sx={style.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/men/79.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={style.avatarname}>Tarık</Typography>
              </Stack>
              <Stack spacing={2} sx={style.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={style.avatarname}>Tarık</Typography>
              </Stack>
              <Stack spacing={2} sx={style.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={style.avatarname}>Tarık</Typography>
              </Stack>
              <Stack spacing={2} sx={style.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={style.avatarname}>Tarık</Typography>
              </Stack>
            </Box>
          </Box>
          {/*  ourteam*/}
        </Box>

        {/* working hours */}

        <Box sx={style.tablebox}>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#07232C",

              ml: 2,
            }}
          >
            Çalışma Saatleri
          </Typography>
          <TableContainer>
            <Table size="small" aria-label="table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow>
                    <TableCell
                      sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "18px",
                        color: "#9A9A9A",
                        textDecoration: "none",
                      }}
                    >
                      {row.day}
                      <br />
                      <br />
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "15px",
                        lineHeight: "18px",
                        color: "#07232C",
                      }}
                    >
                      {row.hour}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* working hours */}
      </Box>
      {/* ========600px======== */}
      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "none",
            md: "none",
            lg: "none",
          },
          flexDirection: "column",
          justifyContent: "space-between",
          width: "95%",
          height:"95vh",
    
          ml:1,
            
          mt:2,
    
          
         
        }}
      >
         <Box sx={style.navigation}>{/* navigation */}</Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
         
          }}
        >
          <Box sx={style.tablebox}>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#07232C",
                ml: 2,
              }}
            >
              Çalışma Saatleri
            </Typography>
            <TableContainer>
              <Table size="small" aria-label="table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow>
                      <TableCell
                        sx={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "15px",
                          lineHeight: "18px",
                          color: "#9A9A9A",
                          textDecoration: "none",
                        }}
                      >
                        {row.day}
                        <br />
                        <br />
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "15px",
                          lineHeight: "18px",
                          color: "#07232C",
                        }}
                      >
                        {row.hour}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
           
              width: "35%",
              height: "100%",
            }}
          >
            <Typography sx={style.typography1}>Ekibimiz</Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack spacing={2} sx={style.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/women/89.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={style.avatarname}>Tarık</Typography>
              </Stack>
              <Stack spacing={2} sx={style.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/women/89.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={style.avatarname}>Tarık</Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack spacing={2} sx={style.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/women/89.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={style.avatarname}>Tarık</Typography>
              </Stack>
              <Stack spacing={2} sx={style.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/women/89.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={style.avatarname}>Tarık</Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack spacing={2} sx={style.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/women/89.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={style.avatarname}>Tarık</Typography>
              </Stack>
              
            </Box>

           
           
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LeftEnd;
