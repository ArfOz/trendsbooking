import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Styles } from "./style";

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
      <Box sx={Styles.boxcontainer}>
        <Box sx={Styles.naviekib}>
          {/* navigation */}
          <Box sx={Styles.navigation}>{/* navigation */}</Box>
          {/* navigation */}

          {/*  ekibimiz*/}
          <Box sx={Styles.ekibimizbox}>
            <Typography sx={Styles.typography1}>Ekibimiz</Typography>

            <Box sx={Styles.avatarbox}>
              <Stack spacing={2} sx={Styles.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/women/89.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={Styles.avatarname}>Tarık</Typography>
              </Stack>
              <Stack spacing={2} sx={Styles.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/men/79.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={Styles.avatarname}>Tarık</Typography>
              </Stack>
              <Stack spacing={2} sx={Styles.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={Styles.avatarname}>Tarık</Typography>
              </Stack>
              <Stack spacing={2} sx={Styles.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={Styles.avatarname}>Tarık</Typography>
              </Stack>
              <Stack spacing={2} sx={Styles.avatarstack}>
                <Avatar
                  sx={{
                    width: "70px",
                    height: "70px",
                  }}
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt="Jane Doe"
                />
                <Typography sx={Styles.avatarname}>Tarık</Typography>
              </Stack>
            </Box>
          </Box>
          {/*  ekibimiz*/}
        </Box>

        {/* çalışma saatleri */}
       
          <Box
            sx={Styles.tablebox}
          >
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
       
        {/* çalışma saatleri */}
      </Box>
    </>
  );
};

export default LeftEnd;
