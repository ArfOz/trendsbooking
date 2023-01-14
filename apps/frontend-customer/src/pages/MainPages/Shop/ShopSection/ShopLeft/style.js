import harita from "../../../../../assets/haritaimg.png";

export const Styles = {
  // ============Barberschop =============
  typographybarber:{
 
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "40px",
    lineHeight: "47px",
    color: "#07232C",
  },
  typographyadress:{
 
  
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "18px",
    color: "#9A9A9A",
  },
  // ============Barberschop =============
  // ============randevu Al =============
  button505: {
    width: "195px",
    height: "44px",
    borderRadius: "6px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "white",
    },
    border: "1px solid #07232C",
  },
  buttonrandevu: {
    textTransform: "capitalize",
    width: "195px",
    height: "44px",
    background: "#F75936",
    borderRadius: "6px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "primary",
    },
    color: "#FFFFFF",
  },

  // ============randevu Al =============

  // ============Hakkımızda =============
  hakkımızda: {
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "23px",
    color: "#07232C",
    mb: 1,
  },
  typography: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "22px",
    color: "#07232C",
  },

  // ============Hakkımızda =============

  // ============LeftEnd =============
  boxcontainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    mt: 5,
  },
  naviekib: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  navigation: {
    width: "509px",
    height: "250px",
    background: `url(${harita})`,
    borderRadius: "10px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  ekibimizbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    mt: 3,
  },
  typography1: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#07232C",
    mb: 2,
  },
  avatarbox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  avatarname: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "18px",
    color: "#07232C",
  },
  avatarstack: {
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  // ============LeftEnd =============
  // ============table =============
  tablebox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    mr: 3,
    width: "30%",
    height: "400px",
  },
  // ============table =============
};
