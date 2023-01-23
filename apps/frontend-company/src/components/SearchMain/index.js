import React from "react";
import Recommended from "../Buttons/Recommended";
import Filter from "../Buttons/Filter";
import Box from "@mui/material/Box";
import RecommendedCards from "../RecommendedCards";
import SearchImage from "../SearchImage"
function SearchMain() {
  return (
    <>
      <Box
        p={2}
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Recommended />
        <Filter />
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent:"center"}}>
        <RecommendedCards/>
        <SearchImage/>
      </Box>
      
      
    
    </>
  );
}

export default SearchMain;
