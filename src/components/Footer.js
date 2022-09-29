import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import AkilLogo2 from "../assets/AkilLogo2.png";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "480px",
        paddingInline: { md: 10, xs: 2 },
        backgroundColor: "#003168",
      }}
    >
      <Grid container spacing={0.5}>
        <Grid item xs={12} md={3}>
          <Box sx={{ height: 350, paddingInline: 12, marginTop: 5 }}>
            <img
              src={AkilLogo2}
              alt={"logo akiltech"}
              loading="lazy"
              width="150"
              height="80"
            />
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ height: 350, marginTop: 5 }}>
            <Typography sx={{ color: "white" }}>
              <Typography sx={{ fontSize: 25 }}>Services</Typography>
              <p>Product Design</p>
              <p>Conseil</p>
              <p>Dévoloppement Produit</p>
              <p>Adaptation Continue du SI</p>
              <p>Data Science</p>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ height: 350, marginTop: 5 }}>
            <Typography sx={{ color: "white" }}>
              <Typography sx={{ fontSize: 25 }}>Localisations</Typography>
              <p>
                Abidjan, Cocody Rivera, <br /> Faya, Laurier 9
              </p>
              <p>
                Washington DC,8101 Sandy <br /> Sping RD Suite 100K Laurel{" "}
                <br /> MD 20707
              </p>
              <p>
                Paris, 4,Rue Michel-Ange, <br /> 75767-Paris,France
              </p>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ height: 350, marginTop: 5 }}>
            <Typography sx={{ color: "white" }}>
              <Typography sx={{ fontSize: 25 }}>Contacts</Typography>
              <p>
                +225 07 77 09 33 00
              </p>
              <p>
                +225 05 78 10 40 45
              </p>
              <p>
                +225 07 97 09 09 00
              </p>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{backgroundColor:'white',height: '1px',paddingInline: 20,}} >
      </Box>
      <Typography sx={{textAlign:'center',color:'white',marginTop:3}} >
        info@akiltechnologies.com
      </Typography>
    </Box>
  );
};

export default Footer;
