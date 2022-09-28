import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import LogoAkil  from "../assets/LogoAkil.png";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ boxShadow: "none", backgroundColor: "white",paddingInline:20,flexDirection:'row'}}>
        <Toolbar sx={{backgroundColor:'white',width:'100%'}} >
          <Box sx={{width:'15%'}} >
            <img src={LogoAkil} alt={"logo akiltech"} loading="lazy"  width="120" height="50" />
          </Box>
          <Typography variant="h7" sx={{ flexGrow: 1, color: "#636262" }}>
            Accueil
          </Typography>
          <Typography variant="h7" sx={{ flexGrow: 1, color: "#636262" }}>
            A Propos
          </Typography>
          <Typography variant="h7" sx={{ flexGrow: 1, color: "#636262" }}>
            Services
          </Typography>
          <Typography variant="h7" sx={{ flexGrow: 1, color: "#636262" }}>
            Nos Methodologies
          </Typography>
          <Typography variant="h7" sx={{ flexGrow: 1, color: "#636262" }}>
            Actualites
          </Typography>
          <Button sx={{ backgroundColor: "#003168" }} variant="contained">
            Contactez-nous
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
