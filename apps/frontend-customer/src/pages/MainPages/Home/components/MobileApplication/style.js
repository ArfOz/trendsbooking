import mobilback from "../../../../../assets/mobilback.jpg";



export const style = {
  BoxContainer: {
    background: `url(${mobilback})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "87%",
    height: {
      xs: "364px",
      sm: "364px",
      md: "364px",
      lg: "364px",
    },

    borderRadius: "30px",
    m: "auto",
    mt: 4,
  },
  BoxinContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  TypographyBox: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    height: "68%",
  },
  Typography1: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    letterSpacing: "-0.1px",
    color: "#FFFFFF",
    mb: 2,
    mt: 3,
    p: 0,
  },
  Typography2: {
    fontWeight: {
      xs: "100px",
      sm: "400px",
      md: "500px",
      lg: "600px",
      xl: "600px",
    },

    fontSize: {
      xs: "25px",
      sm: "30px",
      md: "40px",
      lg: "50px",
      xl: "58px",
    },

    lineHeight: "68px",
    textAlign: "center",
    letterSpacing: "-0.5px",
    color: "#FFFFFF",
  },
  Buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "400px",
    height: "62px",
  },
  Button: {
    borderRadius: "6px",
    width: "170.75px",
    height: "48px",
    boxShadow: "none",
  },
};
