import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import Team from "../assets/Team.png";
import CheckIcon from "@mui/icons-material/Check";

const Confiance = () => {
  return (
    <Box sx={{ backgroundColor: "white", height: "306.5px" }}>
      <Typography
        sx={{
          fontSize: 25,
          textAlign: "center",
          color: "#003168",
          fontWeight: "bold",
          marginTop: 5,
        }}
      >
        Ils nous ont fait confiances
      </Typography>
      <Box sx={{marginTop:4}} >
        <Grid container spacing={0.2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "250px",
                paddingInline: 20,
                display: "flex",
              }}
            >
              <CheckIcon  color="success"  />
              <Box sx={{marginLeft:3}} >
                <Typography sx={{color:'black',fontWeight:'bold'}} >
                  Le lorem ipsum est, en imprimerie, une suite de mots sans
                  signification utilisée à titre provisoire pour calibrer une
                  mise en page, le texte définitif venant remplacer le
                  faux-texte dès qu'il est prêt ou que la mise en page est
                  achevée. Généralement, on utilise un texte en faux latin, le
                  Lorem ipsum ou Lipsum.
                </Typography>
                <Box sx={{ display: "flex",marginTop:5 }}>
                    <Box sx={{width:50,height:50,borderRadius:50,backgroundImage: `url(${Team})`,}} >
                    </Box>
                  <Box sx={{marginLeft:5}} >
                    <Typography sx={{color:'black',fontWeight:'bold'}}>Ange Carine</Typography>
                    <Typography sx={{color:'#003168',fontWeight:'bold'}}>Société SA</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box
              sx={{
                height: "250px",
                paddingInline: 20,
                display: "flex",
              }}
            >
              <CheckIcon  color="success"  />
              <Box sx={{marginLeft:3}} >
                <Typography sx={{color:'black',fontWeight:'bold'}} >
                  Le lorem ipsum est, en imprimerie, une suite de mots sans
                  signification utilisée à titre provisoire pour calibrer une
                  mise en page, le texte définitif venant remplacer le
                  faux-texte dès qu'il est prêt ou que la mise en page est
                  achevée. Généralement, on utilise un texte en faux latin, le
                  Lorem ipsum ou Lipsum.
                </Typography>
                <Box sx={{ display: "flex",marginTop:5 }}>
                    <Box sx={{width:50,height:50,borderRadius:50,backgroundImage: `url(${Team})`,}} >
                    {/* <img src={Team} width={40} height={40} /> */}
                    </Box>
                  <Box sx={{marginLeft:5}} >
                    <Typography sx={{color:'black',fontWeight:'bold'}}>Ange Carine</Typography>
                    <Typography sx={{color:'#003168',fontWeight:'bold'}}>Société SA</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Confiance;
