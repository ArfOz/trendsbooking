import herobg from "../../../../../../assets/herobg.png";

export const style = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  HeroBgContainer: {
    display: {
      xs: "none",
      sm: "block",
      md: "block",
      lg: "block",
      xl: "block",
    },
    position: "relative",
    width: {
      xs: 0,
      sm: "90%",
      md: "90%",
      lg: "90%",
      xl: "90%",
    },
    height: "557px",
    background: "rgba(0, 0, 0, 0.4)",
    borderRadius: "30px",
    background: `url(${herobg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: "auto",
  },
  HeroSearchContainer: {
    width: {
      xs: 0,
      sm: "548px",
      md: "648px",
      lg: "748px",
      xl: "848px",
    },
    height: "64px",
    display: {
      xs: "none",
      sm: "flex",
      md: "flex",
      lg: "flex",
      xl: "flex",
    },
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    borderRadius: "6px",
    marginTop: "50px",
  },
  Bi: {
    fontWeight: "800px",
    fontSize: "70px",
    lineHeight: "77px",
    textAlign: "center",
    color: "#FFFFFF",
  },
  Size: {
    fontWeight: "400px",
    fontSize: "22px",
    lineHeight: "26px",
    textAlign: "center",
    color: "#FFFFFF",
  },
  buttons: {
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "primary",
    },
  },
};
