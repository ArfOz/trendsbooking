import { Box } from "@mui/material";
import React, { useState,useEffect } from "react";
import NavbarFirst from "./NavbarFirst";
import NavbarSecond from "./NavbarSecond";

function Navbar() {
  const [show, setShow] = useState(<NavbarFirst/>);
  const listenScrollEvent = () => {
    window.scrollY >= 695 ? setShow(<NavbarSecond/>) : setShow(<NavbarFirst/>);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <Box>{show}</Box>
    </>
  );
}

export default Navbar;
