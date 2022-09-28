import { Box, Typography } from "@mui/material";
import React from "react";
import AkilLogo2 from "../assets/AkilLogo2.png";


const NosTechnologies = () => {
  return (
    <Box sx={{ backgroundColor: "#FBFBFB", height: "306.5px" }}>
      <Typography
        sx={{
          fontSize: 25,
          textAlign: "center",
          color: "#003168",
          fontWeight: "bold",
          marginTop: 8,
        }}
      >
        Nos technologies
      </Typography>
      <Typography sx={{textAlign:'center',marginTop:4}}>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification <br />
        utilisée à titre provisoire pour calibrer une mise en page, le texte
      </Typography>
      <Box sx={{display:'flex',justifyContent:'space-between',paddingInline:20,marginTop:10}} >
        <img src={AkilLogo2} width={150} height={100} />
        <img src={AkilLogo2} width={150} height={100} />
        <img src={AkilLogo2} width={150} height={100} />
        <img src={AkilLogo2} width={150} height={100} />
      </Box>
    </Box>
  );
};

export default NosTechnologies;
