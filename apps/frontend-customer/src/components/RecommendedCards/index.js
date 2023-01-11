import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Button } from "@mui/material";

export default function RecommendedCards() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "837px",
          height: "233px",
        },
      }}
    >
      <Paper
        sx={{
          display: "flex",
          elevation: "0",
          borderRadius: "25px",
        }}
      >
        <Box
          sx={{
            width: "230px",
            height: "230px",
            backgroundImage:
              "url(https://img.freepik.com/free-photo/pretty-clever-little-girl-child-with-blond-hairstyle-yellow-t-shirt-overalls-hold-something-palm-introduce-product-blank-white-copy-space-smiling-joyful-brag-what-she-got-b-day-present_176420-36184.jpg?w=996&t=st=1667798724~exp=1667799324~hmac=658542dcdff3edda236905b59ccdd6b0ad2ce147ce072837c0edffc2a4efc7df)",
            borderRadius: "10px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></Box>
        <Box sx={{ ml: 1 }}>
          <Typography
            sx={{
              width: "464px",
              height: "21px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#07232C",
            }}
          >
            Ewa Kuaför
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#9A9A9A",
            }}
          >
            Giresun Cad. No:3/11 Keçiören/Ankara
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                mt: 2,
                width: "590px",
              }}
            >
              {/* traş */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                    width: "69.24px",
                    height: "23",
                  }}
                >
                  Saç Traşı
                </Typography>
              </Box>
              {/* traş */}

              {/* fiyat ve rendavu al */}
              <Box
                sx={{
                  width: "170px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  120
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    width: "113px",
                    height: "34px",
                    background: "#F75936",
                    borderRadius: "6px",
                  }}
                >
                  Randevu Al
                </Button>
              </Box>
              {/* fiyat ve rendavu al */}
            </Box>
            {/* hizmetler container */}
            <Divider />
            {/* hizmetler container */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                mt: 2,
              }}
            >
              {/* traş */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  Sakal Traşı
                </Typography>
              </Box>
              {/* traş */}

              {/* fiyat ve rendavu al */}
              <Box
                sx={{
                  width: "170px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  120
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    width: "113px",
                    height: "34px",
                    background: "#F75936",
                    borderRadius: "6px",
                  }}
                >
                  Randevu Al
                </Button>
              </Box>
              {/* fiyat ve rendavu al */}
            </Box>
            {/* hizmetler container */}
            <Divider />
            {/* hizmetler container */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                mt: 2,
              }}
            >
              {/* traş */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  Fade
                </Typography>
              </Box>
              {/* traş */}

              {/* fiyat ve rendavu al */}
              <Box
                sx={{
                  width: "170px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  120
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    width: "113px",
                    height: "34px",
                    background: "#F75936",
                    borderRadius: "6px",
                  }}
                >
                  Randevu Al
                </Button>
              </Box>
              {/* fiyat ve rendavu al */}
            </Box>
            {/* hizmetler container */}
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          elevation: "0",
          borderRadius: "25px",
        }}
      >
        <Box
          sx={{
            width: "230px",
            height: "230px",
            backgroundImage:
              "url(https://img.freepik.com/free-photo/pretty-clever-little-girl-child-with-blond-hairstyle-yellow-t-shirt-overalls-hold-something-palm-introduce-product-blank-white-copy-space-smiling-joyful-brag-what-she-got-b-day-present_176420-36184.jpg?w=996&t=st=1667798724~exp=1667799324~hmac=658542dcdff3edda236905b59ccdd6b0ad2ce147ce072837c0edffc2a4efc7df)",
            borderRadius: "10px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></Box>
        <Box sx={{ ml: 1 }}>
          <Typography
            sx={{
              width: "464px",
              height: "21px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#07232C",
            }}
          >
            Ewa Kuaför
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#9A9A9A",
            }}
          >
            Giresun Cad. No:3/11 Keçiören/Ankara
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                mt: 2,
                width: "590px",
              }}
            >
              {/* traş */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                    width: "69.24px",
                    height: "23",
                  }}
                >
                  Saç Traşı
                </Typography>
              </Box>
              {/* traş */}

              {/* fiyat ve rendavu al */}
              <Box
                sx={{
                  width: "170px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  120
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    width: "113px",
                    height: "34px",
                    background: "#F75936",
                    borderRadius: "6px",
                  }}
                >
                  Randevu Al
                </Button>
              </Box>
              {/* fiyat ve rendavu al */}
            </Box>
            {/* hizmetler container */}
            <Divider />
            {/* hizmetler container */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                mt: 2,
              }}
            >
              {/* traş */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  Sakal Traşı
                </Typography>
              </Box>
              {/* traş */}

              {/* fiyat ve rendavu al */}
              <Box
                sx={{
                  width: "170px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  120
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    width: "113px",
                    height: "34px",
                    background: "#F75936",
                    borderRadius: "6px",
                  }}
                >
                  Randevu Al
                </Button>
              </Box>
              {/* fiyat ve rendavu al */}
            </Box>
            {/* hizmetler container */}
            <Divider />
            {/* hizmetler container */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                mt: 2,
              }}
            >
              {/* traş */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  Fade
                </Typography>
              </Box>
              {/* traş */}

              {/* fiyat ve rendavu al */}
              <Box
                sx={{
                  width: "170px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  120
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    width: "113px",
                    height: "34px",
                    background: "#F75936",
                    borderRadius: "6px",
                  }}
                >
                  Randevu Al
                </Button>
              </Box>
              {/* fiyat ve rendavu al */}
            </Box>
            {/* hizmetler container */}
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          display: "flex",

          elevation: "0",
          borderRadius: "25px",
        }}
      >
        <Box
          sx={{
            width: "230px",
            height: "230px",
            backgroundImage:
              "url(https://img.freepik.com/free-photo/pretty-clever-little-girl-child-with-blond-hairstyle-yellow-t-shirt-overalls-hold-something-palm-introduce-product-blank-white-copy-space-smiling-joyful-brag-what-she-got-b-day-present_176420-36184.jpg?w=996&t=st=1667798724~exp=1667799324~hmac=658542dcdff3edda236905b59ccdd6b0ad2ce147ce072837c0edffc2a4efc7df)",
            borderRadius: "10px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></Box>
        <Box sx={{ ml: 1 }}>
          <Typography
            sx={{
              width: "464px",
              height: "21px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#07232C",
            }}
          >
            Ewa Kuaför
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#9A9A9A",
            }}
          >
            Giresun Cad. No:3/11 Keçiören/Ankara
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                mt: 2,
                width: "590px",
              }}
            >
              {/* traş */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                    width: "69.24px",
                    height: "23",
                  }}
                >
                  Saç Traşı
                </Typography>
              </Box>
              {/* traş */}

              {/* fiyat ve rendavu al */}
              <Box
                sx={{
                  width: "170px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  120
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    width: "113px",
                    height: "34px",
                    background: "#F75936",
                    borderRadius: "6px",
                  }}
                >
                  Randevu Al
                </Button>
              </Box>
              {/* fiyat ve rendavu al */}
            </Box>
            {/* hizmetler container */}
            <Divider />
            {/* hizmetler container */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                mt: 2,
              }}
            >
              {/* traş */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  Sakal Traşı
                </Typography>
              </Box>
              {/* traş */}

              {/* fiyat ve rendavu al */}
              <Box
                sx={{
                  width: "170px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  120
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    width: "113px",
                    height: "34px",
                    background: "#F75936",
                    borderRadius: "6px",
                  }}
                >
                  Randevu Al
                </Button>
              </Box>
              {/* fiyat ve rendavu al */}
            </Box>
            {/* hizmetler container */}
            <Divider />
            {/* hizmetler container */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                mt: 2,
              }}
            >
              {/* traş */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  Fade
                </Typography>
              </Box>
              {/* traş */}

              {/* fiyat ve rendavu al */}
              <Box
                sx={{
                  width: "170px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#07232C",
                  }}
                >
                  120
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    width: "113px",
                    height: "34px",
                    background: "#F75936",
                    borderRadius: "6px",
                  }}
                >
                  Randevu Al
                </Button>
              </Box>
              {/* fiyat ve rendavu al */}
            </Box>
            {/* hizmetler container */}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
